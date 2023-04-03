import React from "react";
import ReviewCard from "./ReviewCard";

import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  650: { items: 2 },
  1024: { items: 3 },
};

export const review = [
  {
    id: 1,
    name: "Santhosh Waghmare",
    match: "Pune vs Hyderabad",
    details:
      "Fantasy gaming is something I've done for years, but Win11 is the real deal. I made more money from my understanding of cricket than I had anticipated. I couldn't be happier that my childhood love of cricket has become lucrative.",
  },
  {
    id: 2,
    name: "Deepak Chadda",
    match: "Chennai vs Mumbai",
    details:
      "I used to enjoy playing fantasy games as a hobby, but I soon realized I could multitask while doing so. I have sat in front of the television for hours watching cricket, but spending quality time on my phone while having the same experience and earning money is the next level.",
  },
  {
    id: 3,
    name: "Rajesh Chochlani",
    match: "Punjab vs Kolkata",
    details:
      "The most financially rewarding fantasy gaming application I have yet to discover was an excellent experience. Now, weekends are spent playing Win11 with friends.",
  },
];

const ReviewAndRating = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center  ">
        <h1 className="my-1 text-center font-[700] text-[20px]">
          <span className="text-[#0169B6] mx-2 ">Reviews &</span>
          <span className="text-[#00A547]">Rating</span>
        </h1>
        <div className="bg-white flex justify-evenly items-center p-2 w-[100%] rounded-md border-2 border-orange-500">
          <p className="mx-2">App rating</p>
          <img className="mx-2" src="/stars.jpg" />
          <p className="mx-2 text-[#00A547]">5K Ratings</p>
        </div>
      </div>
      <div className="self-end flex justify-around items-center mx-2 w-20">
        <h1>SWIPE</h1>

        <img src="/arrow.png" />
      </div>
      <div className="flex justify-center items-center w-[100%]   py-10 mx-auto ">
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
    </>
  );
};

export default ReviewAndRating;
