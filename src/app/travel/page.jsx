'use client'
import FloatingInfo from "@/components/FloatingInfo";
import Provider from "@/components/Provider";
import { travel } from "@/data/dummy";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const TravelPage = () => {

  const pathname = usePathname()
  console.log(pathname);
  return (
    <section className="w-full h-full bg-[#F5F7FA] pt-10">
      {/* hero section */}
      <section className="w-full flex flex-col justify-between md:items-start px-2 gap-14 md:px-[6rem] mb-20">
        <section className="w-full md:mt-24 bg-white rounded-[20px] px-3 py-4 flex flex-col md:flex-row gap-14 md:px-6 md:py-9 md:items-center">
          <div className="flex flex-col gap-4 md:w-[60%]">
            <h1 className="text-[35px] text-center text-[#09081D] font-[700] md:text-[40px]">
              Plan your <span className="text-[#3F37C9]">Dream <br /> Getaways</span>{" "}
              Without <br /> Financial Strain.
            </h1>
            <p className="text-[#161447CC] text-[12px] text-center font-normal xl:text-[16px]">
              CARDITIN takes care of your travel expenses, creating memorable
              journeys without the worry of managing costs.
            </p>
          </div>
          <div className="md:w-[40%] h-full">
            <Image
              src={"/assets/pngwing1.png"}
              alt=""
              width={250}
              height={200}
              className="w-full object-cover h-[250px] xl:h-full"
            />
          </div>
        </section>
        <div className="grid grid-cols-2 gap-4 md:w-[40%]">
          <Link
            href={"#"}
            className="col-span-1 border-[#CCCCD0] border rounded-[10px] flex justify-center items-center py-2"
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
            className="col-span-1 border-[#CCCCD0] border rounded-[10px] flex justify-center items-center py-2"
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

      {/* Logo section */}
      <section className="w-full px-2 h-full flex flex-col gap-7 md:px-[6rem] xl:gap-16">
        <section className="grid grid-cols-1 gap-y-9 xl:gap-20">
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                All-in-One Travel <br />Help
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Easily plan your trip by booking flights, hotels, and
                transportation all in one place.
              </p>
              <button className="flex items-center justify-center px-3 py-1 border-b-[#3F37C9] border-b w-fit">
                <span className="text-[#3F37C9] text-[12px]">
                  Join Carditin
                </span>
                <ArrowRight className="text-[#3F37C9]" />
              </button>
            </div>

            {/* <div className="xl:mx-auto"> */}
            <Image
              src={"/assets/all-in.png"}
              alt=""
              className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%]"
              width={250}
              height={200}
            />
            {/* </div> */}
          </div>
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
  <div className="flex flex-col gap-5 md:w-[40%] md:order-2">
    <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
      Great Deals
    </h1>
    <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
      Grab special discounts and offers on travel packages to make
      your journey budget-friendly.
    </p>
    <button className="flex items-center justify-center px-3 py-1 border-b-[#3F37C9] border-b w-fit">
      <span className="text-[#3F37C9] text-[12px]">
        Download Carditin
      </span>
      <ArrowRight className="text-[#3F37C9]" />
    </button>
  </div>
  <Image
    src={"/assets/deal.png"}
    alt=""
    className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%] md:order-1"
    width={250}
    height={200}
  />
          </div>
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                24/7 Support
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Our support team is ready 24/7 to assist with any questions or
                concerns about your travel plans.
              </p>
              <button className="flex items-center justify-center px-3 py-1 border-b-[#3F37C9] border-b w-fit">
                <span className="text-[#3F37C9] text-[12px]">
                  Join Carditin
                </span>
                <ArrowRight className="text-[#3F37C9]" />
              </button>
            </div>

            {/* <div className="xl:mx-auto"> */}
            <Image
              src={"/assets/travel-support.svg"}
              alt=""
              className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%]"
              width={250}
              height={200}
            />
            {/* </div> */}
          </div>
        </section>

        {/* services section */}
        <Provider title={"Travel"} datas={travel} />
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

export default TravelPage;
