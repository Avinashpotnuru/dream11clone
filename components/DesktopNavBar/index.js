import { navbarItems } from "../../Data";

import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
// bg-gradient-to-l from-[#0FC16C]/60 p-2 to-[#C8F5F5]/60

const DropDown = ({
  title,
  dropdownItems,
  activeItem,
  id,
  handleActiveItem,
}) => {
  // flex flex-col sm:hidden  items-center bg-[#caffde] w-[100%]
  console.log("dropdownItems==", dropdownItems);
  // console.log("handleActiveItem==", handleActiveItem);

  return (
    <div className="flex justify-center items-center m-auto relative">
      <p
        onClick={() => handleActiveItem(id)}
        className="my-[10px] mx-3 flex w-[100%] text-[white]  font-montserrat text-[15px] md:text-[18px] font-[600] "
      >
        {title}
      </p>
      <FiChevronDown
        size="40px"
        onClick={() => handleActiveItem(id)}
        color="white"
      />
      {activeItem === id && (
        <div className="flex flex-col   justify-start items-center p-3 bg-gradient-to-b from-[#00A547]/100 to-[#006A32]/100  absolute top-16 z-50  min-w-[350px]">
          {dropdownItems.map((d) => (
            <div className="flex flex-col  justify-start w-full" key={d.id}>
              <Link
                href={d.link}
                className=" p-2  my-[10px] mx-3 flex  hover:text-[20px] text-white  font-[Montserrat] text-[18px] font-[600] "
              >
                <span className="mx-2 mr-5">
                  <img src={d.logo} alt={`img${id}`} />
                </span>{" "}
                {d.title}
              </Link>
              <div className="border-t border-dashed border-gray-400 border-2"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopNavBar = () => {
  const [activeItem, setActiveItem] = useState("");

  console.log("activeItem===", activeItem);

  const handleActiveItem = (id) => {
    if (id == activeItem) {
      setActiveItem("");
    } else {
      setActiveItem(id);
    }
  };

  return (
    <>
      <div className="relative hidden sm:block ">
        <div className="fixed top-0 left-0 right-0 z-10">
          <div className=" w-full sm:inline-flex  h-[76px] bg-gradient-to-l from-[#0FC16C]/60 to-[#C8F5F5]/60  justify-between  items-center  ">
            <Link href="/">
              <img className="mx-2" src={"/win11logo.png"} alt="logo" />
            </Link>
            <div className="flex justify-between items-center relative w-[900px]">
              {navbarItems.map((d) => (
                <DropDown
                  key={d?.id}
                  title={d?.title}
                  dropdownItems={d?.dropdownItems}
                  activeItem={activeItem}
                  id={d?.id}
                  handleActiveItem={handleActiveItem}
                />
              ))}
              <button
                className="text-[white] rounded-3xl px-4 py-1 mx-2 font-sans text-xl font-[600]  bg-[#00A547] "
                style={{ border: "1px solid #39FF00" }}
              >
                <Link href="/getapp">Get App</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNavBar;
