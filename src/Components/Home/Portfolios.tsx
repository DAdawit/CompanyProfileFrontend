import FadeInDown from "@/common/Animations/FadeInDown";
import FadeOut from "@/common/Animations/FadeOut";
import HeaderTitle from "@/common/HeaderTitle";
import { fetchOurPortfolios } from "@/services/main.services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Portfolios() {
  const portfolios = await fetchOurPortfolios();
  return (
    <div id="portfolios">
      {/* <pre>{JSON.stringify(portfolios, null, 2)}</pre> */}

      <FadeInDown>
        <HeaderTitle titleOne="Our" titleTwo="Portfolios" />
      </FadeInDown>

      <div className="container max-w-7xl mx-auto px-5 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 h-full">
          {portfolios?.data?.map((portfolio) => (
            <FadeOut key={portfolio.id}>
              <div className="bg-white  shadow-lg h-full text-gray-600">
                <div className="p-5 bg-slate-100">
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
                <div className="flex justify-between mt-5 container px-5">
                  <div className="">
                    <Link
                      href={portfolio.link}
                      className="underline underline-offset-4"
                      target="_blank"
                    >
                      {portfolio.title}
                    </Link>
                  </div>
                  <div>
                    {/* <h1 className="border-[1px] border-gray-600 rounded-full px-3 py-1  text-sm">
                      {project.year}
                    </h1> */}
                  </div>
                </div>
                <div className="text-sm px-5 pb-6 flex items-center gap-x-1 ">
                  {/* <LocationIcon /> */}
                  <p className="">{portfolio.description}</p>
                </div>
              </div>
            </FadeOut>
          ))}
        </div>
      </div>
    </div>
  );
}
