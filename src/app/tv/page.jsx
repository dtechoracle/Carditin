import FloatingInfo from "@/components/FloatingInfo";
import Provider from "@/components/Provider";
import { tv } from "@/data/dummy";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TVPage = () => {
  return (
    <section className="w-full h-full bg-[#F5F7FA] pt-10">
      {/* hero section */}
      <section className="w-full flex flex-col md:flex-row justify-between items-center px-2 gap-14 lg:px-[6rem] md:pb-10">
        <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-[50%]">
          <h1 className="text-[#09081D] leading-none text-[35px] font-bold xl:text-[60px]">
            <span className="text-[#3F37C9]">Indulge in Uninterrupted</span>{" "}
            <br />
            Entertainment without the Stress of Missed Payments.
          </h1>
          <p className="text-[#161447CC] text-[12px] font-normal xl:text-[22px]">
            CARDITIN efficiently handles your TV bills, ensuring a seamless
            experience.
          </p>
          <div className="grid grid-cols-2 gap-4 md:w-[50%]">
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
            src={"/assets/tve.svg"}
            alt="Home"
            width={320}
            height={500}
            className="object-cover w-[500px]"
          />
        </div>
      </section>

      {/* Logo section */}
      <section className="w-full px-2 h-full flex flex-col gap-7 lg:px-[6rem] xl:gap-16 pt-[6rem]">
        <section className="grid grid-cols-1 gap-y-9 xl:gap-20">
          <div className="flex flex-col w-full gap-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 md:w-[40%] w-full">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                Streamline Your <br /> Entertainment
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Easily pay your TV bills with a few clicks, ensuring
                uninterrupted access to your favorite shows and channels.
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
              src={"/assets/stream.png"}
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
      Timely Reminders
    </h1>
    <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
      Receive timely reminders for upcoming TV bill payments, helping
      you stay on top of your entertainment expenses.
    </p>
    <button className="flex items-center justify-center px-3 py-1 border-b-[#3F37C9] border-b w-fit">
      <span className="text-[#3F37C9] text-[12px]">
        Download Carditin
      </span>
      <ArrowRight className="text-[#3F37C9]" />
    </button>
  </div>
  <Image
    src={"/assets/time.png"}
    alt=""
    className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[470px] md:w-[40%] md:order-1"
    width={250}
    height={200}
  />
</div>

          
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                Bundle Discounts
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Explore exclusive bundle discounts when combining TV bills with
                other services on our platform.
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
              src={"/assets/bundle.png"}
              alt=""
              className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%]"
              width={250}
              height={200}
            />
            {/* </div> */}
          </div>
        </section>

        {/* services section */}
        <Provider title={"Tv Bills"} datas={tv} />
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

export default TVPage;
