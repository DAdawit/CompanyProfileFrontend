"use client";
import Image from "next/image";
import React from "react";
import "animate.css";

const Targets = () => {
  // Array of objects containing the content
  const targetAudience = [
    {
      title: "Fresh Graduates",
      description:
        "Over 20,000 talented graduates from the classes of 2022 and 2023 will grace the expo, eager to launch their careers and make their mark in the digital landscape.",
      image: "/about9.jpg",
      reverse: false, // Controls the order of the image and text
    },
    {
      title: "Employer Companies",
      description:
        "More than 200 esteemed companies will be eagerly scouting for fresh talent to join their ranks. This is your chance to impress industry leaders and secure your dream job.",
      image: "/john-schnobrich-FlPc9_VocJ4-unsplash.jpg",
      reverse: true,
    },
    {
      title: "Stakeholders",
      description:
        "Government bodies, educational institutions, and non-profit organizations will converge to create a vibrant ecosystem that supports employment and fosters collaboration.",
      image: "/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
      reverse: false,
    },
    {
      title: "Fresh Graduates",
      description:
        "Over 20,000 talented graduates from the classes of 2022 and 2023 will grace the expo, eager to launch their careers and make their mark in the digital landscape.",
      image: "/about9.jpg",
      reverse: false, // Controls the order of the image and text
    },
    {
      title: "Employer Companies",
      description:
        "More than 200 esteemed companies will be eagerly scouting for fresh talent to join their ranks. This is your chance to impress industry leaders and secure your dream job.",
      image: "/john-schnobrich-FlPc9_VocJ4-unsplash.jpg",
      reverse: true,
    },
    {
      title: "Stakeholders",
      description:
        "Government bodies, educational institutions, and non-profit organizations will converge to create a vibrant ecosystem that supports employment and fosters collaboration.",
      image: "/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
      reverse: false,
    },
  ];

  return (
    <section className="container mx-auto px-5 mt-24">
      <h1 className="gridiantText text-5xl text-center font-extrabold py-16">
        Our Target Audience
      </h1>

      {targetAudience.map((item, index) => (
        <div
          key={index}
          className="max-w-6xl mx-auto bg-white p-5 mt-8 rounded-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
            <div
              className={
                (index + 1) % 2 == 0
                  ? `grid md:order-2 justify-center rounded-lg self-center bg-green-400`
                  : `grid gap-3 h-min self-center bg-blue-500`
              }
            >
              <h1 className=" text-5xl text-center font-bold h-min items-center ">
                Fresh Graduates
              </h1>
              <p className="text-base text-gray-500 text-center h-min">
                Over 20,000 talented graduates from the classes of 2022 and 2023
                will grace the expo, eager to launch their careers and make
                their mark in the digital landscape.
              </p>
            </div>
            <div
              //   className=""
              className={
                (index + 1) % 2 == 0
                  ? `grid justify-center rounded-lg bg-green-500 p-5`
                  : `grid md:order-1 justify-center rounded-lg bg-blue-500 p-5`
              }
            >
              <Image
                src="/about9.jpg"
                alt="heroImage"
                height={2000}
                width={2000}
                className="h-72 w-full object-cover object-bottom self-center rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Targets;
