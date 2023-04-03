import React from "react";

const FootBallDoAndDonts = () => {
  return (
    <>
      <div
        // style={{ backgroundPosition: "center top" }}
        className=" my-auto bg-[url('/footballdonttab.svg')] lg:bg-[url('/footballdontdes.svg')] flex justify-center  items-center h-[900px] lg:py-10 bg-cover w-full px-[20px]   lg:h-[1200px]  "
      >
        <div className="flex flex-col justify-center  w-full  items-center ">
          <h1 className=" text-[#00A547] text-[20px] lg:text-[40px] lg:mb-7 font-[700] my-4">
            Do’s and Don'ts in{" "}
            <span className="text-[#0169B6]">Fantasy Football</span>
          </h1>

          <div className="flex  w-full flex-col lg:flex-row justify-around items-center ">
            <div className="-skew-x-6  p-4 relative bg-[#e9ffdf] border-solid h-[282px] w-[314px]  my-4 border-2 border-[#00A547] rounded-xl  ">
              <div className="skew-x-6 flex flex-col justify-center items-center ">
                <div className="absolute -top-7 rounded-2xl  p-2 bg-gradient-to-b from-[#0BAF59]/100 to-[#00A446]/100">
                  <p className="text-[white] text-[13px] font-[600]">
                    Do’s of playing fantasy football
                  </p>
                </div>
                <ul className="mt-10 list-disc mx-6 text-start text-[#0B592A] text-[14px] font-[400] ">
                  <li>
                    Maintain perseverance and patience for long - term benefits
                  </li>
                  <li>Observe the likely starting XI</li>
                  <li>Every Based on thorough research, form a group.</li>
                  <li>Select games carefully.</li>
                  <li>
                    Team changes should be postponed until the coin toss. match
                    schedules close at hand
                  </li>
                </ul>
              </div>
            </div>

            <div className="-skew-x-6 p-4  relative my-auto bg-[#e9ffdf] border-solid   h-[210px] w-[314px] mt-3  border-2 border-[#00A547] rounded-xl ">
              <div className="skew-x-6 flex flex-col justify-center items-center">
                <div className="absolute  -top-7 rounded-2xl  p-2 bg-gradient-to-b from-[#0BAF59]/100 to-[#00A446]/100">
                  <p className="text-[white] text-[13px] font-[600]">
                    Dont’s of playing fantasy football
                  </p>
                </div>
                <ul className="mt-10 list-disc mx-6 text-start text-[#0B592A] text-[14px] font-[400] ">
                  <li>Don't spend all of your money on one game.</li>
                  <li>Choose players not based on popularity</li>
                  <li>Keep pitch conditions in mind</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FootBallDoAndDonts;
