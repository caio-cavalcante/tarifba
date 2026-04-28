# Theme and Internationalization Update

I have successfully implemented the Light/Dark Theme Switch and the Language Toggle (English/Portuguese) in the Carpool Fuel Cost Manager without altering the core calculation logic or data persistence structure.

## What Was Changed

### 1. Theme Toggle (Light & Dark Modes)
- **CSS Variables:** Refactored `style.css` to scope the existing Solarized Dark color palette under `:root, :root[data-theme="dark"]` and added a clean, high-contrast palette under `:root[data-theme="light"]`.
- **System Inference:** The app will now check the user's system preference (e.g., Windows Dark Mode vs Light Mode) using `window.matchMedia` if no theme preference is saved in `localStorage`.
- **Smooth Transitions:** Added a `transition: background-color 0.3s ease, color 0.3s ease;` rule to ensure switching modes feels smooth.
- **Glass Panel Adjustments:** Replaced hardcoded RGBA values in `.glass-panel` with CSS variables so it looks good in both themes.

### 2. Language Toggle (i18n)
- **Data Attributes:** Replaced hardcoded English text throughout `index.html` with `data-i18n="key"` and `data-i18n-placeholder="key"` attributes.
- **Translations Dictionary:** Created a comprehensive dictionary in `script.js` storing English and Portuguese strings for tabs, table headers, labels, and JavaScript alerts/empty states.
- **WhatsApp Message:** As requested, the message sent to WhatsApp remains in Portuguese, mapped securely through the translations dictionary.
- **Persistent State:** `carpool_lang` is saved to `localStorage`, defaulting to English (`en`).

### 3. Floating Action Controls
- Added a modern Floating Action Button (FAB) container fixed to the bottom-right corner of the screen.
- It contains two toggle buttons:
  - **Theme Toggle:** Displays a Moon or Sun icon depending on the active state.
  - **Language Toggle:** Displays "EN" or "PT".

---

## Next Steps: Test Suite Approaches

As the project grows, introducing a test suite will help ensure the calculator logic remains accurate and the UI behaves correctly. Since this is a Vanilla JS project, here are the recommended testing approaches to implement in the future:

### 1. End-to-End (E2E) Testing with Playwright or Cypress
**Best For:** Simulating real user interactions and verifying entire workflows.
**Why:** Because the app heavily relies on user input and DOM interactions (switching tabs, filling forms, and clicking buttons), an E2E framework is the most effective way to catch regressions. You can test flows such as:
1. Navigating to the Settings tab and adding two carpoolers.
2. Going to the Logger tab, inputting distances, and saving a trip.
3. Checking the Dashboard to ensure the Unpaid Balances update correctly.

### 2. Unit Testing with Vitest (or Jest)
**Best For:** Validating the core mathematical logic.
**Why:** The math in `calculatePreview()` and `updateDashboard()` is critical. By isolating these pure calculation functions (e.g., abstracting them so they take inputs and return outputs instead of directly reading/writing to the DOM), you can write unit tests to ensure that the split logic always divides costs fairly, especially edge cases where participants only take the outbound or return trip.

### 3. DOM Testing with DOM Testing Library
**Best For:** Checking if HTML elements render correctly based on the JavaScript `state` object.
**Why:** You can mount sections of your HTML into a virtual DOM (like JSDOM) and test if functions like `updateHistory()` properly format dates and insert the correct number of table rows into `#history-body` without needing a full browser instance.

### 4. LocalStorage Mocking
**Best For:** Ensuring data isn't lost.
**Why:** You can write tests that inject a mocked `localStorage` object with outdated or corrupted state structures to ensure `loadState()` parses it safely or applies necessary data migrations.
