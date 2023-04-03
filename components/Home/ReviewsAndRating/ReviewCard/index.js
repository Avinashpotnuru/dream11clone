import React from "react";

const ReviewCard = (props) => {
  // console.log(props);
  const { review } = props;

  const { id, match, name, details } = review;
  // console.log(match);

  return (
    <div
      key={id}
      className="mt-10 bg-[#e9ffdf] -skew-x-6  mx-auto  flex flex-col justify-center relative  h-[285px] w-[301px] "
    >
      <img
        className=" h-[45px]  w-[47px] skew-x-6 self-start mx-5 absolute  top-0 left-0 -translate-y-1/2"
        src="/Ellipse 2.png"
      />
      <div className="skew-x-6 w-[100%] ">
        <div className="flex  justify-around  items-center relative">
          <p className=" text-[black] text-[16px] font-[600]">{name}</p>
          <img src="/stars.jpg" />
        </div>
        <div className="bg-[#00B555] w-[100%] -skew-x-6 my-2 p-2 ">
          <div className="flex justify-between items-center">
            <h1 className=" text-[white] text-[14px] font-[600]">
              Mega Contest Winner
            </h1>
            <h1 className=" text-[yellow] text-[14px] font-[600]">
              ₹1.05 Crore
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className=" text-[black] text-[14px] font-[600]">{match}</h1>
            <h1 className=" text-[white] text-[14px] font-[600]">Winnings</h1>
          </div>
        </div>
        <p className="text-[14px] font-[500] my-2 text-[#003718] p-2">
          {details}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
