# ClearPass Auto Login Extension

A minimal Chrome-compatible extension that auto-fills and submits the ClearPass login form on `https://clearpass.t-hub.co/`.

## How it works
- Runs a content script on pages under `https://clearpass.t-hub.co/`.
- Fills email, password, checks the first checkbox it finds, then clicks the submit button.
- Makes up to 10 attempts (every 1000ms) after the page loads in case the form renders slowly.

## Installation (Chrome/Edge)
1. Clone or download this folder.
2. Open `chrome://extensions` (or `edge://extensions`) and turn on Developer mode.
3. Click **Load unpacked** and select this project folder.
4. Navigate to `https://clearpass.t-hub.co/`; the form should auto-fill and submit.

## Configuration
- Update `config.js` with your email and password before loading the extension.

## Notes
- If the site uses additional anti-automation measures, the script may need to be adapted to match specific field names or event handlers.
- This extension only runs on `https://clearpass.t-hub.co/` thanks to the match pattern in `manifest.json`.
