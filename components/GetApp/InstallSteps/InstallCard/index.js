import React from "react";

const InstallCard = ({ description, imgUrl, numImage, id, name }) => {
  return (
    <div
      className={`relative px-6 bg-[url('/install.svg')] mb-16  flex  justify-center items-center  mx-4 bg-cover h-[315px] w-[320px] md:w-[340px] ${
        id == "3" && "sm:self-center sm:justify-self-center sm:col-[1/4] "
      } ${
        id == "3" &&
        name === "cricketApp" &&
        "sm:self-center sm:justify-self-center sm:col-[1/3] "
      } `}
    >
      <img src={imgUrl} className="absolute -top-10" />
      {/* -left-10 */}
      <img
        className="absolute bottom-0  -left-[6px] h-[120px] w-[80px]"
        src={numImage}
      />
      <h1 className=" mt-[90px] w-[60%]  text-center text-[#0169B6] font-[600] text-[14px] ">
        {description}
      </h1>
    </div>
  );
};

export default InstallCard;
