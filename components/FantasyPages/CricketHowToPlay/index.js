import React from "react";

const CricketHowToPlay = () => {
  return (
    <div className="text-center my-4 py-4  md:mt-[70px]  ">
      <h1 className="text-[#0169B6] px-6 text-[20px] md:text-[24px] lg:text-[32px] font-[700] my-3 md:mb-[46px]">
        Know more on<span className="text-[#00A547]"> How to Play </span>for
        Other Fantasy Sports Games
      </h1>
      <h1 className="text-[#0169B6] text-[18px] lg:text-[24px] font-[600] my-5 px-5">
        Fantasy Cricket <span className="text-[#0B592A]">Points System</span>
      </h1>
      <p className="my-3 px-6 text-[#0B592A] text-[16px] font-[400]  mx-5 md:mx-10 lg:mx-[153px] ">
        The fantasy points are calculated slightly differently depending on the
        type of cricket being played. In T20 Internationals, for instance, a
        bowler receives an additional six points if their economy rate is lower
        than 5 runs per over. In contrast, there is no point system at all for
        the economy rate in the format of cricket known as the Test. In the same
        vein, if a batter is run out without scoring any runs during a test
        match, they will lose four points. On the other hand, you will lose two
        points if the same thing takes place in a T10 or T20 format. This page
        provides a comprehensive breakdown of the fantasy cricket point system.
      </p>
    </div>
  );
};

export default CricketHowToPlay;
