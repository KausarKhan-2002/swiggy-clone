import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantBody from "./components/Restaurants/LandingPage/RestaurantBody.jsx";
import RestaurantMenu from "./components/Restaurants/restaurantMenu/RestaurantMenu.jsx";
import RestaurantTopCollection from "./components/Restaurants/TopCallections/RestaurantTopCollection.jsx";
import RestaurantContext from "./Context/RestaurantContext.jsx";
import SearchBar from "./components/Search/SearchBar.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartContext from "./Context/CartContext.jsx";

// const RestaurantMenu = React.lazy(() => import("./components/Restaurants.jsx/restaurantMenu/RestaurantMenu.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <RestaurantBody />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/collections/:id",
        element: <RestaurantTopCollection />,
      },
      {
        path: "/search",
        element: <SearchBar />,
      },
      
    ],
    
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartContext>
    <RestaurantContext>
      <RouterProvider router={router} />
    </RestaurantContext>
  </CartContext>
);
