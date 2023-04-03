import React from "react";

const AdditionalPoints = ({ content1, content2, content3 }) => {
  return (
    <>
      <div className="  flex justify-center items-center text-center w-full my-12 pt-12  h-full md:h-[640px] md:my-10 py-6  sm:py-6">
        <div
          style={{ backgroundPosition: "center center" }}
          className="bg-[url('/preditionmob.svg')] bg-cover px-3 md:px-[40px] md:my-[30px]  sm:bg-[url('/plain.png')]   w-[100%] md:w-[100%] object-cover   flex flex-col sm:flex-row justify-center sm:justify-around items-center "
        >
          <img
            className="hidden sm:block h-[125px]  w-[125px]"
            src="/CUPPPP.png"
          />
          <div className="flex flex-col justify-center items-center w-[100%] my-auto px-[20px ]  py-[30px]  ">
            <h1 className="text-[#0169B6] text-[20px] lg:text-[40px] mt-10 :pb-[40px] font-[700] pb-[16px] ">
              Additional to{" "}
              <span className="text-[green]">Strategy Points</span> Consider
            </h1>
            <p className="text-[#0B592A] text-[16px] my-2 text-center font-[400] w-[100%] min-md:h-[180px] min-md:w-[567px]">
              {content1}
            </p>
            <p className="text-[#0B592A] text-[16px] my-2 text-center font-[400] w-[100%] min-md:h-[180px] min-md:w-[567px]">
              {content2}
            </p>
            <p className="text-[#0B592A] text-[16px] my-2 text-center font-[400] w-[100%] min-md:h-[180px] min-md:w-[567px] ">
              {content3}
            </p>
          </div>
          <img
            className="hidden sm:block  h-[125px] w-[125px]"
            src="/CUPPPP.png"
          />
        </div>
      </div>
    </>
  );
};

export default AdditionalPoints;
