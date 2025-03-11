"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
// import PhoneIcon from "@mui/icons-material/Phone";
import FadeOut from "./Animations/FadeOut";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallToAction from "@/components/CallToAction";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <FadeOut>
        <div className="bg-primary py-3 ">
          <div className="py-10">
            <CallToAction />
          </div>
          <hr />
          <section className="container mx-auto px-5">
            <div>
              <div className="flex justify-start">
                <Image
                  src="/wanderweb4.png"
                  height={1000}
                  width={1000}
                  alt="logo image"
                  className="h-28 w-28 object-contain pointer-events-none select-none"
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
                <h1 className="text-white font-bold text-2xl">Addis Ababa</h1>
                <h1 className="text-sm  font-sans text-white mt-2">
                  Eth, Auto, Addis Ababa. 665087
                </h1>
                <h1 className="text-sm font-sans text-white">
                  Phone.: 0936207512/0942110937
                </h1>
                <h1 className="text-sm  font-sans text-white">
                  E-mail.: dawitccnt@gmail.com
                </h1>
                <h1 className="">© {currentYear} WanderWeb</h1>
                <div className=" text-sm font-sans text-white mt-1">
                  <div className="flex gap-x-2">
                    {/* <Link href="#">
                      <FacebookIcon className=" text-white" />
                    </Link> */}
                    {/* <Link href="#">
                      <InstagramIcon className=" text-white" />
                    </Link> */}
                    <Link href="https://t.me/dawit_di03" target="_blank">
                      <TelegramIcon className=" text-white" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/dawit-d/"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </FadeOut>
    </>
  );
};

export default Footer;
