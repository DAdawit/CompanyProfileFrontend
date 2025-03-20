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
      <div>
        <Portfolios portfolios={portfolios} />
      </div>
      <div>
        <CallToAction call_to_action={call_to_action} />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
