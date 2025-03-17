import Image from "next/image";
import React from "react";
// import FadeInDown from "@/common/Animations/FadeInDown";
// import HeaderTitle from "@/common/HeaderTitle";
// import FadeOut from "@/common/Animations/FadeOut";
import { fetchOurServices } from "@/services/main.services";

export default async function Services() {
  const services = await fetchOurServices();
  return (
    <div id="services">
      <section className="ezy__service22 light py-14 md:py-16 bg-white relative z-[1]">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 max-w-7xl bg-blue-50 bg-opacity-30 -z-[1]" />
        <div className="container px-4 mx-auto">
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
              <button className="py-3 px-7 rounded border border-gray-950 text-gray-950 hover:bg-opacity-90 duration-300 w-max">
                See All
              </button>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto mt-12">
            {services?.data?.ServicesComponent?.map((service) => (
              <div
                className="col-span-6 md:col-span-3 lg:col-span-2"
                key={service.id}
              >
                <div className="bg-white shadow-xl rounded-xl h-full">
                  <div className="p-6 md:p-12">
                    <div className="w-[75px] h-[75px] rounded-full text-[26px] shadow-xl flex justify-center items-center mb-6">
                      <Image
                        src={`http://localhost:8000${service.icon.url}`}
                        alt="spector"
                        width={100}
                        height={200}
                        className="h-14 object-contain"
                      />{" "}
                    </div>
                    <h4 className="text-2xl mb-6 font-bold">{service.title}</h4>
                    <p className="opacity-70 leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <pre>{JSON.stringify(services, null, 2)}</pre> */}
      {/* 
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
          {services?.data?.ServicesComponent?.map((service) => (
            <FadeOut key={service.id}>
              <div className="px-5 py-12 shadow-lg rounded-lg ">
                <div className="flex gap-2 items-center">
                  <Image
                    src={`http://localhost:8000${service.icon.url}`}
                    alt="spector"
                    width={100}
                    height={200}
                    className="h-14 object-contain"
                  />
                  <h1 className="text-xl text-primary font-medium mb-3">
                    {service.title}
                  </h1>
                </div>
                <p className="text-gray-700 mt-3">{service.description}</p>
              </div>
            </FadeOut>
          ))}
        </section>
      </div> */}
    </div>
  );
}
