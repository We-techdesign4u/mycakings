import Image from "next/image";
import React from "react";
import { images } from "@/public/constants";
import { Button } from ".";
import { urlFor } from "@/studio-hello-world/lib/client";
import Link from "next/link";

const MenuNPrices = (props) => {
  const data = props.products.products;

  const scrollToFooter = () => {
    document.getElementById("order-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="w-full bg-[url('./images/howtoorderBg2.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className="flex flex-col px-5 sm:px-70 py-20 backdrop-blur-sm">
        <div className="items-center flex flex-col">
          <p className="text-[30px] font-Lato text-secondary3">
            What We Offer and Prices
          </p>
          <p className="text-[50px] font-bold font-Lato text-secondary2">
            Menu
          </p>
        </div>
        <div className="mt-10">
          {data.map((product, index) => (
            <div
              key={index}
              className=" my-10 not-first:my-40 sm:flex-row flex-col flex sm:even:flex-row-reverse items-center justify-between relative"
            >
              <div className="relative sm:w-[500px] flex">
                <div className="top-0 ml-10 absolute z-10">
                  <p className="text-[25px]  text-secondary2 font-Lato font-bold">
                    {product.title}
                  </p>
                  <div className="mt-[70px] space-y-2 text-secondary3 font-Lato">
                    {product.prices?.map((price, index) => (
                      <div key={index} className="flex mt-4 ">
                        <div className=" sm:ml-[60px]  ml-[25px]">
                          <p>{price.title} </p>
                          <p className="text-[13px] sm:leading-2 leading-3">
                            {price.ingredients}
                          </p>
                        </div>
                        <p className="sm:ml-[70px] ml-4 font-bold">
                          ${price.Price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="-mt-5">
                  <Image
                    className="sm:w-[600px] w-110"
                    src={images.menupaper}
                    alt="menu"
                  />
                </div>
              </div>
              <div className="sm:w-[370px] w-full flex relative  h-[400px]">
                <Link
                  href={"/Gallery"}
                  className="group w-[350px] cursor-pointer items-center justify-center flex"
                >
                  <div className=" rotate-15 group-hover:rotate-0 transition duration-500 ease-in-out absolute w-[330px] h-[360px] justify-center flex  bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.25)]">
                    <div className=" sm:w-[300px] sm:h-[300px] mt-[15px] bg-gray-400"></div>
                  </div>
                  <div className="rotate-5 group-hover:rotate-0 transition duration-500 ease-in-out absolute w-[330px] h-[360px] justify-center flex  bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.25)]">
                    <div className="w-[300px] h-[300px] mt-[15px] bg-gray-400"></div>
                  </div>
                  <div className="absolute w-[330px] h-[360px] justify-center flex  bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.25)]">
                    <div className="w-[300px] h-[300px] mt-[15px] bg-gray-400 flex">
                      <img
                        style={{ objectFit: "cover" }}
                        // height={500}
                        width={300}
                        alt="product"
                        src={urlFor(product.image)}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}

          <div className="w-full mt-20 flex justify-center items-center">
            <Button
              title="ORDER NOW"
              background={"bg-linear-90 from-secondary1 to-secondary2"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuNPrices;
