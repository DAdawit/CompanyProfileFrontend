import DynamicHero from "@/common/DynamicHero";
import { ContactUs } from "@/components/Home/ContactUs";
import { fetchContactUsDetail } from "@/services/main.services";
import React from "react";

export default async function contactUs() {
  const contact_us = await fetchContactUsDetail();

  return (
    <div>
      <div>
        <DynamicHero
          title={contact_us.data.title}
          description={contact_us.data.description}
          image={contact_us.data.image.url}
        />
      </div>

      <div>
        <ContactUs />
      </div>
    </div>
  );
}
