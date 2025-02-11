import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useParamId from "./useparamId";
import CollectionShimmerUI from "../../ShimmerUI/CollectionShimmerUI";
import RestaurantCard from "../../HOC/RestaurantCard";

const RestaurantTopCollection = () => {
  const [resData, setResData] = useState([]);

  const { resId, resTitle } = useParamId();
  // console.log(resId, resTitle);

  async function fetchRestaurantData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=${resId}&tags=layout_BAU_Contextual%2C${resTitle}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    );
    const response = await data.json();
    setResData(response?.data?.cards);
  }

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  if (resData.length == 0) return <CollectionShimmerUI />;

  const filterCards = resData.filter((item) => item.card.card.info);
  // console.log(filterCards);

  return (
    <div className="px-40 pt-10">
      <div id="Heading">
        <h2 className="text-4xl text-slate-800 font-bold">
          {resData[0].card.card.title}
        </h2>
        <p className="mt-2 font-medium text-slate-500">
          {resData[0].card.card.description}
        </p>
      </div>

      {/* filters here.... */}
      {/* ____________________ */}

      <h2 className="text-2xl text-slate-900 font-bold my-5">
        Restaurants to explore
      </h2>

      {/* Cards */}

      <div className="grid grid-cols-4 gap-x-9 gap-y-11">
        {filterCards.map((item) => (
          <Link
            to={`/restaurant/${item.card.card.info.id}`}
            key={item.card.card.info.id}
          >
            <RestaurantCard cardData={item.card.card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantTopCollection;
