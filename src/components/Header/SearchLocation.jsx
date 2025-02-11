import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiGps } from "react-icons/ci";
import Spinner from "../HOC/Spinner";

const SearchLocation = ({ showSidebar, setShowSidebar }) => {
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="w-[72%]">
      <div>
        <AiOutlineClose
          onClick={() => setShowSidebar(false)}
          className="text-5xl p-3 cursor-pointer"
        />

        {/* Search input */}
        <div className="mt-8 px-3 shadow-sm border-[.1px] flex items-center">
          <input
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            className="outline-none  w-full py-4 font-medium"
            type="text"
            placeholder="Search for area, street name.."
          />
          {inputVal && (
            <label
              onClick={() => setInputVal("")}
              className="text-orange-500 text-[.8rem] font-medium p-1 cursor-pointer"
            >
              Cancel
            </label>
          )}
        </div>
      </div>

      {/* Get current location */}
      {inputVal.length < 3 && (
        <div className="mt-8 border-[1px] py-6 pl-3 cursor-pointer group">
          <h2 className="flex items-center gap-3">
            <CiGps className="text-2xl" />{" "}
            <span className="group-hover:text-red-600 font-medium">
              Get current location
            </span>
          </h2>
          <span className="ml-7 text-[.8rem] text-slate-600">Using GPS</span>
        </div>
      )}

      {inputVal.length >= 3 && <div
          id="spinner"
          className="mt-5 mx-auto animate-spin rounded-full h-9 w-9 border-t-2 border-orange-500"
        ></div>}
    </div>
  );
};

export default SearchLocation;
