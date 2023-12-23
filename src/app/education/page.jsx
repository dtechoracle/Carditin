import FloatingInfo from "@/components/FloatingInfo";
import Provider from "@/components/Provider";
import { education } from "@/data/dummy";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EducationPage = () => {
  return (
    <section className="w-full h-full bg-[#F5F7FA] pt-10">
      {/* hero section */}
      <section className="w-full flex flex-col justify-between md:items-start px-2 gap-14 md:px-[6rem] mb-20">
        <div className="w-full bg-[#E3E2F7] rounded-[20px] px-3 py-4 flex flex-col md:flex-row gap-14 md:px-6 md:py-9 md:items-center">
          <div className="flex flex-col gap-4 md:w-[60%]">
            <h1 className="text-[30px] text-[#09081D] font-[700] md:text-[40px]">
              Invest in{" "}
              <span className="text-[#3F37C9] partner">knowledge</span> without
              Stress
            </h1>
            <p className="text-[12px] text-[#161447CC] font-normal xl:text-[20px]">
              CARDITIN supports your educational endeavors by effortlessly
              managing your tuition payments.
            </p>
          </div>
          <div className="md:w-[40%] h-full">
            <Image
              src={"/assets/education.png"}
              alt=""
              width={250}
              height={200}
              className="w-full  h-[250px] md:h-full"
            />
          </div>
        </div>
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
      </section>

      {/* Logo section */}
      <section className="w-full px-2 h-full flex flex-col gap-7 md:px-[6rem] xl:gap-16">
        <section className="grid grid-cols-1 gap-y-9 xl:gap-20">
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                Easy Payment Process
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Make paying your school fees a breeze with our safe and
                easy-to-use platform.
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
              src={"/assets/easy.png"}
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
      Multiple Payment Options
    </h1>
    <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
      Choose from various payment methods, including Credit/Debit
      cards, online banking, and more
    </p>
    <button className="flex items-center justify-center px-3 py-1 border-b-[#3F37C9] border-b w-fit">
      <span className="text-[#3F37C9] text-[12px]">
        Download Carditin
      </span>
      <ArrowRight className="text-[#3F37C9]" />
    </button>
  </div>
  <Image
    src={"/assets/vcard.png"}
    alt=""
    className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%]"
    width={250}
    height={200}
  />

          </div>
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <h1 className="text-[18px] text-[#09081D] font-bold xl:text-[25px]">
                Quick Confirmation
              </h1>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[17px]">
                Get an instant thumbs-up as soon as you make a payment,
                guaranteeing a swift and hassle-free experience.
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
              src={"/assets/quick.png"}
              alt=""
              className="w-full h-[230px] md:object-contain rounded-t-[20px] md:h-[370px] md:w-[40%]"
              width={250}
              height={200}
            />
            {/* </div> */}
          </div>
        </section>

        {/* services section */}
        <Provider title={"Education"} datas={education} />
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

export default EducationPage;
