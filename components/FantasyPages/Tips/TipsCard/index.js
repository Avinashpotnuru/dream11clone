import React from "react";

const TipsCard = ({ description }) => {
  return (
    <div className="bg-[#D8FFF3]/100 md:bg-[transparent] mx-3 my-3 flex justify-start items-center p-3 ">
      <img className="mx-3" src="/Group 41836.png" />
      <h1 className=" text-[16px] text-[#0B592A] font-[400]">{description}</h1>
    </div>
  );
};

export default TipsCard;
