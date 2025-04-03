"use client"; // Ensure this is a Client Component
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import React, { useEffect, useState } from "react";
import NavigationDrawer from "./NavigationDrawer";
import { OrgDetailOutI } from "@/types/OrgDetailOut";

interface NavBarProps {
  org_detail: OrgDetailOutI;
}

export default function NavBar({ org_detail }: NavBarProps) {
  const [isVisible, setIsVisible] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State to track the last scroll position
  const pathname = usePathname(); // Get the current route

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

  return (
    <nav
      className={`flex items-center px-3 md:px-8 w-full z-20 fixed top-0 left-0 bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-3 sm:px-5 xll:px-10 flex justify-between items-center py-3 w-full">
        <div className="flex items-center gap-x-3">
          <div className="md:hidden">
            <NavigationDrawer org_detail={org_detail} />
          </div>
          <Link href="/">
            <Image
              src={`${org_detail?.data?.primary_logo?.url}`}
              width={1000}
              height={1000}
              alt="logo"
              className="h-12  w-24 object-contain"
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-x-5 items-center text-lg capitalize text-primary">
          <Link
            href="/"
            className={`capitalize text-lg whitespace-nowrap font-medium hover:border-b-3 hover:border-gray-800 transition-all ease-in-out duration-300 ${
              pathname === "/" ? "border-b-3 border-gray-800" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`capitalize text-lg whitespace-nowrap font-medium hover:border-b-3 hover:border-gray-800 transition-all ease-in-out duration-300 ${
              pathname === "/about-us" ? "border-b-3 border-gray-800" : ""
            }`}
          >
            About-Us
          </Link>
          <Link
            href="/services"
            className={`capitalize text-lg whitespace-nowrap font-medium hover:border-b-3 hover:border-gray-800 transition-all ease-in-out duration-300 ${
              pathname === "/services" ? "border-b-3 border-gray-800" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/portfolios"
            className={`capitalize text-lg whitespace-nowrap font-medium hover:border-b-3 hover:border-gray-800 transition-all ease-in-out duration-300 ${
              pathname === "/portfolios" ? "border-b-3 border-gray-800" : ""
            }`}
          >
            Portfolios
          </Link>
          <Link
            href="/contact-us"
            className={`capitalize text-lg whitespace-nowrap font-medium hover:border-b-3 hover:border-gray-800 transition-all ease-in-out duration-300 ${
              pathname === "/contact-us" ? "border-b-3 border-gray-800" : ""
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/blogs"
            className={`capitalize text-lg whitespace-nowrap font-medium hover:border-b-3 hover:border-gray-800 transition-all ease-in-out duration-300 ${
              pathname.startsWith("/blogs") ? "border-b-3 border-gray-800" : ""
            }`}
          >
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
}
