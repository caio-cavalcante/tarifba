# Carpool Fuel Cost Manager

A robust, locally-hosted web application for managing carpool expenses. Built as a pure front-end application, it allows users to log trips with segmented costs (Outbound/Return), calculate individual shares based on attendance, persist data using browser LocalStorage, and generate WhatsApp payment messages for participants.

## Features

- **Modern UI:** Sleek, responsive, and mobile-first design using Tailwind CSS and a custom solarized dark theme.
- **Trip Logger:** Dynamically calculate costs for outbound and return segments separately. Automatically includes the driver in cost splits.
- **Dashboard:** View overall metrics, per-person unpaid balances, and easily mark debts as paid.
- **WhatsApp Integration:** Generate pre-filled WhatsApp messages with a single click to request payments from participants.
- **Trip History:** Keep a chronological log of all trips with options to delete records.
- **Local Storage:** All data (settings, carpoolers, and trip history) is saved locally in your browser, meaning it persists even after page reloads.

## Getting Started

Since this is a pure front-end application, no installation or build process is required!

1. Clone or download this repository.
2. Open the `index.html` file directly in any modern web browser (e.g., Chrome, Edge, Safari).

## Usage Guide

1. **Settings Tab:** Start by adding your carpoolers and their WhatsApp numbers. You can also set a default fuel price here.
2. **Trip Logger Tab:** Enter the details for your trip (Outbound/Return distances, fuel efficiency). Select who was present for each segment to see a real-time exact cost split. Click "Save Trip".
3. **Dashboard Tab:** Review accumulated balances for each carpooler. Use the "WhatsApp" button to send them a payment request, and click "Paid" when they settle their balance.
4. **History Tab:** Review or delete past trips.

## Technologies Used

- HTML5
- Vanilla JavaScript
- Tailwind CSS (via CDN)
- FontAwesome (via CDN)
