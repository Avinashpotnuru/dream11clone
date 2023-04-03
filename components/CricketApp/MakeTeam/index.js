import React from "react";

import { review } from "@/components/Home/ReviewsAndRating";

import AliceCarousel from "react-alice-carousel";
import ReviewCard from "@/components/Home/ReviewsAndRating/ReviewCard";
import PointsCard from "@/components/FantasyPages/PointsSystem/PointsCard";
import TeamCard from "./TeamCard";

const teamsData = [
  {
    id: "1",
    description:
      "To participate in fantasy cricket, the initial step is to formulate your own fantasy cricket team. The regulations for constructing a fantasy cricket team on win11 are comparable to that of the IPL auction. On win11, a user is provided with 100 credit points to create a team. Each player chosen has a specific credit score that can change based on their performance and reputation. The objective is to form a team with a good balance within the 100 credit points limit.",
  },
  {
    id: "2",
    description:
      "There must be 11 players on your cricket team when you create it on Win11. A maximum, of 7 players may be selected by any one team.Your team must meet the requirements listed below in order to be chosen as a team. You may not use more than 100 credits on your Win11 team.No of Players you can choose for the game is as below",
    children: [
      { id: 1, data: "Wicket-Keepers  (Min - 1, Max - 4)" },
      { id: 2, data: " Batsmen  (Min - 3, Max - 6)" },
      { id: 3, data: "  All-rounders (Min - 1, Max - 4)" },
      { id: 4, data: " Bowlers (Min - 3, Max - 6)" },
    ],
  },
  {
    id: "3",
    description:
      "You must choose a team captain and vice-captain once you have chosen your 11 players. You will receive twice (2X times) as many points from the captain as they did in the actual game. The vice-captain will award you 1.5 times as many points as they did in the actual game.",
  },
];

const responsive = {
  0: { items: 1 },
  650: { items: 2 },
  1024: { items: 3 },
};

const MakeTeam = () => {
  return (
    <div className=" bg-[url('/maketeam.svg')] md:bg-[url('/maketeamtab.svg')] lg:bg-[url('/maketeamdes.svg')] bg-cover py-5  h-[670px] lg:h-[820px] w-full  flex flex-col justify-center items-center">
      <h1 className="text-[22px] lg:text-[40px] lg:px-[220px] font-[400] text-center mt-3  text-[#0169B6] px-5 md:mt-14 lg:mt-6">
        How To Make Your Cricket Team on{" "}
        <span className="text-[#00A547]"> Win11 Fantasy Cricket App?</span>
      </h1>
      <div className="flex justify-center items-center my-6  h-[50vh] w-full    mx-auto ">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          disableDotsControls={true}
          disableButtonsControls={true}
          // autoHeight={true}
          items={teamsData.map((item) => (
            <TeamCard
              id={item?.id}
              key={item?.id}
              description={item?.description}
              children={item?.children}
            />
          ))}
        ></AliceCarousel>
      </div>
    </div>
  );
};

export default MakeTeam;
