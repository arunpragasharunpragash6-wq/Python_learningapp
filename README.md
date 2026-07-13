# Python Zero to Confident

This app teaches Python to absolute beginners with a structured concept roadmap, runnable examples, quick quizzes, and Tamil YouTube learning links for each topic.

## Files

- `app.py` starts the local server and runs learner code
- `index.html` contains the course UI
- `styles.css` contains the styling
- `app.js` contains the lessons, quizzes, Tamil video links, and progress logic

## Run it

Use the bundled Python runtime in this Codex environment:

`C:\Users\Arun\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe app.py`

Then open:

`http://127.0.0.1:8000`

Or just run:

`start-app.bat`

## Current notes

- learner code is limited to 4 seconds
- `input()` is supported through the optional program input box
- lesson progress is saved in browser local storage
- Tamil video links open YouTube search results so they stay current

## Deployment warning

This app includes a code execution endpoint at `/api/run`.

That means:

- it is fine for local use or private demos
- it is not safe to deploy publicly as-is for untrusted users

If you want public deployment, the code runner should be isolated in a proper sandbox or disabled.

## Cloud deployment

The server now supports environment-based host and port values:

- `HOST`
- `PORT`

Example:

`python app.py`

On most cloud hosts, set the start command to:

`python app.py`
