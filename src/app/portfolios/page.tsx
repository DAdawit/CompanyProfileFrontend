import DynamicHero from "@/common/DynamicHero";
import CallToAction from "@/components/Home/CallToAction";
import { ContactUs } from "@/components/Home/ContactUs";
import Portfolios from "@/components/Home/Portfolios";
import {
  fetchAllOurPortfolios,
  fetchCallToAction,
  fetchOrgPortfolioDetail,
} from "@/services/main.services";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Portfolios",
    description: "Wander web our prev works",
  };
}
export default async function Portfolio() {
  const portfolioPageDetail = await fetchOrgPortfolioDetail();
  const portfolios = await fetchAllOurPortfolios();
  const call_to_action = await fetchCallToAction();

  return (
    <div>
      <div>
        <DynamicHero
          title={portfolioPageDetail.data.title}
          description={portfolioPageDetail.data.description}
          image={portfolioPageDetail.data.image.url}
        />
      </div>
      <div className="py-14 md:py-24 container mx-auto px-5 lg:px-8">
        <Portfolios portfolios={portfolios} />
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
