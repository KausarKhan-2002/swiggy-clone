import { createContext, useContext, useEffect, useState } from "react";
import { RESTAURANT_DATA } from "../utils/API";

const ResContext = createContext();

const RestaurantContext = ({ children }) => {
  const [restaurantData, setRestaurantData] = useState([]);

  const fetchRestaurantData = async () => {
    const data = await fetch(RESTAURANT_DATA);
    const response = await data.json();
    setRestaurantData(response);
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return (
    <ResContext.Provider value={{ restaurantData }}>
      {children}
    </ResContext.Provider>
  );
};

export const useResData = () => {
  const resData = useContext(ResContext);
  return resData;
};

export default RestaurantContext;
