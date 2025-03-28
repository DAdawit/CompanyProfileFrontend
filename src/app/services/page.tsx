"use client";
import Image from "next/image";
import React from "react";
import "animate.css";

const Targets = () => {
  return (
    <>
      <section className="container mx-auto px-5 mt-24">
        <h1 className="gridiantText text-5xl text-center font-extrabold py-16">
          Our Target Audience
        </h1>

        <div className="max-w-6xl mx-auto bg-white p-5 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
            <div className="grid gap-3 h-min self-center">
              <h1 className="gridiantText text-5xl text-center font-bold h-min">
                Fresh Graduates
              </h1>
              <p className="text-base text-gray-500 text-center h-min">
                Over 20,000 talented graduates from the classes of 2022 and 2023
                will grace the expo, eager to launch their careers and make
                their mark in the digital landscape.
              </p>
            </div>
            <div className="flex justify-center rounded-lg ">
              <Image
                src="/graduate1.jpg"
                alt="heroImage"
                height={2000}
                width={2000}
                className="h-72 w-full object-cover object-bottom self-center rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-white p-5 mt-8 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
            <div className="order-2 md:order-1 flex justify-center rounded-lg ">
              <Image
                src="/company1.jpg"
                alt="heroImage"
                height={2000}
                width={2000}
                className="h-72 w-full object-cover object-bottom self-center rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2 grid gap-3 h-min self-center">
              <h1 className="gridiantText text-5xl text-center font-bold h-min">
                Employer Companies
              </h1>
              <p className="text-base text-gray-500 text-center h-min">
                More than 200 esteemed companies will be eagerly scouting for
                fresh talent to join their ranks. This is your chance to impress
                industry leaders and secure your dream job.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-white p-5 mt-8 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
            <div className="grid gap-3 h-min self-center">
              <h1 className="gridiantText text-5xl text-center font-bold h-min">
                Stakeholders
              </h1>
              <p className="text-base text-gray-500 text-center h-min">
                Government bodies, educational institutions, and non-profit
                organizations will converge to create a vibrant ecosystem that
                supports employment and fosters collaboration.
              </p>
            </div>
            <div className="flex justify-center rounded-lg ">
              <Image
                src="/stackholders1.jpg"
                alt="heroImage"
                height={2000}
                width={2000}
                className="h-72 w-full object-cover object-bottom self-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Targets;
