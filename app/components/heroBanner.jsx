"use client";
import React, { useState, useEffect } from "react";
import { Button } from ".";
import Image from "next/image";
import { images } from "@/public/constants";
import { urlFor } from "@/studio-hello-world/lib/client";
import { client } from "@/studio-hello-world/lib/client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const HeroBanner = (props) => {
  const [bannaDetails, setBannerDetails] = useState(0);

  const data = props.banner.banner;

  const bannerData = () => {
    if (bannaDetails < data.length - 1) {
      setBannerDetails((prevIndex) => prevIndex + 1);
    } else {
      setBannerDetails(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerDetails((prevIndex) => {
        return (prevIndex + 1) % data.length;
      });
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  const scrollToFooter = () => {
    document.getElementById("order-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className=" max-w-screen max-h-screen overflow-hidden bg-[url('./images/HeroBannerBg.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className=" pt-30 flex-col sm:flex-row pb-10 sm:pb-[260px] sm:px-70 flex relative bg-white/30 backdrop-blur-sm">
        <div className="sm:w-150 w-full content-center px-5 sm:px-0 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={bannaDetails}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className=" w-full sm:items-start items-center flex flex-col"
            >
              <p className="text-secondary1 font-Lato text-center sm:text-left">
                {data[bannaDetails].secondaryHeadline}
              </p>
              <p className="text-center pt-5 sm:pt-0 sm:text-left sm:text-[51px] text-[40px] text-secondary3 font-Lato font-medium">
                {data[bannaDetails].primaryHeadline1}
              </p>
              <p className="text-center sm:text-left text-[77px] text-secondary3 leading-15 font-Lato font-bold">
                {data[bannaDetails].primaryHeadline2}
              </p>
              <p className="text-center sm:text-left text-secondary1 text-[20px] mt-15 sm:w-120 font-Lato">
                {data[bannaDetails].supportingSubtext}
              </p>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={bannaDetails}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-x-7 pt-15 sm:block justify-center items-center flex"
            >
              <Link href={"/Gallery"}>
                <Button
                  title="GALLERY"
                  background={"bg-linear-90 from-primary1 to-primary2"}
                />
              </Link>

              <Button
                handlePress={scrollToFooter}
                title="ORDER NOW"
                background={"bg-linear-90 from-secondary1 to-secondary2"}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="">
          <AnimatePresence mode="wait">
            <motion.div
              key={bannaDetails}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" absolute -z-2 h-[600px] top-0 right-0"
            >
              <img
                width={700}
                className=" opacity-20 sm:opacity-100"
                src={urlFor(data[bannaDetails].image)}
                alt=""
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
