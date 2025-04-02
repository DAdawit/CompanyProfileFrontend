"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OrgDetailOutI } from "@/types/OrgDetailOut";
import CloseIcon from "@mui/icons-material/Close";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
type LogoType = {
  org_detail: OrgDetailOutI;
};

export default function NavigationDrawer({ org_detail }: LogoType) {
  const [state, setState] = React.useState({
    left: false,
  });

  const pathname = usePathname(); // Get the current route

  const toggleDrawer = (anchor: "left", open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              color: "#011E3F",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <Box
              sx={{
                width: 250,
                backgroundColor: "#ffffff",
                height: "100%",
              }}
              role="presentation"
              onClick={toggleDrawer("left", false)}
              onKeyDown={toggleDrawer("left", false)}
            >
              <div className="overflow-x-hidden px-3">
                <div className="flex justify-between px-5 text-gray-800 mt-8 h-max">
                  <Image
                    src={`${org_detail?.data?.primary_logo?.url}`}
                    alt="spector"
                    width={150}
                    height={100}
                    className="h-16 w-24 self-center object-contain pointer-events-none select-none"
                  />
                  <IconButton
                    sx={{
                      color: "white",
                      height: "min",
                    }}
                  >
                    <div className="h-max">
                      <CloseIcon
                        fontSize="inherit"
                        sx={{
                          color: "black",
                          height: "min",
                        }}
                      />
                    </div>
                  </IconButton>
                </div>

                <section className="mt-10 flex flex-col gap-2 pl-3">
                  <Link
                    href="/"
                    className={`uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2 border-2 rounded-lg px-2 ${
                      pathname === "/" ? "border-gray-800" : "border-gray-50"
                    }`}
                  >
                    <HomeOutlinedIcon className="text-2xl " />
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className={`uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2 border-2 rounded-lg px-2 ${
                      pathname === "/about-us"
                        ? "border-gray-800"
                        : "border-gray-50"
                    }`}
                  >
                    <GroupsOutlinedIcon className="text-2xl " />
                    About
                  </Link>
                  <Link
                    href="/services"
                    className={`uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2 border-2 rounded-lg px-2 ${
                      pathname === "/services"
                        ? "border-gray-800"
                        : "border-gray-50"
                    }`}
                  >
                    <RoomServiceOutlinedIcon className="text-2xl " />
                    Services
                  </Link>

                  <Link
                    href="/portfolios"
                    className={`uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2 border-2 rounded-lg px-2 ${
                      pathname === "/portfolios"
                        ? "border-gray-800"
                        : "border-gray-50"
                    }`}
                  >
                    <AutoAwesomeMosaicOutlinedIcon className="text-2xl " />
                    Portfolios
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2 border-2 rounded-lg px-2 ${
                      pathname === "/contact-us"
                        ? "border-gray-800"
                        : "border-gray-50"
                    }`}
                  >
                    <ContactPageOutlinedIcon className="text-2xl" />
                    Contact Us
                  </Link>
                  <Link
                    href="/blogs"
                    className={`uppercase font-medium font-sans tracking-wider flex justify-start items-center gap-2 border-2 rounded-lg px-2 ${
                      pathname.startsWith("/blogs")
                        ? "border-gray-800"
                        : "border-gray-50"
                    }`}
                  >
                    <FeedOutlinedIcon className="text-2xl" />
                    Blogs
                  </Link>
                </section>

                <section className="mt-14">
                  <h1 className="text-center font-serif tracking-wider text-2xl">
                    Visit Us
                  </h1>
                  <h3 className="text-center text-sm font-medium tracking-wide">
                    {org_detail.data.full_address}
                  </h3>
                  <h3 className="text-center text-sm font-medium tracking-wide">
                    {org_detail.data.email}
                  </h3>
                </section>

                <section className="mt-5">
                  <h2 className="text-center font-bold tracking-wider">
                    Call Now
                  </h2>
                  <h2 className="text-center font-bold text-lg">
                    {org_detail.data.primary_phone} <br />
                    {org_detail.data.secondary_phone}
                  </h2>
                </section>
              </div>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
