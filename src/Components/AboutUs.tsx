import FadeInDown from "@/Common/Animations/FadeInDown";
import FadeOut from "@/Common/Animations/FadeOut";
import HeaderTitle from "@/Common/HeaderTitle";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="" id="about">
      <FadeInDown>
        <HeaderTitle titleOne="Our" titleTwo="Story" />
      </FadeInDown>
      <FadeOut>
        <p className="text-gray-800  max-w-4xl mx-auto  text-lg xll:max-w-6xl px-5">
          where our story unfolds at the intersection of passion and technology.
          Founded in 2021, our commitment to harnessing the power of the web has
          been the heartbeat of our existence. It all started with a fervent
          belief in the transformative potential of the digital landscape to
          forge meaningful connections. Since our inception, we&apos;ve grown
          and evolved, yet our core values of excellence and unwavering client
          satisfaction remain the driving force propelling us forward. Join us
          on this exciting adventure as we continue to push the boundaries of
          web innovation, creating experiences that resonate and endure.
        </p>
      </FadeOut>
    </div>
  );
};

export default AboutUs;
