# TARIFBA — Carpool Cost Manager

A modern, responsive web application designed to calculate, track, and manage shared commute and carpool expenses. **TARIFBA** features dynamic segmented cost calculations (Outbound / Return), additional expense distribution (tolls, parking), a persistent **Running Ledger** payment system, cloud synchronization via **Supabase**, single-tenant access protection via **Passkey Shield** with a **Visitor Mode**, full CRUD management for trips and participants, **PIX** and **WhatsApp** payment integration, bilingual internationalization (English & Portuguese), and smooth Light/Dark themes.

---

## 🌟 Key Features

### 🚗 Segmented Trip Cost Calculator
- **Independent Segments (Ida & Volta):** Calculate costs separately for Outbound (*Ida*) and Return (*Volta*) segments, each with custom distances (km), vehicle fuel efficiencies (km/L), and specific passenger attendance.
- **Fair Passenger Cost Splitting:** Automatically includes the driver in cost calculations and divides fuel expenses proportionally based on who was present for each segment.
- **Additional Expenses Support:** Add tolls, parking fees, or road surcharges to any trip, distributed evenly among all participants.
- **Default Leg Preferences:** Configure participants with commute preferences (*Both Legs*, *Outbound Only*, or *Return Only*); the logger automatically pre-selects them on relevant segments.
- **Live Split Preview:** Real-time preview of total trip cost and individual participant splits before saving.

### 💳 Running Ledger Payment System & Dashboard
- **Dynamic Ledger Model:** Replaces static "marked as paid" states with a persistent, dynamic transaction ledger (`payments` table).
- **Register Payment Modal:** Easily record full or partial payments for any participant, pre-filled with their current outstanding balance.
- **Payment History:** Chronological modal showing all past payment transactions with dates, amounts, and one-click deletion (with automatic balance recalculation) to correct mistakes.
- **Financial Metrics:** Instant dashboard overview of **Total Expenses** (all logged trips), **Total Outstanding Balance**, and individual unpaid balances.

### 🛡️ Passkey Shield & Visitor Mode
- **Passkey Shield Gate:** Single-tenant authentication barrier safeguarding database queries and mutation operations behind an Admin Passkey (`ADMIN_PASSKEY` / `JOIN_CODE`).
- **Flexible Sessions:** Option to "Remember on this device" (`localStorage`) or keep access session-bound (`sessionStorage`).
- **Quick Lock / Sair:** One-click lock button in the header and settings that immediately purges sensitive database state from DOM and browser memory.
- **Visitor Mode:** Collapsible gate with visitor preview mode allowing guests to explore the interface, test the calculation engine, and interact with the UI without accessing live database records.

### ✏️ Complete CRUD Management
- **Carpoolers Management:** Add, edit (name, WhatsApp phone, default leg preference), and delete carpoolers.
- **Trips Management:** Log new trips, inspect chronological history, edit past trips (dates, expenses, distances, efficiencies, and attendee checkmarks with real-time recalculation of splits and historical fuel price inference), and delete records.
- **Database Integrity:** Configured with cascading foreign keys (`ON DELETE CASCADE`) to prevent orphaned split records when removing trips or participants.
- **Loading & Error Handling:** Full-screen backdrop spinner during network calls with comprehensive error handling and informative alert dialogs.

### 📱 WhatsApp & PIX Integration
- **Pre-filled Payment Requests:** Generate one-click personalized WhatsApp messages formatted with the participant's name and exact outstanding balance.
- **PIX Key Support:** Save a default PIX key in Settings to automatically append payment instructions to WhatsApp messages.
- **Bilingual Message Templates:** Automatically generated in Portuguese or English based on the active language.

### 🎨 Themes & Internationalization (i18n)
- **Solarized Dark & Clean Light Themes:** Seamless theme toggle with Solarized Dark and high-contrast Light palettes, persistent across sessions and automatically respecting system `prefers-color-scheme`.
- **Bilingual Interface (EN / PT-BR):** Instant translation toggle for all headings, forms, tables, modals, placeholders, alerts, and confirmation dialogs.
- **Floating Controls (FAB):** Convenient bottom-right floating action buttons for fast theme and language toggling.

---

## 🛠️ Tech Stack

