import hashlib
import json
import mimetypes
import os
import secrets
import subprocess
import sys
import tempfile
import threading
import urllib.error
import urllib.parse
import urllib.request
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
HOST = os.environ.get("HOST", "0.0.0.0")
PORT = int(os.environ.get("PORT", "8000"))
USERS_FILE = ROOT / "users.json"
DATA_LOCK = threading.Lock()
STATIC_FILES = {
    "/": "index.html",
    "/index.html": "index.html",
    "/styles.css": "styles.css",
    "/app.js": "app.js",
}
DEFAULT_PROGRESS = {
    "lessonIndex": 0,
    "challengePassed": [],
    "quizPassed": [],
    "startedLessons": [],
    "lessonDrafts": {},
    "quizHistory": {},
    "activityDates": [],
    "timeSpentSeconds": 0,
    "lastActiveAt": None,
    "completedLessons": [],
}


GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
GEMINI_MODEL = "gemini-2.5-flash"
AI_REVIEW_SYSTEM_PROMPT = (
    "You are a friendly, encouraging Python tutor reviewing a beginner student's practice code. "
    "Respond with plain text (short paragraphs and/or a short bullet list, no markdown headers). "
    "Cover, briefly: (1) whether the code solves the stated task, (2) one or two concrete "
    "improvements or Python best practices, (3) any bugs or risky patterns you notice. "
    "Do not rewrite the student's whole program for them - point them toward the fix so they "
    "still do the thinking. Keep the entire reply under 180 words."
)


def call_ai_review(code: str, output: str, lesson_title: str, concept: str, challenge_prompt: str) -> dict:
    api_key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not api_key:
        return {
            "ok": False,
            "error": (
                "AI review is not set up yet. Set the GEMINI_API_KEY environment variable "
                "before starting the server to enable this feature."
            ),
        }

    user_content = (
        f"Lesson: {lesson_title}\n"
        f"Concept being practiced: {concept}\n"
        f"Task: {challenge_prompt}\n\n"
        f"Student's code:\n```python\n{code}\n```\n\n"
        f"Program output when run:\n{output.strip() or '(no output)'}"
    )

    body = json.dumps(
        {
            "contents": [{"role": "user", "parts": [{"text": user_content}]}],
            "systemInstruction": {"parts": [{"text": AI_REVIEW_SYSTEM_PROMPT}]},
            "generationConfig": {"maxOutputTokens": 500},
        }
    ).encode("utf-8")

    url = f"{GEMINI_API_URL.format(model=GEMINI_MODEL)}?key={urllib.parse.quote(api_key)}"
    request = urllib.request.Request(
        url,
        data=body,
        method="POST",
        headers={
            "Content-Type": "application/json",
        },
    )

    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as error:
        if error.code == 404:
            return {
                "ok": False,
                "error": (
                    "AI review request failed (status 404). This usually means the API key "
                    "format isn't compatible yet - try generating a fresh key in AI Studio, "
                    "or use one created via console.cloud.google.com/apis/credentials instead."
                ),
            }
        return {"ok": False, "error": f"AI review request failed (status {error.code})."}
    except urllib.error.URLError:
        return {"ok": False, "error": "Could not reach the AI review service. Check your internet connection."}
    except TimeoutError:
        return {"ok": False, "error": "The AI review took too long to respond. Please try again."}

    candidates = payload.get("candidates") or []
    text_blocks = []
    if candidates:
        parts = candidates[0].get("content", {}).get("parts", [])
        text_blocks = [part.get("text", "") for part in parts if part.get("text")]
    review_text = "\n".join(text_blocks).strip()

    if not review_text:
        return {"ok": False, "error": "The AI reviewer did not return any feedback. Please try again."}

    return {"ok": True, "review": review_text}


def get_content_type(file_path: Path) -> str:
    guessed, _ = mimetypes.guess_type(str(file_path))
    return guessed or "application/octet-stream"


def normalize_output(stdout: str, stderr: str) -> str:
    combined = stdout.strip()
    if stderr.strip():
        combined = f"{combined}\n{stderr.strip()}".strip()
    return combined or "Code finished with no output."


def execute_python(code: str, stdin_text: str) -> dict:
    with tempfile.NamedTemporaryFile("w", suffix=".py", delete=False, encoding="utf-8") as handle:
        handle.write(code)
        temp_path = Path(handle.name)

    try:
        completed = subprocess.run(
            [sys.executable, "-I", str(temp_path)],
            capture_output=True,
            text=True,
            input=stdin_text,
            timeout=4,
            cwd=ROOT,
        )
        return {
            "ok": completed.returncode == 0,
            "output": normalize_output(completed.stdout, completed.stderr),
        }
    except subprocess.TimeoutExpired:
        return {
            "ok": False,
            "output": "Execution stopped after 4 seconds. Try smaller code or check for an endless loop.",
        }
    finally:
        temp_path.unlink(missing_ok=True)


