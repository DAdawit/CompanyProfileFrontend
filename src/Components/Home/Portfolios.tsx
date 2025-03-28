import FadeInLeft from "@/common/Animations/FadeInLeft";
import { PortfoliosOutI } from "@/types/PortfoliosOut";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PropTypes {
  portfolios: PortfoliosOutI;
}
export default async function Portfolios({ portfolios }: PropTypes) {
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

          {portfolios?.data?.map((portfolio, index) => (
            <>
              <div
                key={index}
                className="max-w-6xl mx-auto bg-white p-5 mt-8 rounded-md shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
                  <div
                    className={
                      (index + 1) % 2 == 0
                        ? `grid md:order-2 justify-center rounded-lg self-center`
                        : `grid gap-3 h-min self-center`
                    }
                  >
                    <h1 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">
                      {portfolio.title}
                    </h1>
                    <p className="leading-loose opacity-80 md:mb-6 lg:pr-12">
                      {portfolio.description}
                    </p>
                    <div className="hidden md:flex">
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
                  <div
                    className={
                      (index + 1) % 2 == 0
                        ? `grid justify-center rounded-lg`
                        : `grid md:order-1 justify-center rounded-lg`
                    }
                  >
                    <Image
                      src={`http://localhost:8000${portfolio.image.url}`}
                      alt={portfolio.title}
                      height={1000}
                      width={1000}
                      className="h-64 object-cover rounded-sm"
                      unoptimized={true}
                    />
                    <div className="flex md:hidden mt-4 md:mt-0">
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
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
