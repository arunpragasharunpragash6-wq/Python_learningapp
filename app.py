import json
import os
import subprocess
import sys
import tempfile
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
HOST = os.environ.get("HOST", "0.0.0.0")
PORT = int(os.environ.get("PORT", "8000"))
STATIC_FILES = {
    "/": ("index.html", "text/html; charset=utf-8"),
    "/index.html": ("index.html", "text/html; charset=utf-8"),
    "/styles.css": ("styles.css", "text/css; charset=utf-8"),
    "/app.js": ("app.js", "application/javascript; charset=utf-8"),
}


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
            "output": "Execution stopped after 4 seconds. Try a smaller example or check for an endless loop.",
        }
    finally:
        temp_path.unlink(missing_ok=True)


class AppHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path not in STATIC_FILES:
            self.send_error(HTTPStatus.NOT_FOUND, "File not found")
            return

        filename, content_type = STATIC_FILES[self.path]
        file_path = ROOT / filename
        content = file_path.read_bytes()

        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def do_POST(self):
        if self.path != "/api/run":
            self.send_error(HTTPStatus.NOT_FOUND, "Route not found")
            return

        content_length = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_length)

        try:
            payload = json.loads(raw_body.decode("utf-8"))
        except json.JSONDecodeError:
            self.send_json({"ok": False, "output": "Invalid request body."}, status=HTTPStatus.BAD_REQUEST)
            return

        code = str(payload.get("code", ""))
        stdin_text = str(payload.get("stdin", ""))
        result = execute_python(code, stdin_text)
        self.send_json(result)

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
    server = ThreadingHTTPServer((HOST, PORT), AppHandler)
    print(f"Python Zero to Confident running at http://{HOST}:{PORT}")
    server.serve_forever()
