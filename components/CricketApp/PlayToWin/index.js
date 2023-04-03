import React from "react";

const prizeData = [
  { id: "1", title: "Check the players’ recent performances" },
  { id: "2", title: "Analyses the pitch and weather report" },
  {
    id: "3",
    title: "Select your wicketkeeper, batters,all-rounders and bowlers",
  },
  {
    id: "4",
    title:
      "Choose your Captain and Vice-captain based on which two players you think will perform the best",
  },
  {
    id: "5",
    title: "Follow the latest updates and lineup announcements about the teams",
  },
  { id: "6", title: "Play for free in practice contests on Win11 fantasy app" },
  {
    id: "7",
    title:
      "The more fantasy games or contests you play, the better is your probability of winning!",
  },
];

const PrizeCard = ({ title }) => {
  return (
    <div className="flex items-center my-2 ">
      <img className="mx-2" src="/Group 41836.png" />
      <h1 className="text-[16px] text-start font-[400] text-[#0169B6] my-3">
        {title}
      </h1>
    </div>
  );
};

const PlayToWin = () => {
  return (
    <>
      {/* <div className="relative mb-60 bg-red-600 h-[900px] xl:h-[800px]  bg-cover flex flex-col justify-center items-center ">
        <img
          className="h-[60px]  w-[60px] lg:h-[131px]  lg:w-[131px] -z-10 top-3  absolute  right-0"
          src="/footballright.svg"
        />
        <img
          src="/playtipsmob.svg"
          className="absolute  w-full h-full  top-0 left-0 bottom-0 right-0 sm:hidden"
        />
        <img
          src="/tips.svg"
          className="absolute w-full  top-0 left-0 bottom-0 right-0  hidden sm:block lg:hidden "
        />

        <img
          src="/playtowindes(2).svg"
          className="absolute   top-0 left-0 bottom-0 right-0 hidden lg:block "
        />

        <div className=" z-10 px-5   ">
          <h1 className="text-[20px] text-center font-[700] text-[#00A547] my-3">
            Play to Win Big!{" "}
            <span className="text-[#0169B6]">
              Fantasy Cricket Tips and Tricks
            </span>
          </h1>
          <p className="text-[16px] text-center font-[400] text-[#0B592A] my-3">
            Want to start playing fantasy cricket on the Win11 cricket fantasy
            app? Here are some essential and expert tips to increase your
            chances of winning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center my-4">
            <img
              className="h-[260px] w-[196px] order-1 sm:order-2 mx-4 lg:order-1"
              src="/prize.png "
            />

            <div className="order-2 sm:order-1 lg:order-2">
              {prizeData.map((item) => (
                <PrizeCard key={item?.id} title={item?.title} />
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className=" relative flex justify-center  items-center min-h-[900px] mb-16 my-24 sm:my-28 lg:my-32 ">
        <img
          src="/playtipsmob.svg"
          className="-z-10 absolute sm:hidden w-full"
        />
        <img
          src="/playtipstab.svg"
          className="-z-10 absolute hidden sm:block w-full"
        />
        <div className=" z-10 px-5   ">
          <h1 className="text-[20px] text-center font-[700] text-[#00A547] my-3">
            Play to Win Big!{" "}
            <span className="text-[#0169B6]">
              Fantasy Cricket Tips and Tricks
            </span>
          </h1>
          <p className="text-[16px] text-center font-[400] text-[#0B592A] my-3">
            Want to start playing fantasy cricket on the Win11 cricket fantasy
            app? Here are some essential and expert tips to increase your
            chances of winning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center my-4">
            <img
              className="h-[260px] w-[196px] order-1 sm:order-2 mx-4 lg:order-1"
              src="/prize.png "
            />

            <div className="order-2 sm:order-1 lg:order-2">
              {prizeData.map((item) => (
                <PrizeCard key={item?.id} title={item?.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayToWin;
