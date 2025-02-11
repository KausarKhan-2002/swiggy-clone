import React from "react";
import { IMG_URL } from "../../../../utils/API";

const MenuCarousel = ({ items }) => {
  console.log(items.carousel[2].dish.info);

  return (
    <div className="my-10">
      <div id="title">
        <h2 className="font-bold text-xl">{items.title}</h2>
      </div>

      <div>
        {items.carousel &&
          items.carousel.map((item, ind) => (
            <div>
              <div
                className={`bg-[url("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/CPTi1")] w-[292px] h-[300px]`}
              >
                {item.dish.info.imageId}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuCarousel;
