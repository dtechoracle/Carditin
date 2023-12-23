import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductMenu = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="px-3 py-6 bg-white rounded-[20px] absolute w-[450px] -left-[200px] top-[40px] hidden md:flex"
    >
      <ul className="grid grid-cols-3 gap-3 justify-start">
        <li>
          <Link
            className="flex items-center gap-3 px-2 py-1 border border-[#CCCCD0] rounded-[10px]"
            href={"/airtime-data"}
          >
            <Image
              src={"/assets/air.png"}
              width={28}
              height={28}
              alt=""
              className="w-[55px] h-[35px] object-cover"
            />
            <span className="text-[#161447CC] font-normal text-[14px]">
              Airtime & Data
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="w-fit flex items-center gap-3 px-2 py-1 border border-[#CCCCD0] rounded-[10px]"
            href={"/tv"}
          >
            <Image
              src={"/assets/tv.svg"}
              width={28}
              height={28}
              alt=""
              className="w-[28px] h-[28px] object-cover"
            />
            <span className="text-[#161447CC] font-normal text-[14px]">TV</span>
          </Link>
        </li>
        <li>
          <Link
            className="w-fit flex items-center gap-3 px-2 py-1 border border-[#CCCCD0] rounded-[10px]"
            href={"/bills"}
          >
            <Image
              src={"/assets/billss.svg"}
              width={28}
              height={28}
              alt=""
              className="w-[28px] h-[28px] object-cover"
            />
            <span className="text-[#161447CC] font-normal text-[14px]">
              Electric Bills
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="w-fit flex items-center gap-3 px-2 py-1 border border-[#CCCCD0] rounded-[10px]"
            href={"/betting"}
          >
            <Image
              src={"/assets/betting.svg"}
              width={28}
              height={28}
              alt=""
              className="w-[28px] h-[28px] object-cover"
            />
            <span className="text-[#161447CC] font-normal text-[14px]">
              Fund Betting
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="w-fit flex items-center gap-3 px-2 py-1 border border-[#CCCCD0] rounded-[10px]"
            href={"/education"}
          >
            <Image
              src={"/assets/education.svg"}
              width={28}
              height={28}
              alt=""
              className="w-[28px] h-[28px] object-cover"
            />
            <span className="text-[#161447CC] font-normal text-[14px]">
              Education
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="w-fit flex items-center gap-3 px-2 py-1 border border-[#CCCCD0] rounded-[10px]"
            href={"/gift-card"}
          >
            <Image
              src={"/assets/giftcard.svg"}
              width={28}
              height={28}
              alt=""
              className="w-[28px] h-[28px] object-cover"
            />
            <span className="text-[#161447CC] font-normal text-[14px]">
              Gift cards
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="w-fit flex items-center gap-3 px-2 py-1 border border-[#CCCCD0] rounded-[10px]"
            href={"/virtual-card"}
          >
            <Image
              src={"/assets/virtual.svg"}
              width={28}
              height={28}
              alt=""
              className="w-[28px] h-[28px] object-cover"
            />
            <span className="text-[#161447CC] font-normal text-[14px]">
              Virtual cards
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="w-fit flex items-center gap-3 px-2 py-1 border border-[#CCCCD0] rounded-[10px]"
            href={"/travel"}
          >
            <Image
              src={"/assets/plane.svg"}
              width={28}
              height={28}
              alt=""
              className="w-[28px] h-[28px] object-cover"
            />
            <span className="text-[#161447CC] font-normal text-[14px]">
              Travel
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductMenu;
