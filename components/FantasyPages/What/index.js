import { useRouter } from "next/router";
import React from "react";

const What = ({ title, details }) => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div className="text-center min-h-[40vh] px-[20px] relative md:px-[40px] py-4 mb-8 sm:mb-[70px] lg:mb-[40px]">
      <h1 className="text-[20px] font-[700] sm:text-[24px] lg:text-[40px] text-[#00A547] my-5 mx-5 sm:mx-10 lg:mx-[125px]">
        <span className="text-[#0169B6]">What is</span> {title}
      </h1>
      <p className="text-[16px] font-[400] text-[#0B592A] my-5 mx-5 sm:mx-10 lg:mx-[125px] ">
        {details}
      </p>

      {id === "racing" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] bottom-0 -z-10 right-0 "
          src="/racingflag.svg"
        />
      )}

      {id === "equity-stocks" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] bottom-0 -z-10 right-0 "
          src="/stock-market.svg"
        />
      )}

      {id === "commodity-trading" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] bottom-0 -z-10 right-0 "
          src="/petrol-barrel 1.svg"
        />
      )}

      {id === "forex" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] bottom-0 -z-10 right-0 "
          src="/mdi_currency-eur.svg"
        />
      )}

      {id === "crypto-trading" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] bottom-0 -z-10 right-0 "
          src="/cryptocurrency-color_xlm.svg"
        />
      )}

      {id === "kickboxing" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] bottom-0 -z-10 right-0 "
          src="/boxing-gloves (3)_adobe_express 1.svg"
        />
      )}
    </div>
  );
};

export default What;
