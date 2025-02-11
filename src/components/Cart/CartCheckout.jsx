import React from "react";
import { useState } from "react";
import { PiSealPercentLight } from "react-icons/pi";

const CartCheckout = ({ cartData }) => {
  const [isChecked, setIsChecked] = useState(false);

  console.log(cartData);

  const totalPrice = cartData.reduce(
    (init, item) =>
      init + (item.cartItem.card.info.finalPrice / 100) * item.count ||
      (item.cartItem.card.info.price / 100) * item.count ||
      (item.cartItem.card.info.defaultPrice / 100) * item.count,
    0
  );


  let discount = 0;
  for (let item of cartData) {
    if (item.cartItem.card.info.finalPrice) {
      const itemDis =
        (item.cartItem.card.info.price / 100) * item.count -
        (item.cartItem.card.info.finalPrice / 100) * item.count;
      discount += itemDis;
    }
  }

  console.log(discount);

  return (
    <div className="flex flex-col items-center gap-8 bg-slate-100 p-5">
      <p className="p-4 bg-slate-200 w-[80%]">Any suggestion we will pass it on...</p>

      <div className="cursor-pointer border w-[80%] p-3">
        <div className="flex gap-2">
          <input
            onClick={() => setIsChecked(!isChecked)}
            type="checkbox"
            className="scale-125 accent-green-500 text-white cursor-pointer"
          />
          <label className="cursor-pointer">
            Opt in for No-contact Delivery
          </label>
        </div>
        <p className="pl-6 text-sm text-slate-600">
          {isChecked
            ? "Our delivery partner will call to confirm. Please ensure that your address has all the required details."
            : "Unwell, or avoiding contact? Please select no-contact delivery.Partner will safely place the order outside your door (not for COD)"}
        </p>
      </div>

      <div className="flex gap-3 items-center border p-3 w-[80%] cursor-pointer">
        <PiSealPercentLight size={20} />
        <span>Apply Coupon</span>
      </div>

      <div className="w-[80%]">
        <h2>Bill Details</h2>
        <ul className="text-sm text-slate-700 mt-2 flex flex-col gap-2">
          <li className="flex justify-between">
            <span>Item Total</span>
            <span>&#8377;{totalPrice}</span>
          </li>
          <li className="flex justify-between">
            <span>Extra discount for you</span>
            <span>&#8377;{discount}</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-3 border-t-2 border-slate-500 pt-3 w-full">
        <h2>To Pay</h2>
        <h2>&#8377;{totalPrice - discount}</h2>
      </div>

      {/* <button className="bg-orange-500 py-2 font-bold  text-slate-100 w-full hover:shadow-lg transition active:bg-orange-600">Checkout</button> */}
    </div>
  );
};

export default CartCheckout;
