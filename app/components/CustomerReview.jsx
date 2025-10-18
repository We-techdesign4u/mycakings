import { urlFor } from "@/studio-hello-world/lib/client";
import Image from "next/image";
import React from "react";

const CustomerReview = (props) => {
  const data = props.reviews.reviews;

  return (
    <div className="bg-[url('./images/reviewsBg.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className="flex flex-col px-70 py-20 backdrop-blur-sm">
        <div className="items-center flex flex-col">
          <p className="text-[30px] font-Lato text-secondary3">Why Us?</p>
          <p className="text-[50px] font-bold font-Lato text-secondary2">
            Customer Reviews
          </p>
        </div>
        <div className="mt-10 w-[1000px] overflow-hidden space-x-10  flex justify-between">
          {data.map((review, index) => (
            <div key={index} className=" space-x-4 flex w-[300px] ">
              <div className="w-[70px] h-[70px] object-cover flex rounded-full ">
                <img
                  style={{
                    objectFit: "cover",
                    width: 70,
                    borderRadius: "50%",
                  }}
                  src={urlFor(review.productImage)}
                />
              </div>
              <div>
                <p className="text-[25px] font-Lato font-bold text-secondary3">
                  {review.customerName}
                </p>
                <p className="w-[200px] font-Lato  text-[14px]">
                  {review.customerReview[0].children[0].text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
