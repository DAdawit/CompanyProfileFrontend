import { ContactUs } from "@/components/Home/ContactUs";
import OurService from "@/components/Service/OurService";
import Stats from "@/components/Service/Stats";
import {
  fetchCallToAction,
  fetchOurServices,
  fetchStats,
} from "@/services/main.services";
import React from "react";
import DynamicHero from "@/common/DynamicHero";
import CallToAction from "@/components/Home/CallToAction";

export async function generateMetadata() {
  const org = await fetchOurServices();
  const { description } = org.data;

  return {
    title: "Services",
    description: { description },
  };
}
export default async function Service() {
  const services = await fetchOurServices();
  const call_to_action = await fetchCallToAction();
  const stats = await fetchStats();

  return (
    <div className="overflow-hidden bg-primary-500 mt-16">
      {/* <pre>{JSON.stringify(stats.data, null, 2)}</pre> */}

      <DynamicHero
        title="Our Services"
        description={services.data.description}
        image={services.data.image.url}
      />
      <OurService services={services} />
      <div>
        <Stats stats={stats} />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <CallToAction call_to_action={call_to_action} />
      </div>
    </div>
  );
}
