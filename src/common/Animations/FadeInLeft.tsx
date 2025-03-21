"use client";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

import React from "react";

const FadeInLeft = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimationOnScroll
      animateOnce
      animateIn="animate__animated  animate__fadeInLeft animate__delay-0.3s animate__slow	0.5s"
    >
      {children}
    </AnimationOnScroll>
  );
};

export default FadeInLeft;
