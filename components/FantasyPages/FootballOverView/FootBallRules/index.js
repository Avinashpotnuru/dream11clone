import React from "react";

const FootBallRules = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-[100%]">
      <h1 className="text-[20px] lg:text-[40px] px-5 sm:px-10 font-[700] text-[#0169B6] my-3 lg:my-10">
        Whenever it comes to{" "}
        <span className="text-[#00A547]">Fantasy Football</span>, You must
        follow the rules
      </h1>
      <h1 className="text-[16px] font-[400] px-5 sm:px-10 text-[#0B592A] xl:px-[125px] lg:pb-5">
        Some guidelines for playing fantasy football are listed below:
        assembling your crew Win11's football teams all have 11 players on them.
        A maximum of 7 players from any one team may make up the remaining 11
        players. Combination of players There are a variety of combinations that
        can be used in the Win11 fantasy football teams, provided they fall
        within the credit limit of 100 and meet the eligibility requirements.
      </h1>
      <table className="table w-[80%] rounded-2xl my-4">
        <tr>
          <td>Player Type</td>
          <td>Min</td>
          <td>Max</td>
        </tr>
        <tr>
          <td>Defender</td>
          <td>3</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Goalkeeper</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Forward</td>
          <td>1</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Midfielder</td>
          <td>1</td>
          <td>3</td>
        </tr>
      </table>

      <h1 className="text-[16px] font-[400] px-5 sm:px-10 text-[#0B592A] xl:px-[125px] lg:mt-6 lg:mb-[60px]">
        It's time to choose the captain and vice-captain after you've chosen the
        team's eleven players. You receive 1.5 times as many points from the
        vice captain as from the captain. Therefore, selecting the most seasoned
        player as the captain and vice-captain is crucial because their choice
        can affect the outcome.
      </h1>
    </div>
  );
};

export default FootBallRules;
