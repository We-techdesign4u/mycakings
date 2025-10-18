import Image from "next/image";
import React from "react";

import { icons } from "@/public/constants";

const HowtoOrder = () => {
  return (
    <div className="bg-white">
      <div className="py-[70px] justify-center px-70 items-center flex flex-col bg-white/30 backdrop-blur-sm ">
        <p className="text-[50px] font-bold font-Lato text-secondary2">
          How To Order
        </p>
        <div className="flex w-full justify-between mt-10">
          <div className="flex space-x-4 justify-center items-center">
            <Image width={60} src={icons.website} alt="website" />
            <div>
              <p className="text-[20px] font-Lato font-bold text-secondary3">
                On Website
              </p>
              <p className="text-secondary3 w-[180px] mt-2 text-[15px]">
                Order directly here on our website by filling the form below &
                clicking on the Order Now button
              </p>
            </div>
          </div>
          <div className="flex space-x-4 justify-center items-center">
            <Image width={60} src={icons.phone} alt="phone" />
            <div>
              <p className="text-[20px] font-Lato font-bold text-secondary3">
                Call / Whatsapp
              </p>
              <p className="text-secondary3 w-[180px] mt-2 text-[15px]">
                Call us on our phone number 07069972... or message us on
                whatsapp to place your order
              </p>
            </div>
          </div>
          <div className="flex space-x-4 justify-center items-center">
            <Image width={60} src={icons.store} alt="store" />
            <div>
              <p className="text-[20px] font-Lato font-bold text-secondary3">
                In Store
              </p>
              <p className="text-secondary3 w-[180px] mt-2 text-[15px]">
                Wall in to our store at Smith Ave Konja Road, Apt 68, Abeokuta
                Ogun state Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoOrder;
