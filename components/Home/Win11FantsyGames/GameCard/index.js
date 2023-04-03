import Link from "next/link";
import React from "react";

const GameCard = (props) => {
  const { fantasyGames, title } = props;

  const { id, name, image, link } = fantasyGames;
  return (
    <div
      className={`${id % 2 === 1 ? "self-start" : "self-end"} ${
        title === "Trade" &&
        id === 4 &&
        "lg:self-center lg:justify-self-center lg:col-[1/4] "
      } `}
    >
      <div
        className={` h-[260px] w-[240px] my-4 mx-4   md:h-[400px] p-2 md:p-3 md:w-[330px] bg-[url('/gamebg.svg')] bg-cover flex flex-col justify-around items-center content-center  
  `}
      >
        <h1 className="text-[16px] font-[600] text-[#0169B6] mx-auto">
          {name}
        </h1>
        <img
          className="h-[80px] w-[80px] sm:h-[130px] sm:w-[130px]"
          src={image}
          alt="img"
        />
        <p className="text-[16px] font-[600] text-[#0169B6] mx-auto">
          <Link href={`${link}`}>view more</Link> {">"}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
