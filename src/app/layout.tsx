import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";
import Footer from "@/common/Footer";
import NavBar from "@/components/Home/Navbar";
import { fetchOrgDetail } from "@/services/main.services";
import MoveToTop from "@/common/MoveToTop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  // Fetch organization details for global metadata
  const organization = await fetchOrgDetail();

  // Extract title, description, and logo from the organization details
  const { org_name, org_detail, primary_logo } = organization.data;

  return {
    title: org_name || "Default Website Title", // Fallback title
    description: org_detail || "Default website description.", // Fallback description
    openGraph: {
      title: org_detail || "Default Website Title",
      description: org_detail || "Default website description.",
      images: [
        {
          url: primary_logo?.url || "/default-logo.png", // Fallback logo
          alt: org_name || "Default Website Title",
        },
      ],
      siteName: org_name || "Default Website Title",
    },
    twitter: {
      card: "summary_large_image",
      title: org_name || "Default Website Title",
      description: org_detail || "Default website description.",
      images: [primary_logo?.url || "/default-logo.png"], // Fallback logo
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const org_detail = await fetchOrgDetail();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <NavBar org_detail={org_detail} />
          <Toaster />
          {children}
          <Footer />
          <MoveToTop />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
