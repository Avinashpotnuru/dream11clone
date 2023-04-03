import React from "react";

const AboutCricketApp = () => {
  return (
    <div className=" flex flex-col text-center justify-center items-center px-5 sm:px-10 lg:px-[150px] mb-[60px] relative">
      <img
        src="/footballright.svg"
        className="absolute bottom-0  right-0 lg:h-[120px] lg:w-[120px] "
      />

      <h1 className="text-[24px] lg:text-[40px] font-[700] text-[#0169B6] my-4">
        About the Win11{" "}
        <span className="  text-[#00A547] ">Fantasy Cricket App</span>
      </h1>

      <h1 className="text-[16px]  font-[400] text-[#0B592A] my-3">
        Step into the exciting realm of Fantasy sports, online sports games that
        emphasises strategy and allow you to construct a virtual team of real
        players competing in real matches. Construct a squad whose overall
        performance in a real game will earn you points.
      </h1>
      <h1 className="text-[16px] font-[400] text-[#0B592A] my-3">
        Players at Win11 gaming are rewarded for their efforts based on how you
        perform in an actual sporting event. As a result, the ability to grasp
        and track player performances and determine a team combination that
        would perform as the winning one is crucial. Our games are tailor-made
        for real-life Indian sports fans and provide a reasonably safe and
        secure platform for them to experience joy and test their knowledge and
        talents against other sports fans while still getting the thrill of
        experiencing actual sporting events firsthand in real life.
      </h1>
      <h1 className="text-[16px] font-[400] text-[#0B592A] my-3">
        We are dedicated to providing every sports enthusiast with the best
        fantasy sports experience possible. Our goal is to make sports more
        exciting. We host multiple cricket, football, kabaddi, and formula one
        leagues.
      </h1>
    </div>
  );
};

export default AboutCricketApp;
