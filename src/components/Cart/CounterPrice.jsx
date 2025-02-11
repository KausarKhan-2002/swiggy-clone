import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCartData } from "../../Context/CartContext";

const CounterPrice = ({item,priceState, cpdState}) => {
    console.log(item, cpdState);
    let [count, setCount] = useState(item.count)
    let {cartData} = useCartData()

    let {setTotalPrice, finalPrice, defaultPrice, price} = priceState
    

    const handleIncr = () => {
        setCount(++count)

        item.count = count

        if (finalPrice) {
          setTotalPrice(item.count * finalPrice / 100)
        }
        else {
          setTotalPrice(price * count / 100 || defaultPrice * count / 100)
        }

        // console.log(item);
        let discount = 0;
        for (let i of cartData) {
          if (i.cartItem.card.info.finalPrice) {
            const itemDis =
              (i.cartItem.card.info.price / 100) * i.count -
              (item.cartItem.card.info.finalPrice / 100) * i.count;
            discount += itemDis;
          }
        }

        cpdState.setCheckoutPrice(discount)
        

    }

    const handleDecr = () => {
        if (count > 1) {
            setCount(--count)
            item.count = count

            if (finalPrice) {
              setTotalPrice(finalPrice * count / 100)
            }
            else {
              setTotalPrice(price * count / 100 || defaultPrice * count / 100)
            }

                    let discount = 0;
        for (let i of cartData) {
          if (i.cartItem.card.info.finalPrice) {
            const itemDis =
              (i.cartItem.card.info.price / 100) * i.count -
              (item.cartItem.card.info.finalPrice / 100) * i.count;
            discount += itemDis;
          }
        }

        cpdState.setCheckoutPrice(discount)
        }
    }

  return (
    <div className="flex items-center gap-4 border border-green-200 px-3 py-1">
      <FaMinus className="font-bold text-3xl cursor-pointer text-green-700 p-2" onClick={handleDecr} />
      <p className="font-bold text-sm text-green-700">{item.count}</p>
      <FaPlus className="font-bold text-3xl cursor-pointer text-green-700 p-2"  onClick={handleIncr} />
    </div>
  );
};

export default CounterPrice;
