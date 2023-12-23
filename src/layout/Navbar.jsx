"use client";
import NavbarMenu from "@/components/NavbarMenu";
import ProductMenu from "@/components/ProductMenu";
import { ArrowDown2, HambergerMenu } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  const [navToggle, setNavToggle] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const ref = useRef(null);
  const handleNavBar = () => {
    setNavToggle(!navToggle);
  };
  function handleClose() {
    setNavToggle(false);
  }
  useEffect(() => {
    const handleOutClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClose && handleClose();
      }
    };
    document.addEventListener("click", handleOutClick, true);

    return () => {
      document.removeEventListener("click", handleOutClick, true);
    };
  }, []);
  const onHoverEnter = () => {
    setOpenProduct(true);
  };
  const onHoverExit = () => {
    setOpenProduct(false);
  };

  const isHomepage = pathname === "/";

  return (
    <nav className={`w-full ${isHomepage ? "bg-[#E3E2F7]" : "bg-[#F5F7FA]"} flex md:px-7 md:justify-between items-center`}>
      <div className="flex justify-between items-center w-full p-3 md:w-fit">
        <Image
          src={"/assets/Logo.svg"}
          width={100}
          height={20}
          alt="carditin"
          className="w-[106px] h-[25px]"
        />
        <button
          // ref={ref}
          onClick={handleNavBar}
          className="w-[24px] h-[24px] md:hidden"
        >
          <HambergerMenu color="#000" />
        </button>
      </div>

      <ul className="hidden md:flex xl:flex md:items-center md:gap-4 lg:gap-8">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
        <div className="relative">
          <li onMouseEnter={onHoverEnter}>
            <Link className="flex items-center gap-3" href={"#"}>
              <span>Products</span>
              <ArrowDown2 className="w-[15px] h-[15px] md:flex hidden" />
            </Link>
          </li>
          {openProduct && (
            <ProductMenu
              onMouseEnter={onHoverEnter}
              onMouseLeave={onHoverExit}
            />
          )}
        </div>
        <li>
          <Link href={"/faqs"}>FAQs</Link>
        </li>
        <li>
          <Link href={"/support"}>Support</Link>
        </li>
        <li>
          <Link
            className="rounded-[10px] bg-[#09081D] text-white py-2 px-3"
            href={"/"}
          >
            Log in
          </Link>
        </li>
      </ul>
      <NavbarMenu handleClose={handleClose} navToggle={navToggle} />
    </nav>
  );
};

export default Navbar;
