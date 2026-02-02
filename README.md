# ClearPass Auto Login Extension
A minimal Chrome-compatible extension that auto-fills and submits the ClearPass login form for T-Hub 2.0 Wifi on `https://clearpass.t-hub.co/`.

## How it works
- Runs a content script on pages under `https://clearpass.t-hub.co/`.
- Fills email, password, checks the first checkbox it finds, then clicks the submit button.
- Makes up to 10 attempts (every 1000ms) after the page loads in case the form renders slowly.

## Installation (Chrome/Edge)
1. Clone or download this folder.
2. Open `chrome://extensions` (or `edge://extensions`) and turn on Developer mode.
3. Click **Load unpacked** and select this project folder.
4. The form should auto-fill and submit when you get redirected to `https://clearpass.t-hub.co/` login page.

## Configuration
- Update `config.js` with your email and password before loading the extension.

## Notes
- This extension is for personal use only. Use at your own risk.
