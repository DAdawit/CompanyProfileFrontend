import Carosole from "@/Components/Home/Carosole";
import DynamicTitleAndDescription from "@/Components/About/OurStory";
import AboutUs from "@/Components/Home/About";
import CallToAction from "@/Components/Home/CallToAction";
import Services from "@/Components/Home/Services";
import Portfolios from "@/Components/Home/Portfolios";
import OurTeam from "@/Components/Home/OurTeam";
// import { Portfolio16, TeamMember2 } from "@/components/Test/TestimonialTest";
// import { TeamMember7 } from "@/components/Test/TestimonialTest";

import {
  fetchAboutUs,
  fetchCallToAction,
  fetchHero,
  fetchOutTeam,
  fetchTestimonials,
} from "@/services/main.services";
import Testimonials from "@/Components/Home/Testimonials";
import { ContactUs } from "@/Components/Home/ContactUs";

export default async function Home() {
  const heroSections = await fetchHero();
  const testimonials = await fetchTestimonials();
  const abouts_us = await fetchAboutUs();
  const our_team = await fetchOutTeam();
  const call_to_action = await fetchCallToAction();

  return (
    <>
      <main id="" className="overflow-hidden bg-bgPrimary">
        <div className="mt-12">
          {/* <pre>{JSON.stringify(heroSections.data[0].heroSlider, null, 2)}</pre> */}
          <Carosole carosoles={heroSections.data[0].heroSlider} />
        </div>

        <div className="py-14 md:py-24">
          <DynamicTitleAndDescription
            title="About Us"
            description={abouts_us.data.description}
          />
          <AboutUs abouts_us={abouts_us} />
        </div>
        <div>
          <Services />
        </div>
        <div>{/* <TeamMember2 /> */}</div>
        <div>
          <Portfolios />
        </div>
        <div>
          <OurTeam our_team={our_team} />
        </div>

        <div>
          {/* <pre>{JSON.stringify(testimonials, null, 2)}</pre> */}
          <Testimonials testimonials={testimonials} />
        </div>
        <div>
          <CallToAction call_to_action={call_to_action} />
        </div>
        <div>
          <ContactUs />
        </div>

        {/* <MoveToTop /> */}
      </main>
    </>
  );
}
