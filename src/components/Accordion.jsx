import { Add } from "iconsax-react";
import React from "react";

const Accordion = ({ onClick, data, active }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col py-2 border-b-[#C2C4CF] border-b  w-full bg-transparent"
    >
      <div className="flex justify-between w-full">
        <p className="md:text-[24px] text-black font-[600]">{data.title}</p>
        <Add
          className={`text-[24px] font-[600] text-grey2 ${
            active ? "rotate-180" : null
          } transition-all duration-500`}
        />
      </div>
      <div
        className={`overflow-hidden ${
          active ? "max-h-[100px]" : "max-h-0"
        } transition-all duration-700`}
      >
        <p className="text-[#161447CC] pt-2 pb-2 text-left text-[15px] font-[450]">{data.content}</p>
      </div>
    </button>
  );
};

export default Accordion;
