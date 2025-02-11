import { IMG_URL } from "../../../../utils/API";
import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6";
import { useCartData } from "../../../../Context/CartContext";
import CountItems from "../../../../utils/CountItems";

const ItemCards = ({ item, ind, itemsLength, brandInfo }) => {
  let [count, setCount] = useState(0);
  const [itemPrice, setItemPrice] = useState(null);

  const {
    name,
    price,
    ratings,
    description,
    imageId,
    defaultPrice,
    isVeg,
    isBestseller,
  } = item?.card?.info;

  const { cartData, setCartData } = useCartData();

  const handleItemCart = (cartItem) => {
    // console.log(cartItem.card.info.id);

    // Firs time allow user to add item.
    if (cartData.length == 0) {
      setCount(++count);
      setCartData([
        {
          brandName: brandInfo.brandName,
          brandImageId: brandInfo.brandImageId,
          count,
          cartItem,
        },
      ]);
      // console.log(
      //   item.card.info.price / 100 || item.card.info.defaultPrice / 100
      // );
      setItemPrice(
        item.card.info.price / 100 || item.card.info.defaultPrice / 100
      );

      return;
    }

    // If cartData.brand is not equal to brand addItem hold false value.
    const addItem = cartData[0].brandName == brandInfo.brandName && {
      brandName: brandInfo.brandName,
      brandImageId: brandInfo.brandImageId,
      count: count,
      cartItem,
    };

    // If addItem false it means user try to add a new brand so ask to user.
    if (addItem == false) {
      const ask = confirm("Do you want to add a new brand");

      if (ask) {
        setCount(++count)
        setCartData([
         { brandName: brandInfo.brandName,
          brandImageId: brandInfo.brandImageId,
          count: count,
          cartItem,}
        ]);
      }

      console.log(cartData);
      
      return;
    }

    // Similar items should not be add to cart.
    for (let itemID of cartData) {
      if (itemID.cartItem.card.info.id == cartItem.card.info.id) {
        console.log("This item is already in cart");
        itemID.count = count
        return;
      }
    }

    setCount(++count );

    // Allow If user want to add same brand and different cart.
    setCartData((prevData) => [
      ...prevData,
      {
        brandName: brandInfo.brandName,
        brandImageId: brandInfo.brandImageId,
        count: count,
        cartItem,
      },
    ]);
  };


  return (
    <div
      className={`flex justify-between items-center border-b-2 border-slate-100 pb-12 pt-4`}
    >
      <div id="cardInfo" className="w-[460px]">
        <h2 className="mb-1 flex items-center gap-3">
          <span>
            {isVeg ? (
              <BsTriangleFill className="text-red-500 border-2 border-red-500 p-[2px] rounded-sm" />
            ) : (
              <FaCircle className="text-green-500 border-2 border-green-500 p-[2px] rounded-sm" />
            )}
          </span>
          <span className="text-red-500">{isBestseller && "𝕭𝖊𝖘𝖙𝖘𝖊𝖑𝖑𝖊𝖗"}</span>
        </h2>

        <h2 className="font-bold text-base text-slate-700">{name}</h2>
        <p className="font-medium">
          &#8377; {price / 100 || defaultPrice / 100}
        </p>

        {ratings?.aggregatedRating?.rating && (
          <p className="flex items-center text-sm font-medium my-2">
            <span
              className={`flex items-center gap-1 ${
                ratings?.aggregatedRating?.rating >= 4
                  ? "text-green-800"
                  : "text-slate-800"
              }`}
            >
              <FaStar size={12} /> {ratings && ratings.aggregatedRating.rating}
            </span>
            <span className="text-slate-600">
              ({ratings && ratings.aggregatedRating.ratingCountV2})
            </span>
          </p>
        )}

        <p className="text-slate-600 font-medium">
          {description && description.split(" ").slice(0, 25).join(" ")}
        </p>
      </div>

      <div id="banner" className="relative w-[170px]">
        {imageId && (
          <img
            className="w-full bg-blue-100 rounded-lg"
            src={IMG_URL + imageId}
          />
        )}
        {count != 0 ? (
          <button className="absolute bottom-[-15px] bg-white left-[12%] w-32 py-2 text-green-600 font-extrabold rounded-lg shadow-md hover:bg-slate-200 transition">
            <CountItems
              price={{ itemPrice, setItemPrice }}
              item={item}
              countState={{ count, setCount }}
            />
          </button>
        ) : (
          <button
            onClick={() => handleItemCart(item)}
            className="absolute bottom-[-15px] bg-white left-[12%] w-32 py-2 text-green-600 font-extrabold rounded-lg shadow-md hover:bg-slate-200 transition"
          >
            ADD
          </button>
        )}

        <p className="text-center text-xs text-slate-500 font-medium absolute w-full bottom-[-32px]">
          {ratings?.aggregatedRating?.rating && "Customisable"}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ItemCards);
