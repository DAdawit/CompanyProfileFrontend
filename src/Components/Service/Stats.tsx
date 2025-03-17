import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const cards = [
  {
    count: "432",
    title: "Completed Event",
    detail:
      "Partner removes the hassle and confusion that comes from managing.",
  },
  {
    count: "758",
    title: "Game Completed",
    detail:
      "It's no secret that the digital. From exciting startups to global brands.",
  },
  {
    count: "31+",
    title: "Completed Fund",
    detail: "Sed ut in perspiciatis unde omnis istema natus error sit tatem.",
  },
  {
    count: "994+",
    title: "Completed Ticket",
    detail:
      "Viverra tellus in hac habitasse platea dictumst tempor id eu nisl.",
  },
];

interface CardItemProps {
  item: {
    count: string;
    title: string;
    detail: string;
  };
}

const CardItem = ({ item }: CardItemProps) => (
  <div className="mb-6 p-6 rounded-xl hover:bg-gradient-to-br hover:from-primary-50/50 hover:to-accent-50/50 dark:hover:from-primary-800/50 dark:hover:to-accent-800/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
    <h3 className="font-black text-3xl md:text-[45px] mb-4 relative">
      <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
        {item.count}
      </span>
      <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-1/2"></span>
    </h3>
    <h5 className="text-xl font-medium mb-2 text-primary-700 dark:text-primary-200">
      {item.title}
    </h5>
    <p className="mb-0 text-primary-600 dark:text-primary-300">{item.detail}</p>
  </div>
);

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Cards = () => {
  const divider = Math.ceil(cards.length / 2);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6">
        {cards.slice(0, divider).map((item, i) => (
          <CardItem item={item} key={i} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {cards.slice(divider).map((item, i) => (
          <CardItem item={item} key={i} />
        ))}
      </div>
    </>
  );
};

const Stats = () => {
  return (
    <section className="relative py-14 md:py-24 bg-gradient-to-b from-white to-primary-50/30 dark:from-primary-900 dark:to-primary-800">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-accent-100/20 dark:from-primary-800/20 dark:to-accent-800/20"></div>
      <div className="container px-4 relative">
        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <h1 className="text-3xl md:text-[45px] font-bold leading-snug mb-4">
                <span className="relative inline-block">
                  <span className="relative z-10 inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                    Some Important Numbers
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                </span>
              </h1>
              <p className="text-lg text-primary-600 dark:text-primary-300 mb-12 relative z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quod perferendis nihil cupiditate aliquid qui exercitationem
                labore veritatis eaque nobis libero earum.
              </p>
            </div>
            <Cards />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="flex justify-center items-end h-full">
              <Image
                alt="hello"
                height={500}
                width={500}
                unoptimized
                src="https://cdn.easyfrontend.com/pictures/featured/three.png"
                className="max-w-full h-auto rounded-lg mt-12 md:mt-0 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
