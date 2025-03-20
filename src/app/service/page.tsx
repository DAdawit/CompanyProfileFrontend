import { ContactUs } from "@/components/Home/ContactUs";
import OurService from "@/components/Service/OurService";
import Stats from "@/components/Service/Stats";
import { fetchOurServices } from "@/services/main.services";
import React from "react";
import DynamicHero from "@/common/DynamicHero";

export default async function Service() {
  const services = await fetchOurServices();
  return (
    <div className="overflow-hidden bg-primary-500 mt-16">
      {/* <pre>{JSON.stringify(services.data, null, 2)}</pre> */}

      <DynamicHero
        title="Our Services"
        description={services.data.description}
        image={services.data.image.url}
      />
      <OurService services={services} />
      <Stats />
      <ContactUs />
    </div>
  );
}
