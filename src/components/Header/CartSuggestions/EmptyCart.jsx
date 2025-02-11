import React from "react";

const EmptyCart = ({ isCartHover }) => {
  return (
    <div
      style={{ boxShadow: "0 0 15px 0px #aaa", transition: "transform 0.3s ease, opacity 0.3s ease" }}
      className={`bg-white absolute right-[155px] top-[70px] border-t-2 border-orange-600 w-[340px] py-5 pl-10 pr-20 ${
        isCartHover ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <h2 className="text-3xl font-bold text-slate-500">Cart Empty</h2>
      <p className="mt-5 text-slate-600">
        Good food is always cooking! Go ahead, order some yummy items from the
        menu.
      </p>
    </div>
  );
};

export default EmptyCart;
