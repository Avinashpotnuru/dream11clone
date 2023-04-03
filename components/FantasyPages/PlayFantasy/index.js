import { useRouter } from "next/router";
import React from "react";
import PlayCard from "./PlayCard";

const PlayFantasy = ({
  title,
  cardsData,
  pageName,
  cardsData1,
  cardsData2,
}) => {
  const router = useRouter();

  const { id } = router.query;

  console.log("id===", id);
  return (
    <div className="flex flex-col justify-center items-center w-full py-4  my-6 relative">
      {/* <img
        className="absolute h-[75px] w-[75px] top-7 -z-10 right-0 sm:hidden"
        src="/rugbright.svg"
      />
      <img
        className="absolute h-[75px] w-[75px]  -top-5 hidden sm:block -z-10 right-0"
        src="/cricketball.svg"
      /> */}

      {id === "racing" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0 -z-10 right-0  "
          src="/racingflag.svg"
        />
      )}

      {id === "racing" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] bottom-0 -z-10 left-0 "
          src="/racetrack.svg"
        />
      )}

      {id === "equity-stocks" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0 -z-10 right-0 "
          src="/candlestick.svg"
        />
      )}

      {id === "equity-stocks" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-20  -z-10 left-0 "
          src="/bull 1_adobe_express 1.png"
        />
      )}

      {id === "commodity-trading" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0  -z-10 right-0 "
          src="/ricee.svg"
        />
      )}

      {id === "commodity-trading" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-20  -z-10 left-0 "
          src="/ingots 1.svg"
        />
      )}

      {id === "forex" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0 -z-10 right-0 "
          src="/material-symbols_currency-rupee.svg"
        />
      )}

      {id === "forex" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-20  -z-10 left-0 "
          src="/material-symbols_currency-yen.svg"
        />
      )}

      {id === "crypto-trading" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0  -z-10 right-0 "
          src="/bitcoin.svg"
        />
      )}

      {id === "crypto-trading" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-20  -z-10 left-0 "
          src="/cryptocurrency.svg"
        />
      )}

      {id === "kickboxing" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0  -z-10 right-0 "
          src="/boxing-gloves-right.svg"
        />
      )}

      {id === "kickboxing" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-20  -z-10 left-0 "
          src="/boxing-glovesleft.svg"
        />
      )}

      {(id === "baseball" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0 -z-10 right-0 "
          src="/cricketball.svg"
        />
      )) ||
        (id === "basket" && (
          <img
            className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0 -z-10 right-0 "
            src="/cricketball.svg"
          />
        )) ||
        (id === "kabbadi" && (
          <img
            className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0 -z-10 right-0 "
            src="/cricketball.svg"
          />
        ))}

      {(id === "baseball" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-24 -z-10 left-0 "
          src="/rugb.svg"
        />
      )) ||
        (id === "basket" && (
          <img
            className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-24 -z-10 left-0 "
            src="/rugb.svg"
          />
        )) ||
        (id === "kabbadi" && (
          <img
            className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-24 -z-10 left-0 "
            src="/rugb.svg"
          />
        ))}

      {(id === "football" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0 -z-10 right-0 "
          src="/footballright.svg"
        />
      )) ||
        (id === "soccer" && (
          <img
            className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0 -z-10 right-0 "
            src="/footballright.svg"
          />
        ))}

      {(id === "football" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-20 -z-10 left-0 "
          src="/football.svg"
        />
      )) ||
        (id === "soccer" && (
          <img
            className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-20 -z-10 left-0 "
            src="/football.svg"
          />
        ))}

      {id === "cricket" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -top-20 sm:top-0 -z-10 right-0 "
          src="/cricketball.svg"
        />
      )}

      {id === "cricket" && (
        <img
          className="absolute h-[75px] w-[75px] lg:h-[140px] lg:w-[140px] -bottom-20 -z-10 left-0 "
          src="/cricketballleft.svg"
        />
      )}

      <h1 className="text-[20px] md:text-[24px] lg:text-[40px] font-[700] text-center text-[#0169B6] mb-4 mx-5 ">
        Play {title} and
        <span className="text-[#00A547]"> win real cash!</span>
      </h1>

      <div className="bg-[#00A547]  my-4  p-2 flex justify-around text-white rounded-md">
        <h1 className="mx-1">Win 11</h1>
        <h1 className="mx-1">{">"}</h1>
        <h1 className="mx-1">{pageName}</h1>
      </div>
      <div className="w-[100%] xl:w-full  sm:hidden xl:block">
        <div
          className={`flex flex-col justify-center   md:px-[40px] items-center px-[22px] sm:grid sm:justify-center  sm:grid-cols-2 xl:grid-cols-4  xl:px-[40px] sm:gap-5 justify-items-center  mt-10 sm:mt-20 sm:mb-16 lg:mt-11 lg:mb-[30px] ${
            id === "basket" && "xl:grid-cols-3"
          }`}
        >
          {cardsData.map((item) => (
            <PlayCard key={item?.id} id={item?.id} title={item?.title} />
          ))}
        </div>
      </div>

      <div className="w-full hidden sm:block xl:hidden  ">
        <div className="flex justify-start items-center w-full   ">
          <div className="flex justify-around items-center  ">
            {cardsData1.map((item) => (
              <PlayCard key={item?.id} id={item?.id} title={item?.title} />
            ))}
          </div>
        </div>
        <div className="flex justify-end  items-center w-full sm:mt-10 sm:mb-[40px]">
          <div className="flex justify-end items-center">
            {cardsData2.map((item) => (
              <PlayCard key={item?.id} id={item?.id} title={item?.title} />
            ))}
          </div>
        </div>
      </div>
      {/* <img
        className="absolute h-[75px] w-[75px] bottom-5   -z-10 left-0"
        src="/football.svg"
      /> */}
    </div>
  );
};

export default PlayFantasy;
