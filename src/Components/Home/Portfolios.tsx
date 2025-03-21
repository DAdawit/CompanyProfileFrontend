import FadeInLeft from "@/common/Animations/FadeInLeft";
import SlideInUp from "@/common/Animations/SlideInUp";
import { PortfoliosOutI } from "@/types/PortfoliosOut";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PropTypes {
  portfolios: PortfoliosOutI;
}
export default async function Portfolios({ portfolios }: PropTypes) {
  const colors = ["blue", "green", "yellow", "purple"];
  return (
    <div id="portfolios">
      <section className="ezy__portfolio16 light py-14 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <FadeInLeft>
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <div className="w-2/3">
                <h2 className="text-3xl md:text-[52px] font-bold">
                  Our Recent Work
                </h2>
              </div>
              <div className="w-1/3 text-end">
                <button className="font-bold text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded">
                  See All
                </button>
              </div>
            </div>
          </FadeInLeft>

          {portfolios?.data?.map((portfolio, i) => (
            <div
              key={portfolio.id}
              className="flex flex-col gap-6 max-w-7xl mt-12 mx-auto"
            >
              <SlideInUp>
                <div
                  className={`grid grid-cols-12 bg-${colors[i]}-100 bg-opacity-30 rounded-xl p-6 md:p-12`}
                >
                  <div
                    className={`col-span-12 lg:col-span-5 ${
                      i % 2 === 0 && "order-2"
                    }`}
                  >
                    <div
                      className={`bg-${colors[i]}-100 bg-opacity-75 flex justify-center items-center p-6 rounded-xl`}
                    >
                      <Image
                        src={`http://localhost:8000${portfolio.image.url}`}
                        alt={portfolio.title}
                        height={1000}
                        width={1000}
                        className="h-64 object-cover rounded-sm"
                        unoptimized={true}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
                      <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">
                        {portfolio.title}
                      </h5>
                      <p className="leading-loose opacity-80 mb-6 lg:pr-12">
                        {portfolio.description}
                      </p>
                      <div>
                        {portfolio.link != null ? (
                          <Link
                            href={portfolio.link}
                            target="_blank"
                            className="font-bold border border-gray-950 text-gray-950 px-8 py-3 hover:bg-opacity-90 duration-300 rounded inline-flex"
                          >
                            View Project
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideInUp>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
