import React from "react";

const FantasyPointSystem = () => {
  return (
    <div className="flex flex-col justify-center items-center  p-5">
      <h1 className="text-[#0169B6] font-[700] text-[20px] lg:text-[40px] lg:mb-5">
        <span className="text-[#00A547]">Fantasy</span> Point System
      </h1>
      <p className="text-[#0B592A] font-[400] text-[16px] lg:mb-5">Attack</p>
      <div className="w-full flex justify-around items-center">
        <img
          className="h-[122px] w-[122px] hidden xl:block"
          src="/Group (3).png"
        />
        <table className="table w-[80%] rounded-2xl my-4 ">
          <tr>
            <td>Goal</td>
            <td>Score</td>
          </tr>
          <tr>
            <td>Scored by a striker</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Scored by a mid-fielder</td>
            <td>+50</td>
          </tr>
          <tr>
            <td>Scored by a goalkeeper or defender</td>
            <td>+60</td>
          </tr>
          <tr>
            <td>Assist</td>
            <td>+20</td>
          </tr>
          <tr>
            <td>Chance Created</td>
            <td>+3</td>
          </tr>
          <tr>
            <td>Shot on Target</td>
            <td>+6</td>
          </tr>
          <tr>
            <td>5 Passes Completed</td>
            <td>+1</td>
          </tr>
        </table>
        <img
          className="h-[122px] w-[122px] hidden xl:block"
          src="/Group (3).png"
        />
      </div>

      <ul className="list-disc px-5 sm:px-10 text-[16px] font-[400] text-[#0B592A] text-start xl:px-[150px] lg:mt-10">
        <li className="my-3">
          The phrase "direct assist" refers to the final touch, cross, pass, and
          other touches that enable a goal to be scored during a game.
        </li>
        <li className="my-3">
          Here is a list of the additional fantasy football assist categories,
          in addition to direct assists:
        </li>
        <li className="my-3">
          When a defender blocks a shot that the goalkeeper saves, the ball
          strikes the goalpost.
        </li>
        <li className="my-3">
          if a pass, shot, or cross from a member of the opposing team results
          in an own goal.
        </li>
        <li className="my-3">
          if the athlete is awarded a direct free-kick or a penalty
        </li>
        <li className="my-3">
          The final touch is considered to be the chance that was created, also
          known as the "key pass" (cross, pass, or other touch). It results in a
          shot, whether it hits the intended target or not.
        </li>
        <li className="my-3">
          The final touch is considered to be the chance that was created, also
          known as the "key pass" (cross, pass, or other touch). It results in a
          shot, whether it hits the intended target or not.
        </li>
      </ul>
      <p className="text-[#0B592A] font-[400] text-[16px] lg:mt-10 lg:mb-5">
        Defence
      </p>

      <table className="table w-[80%] rounded-2xl my-4">
        <tr>
          <td>Tackle won</td>
          <td></td>
        </tr>
        <tr>
          <td>Interception Won</td>
          <td>+4</td>
        </tr>
        <tr>
          <td>Saves (GK)</td>
          <td>+6</td>
        </tr>
        <tr>
          <td>Penalty Saved (GK)</td>
          <td>+50</td>
        </tr>
        <tr>
          <td>Clean Sheet (GK/DEF played for +54 minutes)</td>
          <td>+20</td>
        </tr>
      </table>
      <ul className="list-disc px-5 sm:px-10  text-[16px] font-[400] text-[#0B592A] text-start lg:mt-10">
        <li className="my-3">
          A player has won a tackle when they take the ball away from another
          player who is in possession of it
        </li>
        <li className="my-3">
          To accomplish this, either move the ball out of play or prevent it
          from gaining possession.
        </li>
        <li className="my-3">
          An interception occurs when a player deliberately intercepts a pass.
          You can accomplish this by keeping possession of the ball while moving
          in lines with the intended ball.
        </li>
        <li className="my-3">
          A save occurs when a goalkeeper stops the ball from going in. A player
          is said to have a clean sheet if they go 54 minutes or longer without
          giving up a goal.
        </li>
        <li className="my-3">
          A player receives a Clean when they are replaced before giving up a
          goal after being down for at least 54 minutes.
        </li>
      </ul>
      <div className="w-full flex justify-around items-center  lg:mt-10">
        <img
          className="h-[122px] w-[122px] hidden xl:block"
          src="/Group (3).png"
        />

        <div className="text-center flex flex-col justify-start items-center ">
          <h1 className="text-[#0B592A] font-[400] text-[16px]">Defence</h1>

          <table className="table w-[80%] rounded-2xl my-4">
            <tr>
              <td>Captain</td>
              <td>2X</td>
            </tr>
            <tr>
              <td>Vice-captain</td>
              <td>1.5X</td>
            </tr>
            <tr>
              <td>In starting 11</td>
              <td>+4</td>
            </tr>
            <tr>
              <td>Coming as Substitute</td>
              <td>+2</td>
            </tr>
          </table>

          <h1 className="text-[#0B592A] font-[400] text-[16px] lg:mt-10 lg:mb-5">
            Cards along with other penalties
          </h1>

          <table className="table w-[80%] rounded-2xl my-4">
            <tr>
              <td>Yellow card</td>
              <td>-4</td>
            </tr>
            <tr>
              <td>Red card</td>
              <td>-10</td>
            </tr>
            <tr>
              <td>Own goal</td>
              <td>-8</td>
            </tr>
            <tr>
              <td>
                Goals conceded (GK/DEF on the field when the goal is scored)
              </td>
              <td>-2</td>
            </tr>
            <tr>
              <td>Penalty missed</td>
              <td>-20</td>
            </tr>
          </table>
        </div>
        <img
          className="h-[122px] w-[122px] hidden xl:block"
          src="/Group (3).png"
        />
      </div>

      <ul className="list-disc px-5 sm:px-10   text-[16px] font-[400] text-[#0B592A] text-start xl:px-[150px] lg:mt-10">
        <li className="my-3">
          The goals allowed are determined for players who are on the field at
          the time of the goal, regardless of their overall playing time.
        </li>
        <li className="my-3">
          When a player is sent off, they always receive a penalty whenever
          their team scores, even if the goals come after they leave the field.
        </li>
        <li className="my-3">
          The player only receives negative points for the red card if they
          receive two consecutive yellow cards or even one straight red card.
        </li>
        <li className="my-3">
          Total Fantasy football points will be affected if a player receives a
          red or yellow card for any behaviour that occurs off the field if they
          have already participated in the game and were substituted or if they
          enter the game as a substitute after receiving a yellow card.\
        </li>
        <li className="my-3 ">
          Here is a list of recommendations for winning fantasy football games.
          Several club matches are regularly played prior to the start of any
          football tournament or season. You can select better players by
          keeping a close eye on these games. The bonus point system is the same
          across all fantasy sports websites. Choose players who can actually
          help your team score more points. Keep a close eye on each player's
          prior accomplishments. The Win11 app's comprehensive player statistics
          let you easily analyse every player. Planning is a key component of
          fantasy football. Continue strategizing and be prepared to switch
          players in the event of an injury or unexpected team change.
        </li>
        <li className="my-3">
          Here is a list of recommendations for winning fantasy football games.
          Several club matches are regularly played prior to the start of any
          football tournament or season. You can select better players by
          keeping a close eye on these games. The bonus point system is the same
          across all fantasy sports websites. Choose players who can actually
          help your team score more points. Keep a close eye on each player's
          prior accomplishments. The Win11 app's comprehensive player statistics
          let you easily analyse every player. Planning is a key component of
          fantasy football. Continue strategizing and be prepared to switch
          players in the event of an injury or unexpected team change.
        </li>
      </ul>
    </div>
  );
};

export default FantasyPointSystem;
