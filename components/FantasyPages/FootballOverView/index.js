import React from "react";
import Business from "./Business";
import FantasyPointSystem from "./FantasyPointSystem";
import FootBallRules from "./FootBallRules";

const FootballOverView = () => {
  return (
    // <div
    //   className="bg-[url('/business.svg')] bg-blue-500 p-5 sm:bg-[url('/businessDes.svg')] bg-contain w-full text-center "
    //   // style={{ backgroundPosition: "center top" }}
    // >
    <div className=" relative bg-[url('/footballoverviewmob.svg')] w-full sm:bg-[url('/footballoverviewtab.svg')] min-h-[100vh] sm:h-[4200px] lg:sm:h-[4500px] xl:sm:h-[4200px] flex flex-col justify-center items-center bg-cover   text-center px-3 py-10 ">
      <div className="sm:mt-10 ">
        <Business />
        <FootBallRules />
        <FantasyPointSystem />
      </div>
    </div>
  );
};

export default FootballOverView;