- **Frontend:** Semantic HTML5, Vanilla JavaScript (ES6+), Tailwind CSS (CDN), FontAwesome 6
- **Styling:** Custom CSS variables with glassmorphism effects and smooth theme transitions (`style.css`)
- **Backend & Database:** [Supabase](https://supabase.com/) (PostgreSQL with Row Level Security)
- **Deployment:** Vercel-ready with build script (`generate-env.js`) for runtime environment variable injection

---

## 📋 Database Setup (Supabase)

TARIFBA uses Supabase PostgreSQL for cloud persistence. Follow these steps to prepare your database:

1. Create a project at [supabase.com](https://supabase.com/).
2. Open the **SQL Editor** in your Supabase project dashboard.
3. Paste and run the entire contents of [`supabase_schema.sql`](supabase_schema.sql).

The schema creates four core tables with Row Level Security (RLS) and cascading constraints:
- `carpoolers`: Stores participant names, phone numbers, and default commute legs (`both`, `ida`, `volta`).
- `trips`: Stores date, total trip cost, and outbound/return distances, efficiencies, and passenger counts.
- `trip_participants`: Stores per-passenger cost splits, attendance flags, and foreign keys referencing `trips` and `carpoolers` (`ON DELETE CASCADE`).
- `payments`: Running financial ledger logging payment transactions (`amount`, `created_at`, `carpooler_id`).

---

## ⚙️ Configuration & Environment Variables

TARIFBA connects to Supabase and validates the admin passkey using `window.env`.

### Required Environment Variables

| Variable | Description |
| :--- | :--- |
| `SUPABASE_URL` | Your Supabase project URL (e.g., `https://xyzcompany.supabase.co`) |
| `SUPABASE_ANON_KEY` | Your Supabase public anonymous (`anon`) API key |
| `ADMIN_PASSKEY` / `JOIN_CODE` | Admin passkey required to unlock the Passkey Shield and manage data |

### Local Development Setup

1. Copy the sample environment file:
   ```bash
   cp env.js.example env.js
   ```
2. Edit `env.js` with your actual credentials:
   ```javascript
   window.env = {
     SUPABASE_URL: 'https://your-project.supabase.co',
     SUPABASE_ANON_KEY: 'your-anon-key',
     JOIN_CODE: 'your-admin-passkey',
     ADMIN_PASSKEY: 'your-admin-passkey'
   };
   ```
3. Open `index.html` in any web browser (or serve it with a local server like `npx serve` or VS Code Live Server).

### Automated Build Script (`generate-env.js`)

For production environments (like Vercel), `package.json` includes a build script:

```bash
npm run build
```

This runs `node generate-env.js`, which reads system environment variables (`process.env.SUPABASE_URL`, `process.env.SUPABASE_ANON_KEY`, and `process.env.ADMIN_PASSKEY` or `process.env.JOIN_CODE`) and automatically generates `env.js` before deployment.

---

## 🚀 Deployment to Vercel

1. Push your repository to GitHub / GitLab.
2. Import the project into [Vercel](https://vercel.com/).
3. In **Project Settings** > **Environment Variables**, add:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `ADMIN_PASSKEY` (or `JOIN_CODE`)
4. Vercel automatically runs `npm run build` (`node generate-env.js`) and deploys the static application.

---

## 📖 User Guide

1. **Unlock Access:**
   - On initial load, the **Passkey Shield** prompts for your Admin Passkey.
   - Enter your passkey and select whether to remember it on the device.
   - Alternatively, click **Explore UI in Visitor Mode** to test the interface without database access.
2. **Initial Setup (Settings Tab):**
   - **Global Defaults:** Set your default fuel price (R$/L) and your personal **PIX Key**.
   - **Add Carpoolers:** Add frequent riders with their WhatsApp numbers and default leg preferences (*Outbound & Return*, *Outbound Only*, or *Return Only*).
3. **Logging Trips (Logger Tab):**
   - Enter fuel price and any additional expenses (tolls/parking).
   - Input distance (km) and car fuel efficiency (km/L) for Outbound (*Ida*) and Return (*Volta*).
   - Check off the participants present on each leg.
   - Check the **Live Preview** and click **Save Trip**.
4. **Tracking Balances & Settling Debts (Dashboard Tab):**
   - Monitor total expenses and per-person outstanding balances.
   - Click **WhatsApp** to open a pre-filled payment request with the participant's exact balance and your PIX key.
   - When a payment is received, click **Register Payment** to log the received amount.
   - Click **Payment History** to view or revert past payments.
5. **Managing & Editing Records (History & Settings Tabs):**
   - In **History**, click the pencil icon to edit past trip details; the app recalculates historical participant splits automatically.
   - In **Settings**, edit participant details or default legs anytime.
6. **Switching Theme & Language:**
   - Use the floating action buttons in the bottom-right corner to toggle between Dark/Light modes or English/Portuguese interfaces.

---

## 📄 License

This project is licensed under the MIT License. Developed by Caio Cavalcante.
