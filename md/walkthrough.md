# Walkthrough: Segmented Carpool Fuel Cost Manager

The Carpool Fuel Cost Manager has been fully built from scratch following your requirements. It uses a modern, pure front-end stack consisting of just three files: `index.html`, `style.css`, and `script.js`. All state and history are managed entirely within your browser's LocalStorage.

## Changes Made

### 1. App Shell & Styling
- **Tailwind CSS & FontAwesome:** Loaded via CDN for a rich library of utility classes and icons.
- **Dark/Solarized Theme:** Created `style.css` which injects beautiful, custom solarized dark mode variables, giving it a sleek, premium look.
- **Navigation:** Implemented an intuitive 4-tab interface (Logger, Dashboard, History, Settings).
- **Responsive Layout:** The design scales perfectly for mobile and desktop screens.

### 2. State & Persistence (`script.js`)
- Set up a clean LocalStorage architecture that saves the global `settings` (default fuel price), `carpoolers` (the roster of people and their paid amounts), and the `trips` history.
- Everything is loaded synchronously on app start so data survives page reloads seamlessly.

### 3. Application Features by Tab
- **Settings Tab:** Add your carpoolers and their WhatsApp numbers here. You can also configure the Default Fuel Price which auto-populates in the Logger tab.
- **Logger Tab:** 
  - Dynamic forms for Outbound (Ida) and Return (Volta) distances and efficiency.
  - Generates live checklists for the carpoolers you added in Settings.
  - Live preview updates mathematically exact individual cost splits automatically.
  - **Driver Split:** As requested, the driver is automatically factored into the math (Headcount + 1). The driver's share is explicitly shown in the preview pane.
- **Dashboard Tab (Weekly Summary combined):**
  - Displays the all-time Total Expenses and Total Outstanding Balance.
  - Iterates over all carpoolers to present their accumulated unpaid balances across all trips they've participated in.
  - **Payment Tracking:** Added a handy "Paid" button to settle a person's balance locally.
  - **WhatsApp Integration:** The "Send" button generates a URL pre-filling a WhatsApp message specifically citing their Ida/Volta trip count and total debt.
- **History Tab:**
  - Complete chronological log of every saved trip, showing cost, distances, efficiency, and total pax count. Allows deletion of records (which also recalibrates debts).

## Verification

- **Local Storage Checks:** Add a carpooler, reload the page, and observe the carpooler persists.
- **Calculations:** Add distances and observe the dynamic cost splitting.
- **WhatsApp Format:** Click the WhatsApp button in the Dashboard and observe the query parameter `?text=Hey%20Name...` populated correctly.

> [!TIP]
> Open `index.html` in your favorite web browser (e.g., Chrome, Edge, Safari) to start using the application immediately!
