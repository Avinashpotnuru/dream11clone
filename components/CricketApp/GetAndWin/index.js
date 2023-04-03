import React from "react";

const GetAndWin = () => {
  return (
    <div className="bg-[url('/getandwin.svg')] md:bg-[url('/getandwindes.svg')] flex flex-col justify-center items-center h-[auto] w-full relative ">
      <h2 className="text-[18px] lg:text-[40px] font-[700] md:text-[24px] text-[#0169B6] my-4">
        Join players who are winning Crores!
        <span className="text-[#00A547]">winning Crores!</span>
      </h2>
      <img
        className="h-[246px] w-[335px] md:hidden "
        src="/winandgetimage.jpg"
      />
      <img
        className="h-[60px]  w-[60px] lg:h-[131px]  lg:w-[131px] -z-10 bottom-2  absolute  left-0"
        src="/rugb.svg"
      />
      <img className="hidden md:block px-[10px] " src="/winandaimage.png" />
    </div>
  );
};

export default GetAndWin;
