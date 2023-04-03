import ReviewCard from "@/components/Home/ReviewsAndRating/ReviewCard";
import React from "react";

import { review } from "@/components/Home/ReviewsAndRating";

import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  650: { items: 2 },
  1024: { items: 3 },
};

const PlayerAboutApp = () => {
  return (
    <div className=" flex flex-col justify-center items-center my-3">
      <h1 className="text-[22px] lg:text-[40px] text-center lg:mb-5 font-[400] text-[#0169B6] px-[20px] mt-4">
        What our players
        <span className="text-[#00A547]"> say about the app!</span>
      </h1>

      <div className="flex justify-center items-center w-[100%]  mx-auto ">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          disableDotsControls={true}
          disableButtonsControls={true}
          items={review.map((item) => (
            <ReviewCard review={item} key={item.id} />
          ))}
        ></AliceCarousel>
      </div>
    </div>
  );
};

export default PlayerAboutApp;
