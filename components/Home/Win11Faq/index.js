import React from "react";

import { Disclosure } from "@headlessui/react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";

const Win11Faq = () => {
  return (
    <div className="flex flex-col my-6 justify-center items-center md:flex-row md:justify-around md:items-center xl:mb-32">
      <img src="/Group 41983.jpg " className="md:hidden my-4" />
      <img
        src="/Group (2).png"
        className=" hidden md:block h-[174px] w-[162px]"
      />
      <div className=" w-[80%]  md:w-[60%] ">
        <div className="flex flex-col   justify-around items-center ">
          <div className="border-solid text-center border-2 p-2 border-[#959595] rounded-md my-2 mx-[22px] w-[90%]">
            <Disclosure>
              <Disclosure.Button className="py-2 w-full flex justify-between items-center">
                {/* <div className="flex justify-center items-center bg-red-500  "> */}
                <h1 className="text-[16px] md:text-[22px] font-[500] text-[#454545]">
                  What is Fantasy Sports?
                </h1>
                <MdOutlineKeyboardArrowDown />
                {/* </div> */}
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className="border-solid text-center border-2 p-2 border-[#959595] rounded-md my-2 mx-[22px] w-[90%]">
            <Disclosure>
              <Disclosure.Button className="py-2 w-full flex justify-between items-center">
                {/* <div className="flex justify-center items-center bg-red-500  "> */}
                <h1 className="text-[16px] md:text-[22px] font-[500] text-[#454545]">
                  Is it safe to add money to Win11?
                </h1>
                <MdOutlineKeyboardArrowDown />
                {/* </div> */}
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className="border-solid text-center border-2 p-2 border-[#959595] rounded-md my-2 mx-[22px] w-[90%]">
            <Disclosure>
              <Disclosure.Button className="py-2 w-full flex justify-between items-center">
                {/* <div className="flex justify-center items-center bg-red-500  "> */}
                <h1 className="text-[16px] md:text-[22px] font-[500] text-[#454545]">
                  How are Win11 points calculated?
                </h1>
                <MdOutlineKeyboardArrowDown />
                {/* </div> */}
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </div>
        <div className="text-center py-4">
          <h1 className="my-2 font-Montserrat text-[20px] font-[700] text-[#0169B6]">
            Add the App & <span className="text-[#00A547]">Start Wining!</span>
          </h1>
          <button className="bg-[#00A547] font-Montserrat uppercase text-[20px] font-[600] text-[#FFFFFF] rounded-3xl p-3">
            <Link href="/getapp"> Get the App</Link>
          </button>
        </div>
      </div>
      <img
        src="/Group (2).png"
        className=" hidden md:block  h-[174px] w-[162px]"
      />
    </div>
  );
};

export default Win11Faq;
