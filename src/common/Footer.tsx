import Link from "next/link";
import React from "react";
import FadeOut from "./Animations/FadeOut";
import { fetchOrgDetail } from "../services/main.services";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import SocialMeadiaLinks from "./SocialMeadiaLinks";
export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const org_detail = await fetchOrgDetail();
  return (
    <>
      <FadeOut>
        <div className="bg-gray-50 py-3 shadow-lg text-gray-900">
          <section className="container mx-auto px-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch mt-5 text-gray-900">
              <div className="flex flex-col gap-y-1 uppercase">
                <h1 className=" font-bold text-2xl">USEFUL LINKS</h1>
                <Link
                  href=""
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  OUR SERVICES
                </Link>
                <Link
                  href="/about-us"
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  About Us
                </Link>
                <Link
                  href="/contact-us"
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  CONTACTS US
                </Link>
                <Link
                  href="/portfolios"
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  PORTFOLIOS
                </Link>
                <Link
                  href="/blogs"
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  BLOGS
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
                  PRIVACY POLICY
                </Link>

                <Link
                  href="/#FAQ"
                  className="text-sm  font-sans  hover:underline underline-offset-2 mt-2 w-max"
                >
                  FAQ
                </Link>
              </div>
              <div className="flex flex-col gap-y-1">
                <h1 className=" font-bold text-2xl">Organization Details</h1>
                <div className="text-sm  font-sans  mt-2 flex space-x-2">
                  <LocationOnIcon fontSize="small" />
                  <span>{org_detail?.data?.full_address}</span>
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
              </div>
            </div>
          </section>
          <hr className="my-3 border-gray-300 px-5" />
          <div className="w-full md:flex md:justify-between py-5 itemx-center px-5 md:px-16">
            <div className="flex justify-start items-center">
              <Image
                src={`${org_detail?.data?.primary_logo?.url}`}
                height={1000}
                width={1000}
                alt="logo image"
                className="h-20 w-24 object-contain pointer-events-none select-none"
                unoptimized={true}
              />
            </div>
            <h1 className="text-lg font-sans font-bold">
              &copy; {currentYear} {org_detail?.data?.org_name}
            </h1>
            <div className=" text-sm font-sans  mt-1">
              <div className="flex justify-start alig">
                <SocialMeadiaLinks
                  links={org_detail?.data?.links}
                  color="gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeOut>
    </>
  );
}
