import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";
import Footer from "@/common/Footer";
import NavBar from "@/components/Home/Navbar";
import { fetchOrgDetail } from "@/services/main.services";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const org_detail = await fetchOrgDetail();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <NavBar org_detail={org_detail} />
          <Toaster />
          {children}
          <Footer />
        </ReactQueryProvider>{" "}
      </body>
    </html>
  );
}
