import DynamicHero from "@/common/DynamicHero";
import FAQs from "@/common/FAQs";
import { ContactUs } from "@/components/Home/ContactUs";
import {
  fetchContactUsDetail,
  fetchFaqs,
  fetchOrgDetail,
} from "@/services/main.services";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default async function contactUs() {
  const contact_us = await fetchContactUsDetail();
  const faqs = await fetchFaqs();
  const org_detail = await fetchOrgDetail();

  return (
    <div className="mt-16">
      <pre>{JSON.stringify(org_detail.data, null, 2)}</pre>

      <div>
        <DynamicHero
          title={contact_us.data.title}
          description={contact_us.data.description}
          image={contact_us.data.image.url}
        />
      </div>
      <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6 text-center mt-24">
        Contact Information
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mb-24 mt-10 ">
        <div className="bg-gray-50 p-4 shadow grid px-10 py-6 rounded-xl">
          <div className="flex gap-2">
            <LocalPhoneIcon />
            <h2>Phone</h2>
          </div>
          <div>
            {org_detail.data.primary_phone} /{org_detail.data.secondary_phone}
          </div>
          <div>
            <h4>{org_detail.data.working_hour}</h4>
          </div>
        </div>
        <div className="bg-gray-50 p-4 shadow grid px-10 py-6 rounded-xl">
          <div className="flex gap-2">
            <EmailIcon />
            <h2>Email</h2>
          </div>
          <div>{org_detail.data.email}</div>
          <div>
            <h4>we will respond within 24 hours</h4>
          </div>
        </div>
        <div className="bg-gray-50 p-4 shadow grid px-10 py-6 rounded-xl">
          <div className="flex gap-2">
            <LocationOnIcon />
            <h2>Address</h2>
          </div>
          <div>{org_detail.data.full_address}</div>
          <div>
            {org_detail.data.street_address != null ? (
              <h4>{org_detail.data.street_address}</h4>
            ) : null}
          </div>
        </div>
        <div className="bg-gray-50 p-4 shadow grid px-10 py-6 rounded-xl">
          <div className="flex gap-2">
            <AccessTimeIcon />
            <h2>Bussness hours</h2>
          </div>
          <div>{org_detail.data.working_hour}</div>
        </div>
      </div>

      <div>
        <ContactUs />
      </div>
      <div>
        <FAQs faqs={faqs} />
      </div>
    </div>
  );
}
