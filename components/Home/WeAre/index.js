import React from "react";

const WeAre = () => {
  return (
    <div className="mx-[24px] bg-[url('/weareDes.svg')]  bg-cover flex justify-center items-center p-7 sm:p-4 ">
      <div className="flex flex-col justify-center sm:w-[80%]   items-center   sm:p-2 bg-cover text-center  w-[345.79px]">
        <h1 className="text-[20px] font-[700]  my-2">
          <span className="text-[#0169B6] text-[20px]">We are</span>{" "}
          <span className="text-[#00A547] text-[20px]"> on Win 11</span>
        </h1>
        <p className="text-center my-2 font-[700] ">
          A Destination for gamers and winners!
        </p>
        <p className="text-center my-2 font-[500] text-[18px] mx-2 ">
          From football and cricket to basketball to even financial markets.
          Choose from a wide variety of exciting, action-packed, sporty games
          and wager real money on the outcome.
        </p>
        <p className="text-center my-2 w-[80%] uppercase text-[11px] mx-5">
          Creating a new world, A world where fans become players and players
          win!
        </p>
      </div>
    </div>
  );
};

export default WeAre;
