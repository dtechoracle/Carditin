import Accordion from "@/components/Accordion";
import Provider from "@/components/Provider";
import { Star1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SupportPage = () => {
  const datas = [
    {
      id: 1,
      title: "How can I contact customer care for assistance?",
      content: `Absolutely. Our customer care team is here to assist with any account-related inquiries, including account setup, password resets, and troubleshooting.`,
    },
    {
      id: 2,
      title: "What are your customer care hours of operation?",
      content: `Absolutely. Our customer care team is here to assist with any account-related inquiries, including account setup, password resets, and troubleshooting.`,
    },
    {
      id: 3,
      title: "How quickly can I expect a response from customer care?",
      content: `Absolutely. Our customer care team is here to assist with any account-related inquiries, including account setup, password resets, and troubleshooting.`,
    },
    {
      id: 4,
      title:
        "Can I get assistance with account-related issues from customer care?",
      content: `Absolutely. Our customer care team is here to assist with any account-related inquiries, including account setup, password resets, and troubleshooting.`,
    },
    {
      id: 5,
      title: "What languages does your customer care team support?",
      content: `Absolutely. Our customer care team is here to assist with any account-related inquiries, including account setup, password resets, and troubleshooting.`,
    },
  ];
  return (
    <section className="w-full h-full bg-[#F5F7FA] pt-10">
      {/* hero section */}
      <section className="w-full flex flex-col md:flex-row justify-between items-center px-2 gap-14 h-screen lg:px-[5rem] mb-44 md:mb-10">
        <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-[50%]">
          <h1 className="text-[#09081D] text-[35px] mt-24 font-bold xl:text-[70px]">
            24/7 Support <br />
            <span className="text-[#3F37C9] partner">Availability</span>
          </h1>
          <p className="text-[#161447CC] text-[12px] font-normal xl:text-[16px]">
            Our commitment to your satisfaction extends around the clock. Our
            dedicated support team is available 24/7 to assist you with any
            inquiries or concerns you may have.
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
            src={"/assets/support.png"}
            alt="Home"
            width={320}
            height={500}
            className="object-cover w-[500px] md:mt-60"
          />
        </div>
      </section>

      {/* Logo section */}
      <section className="w-full px-2 h-full mt-60 flex flex-col gap-7 lg:px-[5rem] xl:gap-16">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="w-full rounded-[15px] flex flex-col gap-5 items-start justify-center">
            <Image
              src={"/assets/clock.svg"}
              width={40}
              height={40}
              className="w-[30px] h-[30px]"
              alt=""
            />
            <h1 className="text-[20px] font-bold">Prompt Response Times</h1>
            <p className="text-[13px] text-[#000000CC] font-normal text-left">
              Experience quick and efficient responses. Our support team strives
              to address your queries promptly, ensuring minimal waiting times
              for assistance.
            </p>
          </div>
          <div className="w-full rounded-[15px] flex flex-col gap-5 items-start justify-center">
            <Image
              src={"/assets/inter.svg"}
              width={40}
              height={40}
              className="w-[30px] h-[30px]"
              alt=""
            />
            <h1 className="text-[20px] font-bold">User-Friendly Help Center</h1>
            <p className="text-[13px] text-[#000000CC] font-normal text-left">
              Explore our user-friendly help center for self-service options.
              Access articles, guides, and FAQs to find answers to common
              questions and optimize your experience.
            </p>
          </div>
          <div className="w-full rounded-[15px] flex flex-col gap-5 items-start justify-start">
            <Image
              src={"/assets/headset.svg"}
              width={40}
              height={40}
              className="w-[30px] h-[30px]"
              alt=""
            />
            <h1 className="text-[20px] font-bold">Multi-Channel Support</h1>
            <p className="text-[13px] text-[#000000CC] font-normal text-left">
              Reach out to us through various channels. Whether you prefer
              email, phone, or live chat, we offer multi-channel support to
              cater to your communication preferences.
            </p>
          </div>
        </section>

<section className="relative flex flex-col gap-7 md:mt-40 h-auto lg:h-[800px]">
  <div className="flex flex-col bg-[#FFF] w-full h-[700px] rounded-[20px] gap-12 xl:gap-x-20 p-5 lg:flex-row lg:py-14 lg:px-16 relative">
    {/* Left Section */}
    <div className="flex flex-col gap-9 justify-between lg:w-1/2">
      <div className="flex flex-col gap-4">
        <h1 className="text-[30px] text-[#09081D] font-bold">Contact Us</h1>
        <p className="text-[21px] text-[#3F37C9] font-bold">Support@carditin.com</p>
      </div>
      <div className="w-full xl:col-span-1">
                <h1 className="text-[#09081D] font-semibold text-[14px]">WE SOCIAL</h1>
                <br />
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
    </div>

    {/* Center Image */}
    <div className="hidden lg:block absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <Image
    src="/assets/hand2.png"
    alt=""
    width={300}
    height={400}
    className="w-full h-[520px] object-cover md:object-contain"
  />
</div>


    {/* Right Section */}
    <div className="flex flex-col gap-10 justify-between lg:w-1/2 lg:pl-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-[21px] text-[#3F37C9] font-bold">Office Address Lagos</h1>
        <p className="text-[21px] text-[#09081D] font-bold">151 Herbert Macaulay Way, Yaba, Lagos, Nigeria</p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[21px] text-[#3F37C9] font-bold">Phone Numbers</h1>
        <div className="flex flex-col gap-1">
          <p className="text-[21px] text-[#09081D] font-bold">+234 701 594 8443</p>
          <p className="text-[21px] text-[#09081D] font-bold">+234 701 594 8443</p>
        </div>
      </div>
    </div>
  </div>



          <section
            id="contactus"
            className="flex flex-col w-full gap-5 h-full lg:flex-row"
          >
            <div className="w-full lg:w-[65%] h-[235px] shrink-0 px-6 py-6 bg-white rounded-[15px] flex flex-col gap-5 items-start mb-9">
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
            <div className="w-full lg:w-[33%] shrink-0 h-[235px] px-6 py-6 bg-white rounded-[15px] flex flex-col gap-7 items-center">
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
          </section>
        </section>

        {/* services section */}
        <Provider title={"Customer Care"} datas={datas} />
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

export default SupportPage;
