"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/public/constants";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isShown, setisShown] = useState(false);
  return (
    <div className="block w-full fixed z-10">
      <div className=" px-5 sm:px-0 flex-row-reverse flex sm:flex-row justify-between sm:h-[70px] w-full items-center relative sm:mr-[150px] backdrop-blur-md">
        <div className="logo sm:pl-[130px] sm:w-[250px] w-[150px] pl-0">
          <Link href="/">
            <Image
              src={images.logo}
              className="sm:w-[250px] w-[120px]"
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden sm:flex w-10 sm:w-[500px] justify-between items-center p-0">
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
        </div>
        <div className="sm:hidden block w-full">
          <div className=" ">
            {isShown ? (
              <div>
                <AiOutlineMenuUnfold
                  size={25}
                  onClick={() => setisShown(!isShown)}
                ></AiOutlineMenuUnfold>
              </div>
            ) : (
              <div>
                <AiOutlineMenuFold
                  onClick={() => setisShown(!isShown)}
                  size={25}
                ></AiOutlineMenuFold>
              </div>
            )}
          </div>
          {isShown && (
            <AnimatePresence mode="wait">
              <motion.div
                key={isShown}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                className="absolute bg-amber-50 top-10 w-full pl-0"
              >
                <div className="">
                  <ul className="flex flex-col py-3 h-[150px] justify-between group *:pl-2 *:border-l-3 *:border-l-transparent *:hover:border-l-secondary3 *:font-Lato *:text-secondary3 *:font-bold *:hover:border-l-3">
                    <li>
                      <Link onClick={() => setisShown(!isShown)} href={"/"}>
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={() => setisShown(!isShown)}
                        href="/AboutUs"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setisShown(!isShown)}
                        href="/Gallery"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setisShown(!isShown)}
                        href="/ContactUs"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
