import React from "react";

const Win11 = () => {
  return (
    <>
      {/* <div className="  bg-[url('/mob.svg')] relative sm:bg-[url('/tabWin11.svg')] lg:bg-[url('/win11desk.svg')] bg-cover   h-[600px] sm:min-h-[80vh] lg:min-h-[100vh] w-[100%] flex justify-center items-center  ">
      <div className="flex flex-col absolute top-0 z-10 left-0 justify-center items-center lg:px-8  xl:p-8      ">
        <img
          className="h-[94px] w-[80px] sm:h-[140px] sm:w-[140px]  my-3"
          src="/win11logo (2).png"
        />
        <p className="hidden sm:block text-[18px] my-2 font-[600] text-[#00A547] font-montserrat ">
          Winning has a BRAND NEW destination
        </p>
        <h1 className="text-[16px] font-[700] text-[#00A547] font-montserrat text-center hidden  ">
          Win from 1.1 Crore in daily earnings
        </h1>
        <div>
          <div className="bg-white border-4 text-center border-[#00A547] my-2  w-[156px] h-[54px] rounded-3xl">
            <p className=" text-[#00A547] font-[700] text-[16px] ">
              India’s all round eSports opener!
            </p>
          </div>
          <div className="bg-white border-4 text-center border-[#00A547] my-2  w-[200px] h-[55px] rounded-3xl">
            <p className=" text-[#00A547] font-[700] text-[16px]">
              Winning has a BRAND NEW destination
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end absolute top-0 right-0   items-center  ">
        <img
          className=" md:w-[440px]  md:h-[440px] lg:h-[500px] lg:w-[520px] w-[220px]  h-[214px] sm:h-[400px] sm:w-[400px]"
          src="/landingImage (2).png"
        />
      </div>

      <div className=" flex-col justify-center top-[270px]  sm:left-[30px] md:left-[40px] lg:left-[60px]  lg:top-[360px] sm:top-[340px] md:top-[340px]  absolute items-center  ">
        <h1 className="text-[16px] font-[600] text-[#003718]">
          Live your sports fantasy today !
        </h1>
        <div className="flex   justify-around items-center ">
          <h1 className="text-center mx-2">
            Download the app <br /> (With Scan QR Option)
          </h1>
          <div>
            <img src="/qr.png" />
          </div>
        </div>
      </div>
    </div> */}

      {/* md:min-h-[95vh] lg:min-h-screen sm:min-h-[90vh]  */}

      <div className="  bg-[url('/mob.svg')]  relative md:bg-[url('/tabWin11.svg')]  xl:bg-[url('/win11desk.svg')] bg-cover   h-[600px] xl:max-h-[840px]   w-[100%] flex justify-center items-center p-5 ">
        <div className="flex flex-col absolute pl-4 pt-14 sm:pt-20 md:pt-24 xl:pt-20 top-0 z-0 md:p-6 left-0 justify-center items-center w-[50%]     ">
          <img className="h-[94px] w-[80px]   my-3" src="/win11logo (2).png" />
          <h1 className="text-[16px] font-[700] text-center my-1  text-[#003718] sm:hidden">
            Win from 1.1 Crore in daily earnings
          </h1>
          <p className="hidden md:block text-[18px] text-center  my-2 font-[600] text-[#00A547] font-montserrat w-full ">
            Winning has a BRAND NEW destination
          </p>
          <h1 className="text-[16px] font-[700] text-[#003718] hidden sm:block">
            Win from 1.1 Crore in daily earnings
          </h1>
          <h1 className="text-[24px] font-[700] my-4 w-[170px] text-[#00A547] font-montserrat text-center hidden  ">
            Winning has a BRAND NEW destination
          </h1>

          <div>
            <div className="bg-white border-4 text-center border-[#00A547] md:hidden my-2  w-[146px] h-[54px] rounded-3xl">
              <p className=" text-[#00A547] font-[700] text-[16px] ">
                India’s all round eSports opener!
              </p>
            </div>
            <div className="bg-white border-4 text-center md:hidden border-[#00A547] my-2  w-[180px] h-[55px] rounded-3xl">
              <p className=" text-[#00A547] font-[700] text-[16px]">
                Win from 1.1 Crore in daily earnings
              </p>
            </div>

            <div className=" flex-col justify-center lg:mb-3 items-center md:mr-5 hidden md:block ">
              <h1 className="text-[16px] font-[600] text-[#003718] my-4">
                Live your sports fantasy today !
              </h1>
              <div className="flex   justify-around items-center ">
                <h1 className="text-center mx-2 text-[14px] font-[600] text-[#00632B]">
                  Download the app <br /> (With Scan QR Option)
                </h1>
                <div>
                  <img src="/qr.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end absolute top-0 right-0   items-center   ">
          <img
            className="h-[320px]  w-[220px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px]  xl:h-[500px] xl:w-[650px] "
            src="/landingmainpic.svg"
          />
        </div>

        <div className=" flex-col justify-center mt-52   md:mt-48 items-center md:hidden ">
          <h1 className="text-[16px] font-[600] text-[#003718]">
            Live your sports fantasy today !
          </h1>
          <div className="flex   justify-around items-center ">
            <h1 className="text-center mx-2">
              Download the app <br /> (With Scan QR Option)
            </h1>
            <div>
              <img src="/qr.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Win11;
