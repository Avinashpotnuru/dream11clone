import React from "react";

const Instructions = ({ title, instructions }) => {
  // console.log("instructions", instructions);

  // bg-[url('/instmob.svg')] bg-red-300  md:bg-[url('/insttab.svg')]

  return (
    <div
      style={{ backgroundPosition: "center top" }}
      className=" bg-cover text-center flex flex-col justify-center items-center  min-h-[470px] md:min-h-[506px]  w-full relative   "
    >
      {/* <div className="my-auto flex flex-col  p-2 justify-center items-center  text-center   px-[20px] md:px-[30px]"> */}

      <img
        src="/instructions.svg"
        className="w-full hidden sm:inline absolute -z-20 "
      />

      <img
        src="/instmob (2).svg"
        className="w-full h-full sm:hidden absolute -z-20 "
      />
      <div className="">
        <h1 className=" my-3 text-[20px] font-[700]  lg:text-[40px]  py-5  px-[20px] md:px-[30px] lg:px-[50px]  text-[#00A547]">
          {title} <span className="text-[#0169B6]"> Instructions</span>
        </h1>
        <p className="my-3 text-[18px]  lg:px-[120px]  font-[400] text-[#00A547] w-full px-6 sm:px-10 md:px-[60px]">
          {instructions}
        </p>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Instructions;
