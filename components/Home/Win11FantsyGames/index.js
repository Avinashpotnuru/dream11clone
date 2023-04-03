import React from "react";
import GameCard from "./GameCard";

const fantasyGames = [
  {
    id: 1,
    name: "Cricket  League",
    image: "/Rectangle 2087.jpg",
    link: "/cricket",
  },
  {
    id: 2,
    name: "Football League",
    image: "/football (2).png",
    link: "/football",
  },
  { id: 3, name: "Kabaddi League", image: "/kabbadhi.png", link: "/kabbadi" },
  { id: 4, name: "Basketball", image: "/basket.png", link: "/basket" },
  {
    id: 5,
    name: "Baseball League",
    image: "/baseball (2).png",
    link: "/baseball",
  },
  { id: 6, name: "soccer", image: "/soccer.png", link: "/soccer" },
];

const Exclusive = [
  { id: 1, name: "Formula 1 Racing", image: "/racing.png", link: "/racing" },
  { id: 2, name: "Kickboxing", image: "/boxing (2).png", link: "/kickboxing" },
];

const TradePrediction = [
  {
    id: 1,
    name: "Crypto Trading",
    image: "/crypto.png",
    link: "/crypto-trading",
  },
  {
    id: 2,
    name: "Equity Stocks ",
    image: "/equality.png",
    link: "/equity-stocks",
  },
  {
    id: 3,
    name: "Commodity",
    image: "/commodity.png",
    link: "/commodity-trading",
  },
  { id: 4, name: "Forex", image: "/forex (2).png", link: "/forex" },
];

const Win11FantasyGames = () => {
  return (
    <div className=" w-[100%]  flex flex-col justify-center  items-center my-7 ">
      <h1 className="text-[24px]  md:text-[40px] font-[700] text-[#00A547] mt-[90px]">
        Win11 Fantasy Games
      </h1>
      <div className="  flex flex-col justify-center items-center  w-[100%]">
        <h1 className="text-[18px] md:text-[24px] font-[700] text-[#00A547] my-3">
          Fantasy Games
        </h1>

        <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-3 w-[100%]  ">
          {fantasyGames.map((item) => (
            <GameCard key={item?.id} fantasyGames={item} />
          ))}
        </div>
        <h1 className="text-[18px] md:text-[24px] font-[700] text-[#00A547] my-3">
          Exclusive
        </h1>

        <div className="flex flex-col justify-center md:flex-row  items-center  w-[100%] relative ">
          <img
            src="/basketball.svg "
            className="absolute  h-[80px] w-[80px] lg:h-[200px] lg:w-[200px] top-0 -z-10 right-0"
          />

          {Exclusive.map((item) => (
            <GameCard key={item?.id} fantasyGames={item} />
          ))}
        </div>

        <h1 className="text-[18px] md:text-[24px] font-[700] text-[#00A547] my-3">
          Trade Prediction
        </h1>

        {/* sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-3 */}

        {/* sm:flex-row md:justify-around flex-wrap */}

        <div className="flex flex-col justify-center  items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-3  w-[100%] relative  ">
          {TradePrediction.map((item) => (
            <GameCard key={item?.id} fantasyGames={item} title={"Trade"} />
          ))}
          <img
            src="/rugb.svg "
            className="absolute  h-[80px] w-[80px] lg:h-[200px] lg:w-[200px]  bottom-0 -z-10 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Win11FantasyGames;
