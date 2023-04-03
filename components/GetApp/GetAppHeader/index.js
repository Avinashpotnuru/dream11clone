import React from "react";

const GetAppHeader = () => {
  return (
    <div className="  bg-[url('/mob.svg')] relative md:bg-[url('/getappdesk.svg')]  xl:bg-[url('/getappdesk.svg')] bg-cover   h-[600px] md:h-[850px] xl:max-h-[1300px] w-[100%] flex justify-center items-center p-5 ">
      <div className="flex p-3 lg:p-8 w-[50%] flex-col absolute top-0 z-0 pt-14 sm:pt-16 md:pt-20 lg:pt-28 left-0 justify-center items-center       ">
        <img
          className="h-[94px] w-[80px] sm:h-[140px] sm:w-[140px]  my-3"
          src="/win11logo (2).png"
        />
        <h1 className="hidden md:block text-[16px] lg:text-[18px] lg:pb-2 text-center font-[600] w-[100%] text-[#003718]">
          Create your team to win points based on all the players' performance
          in a live game.
        </h1>
        <div className="hidden md:block  ">
          <input
            className=" bg-gray-100 border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500"
            placeholder="Enter your mobile number"
            type="text"
          />
          <button className="bg-[#f2f200] shadow-md text-[green] p-2 mt-4 mx-3 text-[14px] font-[600] rounded-2xl">
            Get the App
          </button>
        </div>
        <div className="bg-white border-4 text-center md:hidden border-[#00A547] my-2 p-2  rounded-3xl">
          <p className=" text-[#00A547] font-[600] text-[14px] ">
            10000+ Users
          </p>
        </div>
        <div className="bg-white border-4 text-center md:hidden border-[#00A547] my-2 p-2  rounded-3xl">
          <p className=" text-[#00A547] font-[600] text-[14px]">
            10000+ Daily contest
          </p>
        </div>
      </div>
      <div className="flex justify-end absolute top-0 right-0  items-center  ">
        <img
          className="h-[280px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px]  xl:h-[500px] xl:w-[650px] "
          src="/MOB - Mask (1).svg"
        />
      </div>

      <div className="flex  flex-col justify-center pt-10 sm:pt-14 h-full items-center md:hidden  ">
        {/* */}
        <input
          className="bg-gray-100 border mt-20 sm:mt-32  border-gray-300 rounded-md px-4 py-2 placeholder-gray-500"
          placeholder="Enter your mobile number"
          type="text"
        />

        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me!
        </button> */}
        <button className="bg-[#f2f200] text-[green]  p-2 mt-4 mx-3 text-[14px] shadow-lg font-[600] rounded-2xl">
          Get the App
        </button>
      </div>
    </div>
  );
};

export default GetAppHeader;
