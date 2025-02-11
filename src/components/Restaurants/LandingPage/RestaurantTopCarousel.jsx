import { useState, useRef } from "react";
import { IMG_URL } from "../../../utils/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";

const CustomArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
};

const RestaurantTopCarousel = ({ data, dataSettings }) => {
  let [count, setCount] = useState(0);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
    dataSettings.count && setCount((count += 3));
  };
  const previous = () => {
    sliderRef.slickPrev();
    if (count > 0) {
      dataSettings.count && setCount((count -= 3));
    }
  };

  const settings = {
    dots: false,
    infinite: dataSettings.infinite,
    speed: 400,
    slidesToShow: dataSettings.slideToShow,
    slidesToScroll: 2,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };
  // console.log(data);

  return (
    <div>
      <section
        id="chooseRestaurantData"
        className={`${
          dataSettings.border ? "border-slate-100 border-y-2 py-12" : null
        } w-[80%] m-auto my-10`}
      >
        <div className="flex justify-between items-center w-[95%] m-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {data?.header?.title}
          </h2>
          <div className="flex gap-3">
            <button
              className={`${
                data?.imageGridCards?.info
                  ? count == 0
                    ? "bg-gray-100 text-gray-400"
                    : "bg-gray-300"
                  : null
              } bg-gray-300 p-2 rounded-full`}
              onClick={previous}
            >
              <IoArrowBackOutline />
            </button>
            <button
              className={`${
                data?.imageGridCards?.info
                  ? count >= data?.imageGridCards?.info.length
                    ? "bg-gray-100 text-gray-400"
                    : "bg-gray-300"
                  : "bg-gray-300"
              } bg-gray-300 p-2 rounded-full`}
              onClick={next}
            >
              <IoArrowForwardSharp />
            </button>
          </div>
        </div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {/* What's on your mind data */}
          {data?.imageGridCards?.info
            ? data?.imageGridCards?.info?.map((card) => (
                <Link
                  to={`collections/${
                    Number(card.entityId)
                      ? card.action.text + card.entityId
                      : card.entityId.split("").slice(36).join("")
                  }`}
                  key={card.id}
                >
                  <div className="p-3 ">
                    <img
                      src={`${IMG_URL}${card.imageId}`}
                      className="w-full h-36 object-cover"
                    />
                    {/* {console.log(card)} */}
                  </div>
                </Link>
              ))
            : data?.gridElements?.infoWithStyle?.restaurants?.map((item) => (
                <Link to={`restaurant/${item?.info?.id}`} key={item?.info?.id}>
                  <div className="p-4">
                    <img
                      src={`${IMG_URL}${item?.info?.cloudinaryImageId}`}
                      className="w-96 h-44 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="font-bold">{item?.info.name}</h2>
                      <div className="flex items-center gap-1">
                        <p>
                          <MdOutlineStarPurple500 className="text-white text-lg bg-green-600 rounded-full p-[2px]" />
                        </p>
                        <p className="font-medium">
                          {item?.info?.avgRating} . {item?.info?.sla?.slaString}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </Slider>
      </section>
    </div>
  );
};
export default RestaurantTopCarousel;
