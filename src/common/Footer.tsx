import Image from "next/image";
import Link from "next/link";
import React from "react";
// import TelegramIcon from "@mui/icons-material/Telegram";
import FadeOut from "./Animations/FadeOut";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { fetchOrgDetail } from "../services/main.services";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SocialMeadiaLinks from "./SocialMeadiaLinks";
export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const org_detail = await fetchOrgDetail();
  return (
    <>
      <FadeOut>
        <div className="bg-black py-3 ">
          <hr />
          <section className="container mx-auto px-5">
            <div>
              <div className="flex justify-start">
                <Image
                  src={`http://localhost:8000${org_detail.data.primary_logo.url}`}
                  height={1000}
                  width={1000}
                  alt="logo image"
                  className="h-12 w-12 object-contain pointer-events-none select-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch mt-5">
              <div className="text-gray-200 flex flex-col gap-y-1">
                <h1 className="text-white font-bold text-2xl">USEFUL LINKS</h1>
                <Link
                  href="#"
                  className="text-sm  font-sans text-white hover:underline underline-offset-2 mt-2"
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  className="text-sm font-sans text-white hover:underline underline-offset-2 "
                >
                  OUR SERVICES
                </Link>
                <Link
                  href="#"
                  className="text-sm  font-sans text-white hover:underline underline-offset-2 "
                >
                  INFORMATION
                </Link>
                <Link
                  href="#"
                  className="text-sm font-sans text-white hover:underline underline-offset-2 "
                >
                  PRIVACY POLICY
                </Link>
              </div>
              <div className="text-gray-200 flex flex-col gap-y-1">
                <h1 className="text-white font-bold text-2xl">OUR TERMS</h1>
                <Link
                  href="#"
                  className="text-sm  font-sans text-white hover:underline underline-offset-2 mt-2"
                >
                  SUPPORT
                </Link>
                <Link
                  href="#"
                  className="text-sm font-sans text-white hover:underline underline-offset-2 "
                >
                  CONTACTS
                </Link>
                <Link
                  href="#"
                  className="text-sm  font-sans text-white hover:underline underline-offset-2 "
                >
                  TYPOGRAPHY
                </Link>
                <Link
                  href="#"
                  className="text-sm font-sans text-white hover:underline underline-offset-2 "
                >
                  FAQ
                </Link>
              </div>
              <div className="text-gray-200 flex flex-col gap-y-1">
                <h1 className="text-white font-bold text-2xl">
                  Organization Details
                </h1>
                <div className="text-sm  font-sans text-white mt-2 flex space-x-2">
                  <LocationOnIcon fontSize="small" />
                  <span>{org_detail.data.full_address}</span>
                </div>
                <div className="text-sm  font-sans text-white mt-2 flex space-x-2">
                  <PhoneIcon fontSize="small" />
                  <span>
                    {org_detail?.data?.primary_phone} /{" "}
                    {org_detail?.data?.secondary_phone}
                  </span>
                </div>
                <div className="text-sm  font-sans text-white mt-2 flex space-x-2">
                  <EmailIcon fontSize="small" />
                  <span>{org_detail?.data?.email}</span>
                </div>

                <div className=" text-sm font-sans text-white mt-1">
                  <div className="flex justify-start alig">
                    <SocialMeadiaLinks links={org_detail.data.links} />
                    {/* <Link href="https://t.me/dawit_di03" target="_blank">
                      <TelegramIcon fontSize="small" className=" text-white" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/dawit-d/"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </Link> */}
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
