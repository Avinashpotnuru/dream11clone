import React from "react";

import { stepsData } from "@/components/Home/3SimpleSteps";
import StepCard from "@/components/Home/3SimpleSteps/StepCard";
import OfferCard from "./OfferCard";

const offersData = [
  {
    id: "1",
    description: "Create a cricket fantasy team to play the game",
    imgUrl: "/warner.png",
  },
  {
    id: "2",
    description: "Create teams for the upcoming actual cricket matches.",
    imgUrl: "/25.png",
  },
  {
    id: "3",
    description: "Enter contests to win amazing prizes.",
    imgUrl: "/rohit.png",
  },
];

const BonusOffers = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-[24px] font-[700] text-[#0169B6] my-5 text-center">
        Play Fantasy Cricket Leagues - Enjoy Bonus Offers!
      </h1>
      <div className=" flex flex-col  md:flex-row justify-around items-center p-4 my-4 w-[100%]">
        {offersData.map((item) => (
          <OfferCard
            id={item.id}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
      <h1 className="text-[16px] font-[400] text-[#0B592A] my-4">
        Once you are, enter various cash contests to win real money!
      </h1>
      {/* bg-gradient-to-b from-[#0BAF59]/100 to-[#00A446]/100 p-3 */}

      <div className=" shadow-2xl rounded-md bg-gradient-to-r from-[#00A547]/100 via-[#00A547]/100 to-[#00A547]/100 bg-radial p-3  ">
        <h1 className="text-[16px] font-[600] text-white ">
          Know that the tTo know more about our Terms & Conditions on promotions
          and offers, visit hereeam names can only be changed once!
        </h1>
      </div>
    </div>
  );
};

export default BonusOffers;
