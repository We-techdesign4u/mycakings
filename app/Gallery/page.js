import React from "react";
import { client } from "@/studio-hello-world/lib/client";
import { urlFor } from "@/studio-hello-world/lib/client";

export default async function Gallery() {
  const data = await getGallery();

  const BrandOptions = [
    { value: "All Products", label: "All Products" },
    { value: "Cakes", label: "Cakes" },
    { value: "Donut", label: "Donut" },
    { value: "Parfait", label: "Parfait" },
  ];

  const gallery = data.gallery;

  return (
    <div className="h-full relative">
      <div className=" w-full fixed  z-1 pt-15  sm:pt-[130px] pb-[20px] bg-amber-200 px-5 sm:px-[120px] block sm:items-center ">
        <div className="sm:items-center sm:flex-row flex-col flex pb-[10px]">
          <div className="flex grow-1">
            <p>Products: {gallery.length}</p>
          </div>
          <div className="pr-4">Sort by: </div>
          <form className=" space-x-[30px]">
            <select
              name="product"
              className="bg-white w-[200px] h-[50px] border-[0.5px] border-gray-300 rounded-xl pl-2"
            >
              {BrandOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
      <span className=" flex h-[180px] w-full"></span>

      <div className="bg-[url('./images/howtoorderBg2.jpg')] bg-no-repeat bg-cover bg-fixed">
        <div className=" sm:px-[120px] px-5 flex flex-col items-center sm:pt-[90px] pt-[70px] sm:grid sm:grid-cols-4 grid-cols-1 sm:gap-30 gap-10 bg-white/30 backdrop-blur-sm">
          {gallery.map((product, index) => (
            <div
              className="transition duration-700 ease-in-out hover:shadow-md block bg-white w-[300px] p-[10px] border-1 rounded-[10px] border-gray-400"
              key={index}
            >
              <div className="allProductImg w-[298px] h-[280px] bg-amber-100 -m-[10px] justify-center items-center flex rounded-[10px] object-cover">
                <img
                  style={{
                    objectFit: "cover",
                    width: 298,
                    borderRadius: 10,
                    height: 280,
                  }}
                  src={urlFor(product.productImage)}
                />
              </div>

              <p className="allProductName mt-4 font-Lato text-secondary3">
                {product.title}
              </p>
              <h4 className="allProductPrice">{product.price}</h4>
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getGallery() {
  const gallery = await client.fetch('*[_type == "gallery"]');
  return { gallery };
}
