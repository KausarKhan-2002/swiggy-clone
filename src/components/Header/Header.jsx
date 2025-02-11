import { useState } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "./CartSuggestions/EmptyCart";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoBrowser } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { TbProgressHelp } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { BsMinecart } from "react-icons/bs";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [active, setActive] = useState("");
  const [isCartHover, setIsCartHover] = useState(false);

  return (
    <div className="shadow-md fixed w-full z-20 top-0 left-0 bg-white">
      <div
        onClick={() => setShowSidebar(false)}
        className={`absolute top-0 ${
          showSidebar ? "block" : "hidden"
        } w-full min-h-screen bg-slate-900 bg-opacity-50`}
      ></div>

      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="m-auto w-[78%] flex justify-between items-center">
        <div className="flex justify-between items-center gap-9">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_800/portal/m/logo_192x192.png"
            className="w-12 h-12"
          />
          <div
            onClick={() => setShowSidebar(true)}
            className="flex items-center gap-1 hover:text-orange-600 cursor-pointer"
          >
            <p className="flex gap-2 items-center font-bold text-gray-800 group">
              <span className="border-b-2 border-slate-800 group-hover:text-red-500 group-hover:border-red-500">
                Other
              </span>
              <span className="text-[.8rem] text-slate-500 font-normal group-hover:text-slate-400">
                Ghazipur, Uttarpradesh...
              </span>
            </p>
            <MdOutlineKeyboardArrowDown size={23} color="red" />
          </div>
        </div>

        <nav>
          <ul className="flex gap-11 font-semibold text-gray-700">
            <li>
              <a
                href="#"
                onClick={() => setActive("corporate")}
                className={`${
                  active === "corporate" && "text-orange-600"
                } flex items-center gap-2 hover:text-orange-600 h-[70px]`}
              >
                <GoBrowser className="text-xl" /> Swiggy Corporate
              </a>
            </li>
            <li>
              <Link
                to={"/search"}
                onClick={() => setActive("search")}
                className={`${
                  active === "search" && "text-orange-600"
                } flex items-center gap-2 hover:text-orange-600 h-[70px]`}
              >
                <IoSearchOutline className="text-xl" /> Search
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActive("offers")}
                className={`${
                  active === "offers" && "text-orange-600"
                } flex items-center gap-2 hover:text-orange-600 h-[70px]`}
              >
                <BiSolidOffer className="text-xl" /> Offers
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActive("help")}
                className={`${
                  active === "help" && "text-orange-600"
                } flex items-center gap-2 hover:text-orange-600 h-[70px]`}
              >
                <TbProgressHelp className="text-xl" /> Help
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActive("signin")}
                className={`${
                  active === "signin" && "text-orange-600"
                } flex items-center gap-2 hover:text-orange-600 h-[70px]`}
              >
                <RiContactsLine className="text-xl" /> Sign In
              </a>
            </li>
            <li>
              <Link
                to={"/cart"}
                onMouseEnter={() => setIsCartHover(true)}
                onMouseLeave={() => setIsCartHover(false)}
                className={`${
                  active === "cart" && "text-orange-600"
                } flex items-center gap-2 hover:text-orange-600 h-[70px] transition duration-300`}
              >
                <BsMinecart className="text-xl" /> Cart
                <EmptyCart isCartHover={isCartHover} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
