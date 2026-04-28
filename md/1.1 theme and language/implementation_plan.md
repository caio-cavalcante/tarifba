# Theme and i18n Implementation Plan

This plan details the addition of a Light/Dark Theme Switch and a Language Toggle (English/Portuguese) to the Carpool Fuel Cost Manager.

## User Review Required

> [!IMPORTANT]
> - The WhatsApp message text is currently hardcoded in JS. I will move its template into the translations object. Does the WhatsApp message structure look okay to translate directly, or should we keep it Portuguese-only since the user might be messaging Brazilians? The plan currently translates it.
> - The theme switcher will use a floating action button (FAB) in the bottom right corner for easy access without cluttering the header.

## Open Questions

- Should the default theme be inferred from the user's system preferences (`prefers-color-scheme`), or default to the existing Dark mode? The plan currently defaults to the system preference if no localStorage value is set.

## Proposed Changes

### CSS & Theming

- Refactor `style.css` to use a `data-theme` attribute selector for `:root`.
- Move the current Solarized Dark variables into `:root[data-theme="dark"]`.
- Create a new set of variables for `:root[data-theme="light"]` using a clean, high-contrast palette (e.g., `#f8fafc` for background, `#ffffff` for surfaces, `#0f172a` for text, while maintaining the primary and accent colors).
- Ensure transitions between themes are smooth by adding `transition: background-color 0.3s, color 0.3s;` to the `body` and `.card` classes.

#### [MODIFY] style.css

### HTML Structure (i18n & Controls)

- Update `index.html` to replace all hardcoded text with `data-i18n="key_name"` attributes.
- For placeholders, use `data-i18n-placeholder="key_name"`.
- Add a Floating Action Button (FAB) container fixed to the bottom right of the screen (or in the header if preferred) containing two buttons:
  - Theme Toggle (Moon/Sun icon)
  - Language Toggle (Globe/Flag icon or "EN"/"PT" text)

#### [MODIFY] index.html

### JavaScript Logic (Translations & Toggles)

- Add a new section in `script.js` for **Theme and Language State**.
- Implement `translations` object:
  - Contains keys for all UI elements, including JS-injected text (alerts, empty states, WhatsApp message).
  - Languages: `en` and `pt`.
- Implement toggle functions:
  - `toggleTheme()`: Switches between light/dark, updates the `data-theme` attribute on `<html>`, updates the toggle icon, and saves to `localStorage.getItem('carpool_theme')`.
  - `toggleLanguage()`: Switches between en/pt, triggers a `applyTranslations()` function, and saves to `localStorage.getItem('carpool_lang')`.
  - `applyTranslations()`: Scans the DOM for `data-i18n` and `data-i18n-placeholder` attributes and updates their text content. Also updates any dynamically rendered lists (e.g., rendering history and dashboard).

#### [MODIFY] script.js

## Verification Plan

### Automated Tests
- N/A (Project doesn't have a test suite currently).

### Manual Verification
1. **Theme Toggle:** Click the theme button. Verify that the UI switches smoothly between Solarized Dark and the new High-Contrast Light theme. Refresh the page to verify persistence.
2. **Language Toggle:** Click the language button. Verify all static UI elements and JS-injected elements (like "Driver (You)", empty state texts, and table headers) update correctly to the selected language. Refresh the page to verify persistence.
3. **Logic Preservation:** Add a test trip and verify the calculations remain correct and existing localStorage data for trips/carpoolers is unaffected.
