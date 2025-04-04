import { ServicesOutI } from "@/types/ServicesOut";
import React from "react";
import Image from "next/image";
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
            <div
              key={service?.id}
              className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-white dark:bg-primary-800/50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50/20 dark:hover:from-primary-800 dark:hover:to-accent-800/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group"
            >
              <Image
                src={`${service?.icon?.url}`}
                alt="spector"
                width={100}
                height={200}
                className="h-14 object-contain"
                unoptimized={true}
              />{" "}
              <h2 className="text-xl font-semibold capitalize text-primary-900 dark:text-primary-100 group-hover:text-primary-700">
                {service?.title}
              </h2>
              <p className="text-primary-600 dark:text-primary-300 group-hover:text-primary-700">
                {service?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
