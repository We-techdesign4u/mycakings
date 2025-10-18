import React from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/public/constants";

const Navbar = () => {
  return (
    <div className="navbar-container block w-full fixed z-50">
      <div className="navbar flex justify-between h-[70px] w-full items-center mr-[150px] backdrop-blur-md">
        <div className="logo pl-[130px]">
          <Link href="/">
            <Image src={images.logo} width={150} alt="logo" />
          </Link>
        </div>
        <div className="flex w-[500px] justify-between items-center p-0">
          <ul className="group *:border-b-3 *:border-b-transparent *:hover:border-b-secondary3 flex justify-between w-[350px]  *:font-Lato *:text-secondary3 *:font-bold *:hover:border-b-3">
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/Gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/ContactUs">Contact Us</Link>
            </li>
          </ul>

          <div className="desktopMenuIcon"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
