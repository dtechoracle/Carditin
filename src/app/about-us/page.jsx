import FloatingInfo from "@/components/FloatingInfo";
import { ArrowRight, ArrowRight2, Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsPage = () => {
  return (
    <section className="w-full h-full bg-[#F5F7FA] pt-10">
      {/* hero section */}
      <section className="w-full flex flex-col md:flex-row justify-between items-center px-2 gap-14 md:px-[6rem] md:pt-[5rem]">
        <div className="flex flex-col gap-3 text-center xl:text-left w-full xl:w-full bg-[#E3E2F7] px-2 py-3 rounded-[30px] h-[350px] justify-center items-center">
          <h1 className="text-[#09081D] text-[35px] font-bold md:text-[50px] md:w-[550px] text-center">
            Welcome to the future of{" "}
            <span className="text-[#3F37C9] partner">payments</span>
          </h1>
        </div>
      </section>

      {/* little explanation section */}
      <section className="w-full px-2 h-full flex flex-col gap-7 mt-20 md:px-[6rem] xl:gap-16">
        <section className="grid grid-cols-1 gap-y-9 xl:gap-20">
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 xl:w-[55%]">
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[20px]">
                At CARDITIN, we pride ourselves on being your go-to platform for
                seamless financial management. Our mission is to simplify your
                life by providing efficient solutions across various domains.
              </p>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[20px]">
                CARDITIN is more than just a financial services platform; we are
                your partner in navigating life financial demands. Whether it
                ensuring uninterrupted entertainment, timely bill payments,
                effortless fund betting, supporting educational pursuits, or
                facilitating stress-free travel experiences, we have got you
                covered
              </p>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(63, 55, 201, 0.00) 0%, rgba(63, 55, 201, 0.50) 100%), #E3E2F7",
              }}
              className="w-[full] h-[370px] relative rounded-[20px] xl:h-[550px] xl:w-[45%]"
            >
              {/* <div className="xl:mx-auto"> */}
              <Image
                src={"/assets/total.png"}
                alt=""
                className="w-[281px] h-[230px] object-contain rounded-t-[20px] xl:h-[370px] xl:w-[350px] absolute bottom-0 -translate-x-[50%] left-[50%]"
                width={250}
                height={200}
              />
              {/* </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 xl:w-[55%]">
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[20px]">
                At the heart of CARDITIN is a commitment to delivering
                convenience and peace of mind. We understand that managing
                finances can be overwhelming, so we have designed our services
                to alleviate the stress associated with everyday transactions.
                With CARDITIN, you can focus on what matters most to you, while
                we take care of the rest.
              </p>
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[20px]">
                Our vision is to be the trusted ally that simplifies and
                enhances your financial journey. We strive to create a world
                where financial tasks are no longer a source of worry, but
                rather an effortless and efficient aspect of your daily life.
              </p>
            </div>
            <div
              style={{
                background: "#5A53D0",
              }}
              className="w-[full] h-[370px] relative rounded-[20px] xl:h-[550px] xl:w-[45%]"
            >
              <FloatingInfo
                title={"Transfer Successful"}
                price={"₦10,500.00"}
                src={"/assets/nav.svg"}
                width={18}
                height={18}
                className={
                  "absolute -translate-x-[50%] left-[50%] top-[44%] z-10"
                }
              />
              <FloatingInfo
                title={"Netflix Subscription"}
                price={"₦3,300.00"}
                src={"/assets/net.png"}
                width={18}
                height={18}
                className={
                  "absolute -translate-x-[50%] left-[62%] top-[58%] z-10"
                }
              />
              <FloatingInfo
                title={"DSTV Subscription"}
                price={"₦6,900.00"}
                src={"/assets/go.png"}
                width={18}
                height={18}
                className={
                  "absolute -translate-x-[50%] left-[56%] top-[74%] z-10"
                }
              />

              {/* <div className="xl:mx-auto"> */}
              <Image
                src={"/assets/sub.png"}
                alt=""
                className="w-[281px] h-[230px] rounded-t-[20px] xl:h-[370px] xl:w-[350px] absolute bottom-0"
                width={250}
                height={200}
              />
              {/* </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 md:w-[40%]">
              <p className="text-[12px] text-[#09081D] font-normal xl:text-[20px]">
                At CARDITIN, integrity is the cornerstone of our operations. We
                are committed to transparent and ethical practices, ensuring
                that every interaction is guided by honesty and trust. Your
                financial well-being is our top priority, and we uphold the
                highest standards of integrity in all our services.
              </p>
            </div>
            {/* <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(63, 55, 201, 0.00) 0%, rgba(63, 55, 201, 0.50) 100%), #E3E2F7",
              }}
              className="w-[full] h-[370px] relative rounded-[20px] xl:h-[550px] xl:w-[45%]"
            >
              <FloatingInfo
                title={"Hi there"}
                src={"/assets/nav.svg"}
                width={18}
                height={18}
                className={
                  "absolute -translate-x-[50%] left-[50%] top-[44%] z-10"
                }
              />
              <FloatingInfo
                title={"Netflix Subscription"}
                price={"₦3,300.00"}
                src={"/assets/net.png"}
                width={18}
                height={18}
                className={
                  "absolute -translate-x-[50%] left-[62%] top-[58%] z-10"
                }
              />
              <FloatingInfo
                title={"DSTV Subscription"}
                price={"₦6,900.00"}
                src={"/assets/go.png"}
                width={18}
                height={18}
                className={
                  "absolute -translate-x-[50%] left-[56%] top-[74%] z-10"
                }
              /> */}

            {/* <div className="xl:mx-auto"> */}
            <Image
              src={"/assets/opay.png"}
              alt=""
              className="w-full h-[230px] rounded-t-[20px] md:h-[370px] md:w-[40%]"
              width={250}
              height={200}
            />
            {/* </div> */}
            {/* </div> */}
          </div>
        </section>

        {/* Download app section */}

        {/*  */}

        {/*  */}

        {/* Our value section */}
        <section className="flex flex-col justify-center items-center gap-8 my-10 xl:gap-y-14">
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-[24px] font-bold">Our Values</h1>
            <p className="text-[13px] text-[#161447CC]">
              When you combine human excellence, expertise and technology, this
              is what you get.
            </p>
          </div>
          <section className="grid grid-cols-1 gap-8 xl:grid-cols-3">
            <div className="w-full rounded-[15px] flex flex-col gap-5 items-center justify-center">
              <Image
                src={"/assets/bulleye.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <h1 className="text-[20px] font-bold">Integrity</h1>
              <p className="text-[13px] text-[#000000CC] font-normal text-center">
                At CARDITIN, integrity is the cornerstone of our operations. We
                are committed to transparent and ethical practices, ensuring
                that every interaction is guided by honesty and trust. Your
                financial well-being is our top priority, and we uphold the
                highest standards of integrity in all our services.
              </p>
            </div>
            <div className="w-full rounded-[15px] flex flex-col gap-5 items-center justify-center">
              <Image
                src={"/assets/lightbulb.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <h1 className="text-[20px] font-bold">Innovation</h1>
              <p className="text-[13px] text-[#000000CC] font-normal text-center">
                Innovation is at the core of CARDITIN identity. We continually
                strive to bring you cutting-edge solutions that not only meet
                but exceed your financial expectations. From leveraging
                technology for seamless transactions to pioneering new ways to
                enhance your financial experience, innovation is woven into
                every aspect of our services.
              </p>
            </div>
            <div className="w-full rounded-[15px] flex flex-col gap-5 items-center justify-center">
              <Image
                src={"/assets/med.svg"}
                width={40}
                height={40}
                className="w-[30px] h-[30px]"
                alt=""
              />
              <h1 className="text-[20px] font-bold">
                Customer-Centric Approach
              </h1>
              <p className="text-[13px] text-[#000000CC] font-normal text-center">
                Your satisfaction is our success. CARDITIN is dedicated to
                understanding and meeting the unique needs of our users. Our
                customer-centric approach ensures that our services are tailored
                to enhance your convenience, making your financial journey with
                us both enjoyable and stress-free.
              </p>
            </div>
          </section>
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

export default AboutUsPage;
