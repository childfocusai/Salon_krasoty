# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static website** (single-page landing for a beauty salon, in Russian). It consists only of `index.html`, `css/style.css`, and `js/main.js` — there is **no package manager, no build step, no dependencies, and no test/lint tooling**.

### Running the site (development)

Serve the folder with any static HTTP server. The environment has Python 3 and Node.js available:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Editing the HTML/CSS/JS and refreshing the browser is the full dev loop — there is no hot reload and nothing to rebuild.

### Notes

- Opening `index.html` directly via `file://` also works, but serving over HTTP is closer to production and avoids any origin quirks with the JSON-LD / fonts.
- There is no automated test suite. To sanity-check `js/main.js` you can run `node --check js/main.js` for a syntax check.
- The core interactive feature is the booking form (`#booking-form`): it validates name/phone/service client-side and, on success, hides the form and shows a success block plus a toast ("Заявка принята"). No backend is called — submission is handled entirely in the browser.