def ensure_users_file() -> None:
    if USERS_FILE.exists():
        return

    initial_data = {"users": {}}
    USERS_FILE.write_text(json.dumps(initial_data, indent=2), encoding="utf-8")


def load_users() -> dict:
    ensure_users_file()
    with DATA_LOCK:
        return json.loads(USERS_FILE.read_text(encoding="utf-8"))


def save_users(data: dict) -> None:
    with DATA_LOCK:
        USERS_FILE.write_text(json.dumps(data, indent=2), encoding="utf-8")


def fresh_progress() -> dict:
    return {
        "lessonIndex": 0,
        "challengePassed": [],
        "quizPassed": [],
        "startedLessons": [],
        "lessonDrafts": {},
        "quizHistory": {},
        "challengeProgress": {},
        "activityDates": [],
        "timeSpentSeconds": 0,
        "lastActiveAt": None,
        "completedLessons": [],
    }


def hash_password(password: str, salt: str) -> str:
    derived = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), bytes.fromhex(salt), 200_000)
    return derived.hex()


def verify_password(password: str, salt: str, expected_hash: str) -> bool:
    return secrets.compare_digest(hash_password(password, salt), expected_hash)


def clean_progress(progress: dict | None) -> dict:
    if not isinstance(progress, dict):
        return fresh_progress()

    def normalize_indexes(values):
        normalized = []
        if not isinstance(values, list):
            return normalized
        for value in values:
            if isinstance(value, int) and value >= 0:
                normalized.append(value)
        return sorted(set(normalized))

    challenge_passed = normalize_indexes(progress.get("challengePassed") or progress.get("codePassed"))
    quiz_passed = normalize_indexes(progress.get("quizPassed") or progress.get("quizCorrect"))
    completed_lessons = normalize_indexes(progress.get("completedLessons"))
    completed_lessons = [index for index in completed_lessons if index in challenge_passed and index in quiz_passed]
    started_lessons = normalize_indexes(progress.get("startedLessons"))

    lesson_index = progress.get("lessonIndex", 0)
    if not isinstance(lesson_index, int) or lesson_index < 0:
        lesson_index = 0

    lesson_drafts = progress.get("lessonDrafts")
    if not isinstance(lesson_drafts, dict):
        lesson_drafts = {}

    quiz_history = progress.get("quizHistory")
    if not isinstance(quiz_history, dict):
        quiz_history = {}

    activity_dates = progress.get("activityDates")
    if not isinstance(activity_dates, list):
        activity_dates = []
    activity_dates = sorted(set(item for item in activity_dates if isinstance(item, str) and item))

    time_spent = progress.get("timeSpentSeconds", 0)
    if not isinstance(time_spent, int) or time_spent < 0:
        time_spent = 0

    last_active_at = progress.get("lastActiveAt")
    if not isinstance(last_active_at, (int, float)):
        last_active_at = None

    challenge_progress = progress.get("challengeProgress")
    if not isinstance(challenge_progress, dict):
        challenge_progress = {}

    return {
        "lessonIndex": lesson_index,
        "challengePassed": challenge_passed,
        "quizPassed": quiz_passed,
        "startedLessons": started_lessons,
        "lessonDrafts": lesson_drafts,
        "quizHistory": quiz_history,
        "challengeProgress": challenge_progress,
        "activityDates": activity_dates,
        "timeSpentSeconds": time_spent,
        "lastActiveAt": last_active_at,
        "completedLessons": completed_lessons,
    }


def get_bearer_token(handler: BaseHTTPRequestHandler) -> str:
    header = handler.headers.get("Authorization", "")
    if not header.startswith("Bearer "):
        return ""
    return header.removeprefix("Bearer ").strip()


def create_session(username: str) -> str:
    data = load_users()
    token = secrets.token_urlsafe(32)
    user = data["users"][username]
    user.setdefault("sessions", []).append(token)
    save_users(data)
    return token


def resolve_username_from_token(token: str) -> str | None:
    if not token:
        return None

    data = load_users()
    for username, user in data.get("users", {}).items():
        if token in user.get("sessions", []):
            return username
    return None


def remove_session(token: str) -> None:
    if not token:
        return

    data = load_users()
    for user in data.get("users", {}).values():
        sessions = user.get("sessions", [])
        if token in sessions:
            user["sessions"] = [session for session in sessions if session != token]
            save_users(data)
            return


class AppHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path in STATIC_FILES:
            self.serve_static(self.path)
            return

        if self.path == "/api/session":
            self.handle_session()
            return

        if self.path == "/api/progress":
            self.handle_get_progress()
            return

        self.send_error(HTTPStatus.NOT_FOUND, "File not found")

    def do_POST(self):
        if self.path == "/api/run":
            self.handle_run()
            return

        if self.path == "/api/register":
            self.handle_register()
            return

        if self.path == "/api/login":
            self.handle_login()
            return

        if self.path == "/api/logout":
            self.handle_logout()
            return

        if self.path == "/api/progress":
            self.handle_save_progress()
            return

        if self.path == "/api/ai-review":
            self.handle_ai_review()
            return

        self.send_error(HTTPStatus.NOT_FOUND, "Route not found")

    def serve_static(self, route: str) -> None:
        file_path = ROOT / STATIC_FILES[route]
        if not file_path.exists():
            self.send_error(HTTPStatus.NOT_FOUND, "Missing static file")
            return

        content = file_path.read_bytes()
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", get_content_type(file_path))
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def read_json_body(self) -> dict | None:
        content_length = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_length)

        try:
            return json.loads(raw_body.decode("utf-8"))
        except json.JSONDecodeError:
            self.send_json({"error": "Invalid request body."}, status=HTTPStatus.BAD_REQUEST)
            return None

    def require_user(self) -> str | None:
        token = get_bearer_token(self)
        username = resolve_username_from_token(token)
        if not username:
            self.send_json({"error": "Please login again."}, status=HTTPStatus.UNAUTHORIZED)
            return None
        return username

    def handle_run(self) -> None:
        payload = self.read_json_body()
        if payload is None:
            return

        code = str(payload.get("code", ""))
        stdin_text = str(payload.get("stdin", ""))
        self.send_json(execute_python(code, stdin_text))

    def handle_register(self) -> None:
        payload = self.read_json_body()
        if payload is None:
            return

        username = str(payload.get("username", "")).strip()
        password = str(payload.get("password", ""))

        if len(username) < 3:
            self.send_json({"error": "Username must be at least 3 characters."}, status=HTTPStatus.BAD_REQUEST)
            return

        if len(password) < 6:
            self.send_json({"error": "Password must be at least 6 characters."}, status=HTTPStatus.BAD_REQUEST)
            return

        data = load_users()
        if username in data["users"]:
            self.send_json({"error": "That username already exists."}, status=HTTPStatus.CONFLICT)
            return

        salt = secrets.token_hex(16)
        data["users"][username] = {
            "salt": salt,
            "password_hash": hash_password(password, salt),
            "progress": fresh_progress(),
            "sessions": [],
        }
        save_users(data)

        token = create_session(username)
        self.send_json({"ok": True, "token": token, "username": username})

    def handle_login(self) -> None:
        payload = self.read_json_body()
        if payload is None:
            return

        username = str(payload.get("username", "")).strip()
        password = str(payload.get("password", ""))
        data = load_users()
        user = data["users"].get(username)

        if not user or not verify_password(password, user["salt"], user["password_hash"]):
            self.send_json({"error": "Invalid username or password."}, status=HTTPStatus.UNAUTHORIZED)
            return

        token = create_session(username)
        self.send_json({"ok": True, "token": token, "username": username})

    def handle_logout(self) -> None:
        token = get_bearer_token(self)
        remove_session(token)
        self.send_json({"ok": True})

    def handle_session(self) -> None:
        username = self.require_user()
        if not username:
            return

        self.send_json({"ok": True, "username": username})

    def handle_get_progress(self) -> None:
        username = self.require_user()
        if not username:
            return

        data = load_users()
        user = data["users"].get(username, {})
        self.send_json({"ok": True, "progress": clean_progress(user.get("progress"))})

    def handle_save_progress(self) -> None:
        username = self.require_user()
        if not username:
            return

        payload = self.read_json_body()
        if payload is None:
            return

        progress = clean_progress(payload.get("progress"))
        data = load_users()
        data["users"][username]["progress"] = progress
        save_users(data)
        self.send_json({"ok": True, "progress": progress})

    def handle_ai_review(self) -> None:
        username = self.require_user()
        if not username:
            return

        payload = self.read_json_body()
        if payload is None:
            return

        code = str(payload.get("code", "")).strip()
        if not code:
            self.send_json({"error": "Write some code before asking for a review."}, status=HTTPStatus.BAD_REQUEST)
            return

        output = str(payload.get("output", ""))
        lesson_title = str(payload.get("lessonTitle", ""))
        concept = str(payload.get("concept", ""))
        challenge_prompt = str(payload.get("challengePrompt", ""))

        result = call_ai_review(code, output, lesson_title, concept, challenge_prompt)
        if not result.get("ok"):
            self.send_json({"error": result.get("error", "AI review failed.")}, status=HTTPStatus.BAD_GATEWAY)
            return

        self.send_json({"ok": True, "review": result["review"]})

    def send_json(self, data: dict, status: int = HTTPStatus.OK):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format, *args):
        return


if __name__ == "__main__":
    ensure_users_file()
    server = ThreadingHTTPServer((HOST, PORT), AppHandler)
    print(f"Python Zero to Confident V2 running at http://{HOST}:{PORT}")
    server.serve_forever()
