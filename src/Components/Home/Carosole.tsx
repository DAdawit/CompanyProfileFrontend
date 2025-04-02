"use client";
import React, { Component, JSX } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
// import { LogoOut } from "@/types/Logo";
import { HeroSlider } from "../../types/HeroOut";

interface CarosoleProps {
  carosoles: HeroSlider[];
}
export default class Carosole extends Component<CarosoleProps> {
  render() {
    const { carosoles } = this.props;
    const safeCarosoles = Array.isArray(carosoles) ? carosoles : [];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 10000,
      cssEase: "linear",
      appendDots: (dots: JSX.Element[]) => (
        <div
          style={{
            position: "absolute",
            top: "auto",
            left: 0,
            right: 0,
            bottom: 8,
            fontSize: "40px",
            color: "white", // Change the color here
            borderRadius: "10px",
            padding: "10px",
            zIndex: 0.9,
          }}
        >
          <ul style={{ margin: "0", color: "white", listStyle: "none" }}>
            {dots}
          </ul>
        </div>
      ),
    };

    return (
      <div className=" overflow-x-hidden">
        <Slider {...settings}>
          {safeCarosoles &&
            Array.isArray(safeCarosoles) &&
            safeCarosoles.map((carosole) => (
              <div
                className="h-[90vh] relative xl:max-h-[90vh] xll:max-h-[60vh]"
                key={carosole.id}
              >
                <Image
                  src={`${carosole?.image?.url}`}
                  alt="hero image"
                  height={2000}
                  width={2000}
                  className="h-[90vh] xl:max-h-[90vh] xll:max-h-[60vh] w-screen object-cover object-bottom brightness-50"
                />
                <div className="absolute h-full top-0 w-full flex text-white ">
                  <div className="flex items-center justify-start w-full px-5 container mx-auto">
                    <div className="max-w-3xl xxl:max-w-4xl grid ">
                      <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold mt-5 ">
                        {carosole?.title}
                      </h1>
                      <p className="mt-5 xxl:text-lg tracking-wider max-w-2xl">
                        {carosole?.subtitle}
                      </p>
                      <div className="mt-5 align-bottom h-full flex items-end">
                        <Link
                          href="/menus"
                          className="bg-white px-6 py-3 rounded-lg w-max bg-bgButton text-gray-950 mt-4 tracking-wider font-medium transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        >
                          View our menu
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}
