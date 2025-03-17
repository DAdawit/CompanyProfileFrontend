import AboutDetail from "@/components/About/AboutDetail";
import AboutTimeline from "@/components/About/AboutTimeline";
import AboutUs from "@/components/About/AboutUs";
import Team from "@/components/About/Team";
import Vision from "@/components/About/Vision";

const about = () => {
  return (
    <div className="overflow-hidden bg-bgPrimary">
      <h1>About us</h1>
      <AboutUs />
      <AboutDetail />
      <Vision />
      <Team />
      <AboutTimeline />
    </div>
  );
};

export default about;
