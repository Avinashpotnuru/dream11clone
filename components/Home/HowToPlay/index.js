import React from "react";
import dynamic from "next/dynamic";

const ReviewAndRating = dynamic(() => import("../ReviewsAndRating"), {
  ssr: false,
});

const HowToPlay = () => {
  return (
    <div className="bg-[url('/howtoplaymob.svg')] sm:bg-[url('/howtoplaytab.svg')] lg:bg-[url('/howtoplaydes.svg')]   bg-cover  flex flex-col  justify-center items-center  h-[1241px] md:[1590px] xl:h-[1650px] ">
      <div className=" w-[100%]  pt-3 ">
        <div className=" flex flex-col justify-center items-center  mx-2 pt-9 sm:pt-3  ">
          <h1 className="my-2  text-center  font-[700]  text-[20px] px-6">
            <span className="text-[#0169B6] mx-2 ">How to</span>
            <span className="text-[#00A547]">Play</span>
          </h1>
          <p className="text-center my-3  font-[400] text-[16px]  px-6">
            Ready to challenge other sports fans? Watch this video to learn how
            to play on Win11 and get started now. Compete with sports fans, make
            a perfect Win11 team with the best combination of players as per
            your knowledge and skill and win big.
          </p>
          <img className="my-3" src="/virat.png" />
        </div>
      </div>
      <ReviewAndRating />
    </div>
  );
};

export default HowToPlay;
