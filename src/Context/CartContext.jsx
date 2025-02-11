import { createContext, useContext, useState } from "react";

const MyCartContext = createContext();

const CartContext = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  
  return (
    <MyCartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </MyCartContext.Provider>
  );
};

export const useCartData = () => {
  const itemsCart = useContext(MyCartContext);
  return itemsCart;
};

export default CartContext;
