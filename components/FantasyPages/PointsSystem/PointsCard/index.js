import React from "react";

const PointsCard = ({ id, description }) => {
  return (
    <div className="shrink-0 mx-auto my-4 h-[200px] w-[260px] xl:h-[160px] xl:w-[480px] relative border-solid border-2 border-[#00A547] rounded-2xl -skew-x-12 bg-transparent flex flex-col justify-center items-center">
      <div className="bg-[#0169B6] absolute -top-3  left-6  skew-x-12 rounded-full h-[30px] w-[30px] font-[600] flex justify-center items-center text-white">
        {id}
      </div>
      <div className="skew-x-12 m-5 py-3 ">
        <h1 className="text-[14px] font-[400] sm:font-[500] lg:text-[16px] lg: text-[#0B592A]">
          {description}
        </h1>
      </div>
    </div>
  );
};

export default PointsCard;
