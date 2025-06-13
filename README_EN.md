# GitHub Chinese Localization Plugin

A simple browser extension dedicated to providing an unofficial Chinese interface for the GitHub website, aiming to improve the browsing and usage experience for Chinese-speaking users.

## ✨ Features

This plugin dynamically translates page content on the front end, providing localization for several core pages on GitHub. Currently supported pages include:

-   **Global Navigation**: Top navigation bar, global left sidebar, and user right-side menu.
-   **User Profile Page**: Overview, popular repositories, contribution graph, and activity feed.
-   **Repository Homepage (Code)**: File list, right sidebar information (Releases, Packages, Languages), etc.
-   **Issues**: Issue list, filters, and action buttons.
-   **Pull Requests**: PR list, welcome messages, and filters.
-   **Projects**: Projects list page and welcome screen.
-   **Insights**: Pulse overview page.
-   **Security**: Security overview page.
-   **Settings**: A portion of general settings options.

## 🚀 Installation

You can install this project locally as an "unpacked extension" in your browser.

1.  **Prepare the Files**:
    Create a folder (e.g., `github-chinese-plugin`) and place the following two files inside it:
    - `manifest.json` (as you provided)
    - `content.js` (the JavaScript file you are writing)

    The file structure should look like this:
    ```
    /github-chinese-plugin
    ├── manifest.json
    └── content.js
    ```

2.  **Install in Your Browser**:

    - **For Google Chrome / Microsoft Edge**:
        1.  Enter `chrome://extensions` (Chrome) or `edge://extensions` (Edge) in the address bar and press Enter.
        2.  In the top-right corner of the page, toggle on **"Developer mode"**.
        3.  Click the **"Load unpacked"** button.
        4.  In the file selection window that appears, select the `github-chinese-plugin` folder you just created.
        5.  The extension is now installed! Visit GitHub to see the localization in effect.

## 🌐 Supported Browsers

This extension is based on the Manifest V3 standard and should theoretically work on all major Chromium-based browsers.

-   ✅ **Fully Supported**:
    -   Google Chrome
    -   Microsoft Edge
-   ✅ **Theoretically Supported** (may require packaging or minor adjustments):
    -   Mozilla Firefox (requires slight modification to `manifest.json` and loading as a "temporary add-on")
    -   Opera, Brave, Vivaldi, and other Chromium-based browsers.
-   ❌ **Not Supported**:
    -   Safari (requires a completely different packaging and distribution process)

## 🤝 Contributing

We warmly welcome contributions to this project! If you find any inaccurate translations or untranslated pages, please:
-   Create an Issue to provide feedback.
-   Submit a Pull Request to help us improve the translations.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).