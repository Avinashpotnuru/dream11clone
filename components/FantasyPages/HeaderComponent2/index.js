import { useRouter } from "next/router";
import React from "react";

const HeaderComponent2 = ({ image }) => {
  const route = useRouter();
  const { id } = route.query;

  return (
    <>
      {/* <div
        className="sm:bg-landingBackGround bg-[url('/cricket.svg')] bg-red-200  bg-cover min-h-[80vh] sm:min-h-[100vh] "
        style={{ backgroundPosition: "center bottom" }}
      >
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col justify-center items-center p-2">
            <img className="h-[94px] w-[118px] my-3" src="/Group.png" />
            <p className="hidden sm:block text-[18px] my-2 font-[600] text-[#00A547] font-montserrat ">
              Winning has a BRAND NEW destination
            </p>
            <h1 className="text-[16px] font-[700] text-[#00A547] font-montserrat text-center ">
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

          <div className="flex justify-center items-center mr-2">
            <img
              className={`sm:w-[552px] sm:h-[592px] w-[460px] h-[402px]`}
              src={image}
            />
          </div>
          <div className="sm:flex flex-col justify-center    items-center hidden">
            <h1>Live your sports fantasy today !</h1>
            <div className="flex  justify-around items-center my-3">
              <h1 className="text-center mx-2">
                Download the app <br /> (With Scan QR Option)
              </h1>
              <div>
                <img src="/qr.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:hidden ">
          <h1>Live your sports fantasy today !</h1>
          <div className="flex  justify-around items-center my-3">
            <h1 className="text-center mx-2">
              Download the app <br /> (With Scan QR Option)
            </h1>
            <div className="bg-white p-2">
              <img src="/qr.png" />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="  bg-[url('/mob.svg')] relative md:bg-[url('/tabWin11.svg')]  xl:bg-[url('/win11desk.svg')] bg-cover   h-[600px] xl:max-h-[900px] w-[100%] flex justify-center items-center p-5 ">
        <div className="flex flex-col absolute pl-4 top-0 z-10 md:p-6 left-0 justify-center items-center xl:p-8 w-[50%]     ">
          <img className="h-[94px] w-[80px]   my-3" src="/win11logo (2).png" />
          <p className="hidden md:block text-[18px]  my-2 font-[600] text-[#00A547] font-montserrat  ">
            Winning has a BRAND NEW destination
          </p>
          <h1 className="text-[16px] font-[700] w-[170px] text-[#00A547] font-montserrat text-center hidden  ">
            Win from 1.1 Crore in daily earnings
          </h1>

          <div>
            <div className="bg-white border-4 text-center border-[#00A547] my-2  w-[146px] h-[54px] rounded-3xl">
              <p className=" text-[#00A547] font-[700] text-[16px] ">
                India’s all round eSports opener!
              </p>
            </div>
            <div className="bg-white border-4 text-center border-[#00A547] my-2  w-[180px] h-[55px] rounded-3xl">
              <p className=" text-[#00A547] font-[700] text-[16px]">
                Winning has a BRAND NEW destination
              </p>
            </div>

            <div className=" flex-col justify-center lg:mb-3 items-center md:mr-5 hidden md:block ">
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
        </div>
        <div className="flex justify-end absolute top-0 right-0   items-center   ">
          <img
            className="h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px]  xl:h-[500px] xl:w-[650px] "
            src={image}
          />
        </div>

        <div className=" flex-col justify-center pt-3 items-center md:hidden ">
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

      <div className="  bg-[url('/mob.svg')] relative md:bg-[url('/tabWin11.svg')]  xl:bg-[url('/win11desk.svg')] bg-cover   h-[700px] xl:max-h-[900px]   w-[100%] flex justify-center items-center p-5 ">
        <div className="flex flex-col absolute pl-4 top-0 z-0 md:p-6 left-0 justify-center items-center xl:p-8 w-[50%] pt-14 md:pt-20 lg:pt-24 xl:pt-28 ">
          <img className="h-[94px] w-[80px]   my-3" src="/win11logo (2).png" />
          <h1 className="text-[16px] font-[700]  text-[#003718] sm:hidden">
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
            className="h-[320px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px]  xl:h-[500px] xl:w-[650px] "
            src={image}
          />
        </div>

        <div className=" flex-col justify-center h-full py-[390px]   items-center md:hidden ">
          <h1 className="text-[16px] font-[600] text-[#003718]">
            Live your sports fantasy today !
          </h1>
          <div className="flex   justify-around items-center ">
            <h1 className="text-center mx-2">
              Download the app <br /> (With Scan QR Option)
            </h1>
            <div className="">
              <img src="/qr.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent2;
