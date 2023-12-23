import FloatingInfo from "@/components/FloatingInfo";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { ArrowRight, ArrowRight2, Star, Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full h-full bg-[#f5f7fa]">
        {/* hero section */}
        <div className=""></div>
        <section className="w-full flex bg-[#E3E2F7] flex-col md:flex-row justify-between items-center px-2 gap-14 md:px-[6rem] mb-10">
          <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-[50%]">
            <h1 className="text-[#09081D] mt-20 text-[35px] md:text-[28px] font-[700] xl:text-[50px]">
              The Borderless Payment{" "}
              <span className="text-[#3F37C9] partner">Partner</span> <br />You Can
              Trust.
            </h1>
            <p className="text-[#161447CC] text-base leading-9 height-24">
              Our advanced technology and secure systems provide a safe and
              reliable way to transfer funds, allowing you to benefit from
              reduced processing times and improved efficiency.
            </p>
            <div className="grid grid-cols-2 w-full gap-4 xl:w-[50%]">
              <button className="col-span-1 flex items-center justify-center gap-4 border border-[#09081D] rounded-[10px] py-2">
  <span className="text-[9px] text-[#09081D] font-semibold">
    Get started
  </span>
  <ArrowRight className="w-[24px] h-[24px]" color="#000" />
</button>

              <button className="col-span-1 rounded-[10px] bg-[#09081D] md:hidden text-white text-[9px] py-2">
                log in
              </button>
            </div>
          </div>

          <div className="md:w-[40%] md:mt-36">
            <Image
              src={"/assets/Frame4.png"}
              alt="Home"
              width={320}
              height={500}
              className="object-cover w-[500px]"
            />
          </div>
        </section>

        {/* Logo section */}
        <section className="w-full bg-[#f5f7fa] px-2 h-full flex flex-col gap-7 mt-20 md:px-[6rem] xl:gap-16">
          <div className="w-full h-[300px] flex justify-center items-center">
            <Image
              src={"/assets/LogoNew.svg"}
              width={90}
              height={90}
              alt="logo"
              className="w-[578.2px] h-[578.2px]"
            />
          </div>

          {/* services section */}
          <section className="w-full bg-[#0D0C2B] rounded-[20px] flex flex-col gap-8 xl:gap-16 xl:pb-8 p-4 py-7 pb-16 xl:h-[600px] xl:justify-between">
            <h1 className="text-white text-[17px] font-semibold w-[200px] xl:text-[35px] xl:w-[400px]">
              Where seamless transactions give you the ultimate flexibility
            </h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10">
              <div
                style={{
                  border: "0.79px solid rgba(255, 255, 255, 0.50)",
                  background:
                    "linear-gradient(222deg, rgba(117, 112, 216, 0.19) 3.09%, rgba(117, 112, 216, 0.00) 79.93%), #161447",
                }}
                className="flex flex-col py-5 px-3 rounded-[18px] gap-3 xl:col-span-1 xl:px-8 xl:py-10"
              >
                <Image
                  src={"/assets/chart.svg"}
                  alt=""
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px]"
                />
                <h1 className="text-white text-[20px] font-semibold">
                  Borderless payments
                </h1>
                <p className="text-[#9F9BE4] text-[14px] font-light">
                  Customers send money internationally with affordable fees and
                  great exchange rates.
                </p>
              </div>
              <div
                style={{
                  border: "0.79px solid rgba(255, 255, 255, 0.50)",
                  background:
                    "linear-gradient(222deg, rgba(117, 112, 216, 0.19) 3.09%, rgba(117, 112, 216, 0.00) 79.93%), #161447",
                }}
                className="flex flex-col py-5 px-3 rounded-[18px] gap-3 xl:col-span-1 xl:px-8 xl:py-10"
              >
                <Image
                  src={"/assets/phone.svg"}
                  alt=""
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px]"
                />
                <h1 className="text-white text-[20px] font-semibold">
                  24/7 Customer support
                </h1>
                <p className="text-[#9F9BE4] text-[14px] font-light">
                  Our support team is always happy to assist with your queries
                  and issues 24/7
                </p>
              </div>
              <div
                style={{
                  border: "0.79px solid rgba(255, 255, 255, 0.50)",
                  background:
                    "linear-gradient(222deg, rgba(117, 112, 216, 0.19) 3.09%, rgba(117, 112, 216, 0.00) 79.93%), #161447",
                }}
                className="flex flex-col py-5 px-3 rounded-[18px] gap-3 xl:col-span-1 xl:px-8 xl:py-10"
              >
                <Image
                  src={"/assets/card.svg"}
                  alt=""
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px]"
                />
                <h1 className="text-white text-[20px] font-semibold">
                  Virtual cards
                </h1>
                <p className="text-[#9F9BE4] text-[14px] font-light">
                  Bypass the international traction limit on your local currency
                  with a Carditin vitual card.
                </p>
              </div>
            </div>
          </section>

          {/* gift, data,bill and bet section */}
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-y-16">
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(63, 55, 201, 0.00) 0%, rgba(63, 55, 201, 0.50) 100%), #E3E2F7",
              }}
              className="text-[15px] text-[#09081D] font-bold w-full rounded-[20px] h-[370px] px-4 pt-5 flex flex-col justify-between xl:h-[550px]"
            >
              <h1 className="text-[18px] text-[#09081D] font-bold w-[200px] xl:text-[27px] xl:w-[300px]">
                Convert your Gift 🎁Cards & Data at the Best Rates
              </h1>
              <div className="mx-auto">
                <Image
                  src={"/assets/gift.png"}
                  alt=""
                  className="w-[281px] h-[230px] object-contain rounded-t-[20px] xl:h-[370px] xl:w-[350px]"
                  width={250}
                  height={200}
                />
              </div>
            </div>
            <div
              style={{
                background: "#5A53D0",
              }}
              className="text-[15px] text-[#09081D] font-bold w-full rounded-[20px] h-[370px] px-4 pt-5 flex flex-col justify-between xl:h-[550px]"
            >
              <h1 className="text-[18px] text-white font-bold w-[200px] xl:text-[27px] xl:w-[300px]">
                Airtime & Mobile Data Refill at Ease 🙂
              </h1>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(63, 55, 201, 0.00) 0%, rgba(63, 55, 201, 0.50) 100%), #E3E2F7",
                }}
                className="h-[250px] w-[250px] mx-auto relative rounded-t-[20px] xl:w-[400px] xl:h-[400px]"
              >
                <Image
                  src={"/assets/womanoncall.png"}
                  alt=""
                  className="w-[281px] h-[230px] object-contain rounded-t-[20px] absolute bottom-0 xl:h-[370px] xl:w-[350px]"
                  width={250}
                  height={200}
                />
              </div>
            </div>
            <div
              style={{
                background: "#5A53D0",
              }}
              className="text-[15px] text-[#09081D] font-bold w-full rounded-[20px] h-[370px] px-4 pt-5 flex flex-col justify-between xl:h-[550px]"
            >
              <h1 className="text-[18px] text-white font-bold w-[200px] xl:text-[27px] xl:w-[300px]">
                Never Miss Utility Bill Payment 🥰
              </h1>
              <div className="relative">
                <FloatingInfo
                  title={"Transfer Successful"}
                  price={"₦10,500.00"}
                  src={"/assets/nav.svg"}
                  width={18}
                  height={18}
                  className={"absolute -translate-x-[50%] left-[50%] top-[-7%]"}
                />
                <Image
                  src={"/assets/bill.png"}
                  alt=""
                  className="w-[281px] h-[230px] object-contain rounded-t-[20px] xl:h-[370px] xl:w-[350px] mx-auto"
                  width={250}
                  height={200}
                />
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(63, 55, 201, 0.00) 0%, rgba(63, 55, 201, 0.50) 100%), #E3E2F7",
              }}
              className="text-[15px] text-[#09081D] font-bold w-full rounded-[20px] h-[370px] px-4 pt-5 flex flex-col justify-between xl:h-[550px]"
            >
              <h1 className="text-[18px] text-[#09081D] font-bold w-[200px] xl:text-[27px] xl:w-[300px]">
                Place Bets & Pay for Cable TV Subscription 💯 & Much More
              </h1>
              <div className="relative">
                <FloatingInfo
                  title={"Netflix Subscription"}
                  price={"₦3,300.00"}
                  src={"/assets/net.png"}
                  width={18}
                  height={18}
                  className={"absolute left-[0] bottom-[15%]"}
                />
                <FloatingInfo
                  title={"DSTV Subscription"}
                  price={"₦6,900.00"}
                  src={"/assets/go.png"}
                  width={18}
                  height={18}
                  className={"absolute right-0 top-[15%]"}
                />

                <Image
                  src={"/assets/bet.png"}
                  alt=""
                  className="w-[281px] h-[230px] object-contain rounded-t-[20px] xl:h-[370px] xl:w-[350px] mx-auto"
                  width={250}
                  height={200}
                />
              </div>
            </div>
          </section>

          {/* Download app section */}
          <section className="w-full bg-white rounded-[20px] px-3 py-4 flex flex-col gap-14 md:flex-row md:px-6 md:py-9">
            <div className="flex flex-col md:justify-center gap-4 xl:w-[50%] xl:gap-12">
              <h1 className="text-[20px] text-[#09081D] font-semibold xl:text-[55px]">
                Download the Carditin App & Get Started for Free! 🎉✌️
              </h1>
              <p className="text-[10px] text-[#161447CC] font-normal xl:text-[20px]">
                CARDITIN takes care of your travel expenses, creating memorable
                journeys without the worry of managing costs.
              </p>
              <div className="grid grid-cols-2 gap-4 md:w-[60%]">
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
            <div>
              <Image
                src={"/assets/hand.png"}
                alt=""
                width={200}
                height={400}
                className="md:w-[458.3px] md:h-[916.61px] object-left md:h-full"
              />
            </div>
          </section>

          {/*  */}
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-12">
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(63, 55, 201, 0.00) 0%, rgba(63, 55, 201, 0.50) 100%), #E3E2F7",
              }}
              className="text-[15px] text-[#09081D] font-bold w-full rounded-[20px] h-[370px] px-4 pt-5 flex flex-col justify-between xl:h-[590px]"
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-[16px] text-[#09081D] font-bold w-[230px] xl:text-[27px] xl:w-[400px]">
                  Embrace the Thrill of Fund Betting Effortlessly.
                </h1>
                <p className="text-[10px] text-[#09081D] font-bold w-full xl:text-[15px]">
                  CARDITIN facilitates secure transactions for your betting
                  ventures, ensuring a smooth and secure experience.
                </p>
              </div>
              <div className="relative">
                <FloatingInfo
                  title={"Bet9ja Subscription"}
                  price={"₦3,300.00"}
                  src={"/assets/9ja.png"}
                  width={18}
                  height={18}
                  className={"absolute left-[0] bottom-[15%]"}
                />
                <FloatingInfo
                  title={"DSTV Subscription"}
                  price={"₦6,900.00"}
                  src={"/assets/go.png"}
                  width={18}
                  height={18}
                  className={"absolute right-0 top-[15%]"}
                />
                <Image
                  src={"/assets/thrill.png"}
                  alt=""
                  className="w-[281px] h-[230px] object-contain xl:object-cover rounded-t-[20px] xl:h-[400px] xl:w-[350px] mx-auto"
                  width={250}
                  height={200}
                />
              </div>
            </div>
            <div
              style={{
                background: "#5A53D0",
              }}
              className="text-[15px] text-[#09081D] font-bold w-full rounded-[20px] h-[370px] px-4 pt-5 flex flex-col justify-between xl:h-[590px]"
            >
              <h1 className="text-[18px] text-white font-bold w-[200px] xl:text-[27px] xl:w-[300px]">
                Invest in Knowledge Without Stress
              </h1>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(63, 55, 201, 0.00) 0%, rgba(63, 55, 201, 0.50) 100%), #E3E2F7",
                }}
                className="h-[250px] w-[250px] mx-auto relative rounded-t-[20px] xl:w-[400px] xl:h-[400px]"
              >
                <Image
                  src={"/assets/education.png"}
                  alt=""
                  className="w-[281px] h-[230px] object-contain xl:object-cover rounded-t-[20px] absolute bottom-0 xl:h-[370px] xl:w-[350px]"
                  width={250}
                  height={200}
                />
              </div>
            </div>
          </section>

          {/*  */}
          <section className="w-full bg-white rounded-[20px] px-3 py-4 flex flex-col md:flex-row gap-14 md:px-6 md:py-9 md:items-center">
            <div className="flex flex-col gap-4 md:w-[60%]">
              <h1 className="text-[20px] text-[#09081D] font-semibold md:text-[40px]">
                Plan your Dream Getaways Without Financial Strain.
              </h1>
              <p className="text-[10px] text-[#161447CC] font-normal xl:text-[20px]">
                Our advance technology and secure systems provide a safe and
                reliable way to handle your money wisely. Pay bills, buy
                airtime, use virtual cards, and more with ease, ensuring a safe
                financial experience.
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

          {/* contact section */}
          <section className="flex md:p-6 shrink-0 overflow-x-auto gap-5 xl:justify-center">
            <div className="w-[250px] shrink-0 h-[235px] px-6 py-6 bg-white rounded-[15px] flex flex-col gap-5 items-start">
              <Image
                src={"/assets/help.svg"}
                width={40}
                height={40}
                className="w-[40px] h-[40px]"
                alt=""
              />
              <h1 className="text-[20px] font-bold">
                Questions? <br /> <span className="text-[#00000066]">FAQs</span>
              </h1>

              <button className="bg-[#09081D] text-white p-2 px-4 rounded-[10px] text-[14px]">
                View All
              </button>
            </div>
            <div className="w-[250px] shrink-0 h-[235px] shadow-xl shadow-[#e3e2f7] px-6 py-6 bg-white rounded-[15px] flex flex-col gap-7 items-center">
              <Image
                src={"/assets/user.png"}
                width={150}
                height={80}
                className="w-[50px] h-[50px] rounded-full object-cover"
                alt=""
              />
              <p className="text-[13px] text-[#000000CC] font-normal text-center">
                We easily and quickly received the money from the cusumers grow
                Carditin
              </p>

              <div className="flex items-center justify-center w-full gap-3">
                <div className="border-r flex items-center gap-2 pr-3">
                  <Star1 className="w-[14px] h-[14px]" color="#000" />
                  <p>5</p>
                </div>
                <h1 className="uppercase text-[15px] text-[#000000CC] font-normal">
                  Cajethan
                </h1>
              </div>
            </div>
            <div className="w-[250px] shrink-0 h-[235px] px-6 py-6 bg-white rounded-[15px] flex flex-col gap-5 items-start">
              <h1 className="text-[20px] font-bold">Get in touch</h1>
              <div className="flex flex-col w-full gap-4">
                <input
                  type="text"
                  className="bg-transparent outline-none border-b w-full text-[#00000080] text-[14px] font-normal py-2"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  className="bg-transparent outline-none border-b w-full text-[#00000080] text-[14px] font-normal py-2"
                  placeholder="Your comment"
                />
              </div>
              <button className="bg-[#09081D] text-white p-2 px-4 rounded-[10px] text-[14px]">
                Send
              </button>
            </div>
          </section>

          {/* news section */}
          <section className="w-full flex flex-col items-center justify-center gap-5 my-7">
            <div className="flex items-start md:w-[40%]">
              <h1 className="text-[#09081D] text-[30px] font-[700] text-center">
                Be the first to hear <br />Carditin Banking News
              </h1>
              <Image src={"/assets/comic.svg"} alt="" width={20} height={20} />
            </div>
            <div className="flex items-center md:w-[581px] relative">
              <input
                type="text"
                className="bg-transparent outline-none border-b w-full text-[#00000080] text-[14px] font-normal py-2"
                placeholder="Your e-mail"
              />
              <button className="bg-[#3F37C9] rounded-full w-[26px] h-[26px] p-1 absolute right-0">
                <ArrowRight2 className="text-white w-[19px] h-[19px]" />
              </button>
            </div>
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
                reliable way to handle your money wisely. Pay bills, buy
                airtime, use virtual cards, and more with ease, ensuring a safe
                financial experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full xl:w-[50%]">
              <Link
                href={"#"}
                className="col-span-1 border-[#CCCCD0] border rounded-[10px] flex justify-center items-center bg-[#bdbdbd]"
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
                className="col-span-1 border-[#CCCCD0] border rounded-[10px] flex justify-center items-center bg-[#bdbdbd]"
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
    </>
  );
}
