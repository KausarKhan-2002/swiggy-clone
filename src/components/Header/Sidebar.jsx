import { useState } from "react";
import SearchLocation from "./SearchLocation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    // console.log(showSidebar);

    useGSAP(() => {
        gsap.to("#sidebar", {
            x: showSidebar ? 637 : 0,
            duration: .5,
        })
    }, [showSidebar])
    
  return (
      <div id="sidebar" className={`w-[45%] absolute top-0 left-[-50%] bg-white min-h-screen overflow-y-scroll flex justify-end px-8 py-5`}>
        <SearchLocation
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
  );
};

export default Sidebar;
