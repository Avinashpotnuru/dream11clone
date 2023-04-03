import React from "react";

const AddTheApp = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-[71px]  ">
      <h1 className="text-[20px] font-[700]  lg:text-[40px] text-[#0169B6] mb-[42px] lg:mb-5">
        Add the App & <span className="text-[#00A547]">Start Wining!</span>
      </h1>

      <div className="relative mb-[24px] flex justify-around items-center">
        <img
          className="absolute -z-10 h-[110px] top-1/2 md:hidden left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px]"
          src="/wincup.svg"
        />
        <img
          className="  h-[80px] w-[85px] hidden md:block  mx-5"
          src="/wincup.svg"
        />
        <h1 className="text-[14px] md:text-[16px] font-[400] text-[#0B592A] mx-5 lg:mx-[120px]">
          Join the world of exciting Fantasy Kabaddi games and tournaments –
          download the Win 11 Fantasy App to play fantasy kabaddi or any other
          fantasy sport on your Android or iOS device.
        </h1>
        <img
          className="  h-[80px] w-[85px] hidden md:block mx-5"
          src="/wincup.svg"
        />
      </div>

      <div className="bg-[#00A547] mt-[24px] mb-[71px] rounded-3xl flex justify-center items-center border-2 border-[#39FF00] h-[41px] w-[145px]  ">
        <h1 className="text-[14px] font-[600] text-white">Get the App</h1>
      </div>
    </div>
  );
};

export default AddTheApp;
