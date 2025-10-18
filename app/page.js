import Image from "next/image";
import {
  HeroBanner,
  HowtoOrder,
  Sectiontwo,
  MenuNPrices,
  CustomerReview,
  Footer,
} from "./components";

import { client } from "../studio-hello-world/lib/client";

export async function getbanner() {
  const banner = await client.fetch('*[_type == "banner"]');

  return { banner };
}

export async function getProducts() {
  const products = await client.fetch(
    '*[_type == "products"]{title,image,prices[]->}'
  );
  return { products };
}

export async function getReviews() {
  const reviews = await client.fetch('*[_type == "reviews"]');
  return { reviews };
}

export default async function Home() {
  const banner = await getbanner();
  const products = await getProducts();
  const reviews = await getReviews();

  return (
    <div className="min-h-screen ">
      <main className="flex flex-col">
        <HeroBanner banner={banner} />
        <Sectiontwo banner={banner} />
        <HowtoOrder />
        <MenuNPrices products={products} />
        <CustomerReview reviews={reviews} />
      </main>
      <Footer />
    </div>
  );
}
