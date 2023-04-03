import React from "react";
import MatchCard from "./MatchCard";

import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  650: { items: 2 },
  1024: { items: 3 },
};

const WhatWin11 = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <MatchCard onDragStart={handleDragStart} role="presentation" />,
    <MatchCard onDragStart={handleDragStart} role="presentation" />,
    <MatchCard onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <div>
      <div className=" bg-[url('/whatwin111.svg')]  md:bg-none h-[700px]  py-4 w-full flex flex-col justify-start items-center my-4 ">
        <h1 className="text-[18px]  lg:text-[40px] font-[700] text-[#0169B6] pt-32 px-5">
          What Win11{" "}
          <span className="text-[#00A547]">Fantasy Cricket App Users Say </span>
          About Us
        </h1>
        <div className="w-[100%]">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls={true}
            disableButtonsControls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWin11;
