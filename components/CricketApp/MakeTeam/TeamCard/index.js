import React from "react";

const TeamCard = ({ id, children, description }) => {
  console.log(children);
  return (
    <div className="shrink-0 h-[370px] mx-auto my-3 w-[320px] relative border-solid border-2 p-6 border-[#00A547] rounded-2xl -skew-x-12 bg-transparent flex flex-col justify-center items-center">
      <div className="bg-[#0169B6] absolute -top-3 z-10 left-6  skew-x-12 rounded-full h-[30px] w-[30px] font-[600] flex justify-center items-center text-white">
        {id}
      </div>
      <div className="skew-x-12 m-5   p-4">
        <h1 className="text-[14px] font-[500] text-[#0B592A] mt-4">
          {description}
        </h1>
      </div>
      <ul className="skew-x-12  mb-6">
        {children?.map((item) => (
          <li className="my-2 text-[14px] font-[500] text-[#0B592A]">
            {item?.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamCard;
