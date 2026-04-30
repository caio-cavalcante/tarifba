# Supabase Migration Walkthrough

The Carpool Fuel Cost Manager has been successfully updated to use Supabase as its backend instead of `localStorage`. Here is a summary of the changes and how to get everything running.

## 1. Environment Configuration (`env.js`)
We created a local `env.js` file to hold your Supabase credentials and the Join Code.
```javascript
window.env = {
  SUPABASE_URL: 'YOUR_SUPABASE_URL',
  SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_KEY',
  JOIN_CODE: '1234'
};
```
> [!NOTE]
> Since this file is loaded in `index.html` via `<script src="env.js"></script>`, you can easily replace it with a Vercel deployment script or use Vercel's environment variable injection later.

## 2. Database Schema (`supabase_schema.sql`)
A new file named `supabase_schema.sql` is present in the workspace. It contains the exact SQL commands needed to set up your fresh database on Supabase.
> [!IMPORTANT]
> **Action Required**: Copy the contents of `supabase_schema.sql` and paste them into the Supabase SQL Editor to create your tables (`carpoolers`, `trips`, and `trip_participants`).

## 3. UI Changes
- **Supabase CDN**: Added the official Supabase Javascript library.
- **Join Code**: Added an "Admin Join Code" password field in the Settings tab.
- **Internationalization**: Added EN and PT translations for the new Join Code UI elements and alert messages.

## 4. State Management Refactor (`script.js`)
The application logic was entirely refactored to fetch and write to the database:
- **`fetchData()`**: On load, it fetches all participants and all trips (including the `trip_participants` sub-records).
- **Mutations**: Saving a trip, deleting a trip, adding a carpooler, and marking someone as paid now execute standard `insert`, `update`, or `delete` requests to the Supabase backend.
- **Security Check**: Before making any of these changes, the app verifies if the Join Code entered in Settings matches `window.env.JOIN_CODE`. If it doesn't match, the UI will block the action and show an alert.

> [!TIP]
> **What about Global Settings?**
> The Default Fuel Price is still saved to `localStorage` because it is considered a device-level preference rather than global backend data. 

## How to Test
1. Set up your Supabase project and run the SQL script.
2. Update `env.js` with your specific `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
3. Open the app, go to Settings, and enter your `JOIN_CODE` (e.g., `1234`).
4. Add a participant, then log a new trip.
5. Check your Supabase Dashboard to see the new rows appear instantly!
