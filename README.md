# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🍽️ Swiggy Clone - Fully Functional Food Ordering App  

🚀 **A highly accurate Swiggy clone** with **maximum exact features**, built using **React (Vite), Tailwind CSS**, and Swiggy's **public API**.  
This project replicates the **Swiggy experience** with advanced functionalities like **dynamic cart handling, search with suggestions, and restaurant menus with an accordion-based UI**.  

<br>


<!-- ======================== 🔹 Key Features ==================== -->

<h2 align="center">✨ Key Features ✨</h2>

## 🏠 Header Navigation  
✔️ **Left Location Button** – Opens a sidebar popup to select a **dummy location**, just like Swiggy.  
✔️ **Swiggy Corporate Button** – <span style="color: red;">Pending</span>  
✔️ **Search Functionality** –  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 Users can search for **restaurants with suggestions**.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 Top **highlighted restaurants** appear in search results.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 Clicking on a restaurant **opens its detailed menu page**.  
✔️ **Offers Button** – <span style="color: red;">Pending</span>  
✔️ **Help Button** – <span style="color: red;">Pending</span>  
✔️ **Sign-In** – <span style="color: red;">Pending</span>  

<br>

## 🛒 Advanced Cart System (Fully Functional)  
✔️ **Cart Hover Feature** –  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 If the cart is **empty**, a **beautiful Swiggy-like popup** appears.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 If the cart **has items**, it shows the **restaurant brand and added food items**.  

✔️ **Cart Click Feature** –  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 If the cart is **empty**, it displays an **empty cart image** with a **button to navigate back** to the landing page.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 If the cart **has items**, it displays all added items with **image, title, and price dynamically**.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 **Checkout button** (Pending, only UI is implemented).  

✔️ **Add to Cart Functionality** –  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 Each menu card has an **"Add" button**.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 When a user clicks **"Add"**, the item is added to the cart, and the button changes to a counter: `- 1 +`.  

✔️ **Restrict Multiple Brands in Cart** –  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 Users can **only add items from a single restaurant at a time**.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 If a user tries to add items from a **different restaurant**, a **popup asks whether they want to replace** the existing items.  

✔️ **Exact Swiggy-like Cart Functionality** 🎯  

<br>

## 🍽️ Swiggy Restaurant Cards & Menus  
✔️ **Swiggy-style 3 sections layout**:  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 **Top 2 sections** can be **horizontally scrolled**.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 **Main section** can be **vertically scrolled**.  

✔️ **Restaurant Menu & Details** –  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 Clicking a restaurant **shows the menu and details**.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 **Bottom collections** like **Recommended, All, etc., in an accordion format** (same as Swiggy).  

✔️ **Filter Buttons** – <span style="color: red;">Pending</span>  

<br>

## 🎨 Swiggy-Like Skeleton Loaders  
✔️ **Why Skeleton Loaders?**  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 Improves **user experience** and prevents **layout shifts**.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 Designed **custom skeleton loaders** to match Swiggy’s UI.  

✔️ **Where Skeletons Are Used?**  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 Before **restaurant cards load**, skeleton placeholders appear with **shimmer effects**.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 On the **restaurant menu page**, skeleton loaders simulate **menu items, categories, and descriptions**.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 **Cart Popup Skeleton** – Shows a **beautiful empty cart skeleton** until data loads.  
&nbsp;&nbsp;&nbsp;&nbsp; 🔹 **Lazy Loading Effect** – Components load **gradually** for a smoother experience.  

<br>

<!-- ======================== 🛠️ Tech Stack ==================== -->

<h2 align="center">🛠️ Tech Stack</h2>

✔️ **Frontend**: React (Vite), Tailwind CSS  
✔️ **API**: Swiggy Public API  

<br>

<!-- ======================== 📸 Screenshots ==================== -->

<h2 align="center">📸 Screenshots</h2>

### 🏠 Landing Page  
![Landing page](https://github.com/user-attachments/assets/b4d97f8e-b579-4c39-b7c0-3feeed4c7d41)

### 🛒 Cart Popup  
<img src="https://github.com/user-attachments/assets/b4d97f8e-b579-4c39-b7c0-3feeed4c7d41" width="600">  

### 🔄 Swiggy-Like Skeleton Loader  
![Skeleton Loader](https://github.com/user-attachments/assets/b4d97f8e-b579-4c39-b7c0-3feeed4c7d41)

<br>

<!-- ======================== 🚀 Getting Started ==================== -->

<h2 align="center">🚀 Getting Started</h2>

### 🔹 Clone the Repository  
```sh
git clone https://github.com/yourusername/swiggy-clone.git
cd swiggy-clone
