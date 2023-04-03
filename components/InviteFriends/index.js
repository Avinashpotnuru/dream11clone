import React from "react";

const InviteFriends = () => {
  return (
    <div className="px-5 py-8  w-[100%] pt-[28px] flex flex-col justify-center items-center ">
      <div className=" mt-8 md:mt-12">
        <h1 className="my-4 sm:mt-7 md:mt-[28px]  uppercase text-center mb-5 font-[700]  text-[#00A547] text-[18px] sm:text-[24px] ">
          Invite Friends
        </h1>
        <p className="my-4 md:pt-[68px] font-[400]  text-[#0B592A] text-[16px]  md:px-[40px] lg:mx-[200px] ">
          One of the best refer-and-earn apps in India, Win11, has made a name
          for itself in the world of fantasy sports. With the addition of
          Fantasy Kabaddi, Fantasy Football, Fantasy Baseball, and Fantasy
          Basketball, along with Trade Prediction, we are not just a
          revolutionary fantasy cricket app but have also evolved into India's
          premier fantasy sports destination.
        </p>
        <p className="my-4 lg:mx-[200px] font-[400] md:px-[40px] text-[#0B592A] text-[16px]  ">
          Win11's gaming format is the first and only one to offer multiple
          fantasy formats, including stock predictions.
        </p>
      </div>
      <div className="flex flex-col justify-start items-center relative   ">
        <h1 className="my-2  text-start font-[600] md:px-[40px]  text-[#00A547] text-[18px] md:text-[24px] ">
          Why participate in New Refer and Earn?
        </h1>
        <img
          className="absolute -z-10 bottom-0 h-[450px] w-[500px]  sm:hidden  "
          src="/MOB (1).svg"
        />
        <img
          className="absolute -z-10 bottom-0 w-[600px] h-[550px] hidden sm:block  "
          src="/Group 42504.svg"
        />
        {/* <img
          className="absolute -z-10 bottom-0 w-[600px] h-[550px] hidden lg:block "
          src="/dESK (2).svg"
        /> */}
        <p className="my-2  text-start font-[400] md:px-[40px]  text-[#0B592A] text-[16px] lg:mx-[200px] ">
          Allow us to explain why you must join the ground-breaking Refer & Earn
          by Win11: Earn money while your friends make their first deposit.
        </p>
        <p className="my-2   text-start  font-[400] md:px-[40px]  text-[#0B592A] text-[16px] lg:mx-[200px] ">
          Earn from as many recommendations as you like. You earn more money by
          referring more people.
        </p>
        <p className="my-2   text-start font-[400] md:px-[40px] text-[#0B592A] text-[16px] lg:mx-[200px] ">
          Get a second way to make money on the fantasy sports platform in
          addition to your normal fantasy practise.
        </p>
        <p className="my-2  text-start font-[400] md:px-[40px]  text-[#0B592A] text-[16px] lg:mx-[200px] ">
          {" "}
          Save money and make use of the extra cash you earn by joining more and
          more fantasy leagues on the Win11 platform.
        </p>
        <div className="flex justify-between items-center w-[100%]">
          <img
            className="h-[70px] w-[50px] md:h-[120px] lg:w-[84px] xl:h-[305px] xl:w-[215px] "
            src="/Guy with cape cheering.png"
          />
          {/* <img src="/Group 41760.png" /> */}
          <img
            className="h-[70px] w-[50px] md:h-[120px] lg:w-[84px] xl:h-[305px] xl:w-[215px] "
            src="/Guy with trumpet.png"
          />
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;
