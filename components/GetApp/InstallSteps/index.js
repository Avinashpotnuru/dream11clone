import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import InstallCard from "./InstallCard";

export const steps = [
  {
    id: "1",
    description: "Tap ‘Ok’ to download the Win11 Fantasy Cricket App",
    imgUrl: "/win.png",
    numImage: "/1.png",
  },
  {
    id: "2",
    description:
      "Tap on ‘Open’ to start downloading the Win11 Cricket Fantasy App",
    imgUrl: "/win.png",

    numImage: "/2.png",
  },
  {
    id: "3",
    description: "Allow and install the Win11 Fantasy Cricket App",
    imgUrl: "/unknown.png",
    numImage: "/3.png",
  },
];

const InstallSteps = () => {
  return (
    <div className="flex flex-col justify-center items-center relative ">
      <img
        className="h-[75px] w[75px] lg:h-[140px] lg:w-[140px] top-12 absolute right-0"
        src="/cricketball.svg"
      />
      <h1 className="text-[20px] text-center px-5 sm:px-10  my-[24px] font-[700] text-[#0169B6]">
        Follow these steps to install the{" "}
        <span className=" text-[#00A547]">Win 11 Android App</span>
      </h1>

      <div className=" py-2  bg-gradient-to-r from-[#00A547] to-[#006A32] my-6 p-2 flex justify-around text-white rounded-md w-[80%] sm:w-[400px] ">
        <h1 className="mx-1 text-[14px] font-[600] text-[white]">Win 11</h1>

        <AiOutlineRight />
        <h1 className="mx-1 text-[14px] font-[600] text-[white]  ">
          Get the App
        </h1>
      </div>
      <div className=" py-10 flex flex-col justify-center items-center  w-full ">
        <img
          className="h-[75px] w[75px] lg:h-[140px] lg:w-[140px] translate-y-60  md:translate-y-80 absolute left-0"
          src="/basketballleft.svg"
        />
        {/* 
px-4 md:w-[90%] flex flex-col md:flex-row  justify-around items-center */}

        <img
          className="h-[75px] w[75px] lg:h-[140px] lg:w-[140px]  absolute bottom-0 lg:-bottom-24 right-0"
          src="/rugbright.svg"
        />

        <div className=" flex flex-col justify-center items-center mx-auto sm:grid sm:grid-cols-2 justify-items-center gap-9 ">
          {steps.map((item) => (
            <InstallCard
              key={item.id}
              description={item.description}
              imgUrl={item.imgUrl}
              numImage={item.numImage}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallSteps;
