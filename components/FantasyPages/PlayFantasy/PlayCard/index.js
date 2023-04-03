import React from "react";

const PlayCard = ({ title, id }) => {
  return (
    <div
      className={` h-[109px] w-[243px] rounded-xl sm:mx-[30px] xl:mx-0 flex justify-center items-center my-4 p-5 bg-gradient-to-b  from-[#f1feed] to-[#fff8c0]/100 ${
        id % 2 === 1 ? "self-start" : "self-end"
      }`}
    >
      <div className="flex justify-around items-center">
        <img className="mx-4" src="/Group 41836.png" />
        <h1 className="font-[500] text-[#0B592A] text-[16px]">{title}</h1>
      </div>
    </div>
  );
};

export default PlayCard;
