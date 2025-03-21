import DynamicHero from "@/common/DynamicHero";
import FAQs from "@/common/FAQs";
import AboutTimeline from "@/components/About/AboutTimeline";
// import AboutTimeline from "@/components/About/AboutTimeline";
import DynamicTitleAndDescription from "@/components/About/OurStory";
import AboutUs from "@/components/Home/About";
import CallToAction from "@/components/Home/CallToAction";
import { ContactUs } from "@/components/Home/ContactUs";
import OurTeam from "@/components/Home/OurTeam";
import {
  fetchAboutUs,
  fetchCallToAction,
  fetchFaqs,
  fetchOutTeam,
  fetchTimeLineEvents,
} from "@/services/main.services";

export default async function about() {
  const abouts_us = await fetchAboutUs();
  const our_team = await fetchOutTeam();
  const call_to_action = await fetchCallToAction();
  const faqs = await fetchFaqs();
  const time_line_events = await fetchTimeLineEvents();

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
      {/* <AboutPage /> */}

      <AboutTimeline time_line_events={time_line_events} />
      <div>
        <FAQs faqs={faqs} />
      </div>
      <ContactUs />
      <CallToAction call_to_action={call_to_action} />
    </div>
  );
}
