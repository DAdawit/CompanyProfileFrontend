// import FadeInDown from "@/common/Animations/FadeInDown";
import FadeInUp from "@/common/Animations/FadeInUp";
// import FadeOut from "@/common/Animations/FadeOut";
// import HeaderTitle from "@/common/HeaderTitle";
import { fetchAboutUs } from "@/services/main.services";
import Image from "next/image";
import React from "react";

export default async function AboutUs() {
  const abouts_us = await fetchAboutUs();
  return (
    <div className="py-14 md:py-24" id="about">
      {/* <pre>{JSON.stringify(abouts_us, null, 2)}</pre> */}
      <div className="grid grid-cols-12 justify-center text-center mb-12">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <h2 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold mb-6">
            Our Story
          </h2>
          <p className="text-xl opacity-80 mb-4">
            We not only make the world’s most comfortable hammocks, but through
            training and sustainable job creation, we empower our weavers and
            their families to break the cycle of poverty and build a brighter
            future.
          </p>
        </div>
      </div>

      <div className="container mx-auto  px-5 py-3">
        <FadeInUp>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-start">
            <div className="">
              <Image
                src={`http://localhost:8000${abouts_us.data.mission_banner_image.url}`}
                height={1000}
                width={1000}
                alt="hero image"
                className="h-72 object-cover max-w-full rounded-2xl"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-5 text-gray-800">
                Our <span className="text-primary">Mission</span>
              </h1>
              <p className="text-gray-800 mb-5 max-w-lg text-lg">
                {abouts_us.data.mission}
              </p>
            </div>
          </section>
        </FadeInUp>

        <FadeInUp>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-36 items-start">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-5 text-gray-800">
                Our <span className="text-primary">Vison </span>
              </h1>
              <p className="text-gray-800 mb-5 text-lg max-w-lg">
                {abouts_us.data.vision}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src={`http://localhost:8000${abouts_us.data.vision_banner_image.url}`}
                height={1000}
                width={1000}
                alt="hero image"
                className="h-72 object-cover max-w-full rounded-2xl"
              />
            </div>
          </section>
        </FadeInUp>
      </div>
    </div>
  );
}
