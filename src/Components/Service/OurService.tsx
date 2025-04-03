import { ServicesOutI } from "@/types/ServicesOut";
import React from "react";
import ServicesSecondaryCard from "./ServicesSecondaryCard";
interface propTypes {
  services: ServicesOutI;
}

export default async function OurService({ services }: propTypes) {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl mb-12">
          <span className="relative inline-block">
            <span className="relative z-10 inline-block text-gray-900">
              explore our awesome
            </span>
            <br />
            <span className="text-gray-900">Services</span>
          </span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {services?.data?.ServicesComponent.map((service) => (
            <ServicesSecondaryCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
