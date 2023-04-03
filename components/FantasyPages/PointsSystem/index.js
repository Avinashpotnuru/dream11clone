import React from "react";
import PointsCard from "./PointsCard";

import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  750: { items: 2 },
  1024: { items: 3 },
};

const componentResponsive = {
  0: { items: 1 },
  550: { items: 2 },
  1024: { items: 4 },
};

const pointsData1 = [
  {
    id: "1",
    description:
      "Choose the match of your choice: Once you have reached the main page, you will have the option to select a match from among the many upcoming matches.",
  },
  {
    id: "2",
    description:
      "Choose a participant: You have a credit of 100 and can choose players from either of the two teams. Keep in mind that you should make the most of your abilities in this situation!",
  },
  {
    id: "3",
    description:
      "Choose a captain and a vice captain for your team: Determine who will lead your fantasy cricket team as captain and vice captain.",
  },
  {
    id: "4",
    description:
      "Participate in the contests up until the match's cutoff time, Roundlock, or the actual match start time, whichever comes first.",
  },
  {
    id: "5",
    description:
      "Follow the progress of the team: Watch the game LIVE to follow a player's development.",
  },
  {
    id: "6",
    description:
      "Follow your position on the leaderboard for the contest: You compete and earn points (Fantasy Points System) based on how well you perform in real life.",
  },
];

const pointsData2 = [
  {
    id: "1",
    description:
      "Choose the match of your choice: Once you have reached the main page, you will have the option to select a match from among the many upcoming matches.",
  },
  {
    id: "5",
    description:
      "Choose a participant: You have a credit of 100 and can choose players from either of the two teams. Keep in mind that you should make the most of your abilities in this situation!",
  },
  {
    id: "2",
    description:
      "Choose a captain and a vice captain for your team: Determine who will lead your fantasy cricket team as captain and vice captain.",
  },
  {
    id: "6",
    description:
      "Participate in the contests up until the match's cutoff time, Roundlock, or the actual match start time, whichever comes first.",
  },
  {
    id: "3",
    description:
      "Follow the progress of the team: Watch the game LIVE to follow a player's development.",
  },
  {
    id: "7",
    description:
      "Follow your position on the leaderboard for the contest: You compete and earn points (Fantasy Points System) based on how well you perform in real life.",
  },
  {
    id: "4",
    description:
      "Follow the progress of the team: Watch the game LIVE to follow a player's development.",
  },
  {
    id: "8",
    description:
      "Follow your position on the leaderboard for the contest: You compete and earn points (Fantasy Points System) based on how well you perform in real life.",
  },
];

const PointsSystem = () => {
  return (
    <div
      // style={{ backgroundPosition: "center top" }}
      className="bg-[url('/pointssystemmob.svg')] lg:bg-[url('/pointsbg.svg')] bg-cover py-4  xl:h-[1600px] w-[100%] flex flex-col text-center  "
    >
      <div className="w-full lg:my-auto">
        <div className="my-4 md:mx-32 mx-5 bg-gradient-to-b from-[#00A547] to-[#006A32] p-3 flex justify-center items-center mb-5 lg:mb-9">
          <h1 className="text-[#FFFFFF] text-[14px] font-[600] text-center">
            Click For Win 11 Fantasy Cricket Points System
          </h1>
        </div>
        <h1 className="text-[#0169B6] text-[20px] px-5 font-[700] my-4 ">
          A Quick Start Guide to the Fantasy Cricket App -{" "}
          <span className="text-[#00A547]"> Totally Safe and Fun!</span>
        </h1>
        <p className="text-[#333333] text-[16px] font-[600] my-3 px-5 ">
          Log on to the{" "}
          <span className="text-[18px]  underline">Win11 fantasy app</span>, and
          follow the below-given steps to participate in this game of thrill and
          skill!
        </p>

        <div className="flex mx-auto my-6  h-auto w-[100%] justify-evenly items-center  lg:hidden     ">
          <div className="w-full  py-5 ">
            <AliceCarousel
              mouseTracking
              responsive={componentResponsive}
              disableDotsControls={true}
              disableButtonsControls={true}
              items={pointsData1.map((item) => (
                <PointsCard
                  key={item?.id}
                  id={item?.id}
                  description={item?.description}
                />
              ))}
            ></AliceCarousel>
          </div>
        </div>

        <div className="hidden lg:flex my-3  justify-center items-center xl:hidden    ">
          <div className="flex justify-center   items-center md:grid md:grid-cols-3  py-4 px-6 gap-5 lg:gap-10">
            {pointsData1.map((item) => (
              <PointsCard
                key={item?.id}
                id={item?.id}
                description={item?.description}
              />
            ))}
          </div>
        </div>

        <div className="xl:flex my-3  justify-center items-center hidden    ">
          <div className="flex justify-center   items-center lg:grid lg:grid-cols-2 lg:gap-x-[245px] py-4 px-6 gap-5 lg:gap-10">
            {pointsData2.map((item) => (
              <PointsCard
                key={item?.id}
                id={item?.id}
                description={item?.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsSystem;
