import React from "react";

const DownLoadApp = () => {
  return (
    <div className="px-[20px] text-center flex flex-col justify-center items-center my-[48px] ">
      <h1 className="text-[20px] lg:text-[40px] font-[700] text-[#0169B6] my-3">
        Get the{" "}
        <span className="text-[#00A547]">Win 11 Fantasy cricket app</span> now!
      </h1>
      <h1 className="text-[14px] font-[400] text-[#003718] my-3 ">
        Enthusiastic Fantasy Cricket games and tournaments await you, so why not
        jump right in? Play fantasy cricket or any other fantasy sport on your
        Android or iOS device with the Win11 Fantasy App.
      </h1>
      <h1 className="text-[16px] lg:text-[24px] font-[700] text-[#0169B6] my-3">
        So, what are you waiting for? Download the win11 app today and start
        playing!
      </h1>
      <div className="flex flex-col justify-center sm:flex-row sm:justify-around items-center ">
        <div className="bg-[#00A547] my-3 flex justify-center mx-6 rounded-3xl border-2 border-[#39FF00] items-center p-3">
          <img src="/applelogo.png" />
          <p className="text-white  mx-4 uppercase text-[16px] font-[600] ">
            Download iOS App
          </p>
        </div>
        <div className="bg-[#00A547] p-3 my-3 flex justify-center items-center rounded-3xl border-2 border-[#39FF00]">
          <img src="/android.svg" />
          <p className="text-white mx-4 uppercase text-[16px] font-[600]">
            Download Android App
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownLoadApp;
