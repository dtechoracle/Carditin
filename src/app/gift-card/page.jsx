import FloatingInfo from "@/components/FloatingInfo";
import Provider from "@/components/Provider";
import { gift } from "@/data/dummy";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GiftCardPage = () => {
  return (
    <section className="w-full h-full bg-[#F5F7FA] pt-10">
      {/* hero section */}
     <section className="w-full flex flex-col md:flex-row justify-between items-center px-2 gap-14 h-screen lg:px-[5rem] mb-44 md:mb-10">
        <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-[50%]">
          <h1 className="text-[#09081D] font-[700] text-[30px] leading-none md:text-[28px] font-bold xl:text-[40px]">
            {/* <span className="text-[#3F37C9]">
              Indulge in <br /> Uninterrupted <br />
            </span>
            Entertainment without <br />the Stress of Missed <br />Payments. */}
            Explore the Versatility <br /> of CARDITIN as an <br /> Excellent Platform for <br /> Trading your Gift cards <br /> for Services or Cash
            <span className="text-[#3F37C9]">Gift cards for Services or Cash</span>

          </h1>
          <p className="text-[#161447CC] text-[12px] font-normal xl:text-[22px]">
            Join us and experience the convenience of turning your gift cards into valuable resources.
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
            src={"/assets/gift.png"}
            alt="Home"
            width={320}
            height={500}
            className="object-cover w-[500px] md:mt-40"
          />
        </div>
      </section>

      {/* Logo section */}
      <section className="w-full px-2 h-full flex flex-col gap-7 md:px-[6rem] xl:gap-16">
        <section className="grid grid-cols-1 md:mt-20 md:grid-cols-3 gap-8 md:justify-items-center">
          <div className="w-full lg:w-[60%] rounded-[15px] flex gap-5 flex-col items-start">
            <Image
              src={"/assets/bulleye.svg"}
              width={40}
              height={40}
              className="w-[30px] h-[30px]"
              alt=""
            />
            <p className="text-[13px] text-[#000000CC] font-normal text-left">
              Enjoy a speedy and secure process, ensuring you get the cash you
              deserve promptly.
            </p>
          </div>
          <div className="w-full lg:w-[60%] rounded-[15px] flex flex-col gap-5 items-start">
            <Image
              src={"/assets/lightbulb.svg"}
              width={40}
              height={40}
              className="w-[30px] h-[30px]"
              alt=""
            />
            <p className="text-[13px] text-[#000000CC] font-normal text-left">
              Turn your unused  gift cards into cash effortlessly on Carditin.
            </p>
          </div>
          <div className="w-full lg:w-[60%] rounded-[15px] flex flex-col gap-5 items-start justify-center">
            <Image
              src={"/assets/med.svg"}
              width={40}
              height={40}
              className="w-[30px] h-[30px]"
              alt=""
            />
            <p className="text-[13px] text-[#000000CC] font-normal text-left">
              Unlock the value of your gift cards by trading them for cash on
              Carditin.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-y-9 xl:gap-20">
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                Trade Variety, <br /> Trade Value!
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Whether it is iTunes, Amazon, or more, Carditin is your go-to
                platform for trading a variety of gift cards.
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
              src={"/assets/trade.png"}
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
      Maximize Your Returns <br />with Carditin!
    </h1>
    <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
      Experience a user-friendly platform designed to help you
      maximize the cash returns on your gift cards.
    </p>
    <button className="flex items-center justify-center px-3 py-1 border-b-[#3F37C9] border-b w-fit">
      <span className="text-[#3F37C9] text-[12px]">
        Download Carditin
      </span>
      <ArrowRight className="text-[#3F37C9]" />
    </button>
  </div>
  <Image
    src={"/assets/return.png"}
    alt=""
    className="md:w-[40%] w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:order-1 md:w-[40%]"
    width={250}
    height={200}
  />

          </div>
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                No More Unused Gift <br />Cards – Get Cash Now
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Do not let your gift cards go to waste. Trade them for cash on
                Carditin and put the value back in your hands.
              </p>
              <button className="flex items-center justify-center px-3 py-1 border-b-[#3F37C9] border-b w-fit">
                <span className="text-[#3F37C9] text-[12px]">
                  Join Carditin
                </span>
                <ArrowRight className="text-[#3F37C9]" />
              </button>
            </div>

            <Image
              src={"/assets/person2.png"}
              alt=""
              className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%]"
              width={250}
              height={200}
            />
          </div>
        </section>

        {/* services section */}
        <Provider title={"Gift Cards"} datas={gift} />
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

export default GiftCardPage;
