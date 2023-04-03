import React from "react";
import GameInstructions from "./GameInstructions";
import Introduction from "./Introduction";
import Strategies from "./Strategies";
import WhyFantasy from "./WhyFantasy";

// bg-[url('/basmob.svg')] md:bg-[url('/bastab.svg')] lg:bg-[url('/basdesk.svg')]

const BasketBall = () => {
  return (
    <div className=" flex flex-col justify-center items-center   h-[3068px]   sm:h-[2045.08px] md:h-[1996px] bg-contain relative py-4 w-full overflow-hidden">
      <img
        className="absolute sm:hidden -z-10  top-0 left-0 bottom-0 right-0 h-full w-full"
        src="/basketmob.svg"
      />
      <img
        className="absolute hidden sm:block lg:hidden -z-10  top-0 left-0 bottom-0 right-0 w-full"
        src="/baskettab.svg"
      />
      <img
        className="absolute  hidden  lg:block -z-10  top-0 left-0 bottom-0 right-0 w-full"
        src="/basketdesk.svg "
      />

      <Introduction />
      <GameInstructions />
      <Strategies />
      <WhyFantasy />
    </div>
  );
};

export default BasketBall;
