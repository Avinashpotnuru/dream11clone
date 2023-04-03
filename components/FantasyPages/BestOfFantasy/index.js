import React from "react";
import FantasyRulesCard from "./FantasyRulesCard";

import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  750: { items: 2 },
  1024: { items: 3 },
};

const BestOfFantasy = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <FantasyRulesCard onDragStart={handleDragStart} role="presentation" />,
    <FantasyRulesCard onDragStart={handleDragStart} role="presentation" />,
    <FantasyRulesCard onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <div className="bg-[url('/bestofmob.svg')]  sm:bg-[url('/bestoftab.svg')] lg:bg-none py-6 bg-cover mt-auto h-[90vh] sm:h-[900px]  lg:h-[500px] flex flex-col justify-center items-center ">
      <div className="w-[100%] py-auto">
        <h1 className="text-center text-[20px] md:text-[24px] lg:text-[40px] font-[700] text-[#0169B6] pb-8 lg:mb-10 px-[20px]">
          Welcome to the Best of{" "}
          <span className="text-[#00A547]">Fantasy Cricket on Win 11</span>
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

export default BestOfFantasy;
