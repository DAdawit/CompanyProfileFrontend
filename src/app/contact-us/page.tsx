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
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export async function generateMetadata() {
  const org = await fetchContactUsDetail();
  const { description } = org.data;

  return {
    title: "Contact Us",
    description: { description },
  };
}
export default async function contactUs() {
  const contact_us = await fetchContactUsDetail();
  const faqs = await fetchFaqs();
  const org_detail = await fetchOrgDetail();

  return (
    <div className="mt-16">
      {/* <pre>{JSON.stringify(org_detail.data, null, 2)}</pre> */}

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
        <div className="shadow-lg p-4  grid px-10 py-6 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="flex gap-2">
            <LocalPhoneIcon fontSize="large" />
            <h2 className="text-3xl font-bold">Phone</h2>
          </div>
          <h4 className="text-xl font-semibold text-gray-800">
            {org_detail.data.primary_phone} / {org_detail.data.secondary_phone}
          </h4>
          <div>
            <h4 className="text-gray-500">{org_detail.data.working_hour}</h4>
          </div>
        </div>
        <div className="shadow-lg p-4  grid px-10 py-6 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="flex gap-2">
            <EmailIcon fontSize="large" />
            <h2 className="text-3xl font-bold">Email</h2>
          </div>
          <h4 className="text-xl font-semibold text-gray-800">
            {org_detail.data.email}
          </h4>
          <div>
            <h5 className="text-gray-500">we will respond within 24 hours</h5>
          </div>
        </div>
        <div className="shadow-lg p-4  grid px-10 py-6 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="flex gap-2">
            <LocationOnIcon fontSize="large" />
            <h2 className="text-3xl font-bold">Address</h2>
          </div>
          <h4 className="text-xl font-semibold text-gray-800">
            {org_detail.data.full_address}
          </h4>
          <div>
            {org_detail.data.street_address != null ? (
              <h5 className="text-gray-500">
                {org_detail.data.street_address}
              </h5>
            ) : null}
          </div>
        </div>
        <div className="shadow-lg p-4  grid px-10 py-6 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="flex gap-2">
            <WatchLaterIcon fontSize="large" />
            <h2 className="text-3xl font-bold">Bussness hours</h2>
          </div>
          <h4 className="text-xl font-semibold text-gray-800">
            {org_detail.data.working_hour}
          </h4>
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
