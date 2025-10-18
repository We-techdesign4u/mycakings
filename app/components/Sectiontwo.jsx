"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { icons } from "@/public/constants";
import { AnimatePresence, motion } from "framer-motion";
import { urlFor } from "@/studio-hello-world/lib/client";

const Sectiontwo = (props) => {
  const data = props.banner.banner;
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlideIndex = (params) => {
    if (slideIndex < data.length - 1) {
      setSlideIndex((prevIndex) => prevIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlideIndex();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlideIndex]);

  return (
    <div className="bg-[url('./images/howtoorderBg.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className="bg-white/30 backdrop-blur-sm py-[70px] justify-center items-center flex flex-col px-70 ">
        <p className="text-[30px] font-Lato text-secondary3">The Process</p>
        <p className="text-[50px] font-bold font-Lato text-secondary2">
          Of Your Order
        </p>
        <div className="h-[500px] mt-10 flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex space-x-4 justify-center items-center">
              <Image width={60} src={icons.order} alt="order" />
              <div>
                <p className="text-[20px] font-Lato font-bold text-secondary3">
                  Order Placement
                </p>
                <p className="text-secondary3 w-[180px] mt-2 text-[15px]">
                  Customer order their cake through our phone number of website
                </p>
              </div>
            </div>
            <div className="-ml-15 flex space-x-4 justify-center items-center">
              <Image height={50} src={icons.payment} alt="payment" />
              <div>
                <p className="text-[20px] font-Lato font-bold text-secondary3">
                  Payment Processing
                </p>
                <p className="text-secondary3 w-[180px] mt-2 text-[15px]">
                  After the order is finalized, we confirms its feasibility
                </p>
              </div>
            </div>
            <div className="ml-30 flex space-x-4 justify-center items-center">
              <Image width={60} src={icons.prep} alt="icon" />
              <div>
                <p className="text-[20px] font-Lato font-bold text-secondary3">
                  Scheduling & Prep
                </p>
                <p className="text-secondary3 w-[180px] mt-2 text-[15px]">
                  The confirmed order moves to your production workflow.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[300px] justify-center flex">
            <div className="absolute h-[500px] w-[600px] flex justify-center -z-1">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slideIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  src={urlFor(data[slideIndex].image)}
                  className="object-cover h-[400px] w-[500px]"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex space-x-4 justify-center items-center">
              <Image width={60} src={icons.delivery} alt="delivery" />
              <div>
                <p className="text-[20px] font-Lato font-bold text-secondary3">
                  Delivery or Pickup
                </p>
                <p className="text-secondary3 w-[200px] mt-2 text-[15px]">
                  Hand off to courier & delivered to the specified address.
                </p>
              </div>
            </div>
            <div className="ml-30 flex space-x-4 justify-center items-center">
              <Image width={60} src={icons.packaging} alt="packaging" />
              <div>
                <p className="text-[20px] font-Lato font-bold text-secondary3">
                  Packaging
                </p>
                <p className="text-secondary3 w-[180px] mt-2 text-[15px]">
                  The cake is verified and secured for transit.
                </p>
              </div>
            </div>
            <div className="-ml-25 flex space-x-4 justify-center items-center">
              <Image width={65} src={icons.decoration} alt="decoration" />
              <div>
                <p className="text-[20px] font-Lato font-bold text-secondary3">
                  Baking & Decoration
                </p>
                <p className="text-secondary3 w-[220px] mt-2 text-[15px]">
                  This is the core creation phase where the cake is brought to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectiontwo;
