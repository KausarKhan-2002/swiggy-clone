import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_DATA } from "../../../utils/API";
import { useEffect, useState } from "react";
import MenuLink from "./MenusInfo/MenuLink";
import MenuInformation from "./MenusInfo/MenuInformation";
import { IoSearchOutline } from "react-icons/io5";
import MenuDeals from "./MenusInfo/MenuDeals";
import Recommended from "./RecommendedData/Recommended";
import MenuShimmerUI from "../../ShimmerUI/MenuShimmerUI";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const params = useParams();

  const restaurantMenuData = async () => {
    try {
      const data = await fetch(RESTAURANT_MENU_DATA + params.id);
      const response = await data.json();
      setMenuInfo(response?.data);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    restaurantMenuData();
  }, []);

  if (menuInfo == null) {
    return <MenuShimmerUI />;
  }

  // console.log(menuInfo.cards[2]?.card?.card?.info.cloudinaryImageId);
  

  return (
    <section className="w-[55%] mx-auto">
      {/* Menu header */}
      <div className="flex justify-between items-center py-4 border-b-2">
        <h3 className="text-lg font-medium">
          {menuInfo.cards[2]?.card?.card?.info.name}
          {/* {console.log(menuInfo.cards[2]?.card?.card?.info.name)} */}
        </h3>
        <IoSearchOutline size={22} />
      </div>

      <MenuLink data={menuInfo.cards[2]?.card?.card?.info} />
      <MenuInformation info={menuInfo.cards[2]?.card?.card?.info} />
      <MenuDeals
        menu={
          menuInfo.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
        }
      />

      {/* Search dishes */}
      <div className="bg-slate-100 flex justify-end py-3 mt-10 rounded-xl font-bold text-slate-500">
        <div className="w-[62%] flex justify-between items-center px-4">
          <h2>Search for dishes</h2>
          <IoSearchOutline size={20} />
        </div>
      </div>

      {/* <MenuCarousel
        items={
          menuInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        }
      /> */}
      {/* {menuInfo.cards[2]?.card?.card?.info} */}

      <Recommended
        brandInfo={{brandName: menuInfo.cards[2]?.card?.card?.info.name, brandImageId: menuInfo.cards[2]?.card?.card?.info.cloudinaryImageId}}
        recommendInfo={menuInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards}
      />
    </section>
  );
};

export default RestaurantMenu;
