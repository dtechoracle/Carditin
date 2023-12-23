"use client";
import { ArrowDown2, CloseSquare } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavbarMenu = ({ handleClose, navToggle, ref }) => {
  const [productItemToggle, setProductItem] = useState(false);
  const pathname = usePathname();
  const handleProductToggle = () => {
    setProductItem(!productItemToggle);
  };
  const handleProductClose = () => {
    setProductItem(false);
  };
  const handleRouteSwitch = (e) => {
    e.stopPropagation();
  };
  const handleCloserModal = () => {
    if (productItemToggle === true) {
      handleProductClose();
      handleClose();
    }
    return handleClose();
  };
  return (
    <div
      onClick={() => {
        handleClose();
        handleProductClose();
      }}
      className={`transition-all duration-500 flex md:hidden
       ${
         navToggle
           ? "h-full w-full fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.3)]"
           : ""
       }
    `}
      //   style={{
      //     backgroundColor: "rgba(0,0,0,0.3)",
      //     width: "100%",
      //     height: "100%",
      //     position: "fixed",
      //     top: "0",
      //     left: "0",
      //   }}
    >
      <div
        onClick={handleRouteSwitch}
        className={`w-[70%] h-screen bg-white absolute left-0 top-0 z-10 ${
          navToggle ? "translate-x-[0%]" : "-translate-x-[100%]"
        } transition-all duration-500 `}
      >
        <ul className="flex flex-col px-3 gap-3 pt-9 relative">
          <button
            // ref={ref}
            onClick={handleClose}
            className="w-fit h-fit absolute right-0 top-0 p-2 text-black"
          >
            <CloseSquare className="text-black" />
          </button>
          <li className="border-b border-b-[#CCCCD0] py-1">
            <Link
              onClick={handleCloserModal}
              className="text-[#09081D] text-[14px] font-normal"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li className="border-b border-b-[#CCCCD0] py-1">
            <Link
              onClick={handleCloserModal}
              className="text-[#09081D] text-[14px] font-normal"
              href={"/about-us"}
            >
              About Us
            </Link>
          </li>
          <div
            onClick={handleRouteSwitch}
            className="transition-all duration-700"
          >
            <li className="border-b border-b-[#CCCCD0] py-1 flex flex-col">
              <button
                onClick={handleProductToggle}
                className="text-[#09081D] text-[14px] font-normal flex items-center justify-between"
                // href={"/"}
              >
                <p>Products</p>
                <ArrowDown2
                  className={`w-[16px] h-[16px] text-grey2 ${
                    productItemToggle ? "rotate-180" : null
                  } transition-all duration-500`}
                />
              </button>
              <div
                className={`px-3 pt-2 overflow-hidden ${
                  productItemToggle ? "max-h-[500px]" : "max-h-0"
                } transition-all duration-700`}
              >
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                      onClick={handleCloserModal}
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
                      onClick={handleCloserModal}
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
                      <span className="text-[#161447CC] font-normal text-[14px]">
                        TV
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleCloserModal}
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
                      onClick={handleCloserModal}
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
                      onClick={handleCloserModal}
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
                      onClick={handleCloserModal}
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
                      onClick={handleCloserModal}
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
                      onClick={handleCloserModal}
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
            </li>
          </div>
          <li className="border-b border-b-[#CCCCD0] py-1">
            <Link
              onClick={handleCloserModal}
              className="text-[#09081D] text-[14px] font-normal"
              href={"/faqs"}
            >
              FAQs
            </Link>
          </li>
          <li className="border-b border-b-[#CCCCD0] py-1">
            <Link
              onClick={handleCloserModal}
              className="text-[#09081D] text-[14px] font-normal"
              href={"/support"}
            >
              Support
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;
