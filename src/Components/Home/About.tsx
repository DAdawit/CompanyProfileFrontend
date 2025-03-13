import FadeInDown from "@/common/Animations/FadeInDown";
import FadeInUp from "@/common/Animations/FadeInUp";
import FadeOut from "@/common/Animations/FadeOut";
import HeaderTitle from "@/common/HeaderTitle";
import { fetchAboutUs } from "@/services/main.services";
import Image from "next/image";
import React from "react";

export default async function AboutUs() {
  const abouts_us = await fetchAboutUs();
  return (
    <div className="" id="about">
      {/* <pre>{JSON.stringify(abouts_us, null, 2)}</pre> */}
      <FadeInDown>
        <HeaderTitle titleOne={abouts_us.data.title} />
      </FadeInDown>
      <FadeOut>
        <p className="text-gray-800  max-w-4xl mx-auto  text-lg xll:max-w-6xl px-5">
          {abouts_us.data.description}
        </p>
      </FadeOut>
      <div className="container mx-auto max-w-7xl px-5 py-24">
        <FadeInUp>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-5 items-center">
            <div>
              <Image
                src={`http://localhost:8000${abouts_us.data.mission_banner_image.url}`}
                height={1000}
                width={1000}
                alt="hero image"
                className="h-72 object-contain"
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
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-36 items-center">
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
                className="h-72 object-contain"
              />
            </div>
          </section>
        </FadeInUp>
      </div>
      );
    </div>
  );
}
