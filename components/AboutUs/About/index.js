import React from "react";

const About = () => {
  return (
    <div className=" relative w-full">
      <div className="text-center hidden lg:block  lg:px-[154px] relative  ">
        <div className="absolute right-0 -z-20   ">
          <img
            className="h-[80px] w-[80px] lg:h-[240px] lg:w-[240px] "
            src="/basketball.svg"
          />
        </div>

        <h1 className="text-[24px] font-[700] lg:text-[40px] mt-[44px] mb-[16px] md:mt-[115px]  md:font-[700] text-[#0169B6]">
          About
        </h1>
        <p className=" md:text-[30px] md:font-[700] mt-9 mb-6">
          <span className=" text-[#0169B6]">We are </span>
          <span className=" text-[#00A547]">on Win 11</span>
        </p>
        <p className="text-[24px] my-4 font-[700] text-[#333333]">
          A Destination for gamers and winners!
        </p>
        <p className="text-[16px] font-[400] my-4 text-[#003718]">
          From football and cricket to basketball to even financial markets.
          Choose from a wide variety of exciting, action-packed, sporty games
          and wager real money on the outcome.
        </p>
        <p className="text-[20px] font-[600] text-[#333333]">
          Creating a new world, A world where fans become players and players
          win!
        </p>
      </div>
      <img
        className="h-[80px] w-[80px] lg:h-[180px] lg:w-[180px] lg:hidden absolute right-0 lg:-right-24 -z-10"
        src="/basketball.svg"
      />

      <div className="text-center lg:hidden  text-[16px] px-[24px] my-5 font-[400] text-[#003718]">
        <h1 className="text-[24px] mt-6 text-[#0169B6] font-[700] mb-6">
          ABOUT
        </h1>

        <p className="my-3">
          Step into the exciting realm of Fantasy sports, online sports games
          that emphasises strategy and allow you to construct a virtual team of
          real players competing in real matches. Construct a squad whose
          overall performance in a real game will earn you points.
        </p>
        <p className="my-2">
          <span className="text-[20px] lg:text-[24px]">
            Players at Win11 gaming are
          </span>{" "}
          rewarded for their efforts based on how you perform in an actual
          sporting event. As a result, the ability to grasp and track player
          performances and determine a team combination that would perform as
          the winning one is crucial. Our games are tailor-made for real-life
          Indian sports fans and provide a reasonably safe and secure platform
          for them to experience joy and test their knowledge and talents
          against other sports fans while still getting the thrill of
          experiencing actual sporting events firsthand in real life.
        </p>
        {/* <img
          className="h-[95px] w-[95px] absolute right-0 -z-10"
          src="/football.svg"
        /> */}
        <p className="my-3">
          We are dedicated to providing every sports enthusiast with the best
          fantasy sports experience possible. Our goal is to make sports more
          exciting. We host multiple cricket, football, kabaddi, and formula one
          leagues.
        </p>
      </div>
      <div className="w-full py-6">
        <div className="grid grid-cols-1 md:grid-cols-2  my-9 mb-3">
          <div className="flex flex-col w-[100%] order-2 sm:order-1 p-2 justify-center gap-4 items-center sm:flex-row  ">
            <div className="">
              <h1 className="self-start mx-6 md:mx-[28px] sm:mx-[63px] text-[16px] sm:text-[24px] font-[700] text-[#0B592A]">
                “ OUR VISION
              </h1>

              <div className="text-center md:mx-[44px]">
                <h1 className="text-[24px] md:text-[30px] my-5  font-[700] text-[#0169B6]">
                  Become the premier fantasy <br />{" "}
                  <span className="text-[#00A547]">SPORTS</span> platform.
                </h1>

                <p className="text-[16px] px-[24px] text-start font-[400] text-[#000000]">
                  “We are proud to continually serve our growing community of
                  avid sports fans with the latest innovative offerings and
                  contribute to the overall expansion of the Indian sports
                  ecosystem”- Harsh Jain, CEO & Co Founder, Dream Sports
                </p>
                <img
                  className="h-[80px] w-[80px] lg:h-[240px] lg:w-[240px]  absolute left-0 lg:-left-24 -z-10"
                  src="/rugb.svg"
                />
              </div>
            </div>
          </div>
          <div className=" hidden  md:flex justify-center items-center w-[100%]  px-2 mx-2  order-1 sm:order-2    bg-[url('/about.svg')] bg-cover">
            <img className="mx-3  " src="/Group 42144.png" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2   mt-[40px]   mb-6">
          <div className="flex flex-col w-[100%] order-2 sm:order-1 p-2 justify-center gap-4 items-center sm:flex-row  ">
            <div className="">
              <h1 className="self-start mx-6 md:mx-[28px] sm:mx-[63px] text-[16px] sm:text-[24px] font-[700] text-[#0B592A]">
                “ OUR MISSION
              </h1>
              <div className="text-center md:mx-[44px] ">
                <h1 className="text-[24px] md:text-[30px] my-5 font-[700] text-[#0169B6]">
                  Team work makes the <br />{" "}
                  <span className="text-[#00A547]">Dream work</span>.
                </h1>
                <p className="text-[16px] text-start px-[24px] font-[400] text-[#000000]">
                  Deliver Best possible fantasy sports experience and Highly
                  personalism Win11 for the fans. Become nationally recognized
                  as standard in the esports industry. Be a platform where
                  people come to feel the thrill of winning
                </p>
              </div>
            </div>
          </div>
          <div className="hidden bg-re my-5 md:flex justify-center items-center w-[100%]  px-2 mx-2  order-1 sm:order-2    bg-[url('/about.svg')] bg-cover">
            <img className="px-2  " src="/Rectangle 2112.png" />
          </div>
        </div>
      </div>

      <img
        className="h-[95px] w-[95px] lg:h-[180px] lg:w-[180px] absolute right-0  -z-10"
        src="/footballright.svg"
      />

      <div className="text-center px-[24px]  mb-11  lg:mb-28 lg:px-[154px] ">
        <h1 className="text-[24px] lg:text-[40px] my-5 font-[700] text-[#00A547]">
          <span className="text-[#0169B6]">About</span> Fantasy games
        </h1>
        <p className="text-[16px] font-[400] text-[#003718]  my-2">
          Each Win11 game has levels to serve Beginner, Intermediate and
          advanced players. On completion of each milestone user can earn
          unlimited coins and power ups to keep enjoying the game
        </p>
        <p className="text-[16px] font-[400] text-[#003718]  my-2">
          With our always-on tournaments and one-on-one matches, we make sure
          users stay interests all along the gaming.
        </p>
        <p className="text-[16px] font-[400] text-[#003718]  my-2">
          You take part, compete, and earn rewards throughout the day. Winners
          of a tournaments can receive their winnings by Popular Wallets, UPI,
          or bank transfer following the announcement of the final standings.
        </p>
      </div>
    </div>
  );
};

export default About;
