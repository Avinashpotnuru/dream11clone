import React from "react";

const HowDoUse = () => {
  return (
    <div className=" relative">
      <div className="flex flex-col justify-center items-center p-4 my-4">
        <img
          src="/football.svg "
          className="absolute left-0 h-[80px] w-[80px] lg:h-[120px] lg:w-[120px] -z-10"
        />
        <h1 className="text-[20px] lg:text-[40px] text-center font-[700] text-[#0169B6] lg:mb-5 px-5 sm:px-10 lg:px-[120px]  my-3">
          <span className="text-[#00A547]">How do I use the</span> Win11 app to
          play fantasy football?
        </h1>
        <p className="text-[16px] font-[400] text-[#0B592A]  text-center mx-5 md:mx-10 lg:mx-[150px]">
          Do not worry if you are new to the world of fantasy sports; we have
          your back! Play fantasy football by doing the following four easy
          things:
        </p>
        <ul className="text-[16px] font-[400] text-[#0B592A] list-disc text-start py-4  mx-5 sm:mx-10 lg:mx-[120px] ">
          <li className="my-2  mx-5 sm:mx-10 lg:mx-[120px]">
            Use this link to download the Win11 application.
          </li>
          <li className="my-2  mx-5 sm:mx-10 lg:mx-[120px]  ">
            Utilize your phone number to sign up
          </li>
          <li className="my-2  mx-5 sm:mx-10 lg:mx-[120px] ">
            Choose the competition or game in which you're interested and begin
            assembling your team.
          </li>
          <li className="my-2  mx-5 sm:mx-10 lg:mx-[120px] ">
            Take part in competitions
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center py-4 my-4 relative">
        <img
          src="/footballright.svg "
          className="absolute right-0 h-[80px] w-[80px] lg:h-[120px] lg:w-[120px] -z-10"
        />
        <h1 className="text-[20px] lg:text-[40px] font-[700] text-center text-[#0169B6] px-5 sm:px-10 lg:px-[120px] my-3">
          A Free <span className="text-[#00A547] ">Fantasy Football </span>game
          world would be Nice
        </h1>
        <h1 className="text-[16px] px-5 sm:px-10 lg:px-[120px] font-[400] text-[#0B592A] my-3 xl:px-[150px]">
          Participate in practise competitions and play for fun. The best part
          is that you can compete against football fantasy league participants!
          You can sharpen your skills by competing in a variety of regional,
          national, and international football competitions on Win11. To put
          together the best team and win games, you must have a basic knowledge
          of football, the rules, and develop your research abilities. Match
          analysis and player statistics are made simpler in Win11 to assist you
          in defeating other players.
        </h1>
      </div>
    </div>
  );
};

export default HowDoUse;
