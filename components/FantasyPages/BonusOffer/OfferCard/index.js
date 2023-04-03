import React from "react";

const OfferCard = ({ id, description, imgUrl }) => {
  return (
    <div
      className={`   h-[100px] mb-[53px] w-[231px] bg-gradient-to-b from-[#C0FFCD]/40 to-[#FFF9C8]/100 relative   ${
        id % 2 === 1 ? "self-start" : "self-end"
      }`}
    >
      <div className="flex  justify-around items-center absolute -top-7 left-7">
        <div className="h-[25px] rounded-full bg-[#0169B6] w-[25px]  flex justify-center items-center">
          {id}
        </div>
        <img className="h-[60px] w-[122px]" src={imgUrl} />
      </div>
      <h1 className="py-5 px-4 text-[16px] font-[400] ">{description}</h1>
    </div>
  );
};

export default OfferCard;
