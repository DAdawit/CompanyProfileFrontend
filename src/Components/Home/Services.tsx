import React from "react";

import { ServicesOutI } from "@/types/ServicesOut";
import Link from "next/link";
import FadeInLeft from "@/common/Animations/FadeInLeft";
import FadeInUp from "@/common/Animations/FadeInUp";
import ServicesPrimaryCard from "../Service/ServicesPrimaryCard";
interface PropType {
  services: ServicesOutI;
}
export default async function Services({ services }: PropType) {
  return (
    <>
      {/* <pre>{JSON.stringify(services, null, 2)}</pre> */}

      <div id="services">
        <section className="ezy__service22 light py-14 md:py-16 bg-white relative z-[1]">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 max-w-7xl bg-blue-50 bg-opacity-30 -z-[1]" />
          <div className="container px-4 mx-auto">
            <FadeInLeft>
              <div className="flex flex-col md:flex-row gap-6 justify-between">
                <div className="max-w-6xl">
                  <h2 className="text-3xl md:text-[45px] font-bold mb-6">
                    {services.data.title}
                  </h2>
                  <p className="text-lg opacity-80 max-w-4xl">
                    {services.data.description}
                  </p>
                </div>
                <div className="flex items-center md:justify-end">
                  <Link
                    href="/services"
                    className="py-3 px-7 rounded border border-gray-950 text-gray-950 hover:bg-opacity-90 duration-300 w-max"
                  >
                    See All
                  </Link>
                </div>
              </div>
            </FadeInLeft>
            <FadeInUp>
              <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto mt-12">
                {services?.data?.ServicesComponent?.map((service) => (
                  <ServicesPrimaryCard key={service.id} service={service} />
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>
      </div>
    </>
  );
}
