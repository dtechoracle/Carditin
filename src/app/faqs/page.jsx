import Accordion from "@/components/Accordion";
import FloatingInfo from "@/components/FloatingInfo";
import Provider from "@/components/Provider";
import { shuffleData } from "@/data/dummy";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const FAQsPage = () => {
  return (
    <section className="w-full h-full bg-[#F5F7FA] pt-10">
      {/* hero section */}
      <section className="w-full flex flex-col md:flex-row justify-between items-center px-2 gap-14 xl:px-[8rem] xl:pt-[5rem]">
        <div className="flex flex-col gap-3 text-center xl:text-left w-full xl:w-full bg-[#9A4AFF] px-2 py-3 rounded-[30px] h-[350px] justify-center items-center">
          <h1 className="text-[#fff] text-[35px] font-light xl:text-[50px] xl:w-[550px] text-center">
            Questions? <br />
            <span className="text-[#fff] font-bold partner">FAQs</span>
          </h1>
        </div>
      </section>
      {/* 2197104475 */}
      {/* little explanation section */}
      <section className="w-full px-2 h-full flex flex-col gap-7 mt-10 xl:px-[8rem] xl:gap-16">
        <section className="flex flex-col justify-center items-center w-full gap-5">
          <section className="flex flex-col  items-center md:flex-row">
            <div className="w-full md:w-[30%]">
              <ul className="flex items-center justify-center md:flex-col md:items-start flex-wrap gap-3">
                <li className="text-[#3F37C9] text-[15px] font-normal">
                  Airtime & Data
                </li>
                <li className="text-[#09081D] text-[15px] font-normal">
                  TV Bills
                </li>
                <li className="text-[#09081D] text-[15px] font-normal">
                  Electric Bills
                </li>
                <li className="text-[#09081D] text-[15px] font-normal">
                  Fund Betting
                </li>
                <li className="text-[#09081D] text-[15px] font-normal">
                  Education
                </li>
                <li className="text-[#09081D] text-[15px] font-normal">
                  Gift Cards
                </li>
                <li className="text-[#09081D] text-[15px] font-normal">
                  Virtual Cards
                </li>
                <li className="text-[#09081D] text-[15px] font-normal">
                  Travel
                </li>
                <li className="text-[#09081D] text-[15px] font-normal">
                  Customer Care
                </li>
              </ul>
            </div>
            <Provider datas={shuffleData} />
          </section>

          <button className="flex items-center justify-center px-3 py-1 border-b-[#3F37C9] border-b">
            <span className="text-[#3F37C9] text-[12px]">View All</span>
            <ArrowRight className="text-[#3F37C9]" />
          </button>
        </section>

        {/* join section */}

        <section
          style={{
            background: "radial-gradient(circle, #4642CF, #644AEE, #003188)",
          }}
          className="w-full flex flex-col justify-center items-center py-9 px-3 gap-8 rounded-[20px] xl:h-[300px]"
        >
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-white text-[25px] font-normal xl:text-[50px]">
              Join Carditin Today
            </h1>
            <p className="text-white text-[12px] font-normal xl:text-[16px] xl:w-[78%] xl:mx-auto">
              Our advance technology and secure systems provide a safe and
              reliable way to handle your money wisely. Pay bills, buy airtime,
              use virtual cards, and more with ease, ensuring a safe financial
              experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full xl:w-[50%]">
            <Link
              href={"#"}
              className="col-span-1 border-[#CCCCD0] border rounded-[10px] flex justify-center items-center bg-white"
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
              className="col-span-1 border-[#CCCCD0] border rounded-[10px] flex justify-center items-center bg-white"
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
        </section>
      </section>
    </section>
  );
};

export default FAQsPage;
