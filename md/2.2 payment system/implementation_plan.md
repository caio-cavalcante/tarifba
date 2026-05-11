# Refactor Payment System to Running Ledger

This plan outlines the steps to refactor the payment system of the Carpool Manager to use a "Running Ledger" model via the new `payments` table in Supabase.

## User Review Required
> [!IMPORTANT]
> - The new WhatsApp message template has been modified to: "Hey [Name], your current carpool balance is R$[Current Balance]. Cheers!" (English) and "Fala [Name], seu saldo atual das caronas é R$[Current Balance]. Valeu!" (Portuguese). Please confirm if this is acceptable.
> - The `carpoolers.total_paid` column is being deprecated in favor of dynamically summing the `payments` table in the client. Existing data in `carpoolers.total_paid` will not be automatically migrated by this code. If you have production data, you may want to run a SQL migration first. Is this acceptable?

## Proposed Changes

### Calculation Engine & State (script.js)

#### [MODIFY] script.js
- Update `translations` dictionary:
  - Add `modal_register_payment`, `js_payment_amount`, `js_btn_register_payment`.
  - Update `js_wa_msg` according to the new requirements (remove the trips breakdown and adjust wording).
- Update `fetchData()`:
  - Fetch all records from the `payments` table.
  - Calculate `totalPaid` for each carpooler dynamically by summing up their associated payment amounts, instead of parsing `c.total_paid`.
- Update `updateDashboard()`:
  - Change the "Mark as Paid" button in the inner HTML string to a "Register Payment" button that calls a new function `openPaymentModal(c.id, balance)`.
  - Update the WhatsApp `msg` generation to only use the updated template with the carpooler's name and balance.
- Replace `window.markPaid` with a new `window.openPaymentModal(userId, balance)` function that populates and opens the modal.
- Add the form submission handler for `form-register-payment`:
  - `INSERT` into the `payments` table with `carpooler_id` and `amount`.
  - Wrapped in a `try...catch` block.
  - Refetch data and update the dashboard UI on success.

### Dashboard UI Updates (index.html)

#### [MODIFY] index.html
- Add the HTML markup for the "New Payment Modal" (`modal-register-payment`) near the other modals:
  - Include an input field for the amount (`payment-amount`), mapped to the Current Balance.
  - Maintain the existing Light/Dark theme compatibility (`card bg-surface`, `input-field`, etc.).
  - Ensure proper i18n data attributes are mapped.

## Verification Plan

### Automated Tests
- N/A (No automated testing framework present).

### Manual Verification
- Open the application and verify it loads correctly.
- Add a new payment via the Dashboard to ensure it reflects instantly on the UI without breaking existing layout.
- Check the floating-point math by registering a payment with decimals and verifying the remaining balance rounds cleanly.
- Verify the WhatsApp link generates the correct pre-filled message according to the new spec.
- Test Light/Dark theme toggle to confirm the new modal matches the global styling.
- Test EN/PT language toggle to ensure all new buttons and modal texts update appropriately.
