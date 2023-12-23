import { Facebook } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-2 w-full h-full pt-14 lg:px-[5rem] bg-[#F5F7FA]">
      <div
        style={{
          borderTop: "1px solid #CCCCD0",
          borderBottom: "1px solid #CCCCD0",
        }}
        className="py-6 flex flex-col w-full gap-10 md:flex-row md:justify-between"
      >
        <Link href={"/"}>
          <Image
            src={"/assets/Logo3.svg"}
            alt=""
            width={130}
            height={30}
            className="w-[150px] h-[37px]"
          />
        </Link>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  href={"/about-us"}
                  className="text-[#16144780] text-[17px] font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/about-us"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-bold"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  VTU
                </Link>
              </li>
              <li>
                <Link
                  href={"/gift-card"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  href={"/virtual-card"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Virtual Cards
                </Link>
              </li>
              <li>
                <Link
                  href={"/bills"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Utility Bills
                </Link>
              </li>
              <li>
                <Link
                  href={"/betting"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Betting
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  href={"/support"}
                  className="text-[#16144780] text-[17px] font-bold"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href={"/support#contactus"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Contacts Us
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Online Chat
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Telegram
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-bold"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Term of use
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  Virtual card term of use
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  AML policy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[#16144780] text-[17px] font-normal"
                >
                  KYC policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-5 grid grid-cols-1 w-full gap-8 md:grid-cols-3 md:py-10">
        <h1 className="text-[#09081D] font-semibold text-[20px] xl:col-span-1">
          Stay connect with anyone & anywhere
        </h1>
        <div className="w-full xl:col-span-1">
          <h1 className="text-[#09081D] font-semibold text-[14px]">
            WE SOCIAL
          </h1>
          <ul className="flex items-center gap-5">
            <li className="w-[40px] h-[40px] border border-[#CCCCD0] p-2 rounded-[10px]">
              <Link href={"#"}>
                <Image
                  src={"/assets/facebook.svg"}
                  alt="facebook"
                  width={20}
                  height={20}
                  className="w-[24px] height-[24px]"
                />
              </Link>
            </li>
            <li className="w-[40px] h-[40px] border border-[#CCCCD0] p-2 rounded-[10px]">
              <Link href={"#"}>
                <Image
                  src={"/assets/in.svg"}
                  alt="linkedin"
                  width={20}
                  height={20}
                  className="w-[24px] height-[24px]"
                />
              </Link>
            </li>
            <li className="w-[40px] h-[40px] border border-[#CCCCD0] p-2 rounded-[10px]">
              <Link href={"#"}>
                <Image
                  src={"/assets/insta.svg"}
                  alt="instagram"
                  width={20}
                  height={20}
                  className="w-[24px] height-[24px]"
                />
              </Link>
            </li>
            <li className="w-[40px] h-[40px] border border-[#CCCCD0] p-2 rounded-[10px]">
              <Link href={"#"}>
                <Image
                  src={"/assets/twitter.svg"}
                  alt="twitter"
                  width={20}
                  height={20}
                  className="w-[24px] height-[24px]"
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:w-full">
          <Link
            href={"#"}
            className="col-span-1 border-[#CCCCD0] border rounded-[10px] flex justify-center items-center py-2 bg-[#bdbdbd]"
          >
            <Image
              src={"/assets/apple.svg"}
              alt=""
              width={140}
              height={40}
              className="w-[100px] h-[40px]"
            />
          </Link>
          <Link
            href={"#"}
            className="col-span-1 border-[#CCCCD0] border rounded-[10px] flex justify-center items-center py-2 bg-[#bdbdbd]"
          >
            <Image
              src={"/assets/google.svg"}
              alt=""
              width={140}
              height={40}
              className="w-[100px] h-[40px]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
