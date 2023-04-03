import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#132F27]  text-white   ">
      <div>
        <div className="sm:hidden flex justify-center items-center p-3 ">
          <Link href="/">
            <img className=" text-center " src="/win11logo (2).png" />
          </Link>
        </div>

        <hr className="text-white bg-white mt-2  " />
        <div className="grid grid-cols-2 py-4 px-2 gap-4 sm:grid-cols-4">
          <div className="flex   flex-col justify-center items-center hidden   sm:inline-block">
            <div className="text-center">
              <img className="m-auto my-2" src="/win11logo (2).png" />
            </div>

            <div className="flex  justify-around items-center w-[100%] my-3 ">
              <img src="/akar-icons_linkedin-box-fill.png" />
              <img src="/Vector (1).png" />
              <img src="/Vector (2).png" />
              <img src="/Vector (3).png" />
            </div>
            <div className="flex justify-center items-end">
              <img src="/Group 42141.png" />
              <img src="/Group 42142.png" />
            </div>
          </div>
          <div className="p-2 font-[600] text-[14px] font-[MontserratAlternates] ">
            <Link href="/getapp">Get the App</Link>
            <div className="my-2">How to play</div>
            <div className="my-2">
              <Link href="/basket">Fantasy basketball</Link>
            </div>
            <div className="my-2">
              <Link href="/cricket">Fantasy cricket</Link>
            </div>
            <div className="my-2">
              <Link href="/football">
                <div className="my-2">Fantasy Football</div>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/kabbadi">
                <div className="my-2">Fantasy Kabaddi</div>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/cricketapp">Fantasy cricket app install</Link>
            </div>
          </div>
          <div className=" font-[600] text-[14px] font-[MontserratAlternates]">
            <div className="my-2">
              <Link href="/baseball">Fantasy Baseball</Link>
            </div>
            <div className="my-2">
              <Link href="/soccer">Fantasy Soccer</Link>
            </div>
            <div className="my-2">
              <Link href="/kickboxing">
                <p className="my-2">Fantasy Kickboxing</p>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/racing">
                <p className="my-2">Fantasy Formula 2 Racing</p>
              </Link>
            </div>

            <div className="my-2">
              <Link href="/equity-stocks">
                <p className="my-2"> Fantasy Equity Stocks</p>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/commodity-trading">
                <p className="my-2"> Fantasy Commodity Trading</p>
              </Link>
            </div>
            <div className="my-2">
              <Link href="/forex">Fantasy Forex Trading</Link>
            </div>
            <div className="my-2">
              <Link href="/crypto-trading">Fantasy Crypto Trading</Link>
            </div>
          </div>

          <div className="p-2 font-[600] text-[14px] font-[MontserratAlternates]">
            <div className="my-2" onClick={() => {}}>
              <Link href="/aboutus">About us</Link>
            </div>

            <div className="my-2">
              {" "}
              <Link href="/communityguidelines">Community guidelines</Link>
            </div>
            <div className="my-2">
              <Link href="/invitefriends">Invite friends</Link>
            </div>
            <div className="my-2">
              <Link href="/termsandcondtions">Terms & conditions</Link>
            </div>
            <div className="my-2">
              {" "}
              <Link href="/privacypolicy">Privacy policy</Link>
            </div>
          </div>
          <div className="sm:hidden flex justify-center items-end">
            <div className="flex justify-center items-end">
              <img src="/Group 42141.png" />
              <img src="/Group 42142.png" />
            </div>
          </div>
        </div>
        <hr className="border border-gray-400 my-6 sm:hidden w-full" />
        <h1 className="p-2 text-center  sm:hidden font-[600] text-[14px] font-[MontserratAlternates]">
          This game might be habit-forming or financially risky. Play
          responsibly and with restraint.
        </h1>
        <div className="flex justify-around  items-center  sm:hidden py-4 ">
          <div className="flex flex-row items-center">
            <img src="/clogo.svg" className="mx-2" />
            <p className="self-start">Win 11 2022</p>
          </div>

          <div className="flex justify-around w-[50%]   my-2 ">
            <img src="/akar-icons_linkedin-box-fill.png" />
            <img src="/Vector (1).png" />
            <img src="/Vector (2).png" />
            <img src="/Vector (3).png" />
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <hr className=" border text-[#00a547]     " />
        <div className="flex justify-around items-center ">
          <div className="flex justify-center items-center  p-3">
            <img src="/clogo.svg" className="mx-2" />
            <p className="text-white font-[500] text-[16px]">Win 11 2022</p>
          </div>

          <p className="  text-white font-[500] text-[16px]">
            This game might be habit-forming or financially risky. Play
            responsibly and with restraint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
