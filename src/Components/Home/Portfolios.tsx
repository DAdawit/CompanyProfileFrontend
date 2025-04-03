import FadeInLeft from "@/common/Animations/FadeInLeft";
import { PortfoliosOutI } from "@/types/PortfoliosOut";
import React from "react";
import ProtfolioCard from "../Portfolio/ProtfolioCard";
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
            <ProtfolioCard
              key={portfolio.id}
              index={index}
              portfolio={portfolio}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
