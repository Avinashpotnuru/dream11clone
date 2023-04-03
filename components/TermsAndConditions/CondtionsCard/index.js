import { Disclosure } from "@headlessui/react";

import { BsChevronDown } from "react-icons/bs";

const ConditionsCard = ({ title, description }) => {
  return (
    <div className="border-solid  border-2 p-2 w-full border-[#959595] rounded-md my-4">
      <Disclosure>
        <Disclosure.Button className="md:py-2 w-full">
          <div className="flex justify-between  items-center w-full">
            <div className=" font-[500] text-start   text-[24px]  ">
              <h1 className="text-[18px] md:text-[22px] text-[#454545]">
                {title}
              </h1>
            </div>
            <div className="">
              <BsChevronDown />
            </div>
          </div>
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          {description}
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default ConditionsCard;
