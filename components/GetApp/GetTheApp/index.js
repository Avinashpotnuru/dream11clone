import React from "react";

const GetTheApp = () => {
  // w-[100%] h-[350px]
  return (
    // <div className=" flex my-5 flex-col p-4 justify-center items-center px-2 bg-[url('/installingapp.svg')] bg-cover">
    //   <h1 className="text-[20px] font-[700] text-[#0169B6] ">
    //     Get the App and <span className="text-[#00A547]">Win Crores</span>
    //   </h1>
    //   <img className="my-4" src="/appview.png" />
    // </div>
    <div className="xl:px-[120px]  mt-6 flex justify-center items-center ">
      <div
        style={{ backgroundPosition: "center top" }}
        className=" flex justify-center items-center relative bg-[url('/gettheappandwinSVG(1).svg')] md:bg-[url('/tabmask.svg')]  xl:bg-[url('/Deskgettheapp(1).svg')] bg-cover h-[320px] sm:h-[600px] md:h-[650px] lg:h-[750px]     w-[100%]  "
      >
        <h1 className="xl:hidden top-8 sm:top-10 text-center absolute text-[20px] md:text-[30px] font-[700] text-[#0169B6]">
          Get the App and <span className="text-[#00A547]">Win Crores</span>
        </h1>
      </div>
    </div>
  );
};

export default GetTheApp;
