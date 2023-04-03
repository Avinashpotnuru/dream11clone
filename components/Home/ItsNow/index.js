import React from "react";

const ItsNow = () => {
  return (
    // <div className="relative rcheck  w-[100%] overflow-hidden">
    //   <div
    //     style={{ backgroundPosition: "center center" }}
    //     className="flex   justify-start items-center  md:mx-[129px]   bg-[url('/itsnow.svg')] md:bg-[url('/gettheapp.svg')] md:h-screen md:w-[80%] bg-cover "
    //   >
    //     {/* <img
    //       className="absolute h-[110px] w-[110px] -top-2 -right-6  hidden sm:block"
    //       src="/basketball.svg"
    //     /> */}
    //     <div className=" flex flex-col justify-center items-center    ">
    //       <div>
    //         <div className="">
    //           <h1 className="my-4 text-center py-2 text-[20px] font-[700] text-[]">
    //             <span className="text-[#0169B6]">It’s Now or Never Now,</span>
    //             <br />
    //             <span className="text-[#00A547]"> Get the app !</span>
    //           </h1>
    //           <img className="sm:hidden" src="/Group 41929.png" />
    //         </div>
    //         <div className=" flex flex-col  ">
    //           <div className="flex justify-center  items-start  m-3">
    //             <img className="my-auto mx-2" src="/Group (1).png" />
    //             <p className=" text-[14px] font-[400] text-[#003718]">
    //               Play your hand at Win11's rewarding fantasy games, earn
    //               WinCoins, and get exciting rewards!
    //             </p>
    //           </div>
    //           <div className="flex justify-start  items-start  m-3">
    //             <img className="my-auto mx-2" src="/Group (1).png" />
    //             <p className="text-[14px] font-[400] text-[#003718]">
    //               Refer and invite your friends, and get a cash bonus per
    //               friend.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="flex justify-around items-center my-4">
    //         <img src="/qr.png" />
    //         <p className="text-center text-[14px] font-[400] text-[#003718]">
    //           Scan the QR Code to Install the
    //           <br /> Fantasy Cricket App
    //         </p>
    //       </div>
    //       {/* <img src="/Group 41929.png " className=" hidden sm:block pt-5" /> */}
    //     </div>

    //     <img
    //       className="absolute h-[110px] -bottom-2 w-[110px] z-10 top -left-4 hidden sm:block"
    //       src="/rugb.svg"
    //     />
    //   </div>
    // </div>
    <div className="flex justify-center items-center w-full relative my-10">
      <img
        src="/basketball.svg "
        className="absolute  h-[80px] w-[80px] lg:h-[200px] lg:w-[200px] -top-20 sm:top-0 -z-10 right-0"
      />
      <img
        src="/rugb.svg "
        className="absolute  h-[80px] w-[80px] lg:h-[200px] lg:w-[200px]  -bottom-20  sm:bottom-0 -z-10 left-0"
      />

      <div className=" bg-[url('/itsnow.svg')] md:bg-[url('/itsnowtab.svg')] lg:bg-[url('/itsnowdes (2).svg')] w-full  bg-cover xl:p-6 md:h-[580px] md:w-[780px] lg:h-[640px] lg:w-[920px] xl:h-[900px] xl:w-[1282px] md:p-20">
        <div className=" lg:mt-3 xl:mt-12">
          <div className="flex flex-col justify-center items-center  ">
            <h1 className="pt-6 text-center  text-[20px] font-[700] text-[] my-3">
              <span className="text-[#0169B6]">
                It’s Now or <span className="line-through">Never</span> Now,
              </span>

              <span className="text-[#00A547]"> Get the app !</span>
            </h1>
            <img className="md:hidden" src="/Group 41929.png" />
          </div>
          <div className="flex flex-col md:flex-row justify-center  items-center ">
            <div className=" flex flex-col  ">
              <div className="flex justify-center  items-start  m-3">
                <img className="my-auto mx-2" src="/Group (1).png" />
                <p className=" text-[14px] font-[400] text-[#003718]">
                  Play your hand at Win11's rewarding fantasy games, earn
                  WinCoins, and get exciting rewards!
                </p>
              </div>
              <div className="flex justify-start  items-start  m-3">
                <img className="my-auto mx-2" src="/Group (1).png" />
                <p className="text-[14px] font-[400] text-[#003718]">
                  Refer and invite your friends, and get a cash bonus per
                  friend.
                </p>
              </div>
            </div>
            <div className="flex justify-around items-center my-4">
              <img src="/qr.png" />
              <p className="text-center text-[14px] font-[400] text-[#003718]">
                Scan the QR Code to Install the
                <br /> Fantasy Cricket App
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItsNow;
