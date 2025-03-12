import AboutDetail from "@/components/About/AboutDetail";
import AboutTimeline from "@/components/About/AboutTimeline";
import AboutUs from "@/components/About/AboutUs";
import Team from "@/components/About/Team";
import Vision from "@/components/About/Vision";
import React from "react";

const about = () => {
  return (
    <div className="overflow-hidden bg-bgPrimary">
      <AboutUs />
      <AboutDetail />
      <Vision />
      <Team />
      <AboutTimeline />
    </div>
  );
};

export default about;
