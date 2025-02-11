import React, { useState } from "react";
import { IMG_URL } from "../../utils/API";
import CountItems from "../../utils/CountItems";
import CounterPrice from "./CounterPrice";
// import { FaIndianRupeeSign } from "react-icons/fa6";

const CartItemCard = ({ item, cpdState }) => {
  const { name, ratings, defaultPrice, price, finalPrice, imageId } =
    item.cartItem.card.info;

  let [totalPrice, setTotalPrice] = useState(
    finalPrice
      ? (item.count * finalPrice) / 100
      : (price * item.count) / 100 || (defaultPrice * item.count) / 100
  );

  return (
    <section className="flex items-center justify-between mt-5">
      <div className="w-40">
        <img
          className="w-16 h-16 object-cover rounded-full"
          src={IMG_URL + imageId}
        />
        <h2 className="text-slate-800 font-medium text-sm mt-1">{name}</h2>
      </div>

      <CounterPrice
        item={item}
        priceState={{
          price,
          finalPrice,
          defaultPrice,
          count: item.count,
          setTotalPrice,
        }}
        cpdState={cpdState}
      />

      <div>
        {finalPrice ? (
          <div>
            <span className="flex items-center line-through text-sm">
              &#8377;
              {price / 100 || defaultPrice / 100}
            </span>
            <span className="text-sm  flex">&#8377; {finalPrice / 100}</span>
          </div>
        ) : (
          <div>
            <span className="flex items-center text-sm">
              &#8377;
              {price / 100 || defaultPrice / 100}
            </span>
          </div>
        )}
      </div>

      {/* Total item by multiplying count which is counted number of particular adding item */}
      <p className="text-sm">
        &#8377;
        {totalPrice}
      </p>
    </section>
  );
};

export default CartItemCard;
