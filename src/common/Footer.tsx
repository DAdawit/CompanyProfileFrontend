import Link from "next/link";
import React from "react";
// import TelegramIcon from "@mui/icons-material/Telegram";
import FadeOut from "./Animations/FadeOut";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { fetchOrgDetail } from "../services/main.services";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SocialMeadiaLinksIconsOnly from "./SocialMeadiaLinksIconsOnly";
export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const org_detail = await fetchOrgDetail();
  return (
    <>
      <FadeOut>
        <div className="bg-gray-50 py-3 shadow-lg text-gray-900">
          <section className="container mx-auto px-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch mt-5 text-gray-900">
              <div className="flex flex-col gap-y-1">
                <h1 className=" font-bold text-2xl">USEFUL LINKS</h1>
                <Link
                  href=""
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  ABOUT US
                </Link>
                <Link
                  href=""
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  OUR SERVICES
                </Link>
                <Link
                  href=""
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  INFORMATION
                </Link>
                <Link
                  href=""
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  PRIVACY POLICY
                </Link>
              </div>
              <div className="flex flex-col gap-y-1">
                <h1 className=" font-bold text-2xl">OUR TERMS</h1>
                <Link
                  href=""
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  SUPPORT
                </Link>
                <Link
                  href=""
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  CONTACTS
                </Link>
                <Link
                  href=""
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  TYPOGRAPHY
                </Link>
                <Link
                  href=""
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  FAQ
                </Link>
              </div>
              <div className="flex flex-col gap-y-1">
                <h1 className=" font-bold text-2xl">Organization Details</h1>
                <div className="text-sm  font-sans  mt-2 flex space-x-2">
                  <LocationOnIcon fontSize="small" />
                  <span>{org_detail.data.full_address}</span>
                </div>
                <div className="text-sm  font-sans  mt-2 flex space-x-2">
                  <PhoneIcon fontSize="small" />
                  <span>
                    {org_detail?.data?.primary_phone} /{" "}
                    {org_detail?.data?.secondary_phone}
                  </span>
                </div>
                <div className="text-sm  font-sans  mt-2 flex space-x-2">
                  <EmailIcon fontSize="small" />
                  <span>{org_detail?.data?.email}</span>
                </div>

                <div className=" text-sm font-sans  mt-1">
                  <div className="flex justify-start alig">
                    <SocialMeadiaLinksIconsOnly
                      links={org_detail.data.links}
                      color="white"
                    />
                  </div>
                </div>
                <h1 className="">
                  © {currentYear} {org_detail.data.org_name}
                </h1>
              </div>
            </div>
          </section>
        </div>
      </FadeOut>
    </>
  );
}
