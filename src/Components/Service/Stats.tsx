"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import CountUp from "react-countup";

const cards = [
  {
    count: 432,
    title: "Completed Event",
    detail:
      "Partner removes the hassle and confusion that comes from managing.",
  },
  {
    count: 758,
    title: "Game Completed",
    detail:
      "It's no secret that the digital. From exciting startups to global brands.",
  },
  {
    count: 31,
    title: "Completed Fund",
    detail: "Sed ut in perspiciatis unde omnis istema natus error sit tatem.",
  },
  {
    count: 994,
    title: "Completed Ticket",
    detail:
      "Viverra tellus in hac habitasse platea dictumst tempor id eu nisl.",
  },
];

interface CardItemProps {
  item: {
    count: number;
    title: string;
    detail: string;
  };
  isVisible: boolean;
}

const CardItem = ({ item, isVisible }: CardItemProps) => (
  <div className="mb-6 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
    <h3 className="font-black text-3xl md:text-[45px] mb-4 relative">
      <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-purple-300 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-blue-400 transition-all duration-300">
        {isVisible ? <CountUp end={item.count} duration={2.5} /> : 0}
        {item.title.includes("Fund") && "+"}
        {item.title.includes("Ticket") && "+"}
      </span>
      <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 group-hover:w-1/2"></span>
    </h3>
    <h5 className="text-xl font-medium mb-2 text-white">{item.title}</h5>
    <p className="mb-0 text-white/95">{item.detail}</p>
  </div>
);

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="stats-section" className="relative py-14 md:py-24">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/about9.jpg"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>

      <div className="container px-4 relative">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-[45px] font-bold leading-snug mb-4 text-white">
            <span className="relative inline-block">
              <span className="relative z-10 inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
                Some Important Numbers
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"></span>
            </span>
          </h1>
          <p className="text-lg text-white/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod
            perferendis nihil cupiditate aliquid qui exercitationem labore
            veritatis eaque nobis libero earum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, i) => (
            <CardItem item={item} key={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
