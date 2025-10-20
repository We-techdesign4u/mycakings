import { urlFor } from "@/studio-hello-world/lib/client";
import Image from "next/image";
import React from "react";

const CustomerReview = (props) => {
  const data = props.reviews.reviews;

  return (
    <section className="bg-[url('./images/reviewsBg.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className="flex flex-col px-5 sm:px-70 py-20 backdrop-blur-sm">
        <div className="items-center text-center flex flex-col">
          <p className="text-[30px] font-Lato text-secondary3">Why Us?</p>
          <p className="sm:text-[50px] text-[40px] font-bold font-Lato text-secondary2">
            Customer Reviews
          </p>
        </div>
        <div className="mt-10 sm:w-[1000px] space-y-8 sm:space-y-0 overflow-hidden sm:space-x-10 sm:flex-row flex-col flex justify-between">
          {data.map((review, index) => (
            <div key={index} className=" space-x-4 flex sm:w-[300px] w-full  ">
              <div className="sm:w-[70px] sm:h-[70px] w-[40px] h-[40px] object-cover flex rounded-full ">
                <img
                  className="sm:w-[70px] sm:h-[70px] w-[40px] h-[40px]"
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  src={urlFor(review.productImage)}
                />
              </div>
              <div className="block max-w-8/10">
                <p className="text-[25px] font-Lato font-bold text-secondary3">
                  {review.customerName}
                </p>
                <p className="sm:w-[200px] font-Lato  text-[14px]">
                  {review.customerReview[0].children[0].text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
