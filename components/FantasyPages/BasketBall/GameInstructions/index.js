import React from "react";

const GameInstructions = () => {
  return (
    <div className="text-center py-5  ">
      <h1 className="text-[24px] font-[700] text-[#00A547] px-[20px] md:px-[40px] lg:px-[176px] mb-4">
        Basketball Fantasy Game Instructions{" "}
        <span className=" text-[#0169B6]">for Win11</span>
      </h1>
      <div className="text-[16px] text-[#0B592A] font-[400]  flex flex-row justify-center items-center">
        <img
          className="h-[122px] w-[122px] hidden xl:block mx-[30px]"
          src="/Group (3).png"
        />
        <div className="px-[20px] md:px-[40px] lg:px-[176px]">
          <p className="my-3 ">
            Match Selection & Registration: To begin, choose the game you want
            to play, then go to the page where you can create your own Fantasy
            Basketball team.
          </p>
          <p className="my-3 ">
            Choose your players wisely, as you only have 100 credits to choose
            from among the Point Guards, Shooting Guards, Small Forwards, Power
            Forwards, and Centers. After selecting your fantasy basketball
            team's star player, proceed with registration.
          </p>
          <p className="my-3 ">
            Contest Entry: You can enter the contest of your choice as soon as
            you create and save your team. Each competition has a different
            entry fee and prize pool.
          </p>
          <p className="my-3 ">
            Every fantasy game has a set of established guidelines for choosing
            teams. Every player has a credit point total, which is deducted from
            your total credit limit (100 credits) when you use them.
          </p>
          <p className="my-3 ">
            Your fantasy basketball team must have eight players on it.
          </p>
          <p className="my-3 ">
            The following guidelines must be followed when choosing team
            members:
          </p>
          <p className="my-3 ">
            Point-Guard : 1 to 4 players <br /> Shooting Guard : 1 to 4 players
            <br /> Small-forward : 1 to 4 players <br />
            Power Forward : 1 to 4 players
            <br /> Centre : 1 to 4 players
          </p>
          <p className="my-3 ">
            Basketball Fantasy Point SystemYour Fantasy Basketball score is
            entirely based on how well your selected players perform live on the
            court. Consequently, you will probably score fewer points than other
            competitors whose players are performing better if your player does
            not perform well on the field.
          </p>
          <p className="my-3 ">
            Your team's points are determined using the following criteria:
          </p>
          <p className="my-3 ">
            Points Scored <br />1 points : Rebounds
            <br /> 1.2 points : Assists
            <br /> 1.5 points : Steals
            <br /> 3 points : Blocks <br />3 points : Turn over <br />1 points :
            Other Crucial Guidelines
          </p>
          <p className="my-3 ">
            For his efforts, the Star Player will score twice as many fantasy
            points. Any event that occurs in overtime will be taken into account
            for calculating fantasy points. If you play at least 55 minutes and
            don't allow a goal while you're on the field, you get a clean sheet.
            If a real-life player is traded or transferred during the time
            between scheduled updates, the roster of players won't reflect the
            change until the following scheduled update. Please be aware that
            even though the transferred player will be listed on the roster of
            the transferor team for a contest during the interim period, no
            points will be awarded to him or her during that contest.
          </p>
        </div>
        <img
          className="h-[122px] w-[122px] hidden xl:block mx-[30px]"
          src="/Group (3).png"
        />
      </div>
    </div>
  );
};

export default GameInstructions;
