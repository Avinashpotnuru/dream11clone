import ConditionsCard from "@/components/TermsAndConditions/CondtionsCard";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const faqRules = [
  {
    id: 1,
    title: "What is Fantasy Sports?",
    description:
      "A virtual team of real players that competes in live matches all over the world can be assembled in the strategy-based online sports game known as fantasy sports. Based on how well these players perform in actual matches, you can earn points and cash prizes.",
  },
  {
    id: 2,
    title: "Is it safe to add money to Win11?",
    description:
      "Your Win11 account can be funded easily and securely. We have a wide variety of payment options enabled.",
  },
  {
    id: 3,
    title: "How are Win11 points calculated??",
    description:
      "Win11 points system is calculated on the basis of the performance of the player in an actual match.",
  },
];

const FAQ = () => {
  const router = useRouter();

  const { id } = router.query;

  // console.log("iddddd===", id);

  return (
    <div className="p-2 lg:my-6 w-[100%] ">
      <div className=" ">
        <div
          className={`flex  justify-around items-center  p-2 w-full ${
            id === "cricket" && "hidden"
          } `}
        >
          <img
            className="h-[80px] w-[77px] hidden sm:block lg:hidden "
            src="/CUPPPP.png"
          />
          <h1
            className={`text-[#0169B6] text-[20px]  sm:text-[24px] lg:text-[40px] text-center font-[700] my-3 ${
              id === "cricket" && "hidden"
            }`}
          >
            Win 11 <span className="text-[#00A547]">FAQ</span>
          </h1>

          <img
            className="h-[80px] w-[77px] hidden sm:block lg:hidden"
            src="/CUPPPP.png"
          />
        </div>

        {id === "cricket" && (
          <div className="flex flex-col justify-center items-center">
            {id === "cricket" && (
              <div className="flex justify-around items-center w-full">
                <img
                  className="h-[36px] w-[36px]  sm:hidden "
                  src="/CUPPPP.png"
                />
                <h1 className=" text-[#0169B6] text-[20px] sm:text-[24px] lg:text-[40px] text-center font-[700] my-3">
                  Still have questions about online{" "}
                  <span className="text-[#00A547]">Fantasy Cricket?</span>
                </h1>
                <img
                  className="h-[36px] w-[36px] sm:hidden "
                  src="/CUPPPP.png"
                />
              </div>
            )}

            {id === "cricket" && (
              <h1 className=" text-[#0B592A] text-[16px] px-5  text-center font-[700] my-3">
                Tap on any section below for all the details you need to know to
                be a fantasy cricket expert.
              </h1>
            )}
          </div>
        )}

        <div className="lg:flex lg:justify-around lg:items-center ">
          <img
            className="h-[174px] w-[162px] hidden  lg:block "
            src="/CUPPPP.png"
          />
          <div className="px-4 sm:px-7 lg:w-[60%]">
            {faqRules.map((item) => (
              <ConditionsCard
                key={item?.id}
                title={item?.title}
                description={item?.description}
              />
            ))}
          </div>
          <img
            className="h-[174px] w-[162px] hidden  lg:block "
            src="/CUPPPP.png"
          />
        </div>

        <div className="">
          <div className="text-center my-2  lg:mb-10 ">
            <h1 className="text-[#0169B6] text-[20px] lg:text-[40px] text-center font-[700] my-3">
              Add the App &{" "}
              <span className="text-[#00A547]"> Start Wining!</span>
            </h1>

            <button className="bg-[#00A547] text-center text-[20px] px-5 text-[white] font-[600] shadow-md border border-[#39FF00] p-2 rounded-3xl">
              <Link href="/getapp"> Get the App</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
