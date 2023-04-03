import React from "react";

import { steps } from "@/components/GetApp/InstallSteps";
import InstallCard from "@/components/GetApp/InstallSteps/InstallCard";
import { AiOutlineRight } from "react-icons/ai";

const AppInstallSteps = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <img
        className="h-[60px]  w-[60px] lg:h-[131px]  lg:w-[131px] absolute -top-16 right-0"
        src="/cricketball.svg"
      />
      <div className="bg-gradient-to-r from-[#00A547] to-[#006A32] relative mb-9 p-2 flex justify-around items-center text-white rounded-2xl ">
        <h1 className="mx-1">Win 11</h1>
        <AiOutlineRight />
        {/* <h1 className="mx-1">{">"}</h1> */}
        <h1 className="mx-1">Fantasy Cricket</h1>
        <AiOutlineRight />
        {/* <h1 className="mx-1">{">"}</h1> */}
        <h1 className="mx-1">App Download</h1>
      </div>

      <div className=" grid grid-cols-1 my-6  px-4 gap-14 sm:grid-cols-2 justify-items-center  ">
        {steps.map((item) => (
          <InstallCard
            id={item.id}
            name="cricketApp"
            key={item.id}
            description={item.description}
            imgUrl={item.imgUrl}
            numImage={item.numImage}
          />
        ))}
      </div>

      <img
        className="h-[60px]  w-[60px] lg:h-[131px]  lg:w-[131px] -z-10  bottom-52 absolute  left-0"
        src="/basketballleft.svg"
      />

      <div className="text-center bg-gradient-to-b  from-[#00A547] to-[#006A32]  mb-9  flex justify-around text-white  mx-4 ">
        <h1 className="p-3">
          Note: The Win11 app is available for download from the iOS App Store.
          If you use an Android phone or tablet, you must download the Win11
          Android app from the Win11 official website because cash games are not
          permitted on the Play Store.
        </h1>
      </div>
    </div>
  );
};

export default AppInstallSteps;
