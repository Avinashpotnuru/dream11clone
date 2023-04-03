import React from "react";

const HowToDo = () => {
  return (
    <div>
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
            <h1 className="text-[#0169B6] text-[24px] lg:text-[32px] md:pb-[40px] font-[700] pb-[16px] ">
              How to do{" "}
              <span className="text-[green]">Crypto Trade Predictions</span>
            </h1>
            <p className="text-[#0B592A] text-[16px] text-center font-[400] w-[100%] min-md:h-[180px] min-md:w-[567px]">
              To make predictions about the future price of cryptocurrencies,
              there are a few key steps you can follow:
            </p>

            <p>
              {" "}
              Research the market: To make accurate predictions, you need to
              have a good understanding of the cryptocurrency market and the
              factors that can affect the price of different coins. This
              involves researching the technology behind different
              cryptocurrencies, studying market trends and news, and keeping up
              to date on developments in the industry.
            </p>
            <p className="text-[#0B592A] text-[16px] text-center font-[400] w-[100%] min-md:h-[180px] min-md:w-[567px]"></p>
            <div className="flex justify-end  items-center p-3 sm:w-[100%] ">
              <p className="self-end text-[700] font-[20px] text-[#0169B6]">
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
    </div>
  );
};

export default HowToDo;
