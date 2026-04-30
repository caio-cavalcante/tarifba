# Migrate Carpool Fuel Cost Manager to Supabase

The goal is to replace the current LocalStorage implementation with a Supabase PostgreSQL backend, allowing data to be shared across devices. We will also prepare the app for Vercel deployment with clear configuration variables, and implement a simple "Join Code" protection to prevent unauthorized edits.

## User Review Required

> [!WARNING]
> **Data Migration**: This plan replaces LocalStorage with Supabase. Existing data in LocalStorage will not be automatically migrated to Supabase in this implementation.
> **Security**: The "Join Code" authentication is a simple client-side check. It is sufficient to prevent casual unauthorized edits but does not provide robust backend security. To make it truly secure, we would need to implement Supabase Row Level Security (RLS) and custom JWTs, but that contradicts the "simplified" requirement. Let me know if you want true RLS instead.

## Open Questions

> [!IMPORTANT]
> 1. Do you want to preserve the `localStorage` state to `Supabase` as a one-time migration script, or is it okay to start with a fresh database once Supabase is connected?
> 2. Is a simple client-side "Join Code" sufficient, or do you want me to set up a basic Supabase RLS policy for this?

## Proposed Changes

### Configuration & Index

#### [MODIFY] [index.html](file:///c:/Users/Caio/Desktop/things/projects/ride-calculator/index.html)
- Add Supabase CDN: `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>`.
- Add an input field for "Join Code" in the Settings tab, below the global defaults.
- Add `<script src="env.js"></script>` (to be created as a git-ignored file for local testing, simulating Vercel environment variables).

#### [NEW] [env.js](file:///c:/Users/Caio/Desktop/things/projects/ride-calculator/env.js)
- A configuration file simulating Vercel's environment variables for local testing.
- Will contain:
  ```javascript
  window.env = {
    SUPABASE_URL: 'YOUR_SUPABASE_URL',
    SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_KEY',
    JOIN_CODE: '1234' // The password required to edit data
  };
  ```

### Backend Integration & Logic

#### [MODIFY] [script.js](file:///c:/Users/Caio/Desktop/things/projects/ride-calculator/script.js)
- Initialize Supabase client using `window.env`.
- Replace `loadState` and `saveState` with async Supabase calls:
  - `fetchData()`: Fetches carpoolers and trips (with their `trip_participants`).
  - `saveTrip()`: Inserts into `trips` and `trip_participants`.
  - `deleteTrip()`, `deleteCarpooler()`, `markPaid()`, and `addCarpooler()` will use `supabase` methods instead of mutating a local array.
- Implement the Join Code logic: before executing any Create/Update/Delete operation, check if the entered code in Settings matches `window.env.JOIN_CODE`.

#### [NEW] [supabase_schema.sql](file:///c:/Users/Caio/Desktop/things/projects/ride-calculator/supabase_schema.sql)
- A SQL snippet to create the necessary tables in Supabase:
  - `carpoolers` (id, name, phone, total_paid, created_at)
  - `trips` (id, date, total_cost, outbound_dist, outbound_eff, outbound_count, return_dist, return_eff, return_count, created_at)
  - `trip_participants` (id, trip_id, carpooler_id, cost_total, cost_ida, cost_volta, cost_extra, present_ida, present_volta)

## Verification Plan

### Manual Verification
1. Open `index.html` locally.
2. Enter the valid `JOIN_CODE` in Settings.
3. Add a Carpooler and save it.
4. Go to the Logger, create a Trip with Outbound and Return segments, and save it.
5. Verify in the Supabase Dashboard that records are correctly created in `trips` and `trip_participants`.
6. Reload the page and verify that data is loaded correctly from Supabase.
7. Try to edit/delete without the correct `JOIN_CODE` to ensure the action is blocked.
