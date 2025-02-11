import FilterButtons from "../filterButtons/FilterButtons";
// import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useResData } from "../../../Context/RestaurantContext";
import RestaurantTopCarousel from "./RestaurantTopCarousel";
import LandingShimmerUI from "../../ShimmerUI/LandingShimmerUI";
import RestaurantCard from "../../HOC/RestaurantCard";

const RestaurantBody = () => {
  const { restaurantData } = useResData();

  if (restaurantData.length === 0) {
    return <LandingShimmerUI />;
  }

  const resData =
    restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  let mindResSettings = {
    border: false,
    count: true,
    dots: false,
    infinite: false,
    slideToShow: 7,
    cardInfo: false,
  };

  let topResSettings = {
    border: true,
    count: false,
    dots: true,
    infinite: true,
    slideToShow: 4,
    cardInfo: true,
  };

  return (
    <div>
      <section>
        <RestaurantTopCarousel
          data={restaurantData?.data?.cards[0]?.card.card}
          dataSettings={mindResSettings}
        />
        <RestaurantTopCarousel
          data={restaurantData?.data?.cards[1]?.card.card}
          dataSettings={topResSettings}
        />
      </section>

      <section className="w-[80%] m-auto">
        <h2 className="text-2xl font-bold text-slate-900">
          Restaurants with online food delivery in delhi
        </h2>
        <div className="mt-7 font-medium text-slate-800 text-sm">
          <FilterButtons />
        </div>

        <div className="flex flex-wrap gap-x-9 gap-y-11 mt-10">
          {resData.map((item) => (
            <Link key={item?.info?.id} to={`restaurant/${item.info.id}`}>
              <RestaurantCard cardData={item} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantBody;
