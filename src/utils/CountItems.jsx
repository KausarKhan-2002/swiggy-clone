import React from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCartData } from "../Context/CartContext";

const CountItems = ({ countState, item }) => {
  let { count, setCount } = countState;
  const { cartData, setCartData } = useCartData();

  const handleIncr = () => {
    setCount(++count);

    if (item) {
      for (const cart of cartData) {
        if (cart.cartItem.card.info.id == item.card.info.id) {
          cart.count = count;
          return;
        }
      }
    }
  };

  const handleDecr = () => {
    if (count > 0) {
      setCount(--count);

      for (const cart of cartData) {
        if (cart.cartItem.card.info.id == item.card.info.id) {
          cart.count = count;
          console.log(cart.count);
          return;
        }
      }
    }
  };

  return (
    <div className="flex justify-evenly items-center">
      <FaMinus className="font-bold" onClick={handleDecr} />
      <p className="font-bold">{count}</p>
      <FaPlus className="font-bold" onClick={handleIncr} />
    </div>
  );
};

export default CountItems;
