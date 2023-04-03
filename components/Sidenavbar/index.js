import React, { useState } from "react";

import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navData } from "../../Data";

const MobileNavbar = () => {
  return (
    <div className="flex flex-col sm:hidden  items-center bg-[#caffde] w-[100%]   ">
      <div className="bg-[#00A547] border bottom-2 border-[#39FF00] shadow w-[200px] h-[44px] flex justify-around rounded-3xl p-2 shadow-indigo-500/40 my-3 ">
        <img src="/download.svg" />

        <p className="text-white font-[Montserrat] text-[18px] font-[600]">
          App download
        </p>
      </div>
      <div className="flex flex-col justify-start sm:hidden  self-start w-[100%] h-[90vh] overflow-y-auto  ">
        {navData.map((item) => (
          <div key={item?.id} className=" py-3">
            <Link
              onClick={() => setOpen(!open)}
              key={item?.id}
              className="my-[10px] mx-3 flex hover:text-black text-[#454545]  font-[Montserrat] text-[18px] font-[600] "
              href={item?.link}
            >
              <span className=" mx-3">
                <img src={item?.logo} />
              </span>
              <p>{item?.tabs}</p>
            </Link>
            {/* <hr className="w-[100%] border-t border-dashed" /> */}
            <div className="border-t border-dashed border-white border-2"></div>
          </div>
        ))}
      </div>

      {/* <img className="bg-red-400" src={"/Line 232.jpg"} alt="line" /> */}
    </div>
  );
};

const SideNavbar = () => {
  const [open, setOpen] = useState(false);
  // console.log(open);
  return (
    <div className="sm:hidden relative  ">
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className=" w-[100%] bg-gradient-to-r from-[#0FC16C]/60 p-2 to-[#C8F5F5]/60 flex justify-between items-center">
          {/* <img className="mx-2" src={"/win11logo.png"} alt="logo" /> */}
          <Link href="/">
            <img className="mx-2" src={"/win11logo.png"} alt="logo" />
          </Link>
          <div
            className="bg-gradient-to-r from-[#00A547]/100  to-[#006A32]/100 p-3 rounded-md mx-2 rounded-tr-[50%] rounded-bl-[50%] "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose color="white" />
            ) : (
              <AiOutlineMenu color="white" />
            )}
          </div>
        </div>
        <div className="">{open && <MobileNavbar />}</div>
      </div>
    </div>
  );
};

export default SideNavbar;
