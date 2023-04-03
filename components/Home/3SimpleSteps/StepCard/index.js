import React from "react";

const StepCard = ({ id, title, body, logo, idImage }) => {
  return (
    <div
      key={id}
      className={`my-3   mx-4 w-[193px] h-[]  sm:h-[300px] sm:w-[350px]  bg-gradient-to-b   relative from-[#C0FFCD]/10 p-2 to-[#fff8c0]/70 ${
        id % 2 === 1 ? "self-start" : "self-end"
      } `}
    >
      <img
        className="absolute top-0 -left-5  h-[103px] w-[32px] "
        src={idImage}
      />
      <div className="flex flex-col justify-start sm:my-16  items-center">
        <img
          className="h-[60px] w-[110px]  sm:h-[113px] sm:w-[250px] "
          src={logo}
        />
        <h1 className="text-[16px] text-[#333333] text-center  font-[600] ">
          {title}
        </h1>
        <p className="text-[#0B592A]  text-[16px] text-center  font-[400]">
          {body}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
