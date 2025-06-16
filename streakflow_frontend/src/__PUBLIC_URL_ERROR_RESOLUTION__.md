# Investigation Note: PUBLIC_URL Build Error

## Context
A build error occurs: `ReferenceError: PUBLIC_URL is not defined`, even after confirming that streakflow_frontend/src/*.js[x] do **not** reference PUBLIC_URL without `process.env.`.

## Next Steps
- Check `public/index.html` for raw PUBLIC_URL.
- Check for any `PUBLIC_URL` reference in custom scripts.
- If found, change raw PUBLIC_URL to use correct syntax: 
  - In HTML: `%PUBLIC_URL%`
  - In JS: `process.env.PUBLIC_URL`

## Recommendation
If using Create React App:
- In HTML files (like public/index.html), always use `%PUBLIC_URL%` (with percent signs) for asset links or references.
- In JavaScript, always use `process.env.PUBLIC_URL`.

If a template or custom build script tries to use just `PUBLIC_URL`, you must update that reference.
