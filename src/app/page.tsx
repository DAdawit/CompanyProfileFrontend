import FadeOut from "@/common/Animations/FadeOut";
import FAQs from "@/common/FAQs";
import DynamicTitleAndDescription from "@/components/About/OurStory";
import AboutUs from "@/components/Home/About";
import CallToAction from "@/components/Home/CallToAction";
import Carosole from "@/components/Home/Carosole";
import { ContactUs } from "@/components/Home/ContactUs";
import OurTeam from "@/components/Home/OurTeam";
import Portfolios from "@/components/Home/Portfolios";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";

import {
  fetchAboutUs,
  fetchCallToAction,
  fetchFaqs,
  fetchHero,
  fetchOrgDetail,
  fetchOurPortfolios,
  fetchOurServices,
  fetchOutTeam,
  fetchTestimonials,
} from "@/services/main.services";

export async function generateMetadata() {
  const org = await fetchOrgDetail();
  const { org_detail } = org.data;

  return {
    title: "Home",
    description: { org_detail },
  };
}

export default async function Home() {
  const heroSections = await fetchHero();
  const testimonials = await fetchTestimonials();
  const abouts_us = await fetchAboutUs();
  const our_team = await fetchOutTeam();
  const call_to_action = await fetchCallToAction();
  const portfolios = await fetchOurPortfolios();
  const services = await fetchOurServices();
  const faqs = await fetchFaqs();

  return (
    <>
      {/* <pre>{JSON.stringify(services.data, null, 2)}</pre> */}
      <p>Hello world!</p>
      <main id="" className="overflow-hidden bg-bgPrimary">
        <div className="mt-12">
          <Carosole carosoles={heroSections.data[0].heroSlider} />
        </div>

        <div className="py-14 md:py-24">
          <FadeOut>
            <DynamicTitleAndDescription
              title="About Us"
              description={abouts_us.data.description}
            />
          </FadeOut>
          <AboutUs abouts_us={abouts_us} />
        </div>
        <div>
          <Services services={services} />
        </div>
        <div>
          <Portfolios portfolios={portfolios} />
        </div>

        <div>
          <OurTeam our_team={our_team} />
        </div>

        <div>
          <Testimonials testimonials={testimonials} />
        </div>

        <div id="FAQ">
          <FAQs faqs={faqs} />
        </div>

        <div>
          <ContactUs />
        </div>
        <div>
          <CallToAction call_to_action={call_to_action} />
        </div>
      </main>
    </>
  );
}
