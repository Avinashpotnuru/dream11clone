import React from "react";
import TipsCard from "./TipsCard";

const tipsData = [
  {
    id: "1",
    description: "Play only the games you are reasonably knowledgeable about.",
  },
  {
    id: "2",
    description:
      "Check the weather forecast, pitch report, probable 11 score, average score on the field, strike rates, economy rates, and other information prior to the game.",
  },
  {
    id: "3",
    description:
      "Read through any team-related news stories, such as player injuries or rest periods, that may have an effect on the teams' balance.",
  },
  {
    id: "4",
    description:
      "Read through any team-related news stories, such as player injuries or rest periods, that may have an effect on the teams' balance.",
  },
  {
    id: "5",
    description:
      "Since the spots fill up quickly, enter the mega contest as soon as it becomes available on the app (typically 48 hours before the game is played).",
  },
  {
    id: "6",
    description:
      "Explore the 'Winners' section of the Win11 app to learn about the types of teams that various winners are forming.",
  },
  {
    id: "7",
    description:
      "Despite being obvious, you should only choose players who are in the starting eleven.",
  },
  {
    id: "8",
    description:
      "Conduct a comprehensive analysis in accordance with your knowledge and abilities to make your Win11",
  },
  {
    id: "9",
    description: "Try to sign up with several teams.",
  },
  {
    id: "10",
    description:
      "When building your team, avoid using tutorials or other content from websites you can't trust. Utilize your understanding of cricket.",
  },
];

const Tips = () => {
  return (
    <div
      className="  md:bg-[url('/cricketdoanddonttab(2).svg')] lg:bg-[url('/cricketdoanddontdes(2).svg')] bg-cover flex md:pt-8 w-[100%] flex-col justify-center items-center px-[20px] lg:px-[40px] md:h-[1624px]  sm:py-10 "
      style={{ backgroundPosition: "top center" }}
    >
      <div className="py-5">
        <h1 className="text-[20px] md:text-[24px] lg:text-[40px] text-[#0169B6] text-center pb-4 font-[700]">
          Fantasy Cricket <span className="text-[#00A547]">Tips</span>
        </h1>
        <p className="text-center text-[16px] text-[#0B592A] font-[400] pb-3 ">
          This section will be divided into two sections: before the toss and
          after the toss.
        </p>
        <div className="flex  justify-around items-center">
          <img
            className=" h-[145px] w-[150px] xl:h-[250px] xl:w-[250px] hidden md:block "
            src="/CUPPPP.png"
          />
          <div>
            <h1 className="text-center  text-[16px] text-[#0B592A] font-[400]">
              Before the toss, you should do the following:
            </h1>
            <div className="">
              {tipsData.map((item) => (
                <TipsCard key={item?.id} description={item?.description} />
              ))}
            </div>
          </div>
          <img
            className="h-[145px] w-[150px] xl:h-[250px] xl:w-[250px] hidden md:block "
            src="/CUPPPP.png"
          />
        </div>
        <h1 className="text-center mx-3 text-[16px] text-[#0B592A] font-[600] md:px-[80px] ">
          You will learn more the more you play. You do gain a better
          understanding of the Fantasy cricket format as you play more. Visit
          Fantasy cricket tips if you're looking for more in-depth advice.
        </h1>
      </div>
    </div>
  );
};

export default Tips;
