// import FadeInDown from "@/common/Animations/FadeInDown";
import FadeInUp from "@/common/Animations/FadeInUp";
// import FadeOut from "@/common/Animations/FadeOut";
// import HeaderTitle from "@/common/HeaderTitle";
// import { fetchAboutUs } from "@/services/main.services";
import { AboutUsI } from "@/types/AboutUsOut";
import Image from "next/image";
import React from "react";

interface PropTypes {
  abouts_us: AboutUsI;
}
export default async function AboutUs({ abouts_us }: PropTypes) {
  return (
    <div className="" id="about">
      <div className="py-3">
        <FadeInUp>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-start">
            <div className="grid">
              <h1 className="text-4xl font-bold mb-5 text-gray-800">
                Our <span className="text-primary">Mission</span>
              </h1>
              <p className="text-gray-800 mb-5 max-w-lg text-lg">
                {abouts_us.data.mission}
              </p>
            </div>
            <div className="grid">
              <Image
                src={`${abouts_us?.data?.mission_banner_image?.url}`}
                height={1000}
                width={1000}
                alt="hero image"
                className="h-72 object-cover max-w-full rounded-2xl"
                unoptimized={true}
              />
            </div>
          </section>
        </FadeInUp>

        <FadeInUp>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-16 items-start">
            <div className="order-1 md:order-2">
              <h1 className="text-4xl font-bold mb-5 text-gray-800">
                Our <span className="text-primary">Vison </span>
              </h1>
              <p className="text-gray-800 mb-5 text-lg max-w-lg">
                {abouts_us?.data?.vision}
              </p>
            </div>
            <div className="order-2 md:order-1">
              <Image
                src={`${abouts_us.data.vision_banner_image.url}`}
                height={1000}
                width={1000}
                alt="hero image"
                className="h-72 object-cover max-w-full rounded-2xl"
                unoptimized={true}
              />
            </div>
          </section>
        </FadeInUp>
      </div>
    </div>
  );
}
