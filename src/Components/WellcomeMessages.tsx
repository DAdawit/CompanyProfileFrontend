import React from "react";
import Image from "next/image";
import FadeInUp from "@/Common/Animations/FadeInUp";

const WellcomeMessages = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-5 py-24">
        <FadeInUp>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-5 items-center">
            <div>
              <Image
                src="/brand.jpg"
                height={1000}
                width={1000}
                alt="hero image"
                className="h-72 object-contain"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-5 text-gray-800">
                Elevate <span className="text-primary">Your Brand Online</span>
              </h1>
              <p className="text-gray-800 mb-5 max-w-lg text-lg">
                In WanderWeb we don&apos;t just build websites; we craft digital
                experiences. Our team of skilled developers combines technical
                expertise with artistic flair to deliver bespoke solutions that
                set your brand apart in the online realm
              </p>
            </div>
          </section>
        </FadeInUp>

        <FadeInUp>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-36 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-5 text-gray-800">
                Featured <span className="text-primary">Projects </span>
              </h1>
              <p className="text-gray-800 mb-5 text-lg max-w-lg">
                Explore our showcase of success stories, where we&apos;ve
                transformed visions into reality. From e-commerce platforms to
                sleek corporate websites, our portfolio reflects the diversity
                and quality of our craftsmanship
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/featured.jpg"
                height={1000}
                width={1000}
                alt="hero image"
                className="h-72 object-contain"
              />
            </div>
          </section>
        </FadeInUp>
      </div>
    </>
  );
};

export default WellcomeMessages;
