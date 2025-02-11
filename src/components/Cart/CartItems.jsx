import React, { useState } from "react";
import { IMG_URL } from "../../utils/API";
import CartItemCard from "./CartItemCard";
import CartCheckout from "./CartCheckout";

const CartItems = ({ cartData }) => {
  let [checkoutPrice, setCheckoutPrice] = useState(0)
  let [discount, setDiscount] = useState(0)

  console.log(checkoutPrice);
  

  console.log(cartData);

  return (
    <div className="mt-24 px-40 flex gap-5">

      <div className="bg-slate-100 p-5 w-[100%]">
        <div id="brand" className="flex items-center gap-7 mb-8">
          <img className="w-24" src={IMG_URL + cartData[0].brandImageId} />
          <h2 className="font-medium text-lg text-slate-800 border-b-4 border-slate-300 pb-4">
            <span>{cartData[0].brandName}</span>
          </h2>
        </div>

        <div className="flex justify-between text-slate-600 text-center">
          <h2 className="w-40">Item</h2>
          <h2>Modification</h2>
          <h2>Price</h2>
          <h2>Total</h2>
        </div>

        <div>
          {cartData.map((item) => (
            <CartItemCard key={item.cartItem.card.info.id} cpdState={{setCheckoutPrice, setDiscount}} item={item} />
          ))}
        </div>
      </div>

      <div>
        <CartCheckout cdState={{CartCheckout, discount}} cartData={cartData} />
      </div>

    </div>
  );
};

export default CartItems;
