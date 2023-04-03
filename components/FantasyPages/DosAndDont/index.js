import React from "react";

const DosAndDonts = () => {
  return (
    <div
      // style={{ backgroundPosition: "center top" }}
      className=" bg-[url('/cricketdoanddontsmob.svg')] md:bg-[url('/cricketdoanddonttab.svg')] lg:bg-[url('/cricketdoanddontdes.svg')] flex justify-center items-center  bg-cover px-[20px]  h-[1200px]  md:max-h-[1300px] w-full "
    >
      <div className="flex flex-col justify-center  items-center ">
        <h1 className=" text-[#0B592A] text-[20px] text-center font-[700] my-4">
          Do’s and Don'ts While Playing Fantasy Cricket
        </h1>
        <p className=" text-[#0B592A] text-[16px] font-[400] my-4 text-center">
          There are opportunities to play fantasy cricket daily and win crores.
          As you would have seen above in the list of winners, you can win
          anywhere from thousands, lakhs to crores if the Win 11 team created by
          you features in the winning list.
        </p>
        <div className="flex  flex-col justify-center items-center sm:w-[100%] md:w-[80%]  py-6">
          <div className="-skew-x-6 md:self-start p-4 relative bg-[#e9ffdf] border-solid min-h-[225px] w-[100%] sm:w-[430px] md:w-[527px]  my-4 border-2 border-[#00A547] rounded-xl sm:self-start ">
            <div className="skew-x-6 flex flex-col justify-center items-center ">
              <div className="absolute -top-7 rounded-2xl  p-2 bg-gradient-to-b from-[#0BAF59]/100 to-[#00A446]/100">
                <p className="text-[white] text-[13px] font-[600]">
                  Do’s of playing fantasy cricket
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

          <div className="-skew-x-6 p-4 md:self-end relative sm:self-end bg-[#e9ffdf] border-solid w-[100%]  min-h-[150px] sm:w-[430px] mt-4 border-2 border-[#00A547] rounded-xl ">
            <div className="skew-x-6 flex flex-col justify-center items-center">
              <div className="absolute  -top-7 rounded-2xl  p-2 bg-gradient-to-b from-[#0BAF59]/100 to-[#00A446]/100">
                <p className="text-[white] text-[13px] font-[600]">
                  Dont’s of playing fantasy cricket
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
  );
};

export default DosAndDonts;
