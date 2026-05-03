# Carpool Manager: Complete CRUD Operations

This implementation plan details the steps to complete the CRUD (Update and Delete) functionality for Carpoolers and Trips in the Carpool Cost Manager app.

## User Review Required

> [!IMPORTANT]
> The database should ideally have `ON DELETE CASCADE` configured on the `trip_participants` table to prevent orphaned records when a `carpooler` or `trip` is deleted. I will assume this is handled on the Supabase side, but I will wrap deletes in `try...catch` and ensure data is fully refetched. If a delete fails due to foreign key constraints, the app will show an error. Do you want me to manually delete associated `trip_participants` first before deleting a carpooler/trip to be safe?

## Open Questions

> [!WARNING]
> For editing trips, the current implementation records participants' attendance and individual costs when the trip is initially created. When editing a trip, do you want the logic to recalculate the individual costs dynamically based on the updated distances and checkmarks, exactly like creating a new trip?

## Proposed Changes

---

### UI Components

#### [MODIFY] [index.html](file:///c:/Users/Caio/Desktop/things/projects/ride-calculator/index.html)
- Add a global full-screen **Loading Overlay** (spinner/toast) that will be displayed during asynchronous operations (fetching, updating, deleting).
- Add an **Edit Carpooler Modal**: A hidden HTML dialog/overlay containing an input for the Name and Phone.
- Add an **Edit Trip Modal**: A hidden HTML dialog/overlay containing fields for Date, Outbound Info (Distance, Efficiency, Checklist), Return Info (Distance, Efficiency, Checklist), and Additional Expenses.
- Modify the `Actions` column of the Data Tables (Settings and History tabs) to include "Edit" icons (`fa-pen`) alongside the existing "Delete" icons (`fa-trash`).

---

### Application Logic

#### [MODIFY] [script.js](file:///c:/Users/Caio/Desktop/things/projects/ride-calculator/script.js)
- **Translations:**
  - Add keys for new modal titles, labels, buttons (e.g., `modal_edit_carpooler`, `modal_edit_trip`, `btn_cancel`, `btn_save_changes`, `loading_message`).
- **Loading State Functions:**
  - Implement `showLoading(msg)` and `hideLoading()` to toggle the UI overlay.
- **Carpoolers Management:**
  - Update `renderCarpoolersSettings()` to render an "Edit" button.
  - Create `openEditCarpoolerModal(id)` to populate the modal with current values.
  - Create `submitEditCarpooler()` to push an `UPDATE` query to Supabase.
  - Refactor `deleteCarpooler()` to show loading state and await `fetchData()` on completion.
- **Trips Management:**
  - Update `updateHistory()` to render an "Edit" button.
  - Create `openEditTripModal(id)` to open the modal and populate checkmarks and numeric values.
  - Create `submitEditTrip()` to:
    - Update the `trips` table record.
    - Delete existing `trip_participants` for this trip.
    - Insert newly calculated `trip_participants` based on updated selections.
  - Refactor `deleteTrip()` to show loading state and await `fetchData()` on completion.
- **State Management:**
  - After any Update/Delete operation, call `await fetchData()` to fully synchronize the local state from Supabase, then trigger `updateDashboard()`, `updateHistory()`, and `initLogger()`.

## Verification Plan

### Automated/Manual Verification
- I will verify the Light/Dark mode compatibility of the modals.
- I will simulate adding a user, editing their phone number, and saving, then ensuring the UI updates and the PIX link uses the new phone number.
- I will edit an existing trip to alter the distance and checkmarks, save, and verify that the "Weekly Summary" dashboard balances update correctly based on the new constraints.
- I will test deleting a trip to verify that participant balances accurately reflect the removal of that trip.
