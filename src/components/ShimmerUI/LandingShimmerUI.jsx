import React from "react";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LandingShimmerUI = () => {
  return (
    <div className="">
      <div className="bg-slate-900 flex flex-col gap-2 justify-center items-center h-[350px]">
        <svg
          className="pl"
          viewBox="0 0 200 200"
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stopColor="hsl(313,90%,55%)" />
              <stop offset="100%" stopColor="hsl(223,90%,55%)" />
            </linearGradient>
            <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(313,90%,55%)" />
              <stop offset="100%" stopColor="hsl(223,90%,55%)" />
            </linearGradient>
          </defs>
          <circle
            className="pl__ring"
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="url(#pl-grad1)"
            strokeWidth="20"
            strokeDasharray="0 257 1 257"
            strokeDashoffset="0.01"
            strokeLinecap="round"
            transform="rotate(-90,100,100)"
          />
          <line
            className="pl__ball"
            stroke="url(#pl-grad2)"
            x1="100"
            y1="18"
            x2="100.01"
            y2="182"
            strokeWidth="30"
            strokeDasharray="1 165"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="font-medium text-slate-200 text-2xl">
          Looking for a great food near you...
        </h1>
      </div>

      <div className="px-20 w-[40%] flex gap-20 items-center">
        <div id="sidebar" className="shadow-md flex flex-col gap-4">
        
            <div className="w-full h-12 bg-white" />
            <div className="flex items-center gap-5 bg-slate-100 p-2">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200" />
                <div className="w-32 h-5 bg-white " />
            </div>
            <div className="flex items-center gap-5 p-2">
                <div className="w-12 h-12 rounded-full bg-slate-100" />
                <div className="w-32 h-5 bg-slate-100 " />
            </div>
            <div className="flex items-center gap-5 p-2">
                <div className="w-12 h-12 rounded-full bg-slate-100" />
                <div className="w-32 h-5 bg-slate-100" />
            </div>
        </div>
        
        <div id="cards" className="flex flex-col gap-8">
            <div className="w-40 h-4 bg-slate-100 rounded-lg" />

            <div className="flex gap-8">
                <div className="bg-slate-100 w-[300px] h-[150px] rounded-xl" />
                <div className="bg-slate-100 w-[300px] h-[150px] rounded-xl" />
                <div className="bg-slate-100 w-[300px] h-[150px] rounded-xl" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingShimmerUI;
