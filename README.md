# Python Zero to Confident — V2

A self-hosted, single-file Python learning app. Runs entirely on your machine: a
small Python standard-library backend serves a vanilla HTML/CSS/JS frontend
styled like a code editor. Learners register an account, work through 23
lessons, run real Python code in the browser, take quizzes, and (optionally)
get AI code reviews.

No frameworks, no database, no build step — just Python 3 and a browser.

---

## Quick Start

**Windows**
1. Double-click `start-app.bat`.
2. It finds a Python 3 install (checks system PATH first, then a cached
   runtime path as a fallback), starts the server, waits for it to come up,
   and opens `http://127.0.0.1:8000/` in your browser.

**macOS / Linux / manual start**
```bash
python3 app.py
```
Then open `http://127.0.0.1:8000/` in a browser.

No install step is required — everything runs off the Python standard
library. Python 3.10+ is recommended (the code uses `X | None` type hints).

---

## Project Structure

```
app.py          Backend: HTTP server, auth, code execution, progress storage
app.js          Frontend: lesson content (23 lessons) + all UI logic
index.html      Page markup / layout
styles.css      All styling
start-app.bat   Windows launcher script
users.json      Created automatically on first run — stores accounts & progress
```

`users.json` is created the first time the server starts. It's local to your
machine and is not checked into version control by default — treat it as
user data, not source.

---

## Features

- **Accounts** — register/login with hashed passwords (PBKDF2-SHA256,
  200,000 iterations), token-based sessions.
- **23 structured lessons** — Print Statements → Variables → Loops →
  Functions → Lists/Dicts → Files/Exceptions → Classes → a final mini
  project, each with an explanation, analogy, syntax tips, common mistakes,
  example code, and video links.
- **Learn / Practice split** — a lesson opens in **Learn** mode only.
  **Practice** mode (code editor, challenges, quiz) is hidden until you
  explicitly click the Practice pill, and switching modes always shows
  exactly one of the two — never both at once.
- **In-browser code execution** — practice code runs server-side via
  `subprocess` in Python isolated mode (`-I`) with a 4-second timeout, and
  stdout/stderr are shown in an output console.
- **Quizzes & challenges** — a lesson unlocks the next one once its
  challenge is solved and its quiz is passed.
- **Topic navigation** — Previous/Next Topic buttons appear both at the top
  of the lesson (next to the title) and at the bottom of the page; they
  follow the same unlock rule (Next requires the current lesson's challenge
  + quiz to be complete).
- **Progress dashboard** — completed lessons, time spent, streaks, a
  per-module progress chart, and badges.
- **Optional AI code review** — if `ANTHROPIC_API_KEY` is set, a "Review My
  Code" button sends the learner's code + output to Claude for short,
  Socratic-style feedback (it points at issues rather than rewriting the
  solution).

---

## Enabling AI Code Review (optional)

Set the `ANTHROPIC_API_KEY` environment variable before starting the server:

```bash
# macOS/Linux
export ANTHROPIC_API_KEY=your-key-here
python3 app.py

# Windows (PowerShell)
$env:ANTHROPIC_API_KEY="your-key-here"
python app.py
```

Or uncomment and fill in the line near the top of `start-app.bat`:
```bat
set "ANTHROPIC_API_KEY=your-key-here"
```

Without a key, the app works normally — the review button just returns a
message explaining the feature isn't configured. The server calls
`claude-haiku-4-5-20251001` directly; no API key ever reaches the browser.

---

## Configuration

Environment variables (all optional):

| Variable            | Default     | Purpose                                  |
|----------------------|-------------|-------------------------------------------|
| `HOST`               | `127.0.0.1` | Interface the server binds to             |
| `PORT`               | `8000`      | Port the server listens on                |
| `ANTHROPIC_API_KEY`  | unset       | Enables the AI Code Review feature        |

---

## API Overview

All endpoints (except static files) accept/return JSON. Authenticated
endpoints expect `Authorization: Bearer <token>`.

| Method | Path             | Auth | Purpose                                |
|--------|------------------|------|------------------------------------------|
| POST   | `/api/register`  | no   | Create an account, returns a session token |
| POST   | `/api/login`      | no   | Log in, returns a session token          |
| POST   | `/api/logout`     | yes  | Invalidate the current session token     |
| GET    | `/api/session`    | yes  | Confirm a token is valid / get username  |
| GET    | `/api/progress`   | yes  | Fetch saved lesson/quiz progress         |
| POST   | `/api/progress`   | yes  | Save lesson/quiz progress                |
| POST   | `/api/run`        | no   | Run submitted Python code, return output |
| POST   | `/api/ai-review`  | yes  | Get AI feedback on submitted code        |

Login is rate-limited: 5 failed attempts for the same username+IP within 5
minutes locks that pair out for 5 minutes (`429 Too Many Requests`).

Sessions expire automatically after 30 days.

---

## Security Notes

This is built for local / single-machine use (a learner running it on their
own computer), not as a public multi-tenant web service. If you ever expose
it beyond `0.0.0.0`:

- There's no HTTPS, CSRF protection, or CORS restriction — add a reverse
  proxy (e.g. nginx/Caddy) with TLS in front of it.
- `/api/run` executes arbitrary submitted Python code server-side. It's
  time-limited (4s) and run with `-I` (isolated mode), but it is **not**
  sandboxed against memory/CPU abuse or filesystem access within its own
  permissions. Don't expose this endpoint to untrusted users on a shared
  machine.
- `users.json` stores password hashes (not plaintext) but is a flat file on
  disk — fine for local use, not a substitute for a real database with
  access controls in a multi-user deployment.

---

## Known Limitations

- Single flat-file storage (`users.json`) — fine for a handful of local
  users, not built to scale to many concurrent accounts.
- No password reset flow (by design, for a local single-user learning tool).
- The AI review feature requires outbound internet access and a valid
  Anthropic API key; it's entirely optional.
