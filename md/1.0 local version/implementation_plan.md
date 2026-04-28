# Segmented Carpool Fuel Cost Manager - Implementation Plan

This document outlines the architecture, data structures, and UI layout for the Segmented Carpool Fuel Cost Manager. We will build this using a pure front-end stack consisting of exactly three files (`index.html`, `style.css`, `script.js`), relying on LocalStorage for persistence.

## User Review Required

Please review the proposed approach, particularly the data structures and UI layout, before we proceed with the implementation.
We will overwrite the existing `index.html` file in your workspace as it contains an older, simpler prototype.

> [!IMPORTANT]
> Since we must deliver the code in three files without a build process (like Node.js or Vite), we will use **Tailwind CSS via CDN** to satisfy the UI requirement for a modern, mobile-first design, alongside **FontAwesome** for icons.

## Open Questions

1.  **Weekly Summary:** The requirements mention a "Weekly Summary view" for WhatsApp messages and a "Dashboard" for total costs. I plan to combine these into a single "Dashboard" tab that shows overall metrics and a per-person summary with their aggregated balance and the WhatsApp button. Does this work for you?
2.  **Payment Tracking:** To know the "unpaid balance", we need a way to mark a trip or a person's debt as "paid". Should we add a simple "Mark as Paid" button next to each person in the Dashboard?

## Proposed Changes

We will create and overwrite the following files in the workspace (`c:\Users\Caio\Desktop\things\projects\ride-calculator`):

---

### Frontend Application

#### [MODIFY] [index.html](file:///c:/Users/Caio/Desktop/things/projects/ride-calculator/index.html)
Will be completely rewritten to provide the HTML structure for the application.
- Inclusion of Tailwind CSS via CDN and FontAwesome via CDN.
- App shell with Navigation Tabs (Trip Logger, Dashboard, History, Settings).
- **Trip Logger Tab:** Forms for Outbound and Return segments, fuel price, expenses, and live calculation preview.
- **Dashboard Tab:** Global summary, per-person balances, and WhatsApp integration buttons.
- **History Tab:** Table listing all saved trips with a delete option.
- **Settings Tab:** Form to add/remove carpoolers (Name, Phone) and set default fuel price.

#### [NEW] [style.css](file:///c:/Users/Caio/Desktop/things/projects/ride-calculator/style.css)
Will contain custom CSS to supplement Tailwind.
- Custom dark/solarized aesthetic variables and themes.
- Smooth transitions and micro-animations for tabs and buttons.
- Form styling enhancements.

#### [NEW] [script.js](file:///c:/Users/Caio/Desktop/things/projects/ride-calculator/script.js)
Will contain all the application logic.
- **State Management:** Load from and save to `localStorage`.
- **Calculations:** 
  - `Outbound_Cost = (Distance / Efficiency) * Fuel_Price`
  - `Return_Cost = (Distance / Efficiency) * Fuel_Price`
  - `Total_Cost = Outbound_Cost + Return_Cost + Additional_Expenses`
  - Split logic based on `Count_Present_Ida` and `Count_Present_Volta`.
- **DOM Manipulation:** Logic to switch tabs, render lists, and update live calculations.
- **WhatsApp Generation:** Build the `wa.me` links with the encoded message template.

## Verification Plan

### Automated Tests
- Since this is a pure front-end application without a test runner, we will use the `browser_subagent` to visually test the application.

### Manual Verification
1.  **Data Persistence:** Refreshing the page should retain carpoolers, settings, and trip history.
2.  **Calculations:** Creating a trip with known values and verifying the split matches manual math.
3.  **WhatsApp Links:** Clicking the "Send via WhatsApp" button should open a new tab with the correctly formatted `wa.me` URL and message.
