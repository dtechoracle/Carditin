import FloatingInfo from "@/components/FloatingInfo";
import Provider from "@/components/Provider";
import { airtime } from "@/data/dummy";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AirtimeAndDataPage = () => {
  return (
    <section className="w-full h-full bg-[#F5F7FA] pt-10">
      {/* hero section */}
      <section className="w-full flex flex-col md:flex-row justify-between items-center px-2 gap-14 h-screen lg:px-[5rem] mb-44 md:mb-10">
        <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-[50%]">
          <h1 className="text-[#09081D] leading-none text-[35px] md:mt-24 font-bold xl:text-[60px]">
            Airtime & Mobile <br />Data Refill 
            <span className="text-[#3F37C9] partner">at Ease</span>
          </h1>
          <br />
          <p className="text-[#161447CC] text-[12px] font-normal xl:text-[16px]">
            Our advance technology and secure systems provide  a safe and reliable way to handle your money wisely. Pay bills, buy airtime, use virtual cards, and more with ease, ensuring a  safe financial experience.
          </p>
          <div className="grid grid-cols-2 gap-4 xl:w-[50%]">
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
        </div>
        <div className="md:w-[40%]">
          <Image
            src={"/assets/mobile.png"}
            alt="Home"
            width={320}
            height={500}
            className="object-cover w-[500px] md:mt-60"
          />
        </div>
      </section>

      {/* Logo section */}
      <section className="w-full px-2 h-full flex flex-col gap-7 md:px-[6rem] xl:gap-16">
        <section className="grid grid-cols-1 gap-y-9 xl:gap-20">
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                Find all Nigerian mobile networks on Carditin
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Buy Airtel, Glo, MTN and 9Mobile airtime and internet data
                directly from your account.
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
              src={"/assets/nigeria.png"}
              alt=""
              className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%]"
              width={250}
              height={200}
            />
            {/* </div> */}
          </div>
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
  <div className="flex flex-col gap-5 md:w-[40%]">
    <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
      Get your airtime top-up in a few seconds.
    </h1>
    <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
      You’ll get your airtime or data soon after you complete your
      purchase on the app.
    </p>
    <button className="flex items-center justify-center px-3 py-1 border-b-[#3F37C9] border-b w-fit">
      <span className="text-[#3F37C9] text-[12px]">
        Download Carditin
      </span>
      <ArrowRight className="text-[#3F37C9]" />
    </button>
  </div>
  <Image
    src={"/assets/seconds.png"}
    alt=""
    className="md:w-[40%] w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%]"
    width={250}
    height={200}
  />
</div>

          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                Scheduled Airtime & Data payment
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Lorem ipsum dolor sit amet consectetur. Mauris purus diam diam
                scelerisque amet at. Faucibus egestas.
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
              src={"/assets/schedule.png"}
              alt=""
              className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%]"
              width={250}
              height={200}
            />
            {/* </div> */}
          </div>
        </section>

        {/* services section */}
        <Provider title={"Airtime & Data"} datas={airtime} />

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

export default AirtimeAndDataPage;
