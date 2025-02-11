import React from "react";
import { useCartData } from "../../Context/CartContext";
import CartEmpty from "./CartEmpty";
import { TbProgressHelp } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import CartItems from "./CartItems"

const Cart = () => {
  const itemsCart = useCartData();
  
  console.log(itemsCart.cartData);
  

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-10 bg-white">
        <section
          id="headerCart"
          className="flex justify-between items-center shadow-md px-40"
        >
          <div className="flex items-center gap-3">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_800/portal/m/logo_192x192.png"
              className="w-12 h-12"
            />
            <h3 className="font-bold text-sm text-slate-700">SECURE CHECKOUT</h3>
          </div>
          <ul className="flex gap-20">
            <li className="list-none">
              <a
                href="#"
                className="flex gap-2 items-center font-medium text-slate-800 h-[70px] px-1 hover:text-orange-600"
              >
                <TbProgressHelp size={23} /> Help
              </a>
            </li>
            <li className="list-none">
              <a
                href="#"
                className="flex gap-2 items-center font-medium text-slate-800 h-[70px] px-1 hover:text-orange-600"
              >
                <FaRegUser size={20} /> Profile
              </a>
            </li>
          </ul>
        </section>
      </header>

      {itemsCart.cartData.length == 0 ? (
        <CartEmpty />
      ) : (
        <CartItems cartData={itemsCart.cartData} />
      )}
    </div>
  );
};

export default Cart;
