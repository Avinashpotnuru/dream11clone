import React from "react";

const KeyPoints = ({ title, description }) => {
  console.log("title", title);
  return (
    <div className=" flex justify-center items-center text-center w-full py-12">
      <div
        style={{ backgroundPosition: "center center" }}
        className="bg-[url('/preditionmob.svg')] bg-cover px-3 md:px-[40px]  sm:bg-[url('/plain.png')]  h-[560px] w-[100%] md:w-[100%] object-cover   flex flex-col sm:flex-row justify-center sm:justify-around items-center "
      >
        <img
          className="hidden sm:block h-[125px]  w-[125px]"
          src="/CUPPPP.png"
        />
        <div className="flex flex-col justify-center items-center w-[100%] px-[20px]">
          <h1 className="text-[#0169B6] text-[20px]  lg:text-[40px]  md:pb-[40px] font-[700] pb-[16px] ">
            key Points and Strategies for{" "}
            <span className="text-[green]">{title}</span>
          </h1>
          <p className="text-[#0B592A] text-[16px] px-5 sm:px-10 lg:px-[125px] text-center font-[400] w-[100%] min-md:h-[180px] min-md:w-[567px]">
            {description}
          </p>
          <div className="flex justify-end  items-center p-3 sm:w-[100%] ">
            <p className="self-end text-[700] font-[20px] text-[#0B592A] ">
              READ MORE
            </p>
            <img className="origin-center rotate-45 " src="/arrow.png" />
          </div>
        </div>
        <img
          className="hidden sm:block  h-[125px] w-[125px]"
          src="/CUPPPP.png"
        />
      </div>
    </div>
  );
};

export default KeyPoints;
