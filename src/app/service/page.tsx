import Hero from "@/components/Service/Hero";
import OurService from "@/components/Service/OurService";
import Stats from "@/components/Service/Stats";
import React from "react";

const service = () => {
  return (
    <div className="overflow-hidden bg-primary-50">
      <Hero />
      <OurService />
      <Stats />
    </div>
  );
};

export default service;
