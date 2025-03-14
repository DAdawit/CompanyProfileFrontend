// import FadeInDown from "@/common/Animations/FadeInDown";
// import FadeOut from "@/common/Animations/FadeOut";
// import HeaderTitle from "@/common/HeaderTitle";
import { fetchOurPortfolios } from "@/services/main.services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default async function Portfolios() {
  const colors = ["blue", "green", "yellow", "purple"];
  const portfolios = await fetchOurPortfolios();
  return (
    <div id="portfolios">
      <section className="ezy__portfolio16 light py-14 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
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
          {portfolios?.data?.map((portfolio, i) => (
            <div
              key={portfolio.id}
              className="flex flex-col gap-6 max-w-7xl mt-12 mx-auto"
            >
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
                    <Link href={portfolio.link} className="" target="_blank">
                      <Image
                        src={`http://localhost:8000${portfolio.image.url}`}
                        alt={portfolio.title}
                        height={1000}
                        width={1000}
                        className="h-64 object-fill rounded-sm"
                      />
                    </Link>
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
                      <button className="font-bold bg-blue-600 text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded inline-flex">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
