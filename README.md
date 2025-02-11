# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- ======================== Key features of this app ==================== -->

A highly accurate Swiggy clone with maximum exact features, built using React (Vite),  Tailwind CSS, and Swiggy's public API. This project replicates the Swiggy experience with advanced functionalities like dynamic cart handling, search with suggestions, and restaurant menus with accordion-based UI.

Features __________________________
🏠 Header Navigation
✅ Left Location Button – Opens a sidebar popup to select a dummy location, just like Swiggy.
✅ Swiggy Corporate Button – Pending
✅ Search Functionality –

Users can search for restaurants with suggestions.
Top highlighted restaurants appear in search results.
Clicking on a restaurant opens its detailed menu page.
✅ Offers Button – Pending
✅ Help Button – Pending
✅ Sign-In – Pending


🛒 Advanced Cart System (Fully Functional)
✅ Cart Hover Feature –

If the cart is empty, a beautiful Swiggy-like popup appears.
If the cart has items, it shows the restaurant brand and added food items.
✅ Cart Click Feature –
If the cart is empty, it displays an empty cart image with a button to navigate back to the landing page.
If the cart has items, it displays all added items with image, title, and price dynamically.
Checkout button (Pending, only UI is implemented).
✅ Add to Cart Functionality –
Each menu card has an "Add" button.
When a user clicks "Add", the item is added to the cart, and the button changes to a counter: - 1 +.
✅ Restrict Multiple Brands in Cart –
Users can only add items from a single restaurant at a time.
If a user tries to add items from a different restaurant, a popup asks whether they want to replace the existing items.
✅ Exact Swiggy-like Cart Functionality


🍽️ Swiggy Restaurant Cards & Menus
✅ Swiggy-style 3 sections layout:

Top 2 sections can be horizontally scrolled.
Main section can be vertically scrolled.
✅ Restaurant Menu & Details –
Clicking a restaurant shows the menu and details.
Bottom collections like Recommended, All, etc., in an accordion format (same as Swiggy).
✅ Filter Buttons – Pending


🎨 Swiggy-Like Skeleton Loaders
To improve user experience and prevent layout shifts, I have designed custom skeleton loaders that match Swiggy’s UI.

🔹 Where Skeletons Are Used?
✅ Before restaurant cards load, skeleton placeholders appear with shimmer effects.
✅ On the restaurant menu page, skeleton loaders simulate menu items, categories, and descriptions.
✅ Cart Popup Skeleton – Shows a beautiful empty cart skeleton until data loads.
✅ Lazy Loading Effect – Components load gradually for a smoother experience.

🛠️ Tech Stack
Frontend: React (Vite), Tailwind CSS
API: Swiggy Public API

📸 Screenshots
screenshot url => ![Landing page](https://github.com/user-attachments/assets/b4d97f8e-b579-4c39-b7c0-3feeed4c7d41)