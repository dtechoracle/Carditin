import FloatingInfo from "@/components/FloatingInfo";
import Provider from "@/components/Provider";
import { virtual } from "@/data/dummy";
import { ArrowRight, ArrowRight2, Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const VirtualCardPage = () => {
  return (
    <section className="w-full h-full bg-[#F5F7FA] pt-10">
      {/* hero section */}
      <section className="w-full flex flex-col md:flex-row justify-between items-center px-2 gap-14 md:px-[6rem] mb-44">
        <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-[50%]">
          <h1 className="text-[#09081D] text-[35px] md:text-[28px] font-bold xl:text-[50px]">
            <span className="text-[#3F37C9] partner">Empower </span>
            your Finances with Carditin Virtual Card
          </h1>
          <p className="text-[#161447CC] text-[12px] font-normal xl:text-[22px]">
            Your Key to Secure and Seamless Transactions
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
            src={"/assets/empower.png"}
            alt="Home"
            width={320}
            height={500}
            className="object-cover w-[500px]"
          />
        </div>
      </section>

      {/* Logo section */}
      <section className="w-full px-2 h-full flex flex-col gap-7 md:px-[6rem] xl:gap-16">
        {/* services section */}
        <section className="flex flex-col justify-center items-center gap-8 my-10 xl:gap-y-14">
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-[24px] text-black font-bold">
              A Dollar Card That You Can Trust Any Day, Anytime, Anywhere.
            </h1>
            <p className="text-[13px] text-[#161447CC]">
              No more failed payments. Once Visa or MasterCard is accepted
              there, your Carditin Crypto Card will work.
            </p>
          </div>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="w-full rounded-[15px] flex gap-5 items-start justify-start">
              <Image
                src={"/assets/card.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <div className="text-left flex flex-col gap-4">
                <h1 className="text-[20px] text-black font-bold">
                  Seamless Card Management
                </h1>
                <p className="text-[13px] text-[#000000CC] font-normal">
                  Easily create and manage physical and virtual cards from
                  anywhere. Create cards that help your business grow, whether
                  you are a large corporation, a small company, or a freelancer.
                  It is Crypto spending on the go!
                </p>
              </div>
            </div>
            <div className="w-full rounded-[15px] flex gap-5 items-start justify-start">
              <Image
                src={"/assets/world.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <div className="text-left flex flex-col gap-4">
                <h1 className="text-[20px] text-black font-bold">Global Access</h1>
                <p className="text-[13px] text-[#000000CC] font-normal">
                  Pay in seconds with the Carditin Crypto Dollar Card (Both
                  Virtual and Physical) across millions of physical stores
                  globally and on the Internet. It also allows for contactless
                  payments, POS payments, and withdrawing cash from compatible
                  ATMs worldwide.
                </p>
              </div>
            </div>
            <div className="w-full rounded-[15px] flex gap-5 items-start justify-start">
              <Image
                src={"/assets/uni.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <div className="text-left flex flex-col gap-4">
                <h1 className="text-[20px] text-black font-bold">
                  Access to a Robust Functionality
                </h1>
                <p className="text-[13px] text-[#000000CC] font-normal">
                  You can check your balance, view your transaction history,
                  freeze/disable your cards, and reload instantly within the
                  Carditin App.
                </p>
              </div>
            </div>
            <div className="w-full rounded-[15px] flex gap-5 items-start justify-start">
              <Image
                src={"/assets/shield.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <div className="text-left flex flex-col gap-4">
                <h1 className="text-[20px] text-black font-bold">
                  Advanced Card Security Infrastructure
                </h1>
                <p className="text-[13px] text-[#000000CC] font-normal">
                  Our EMV chip-card security allows for the safe use of your
                  cards anywhere on the Internet and in stores globally. It also
                  allows you to lock, freeze and disable your card whenever you
                  want.
                </p>
              </div>
            </div>
            <div className="w-full rounded-[15px] flex gap-5 items-start justify-start">
              <Image
                src={"/assets/ban.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <div className="text-left flex flex-col gap-4">
                <h1 className="text-[20px] text-black font-bold">Zero Conversion Fees</h1>
                <p className="text-[13px] text-[#000000CC] font-normal">
                  Funding your Crypto Dollar Card on Carditin is FREE. You pay
                  zero conversion/transaction fees.
                </p>
              </div>
            </div>
            <div className="w-full rounded-[15px] flex gap-5 items-start justify-start">
              <Image
                src={"/assets/meter.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <div className="text-left flex flex-col gap-4">
                <h1 className="text-[20px] text-black font-bold">
                  Instant Access to Funds
                </h1>
                <p className="text-[13px] text-[#000000CC] font-normal">
                  Once you fund your card, you get instant access to your funds,
                  and you can start making payments with your card immediately.
                </p>
              </div>
            </div>
            <div className="w-full rounded-[15px] flex gap-5 items-start justify-start">
              <Image
                src={"/assets/med.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <div className="text-left text-black flex flex-col gap-4">
                <h1 className="text-[20px] font-bold">
                  Trusted by over 10,000 People
                </h1>
                <p className="text-[13px] text-[#000000CC] font-normal">
                  More than 10,000 people use the Carditin crypto debit card to
                  make payments.
                </p>
              </div>
            </div>
            <div className="w-full rounded-[15px] flex gap-5 items-start justify-start">
              <Image
                src={"/assets/object.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <div className="text-left flex flex-col gap-4">
                <h1 className="text-[20px] text-black font-bold">Design Your Own Card</h1>
                <p className="text-[13px] text-[#000000CC] font-normal">
                  Let your creativity flow by designing your own card. Make it
                  come alive!
                </p>
              </div>
            </div>
          </section>
        </section>

        <Provider title={"Virtual Card"} datas={virtual} />

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

export default VirtualCardPage;
