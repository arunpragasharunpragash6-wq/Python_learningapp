# Python Zero to Confident - V2

This project is a beginner-focused Python learning product with:

- a V2 course interface
- module-based lesson navigation
- direct Tamil YouTube concept links
- runnable Python practice
- quick quizzes
- saved local progress

## Project files

- `index.html`: main V2 user interface
- `styles.css`: V2 styling and responsive layout
- `app.js`: lesson data, module rendering, quizzes, progress, and practice behavior
- `app.py`: lightweight local Python server and code execution endpoint
- `start-app.bat`: local launcher for Windows

## How to run locally

Option 1:

`start-app.bat`

Option 2:

`C:\Users\Arun\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe app.py`

Then open:

`http://127.0.0.1:8000`

## Current behavior

- learner code is limited to 4 seconds
- `input()` works through the Program Input box
- progress is saved in browser local storage
- direct Tamil lesson links open on YouTube

## Safety note

This app includes a code execution endpoint at `/api/run`.

That means:

- it is suitable for local use and private demos
- it is not safe to deploy publicly for untrusted users without sandboxing
