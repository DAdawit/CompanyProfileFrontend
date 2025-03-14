import AboutUs from "@/components/Home/About";
import CallToAction from "@/components/Home/CallToAction";
import Carosole from "@/components/Home/Carosole";
import OurTeam from "@/components/Home/OurTeam";
import Portfolios from "@/components/Home/Portfolios";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";

import { fetchHero, fetchTestimonials } from "@/services/main.services";

export default async function Home() {
  const heroSections = await fetchHero();
  const testimonials = await fetchTestimonials();

  return (
    <>
      <main id="" className="overflow-hidden bg-bgPrimary">
        <div>
          {/* <pre>{JSON.stringify(heroSections.data[0].heroSlider, null, 2)}</pre> */}
          <Carosole carosoles={heroSections.data[0].heroSlider} /> *
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Portfolios />
        </div>
        <div>
          <OurTeam />
        </div>
        <div>
          {/* <pre>{JSON.stringify(testimonials, null, 2)}</pre> */}

          <Testimonials testimonials={testimonials} />
        </div>
        <div>
          {/* <pre>{JSON.stringify(call_to_action, null, 2)}</pre> */}

          <CallToAction />
        </div>

        {/* <MoveToTop /> */}
      </main>
    </>
  );
}
