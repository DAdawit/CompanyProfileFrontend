import Image from "next/image";
import React from "react";
import { services } from "@/data/data";
import HeaderTitle from "@/Common/HeaderTitle";
import FadeInDown from "@/Common/Animations/FadeInDown";
import FadeOut from "@/Common/Animations/FadeOut";

const Services = () => {
  return (
    <div id="services">
      <FadeInDown>
        <HeaderTitle titleOne="Our" titleTwo="Services" />
      </FadeInDown>
      <div className="container mx-auto max-w-7xl px-5 sm:px-2 mt-5 ">
        <FadeInDown>
          <p className="text-center text-lg font-medium mt-5">
            At <span className="text-primary">WanderWeb</span>, we offer a
            comprehensive suite of web development services, including:
          </p>
        </FadeInDown>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-8 gap-y-16 mt-8">
          {services.map((service, index) => (
            <FadeOut key={index}>
              <div className="px-5 py-12 shadow-lg rounded-lg h-full">
                <div className="flex gap-2 items-center">
                  <Image
                    src={service.image}
                    alt="spector"
                    width={100}
                    height={200}
                    className="h-14 object-contain"
                  />
                  <h1 className="text-xl text-primary font-medium mb-3">
                    {service.name}
                  </h1>
                </div>
                <p className="text-gray-700 mt-3">{service.description}</p>
              </div>
            </FadeOut>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services;
