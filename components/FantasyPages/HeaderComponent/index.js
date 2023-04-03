import { useRouter } from "next/router";
import React from "react";

const HeaderComponent = ({ image }) => {
  const router = useRouter();

  const { id } = router.query;

  console.log("id", id);

  // lg:bg-[url('/stocksdes.png')]

  //  xl:bg-[url('/forexdesk.svg')]

  return (
    <div
      className={`${
        id === "crypto-trading" &&
        "bg-[url('/cyptromob.svg')] sm:bg-[url('/cyptrotab.svg')] xl:bg-[url('/cyptoodes.svg')] "
      } ${
        id === "racing" &&
        "bg-[url('/racingmob.svg')] sm:bg-[url('/racingtab.svg')] xl:bg-[url('/race.svg')]"
      } ${
        id === "equity-stocks" &&
        "bg-[url('/equalitymob.svg')] sm:bg-[url('/eqalitytab.svg')]  xl:bg-[url('/equal.svg')] "
      }

      ${
        id === "commodity-trading" &&
        "bg-[url('/tradingmob.svg')] sm:bg-[url('/tradingtab.svg')] xl:bg-[url('/commundity.svg')] "
      }
 
    
      ${
        id === "forex" &&
        "bg-[url('/forexmob.svg')] sm:bg-[url('/forextab.svg')] xl:bg-[url('/forex.svg')]  "
      }


      
      
      py-6 xl:py-2 h-[530px] lg:h-[895px]  lg:w-[100%]  border-b-8 w-[100%] bg-cover flex flex-col justify-center sm:px-7 sm:justify-center sm:items-start items-center mb-[112px] sm:mb-[63px] xl:mb-[40px] `}
      style={{ backgroundPosition: "center bottom" }}
    >
      <div
        className={`w-full h-[600px] xl:flex flex-row justify-end items-center mb-20 hidden ${
          id === "racing" && " xl:flex xl:flex-row xl:justify-start pb-20"
        } `}
      >
        <div>
          <img className="mx-28 h-[400px] w-[600px]  " src="/contentwin.svg" />
          <div className="flex justify-around items-center my-4">
            <div className=" bg-[#ECFFFB] py-4 text-center w-[184px] border-2  rounded-3xl border-[#00A547]">
              <h1 className="text-[18px] font-[600] text-[#003718]">
                India’s all round eSports opener!
              </h1>
            </div>
            <div className="w-[171px]  bg-[#ECFFFB] p-4 text-center border-2 rounded-3xl border-[#00A547]">
              <h1 className="text-[18px] font-[600] text-[#003718]">
                Winning has a BRAND NEW destination
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`text-center flex flex-col justify-center items-center xl:hidden`}
      >
        <img className="my-3" src="/win11logo (2).png" />
        <p className="hidden sm:block text-[18px] my-2 font-[600] text-[white] font-montserrat ">
          Winning has a BRAND NEW destination
        </p>
        <h1 className="text-[16px] font-[700] text-[#00A547] font-montserrat text-center ">
          Win from 1.1 Crore in daily earnings
        </h1>
        <div className="sm:hidden">
          <div className="bg-white border-4 text-center border-[#00A547] my-2  w-[156px] h-[54px] rounded-3xl">
            <p className="text-[#00A547] font-[700] text-[16px] ">
              India’s all round eSports opener!
            </p>
          </div>
          <div className="bg-white border-4 text-center border-[#00A547] my-2  w-[200px] h-[55px] rounded-3xl">
            <p className=" text-[#00A547] font-[700] text-[16px]">
              Winning has a BRAND NEW destination
            </p>
          </div>
        </div>
        <div className="sm:hidden  flex-col justify-center text-white   items-center ">
          <h1 className="text-[16px] font-[600] text-white">
            Live your sports fantasy today !
          </h1>
          <div className="flex  text-white justify-around items-center my-3">
            <h1 className="text-center mx-2 text-[14px] font-[600] text-white">
              Download the app <br /> (With Scan QR Option)
            </h1>
            <div>
              <img src="/qr.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-4 sm:mx-3 md:mx-5 lg:mx-7 xl:mx-10 justify-center items-center xl:hidden ">
        <div className="sm:flex  flex-col justify-center text-white hidden  items-center ">
          <h1 className="text-[16px] font-[600] text-white">
            Live your sports fantasy today !
          </h1>
          <div className="flex  text-white justify-around items-center my-3">
            <h1 className="text-center mx-2 text-[14px] font-[600] text-white">
              Download the app <br /> (With Scan QR Option)
            </h1>
            <div>
              <img src="/qr.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
