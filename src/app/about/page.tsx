import DynamicHero from "@/common/DynamicHero";
import ScheduleHero from "@/common/HeroDynamic";
// import AboutDetail from "@/components/About/AboutDetail";
import AboutTimeline from "@/components/About/AboutTimeline";
import DynamicTitleAndDescription from "@/components/About/OurStory";
// import AboutUs from "@/components/About/AboutUs";
// import Team from "@/components/About/Team";
// import Vision from "@/components/About/Vision";
import AboutUs from "@/components/Home/About";
import CallToAction from "@/components/Home/CallToAction";
import { ContactUs } from "@/components/Home/ContactUs";
import OurTeam from "@/components/Home/OurTeam";
import {
  fetchAboutUs,
  fetchCallToAction,
  fetchOutTeam,
} from "@/services/main.services";

export default async function about() {
  const abouts_us = await fetchAboutUs();
  const our_team = await fetchOutTeam();
  const call_to_action = await fetchCallToAction();

  return (
    <div className="overflow-hidden bg-bgPrimary">
      {/* <pre>{JSON.stringify(abouts_us, null, 2)}</pre> */}

      <DynamicHero
        title="About Us"
        description={abouts_us.data.description}
        image={abouts_us.data.image.url}
      />
      <div className="mt-24">
        <DynamicTitleAndDescription
          title="Our History"
          history={abouts_us.data.company_history}
        />
        <AboutUs abouts_us={abouts_us} />
      </div>

      <div className="mt-24">
        <OurTeam our_team={our_team} />
      </div>

      <AboutTimeline />
      <CallToAction call_to_action={call_to_action} />
      <ContactUs />
    </div>
  );
}
