"use client"; // Ensure this is a Client Component
// import { fetchLogos } from "@/services/main.services";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationDrawer from "./NavigationDrawer";
import { OrgDetailOutI } from "@/types/OrgDetailOut";
interface NavBarProps {
  org_detail: OrgDetailOutI;
}

export default function NavBar({ org_detail }: NavBarProps) {
  const [isVisible, setIsVisible] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State to track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        // Always show navbar at the top of the page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // const logos = await fetchLogos();

  return (
    <nav
      className={`flex items-center px-3 md:px-8 w-full z-20 fixed top-0 left-0 bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-3 sm:px-5 xll:px-10 flex justify-between items-center py-3 w-full">
        <div className="flex items-center gap-x-3">
          <NavigationDrawer org_detail={org_detail} />

          <Image
            src={`http://localhost:8000${org_detail.data.primary_logo.url}`}
            width={1000}
            height={1000}
            alt="logo"
            className="h-8 w-full object-contain"
          />
        </div>
        <div className="hidden md:flex gap-x-5 items-center text-lg capitalize text-primary">
          <Link
            href="/"
            className="capitalize text-lg whitespace-nowrap font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="capitalize text-lg whitespace-nowrap font-medium"
          >
            About
          </Link>
          <Link
            href="/service"
            className="capitalize text-lg whitespace-nowrap font-medium"
          >
            Services
          </Link>
          <Link
            href="#portfolios"
            className="capitalize text-lg whitespace-nowrap font-medium"
          >
            Portfolios
          </Link>
          <Link
            href="#contact-us"
            className="capitalize text-lg whitespace-nowrap font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
