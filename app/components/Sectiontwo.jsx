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
    <section className="w-full sm:bg-[url('./images/howtoorderBg.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className="bg-white/30 backdrop-blur-sm sm:py-[70px] py-10 justify-center items-center flex flex-col sm:px-70 px-5">
        <p className="text-[30px] font-Lato text-secondary3">The Process</p>
        <p className="text-[50px] font-bold font-Lato text-secondary2">
          Of Your Order
        </p>
        <div className="items-center sm:items-stretch flex-col sm:h-[500px] mt-10 sm:pt-0 pt-70 flex sm:flex-row sm:justify-between">
          <div className="flex space-y-8 flex-col justify-between">
            <div className=" sm:space-x-4 flex-col sm:flex-row flex  justify-center items-center">
              <Image
                className="w-10 sm:w-[60px]"
                src={icons.order}
                alt="order"
              />
              <div>
                <p className="text-center sm:text-left text-[20px] font-Lato font-bold text-secondary3">
                  Order Placement
                </p>
                <p className="text-center sm:text-left text-secondary3 sm:w-[180px] w-[350px] mt-2 text-[15px]">
                  Customer order their cake through our phone number of website
                </p>
              </div>
            </div>
            <div className="sm:-ml-15 sm:space-x-4 flex-col sm:flex-row flex  justify-center items-center">
              <Image
                className="w-13 sm:w-[70px]"
                src={icons.payment}
                alt="payment"
              />
              <div>
                <p className="text-center sm:text-left text-[20px] font-Lato font-bold text-secondary3">
                  Payment Processing
                </p>
                <p className="text-center sm:text-left text-secondary3 sm:w-[180px] w-[350px] mt-2 text-[15px]">
                  After the order is finalized, we confirms its feasibility
                </p>
              </div>
            </div>
            <div className="sm:ml-30 sm:space-x-4 flex-col sm:flex-row flex  justify-center items-center">
              <Image
                width={60}
                className="w-10 sm:w-[60px]"
                src={icons.prep}
                alt="icon"
              />
              <div>
                <p className="text-center sm:text-left text-[20px] font-Lato font-bold text-secondary3">
                  Scheduling & Prep
                </p>
                <p className="text-center sm:text-left text-secondary3 sm:w-[180px] w-[350px] mt-2 text-[15px]">
                  The confirmed order moves to your production workflow.
                </p>
              </div>
            </div>
          </div>
          <div className=" h-[300px] sm:w-[300px] w-full justify-center flex sm:relative sm:top-0 absolute top-25">
            <div className="sm:absolute h-[500px] w-[600px] flex justify-center -z-1">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slideIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  src={urlFor(data[slideIndex].image)}
                  className="object-cover sm:h-[400px] sm:w-[500px] w-100 h-100"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-col pt-8 sm:pt-0 space-y-8 justify-between">
            <div className="sm:space-x-4 flex-col sm:flex-row flex  justify-center items-center">
              <Image
                className="w-10 sm:w-[60px]"
                src={icons.delivery}
                alt="delivery"
              />
              <div className="">
                <p className="text-center sm:text-left text-[20px] font-Lato font-bold text-secondary3">
                  Delivery or Pickup
                </p>
                <p className="text-center sm:text-left text-secondary3 sm:w-[180px] w-[350px] mt-2 text-[15px]">
                  Hand off to courier & delivered to the specified address.
                </p>
              </div>
            </div>
            <div className="pt-8 sm:pt-0 sm:ml-30 sm:space-x-4 flex-col sm:flex-row flex  justify-center items-center">
              <Image
                className="w-10 sm:w-[60px]"
                src={icons.packaging}
                alt="packaging"
              />
              <div>
                <p className="text-center sm:text-left text-[20px] font-Lato font-bold text-secondary3">
                  Packaging
                </p>
                <p className="text-center sm:text-left text-secondary3 sm:w-[180px] w-[350px] mt-2 text-[15px]">
                  The cake is verified and secured for transit.
                </p>
              </div>
            </div>
            <div className="sm:-ml-25 sm:space-x-4 flex-col sm:flex-row flex  justify-center items-center">
              <Image
                className="w-10 sm:w-[65px]"
                src={icons.decoration}
                alt="decoration"
              />
              <div>
                <p className="text-center sm:text-left text-[20px] font-Lato font-bold text-secondary3">
                  Baking & Decoration
                </p>
                <p className="text-center sm:text-left text-secondary3 sm:w-[180px] w-[350px] mt-2 text-[15px]">
                  This is the core creation phase where the cake is brought to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
