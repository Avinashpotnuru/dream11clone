import React from "react";

const MatchCard = () => {
  return (
    <div className="mt-10 bg-[#E9FFDF] -skew-x-6  mx-auto  border-2 border-[#00A547] rounded-xl flex flex-col justify-center relative  h-[301px] w-[320px] ">
      <div className="bg-[#00B555]  ">
        <div className="skew-x-6 pl-4">
          <p className="text-[16px] font-[600] text-black py-2">Arun Kumar</p>
          <p className="text-[16px] font-[500] text-black py-1">
            Punjab Vs India
          </p>
        </div>
      </div>
      <div className="relative skew-x-6 p-6">
        <img className="absolute top-2 -z-10" src="/bxs_quote-left.svg" />
        <p className="m-auto text-[16px] font-[400] text-[#0B592A]">
          I really love Win11 because it is a place where we can indirectly
          participate in the game played by big players, big team. I have won ₹
          14007.15 . So thanks a lot to Win1111!
        </p>
      </div>
    </div>
  );
};

export default MatchCard;
