"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { SITECONFIG } from "@/config/site";
import Image from "next/image";
import SecondaryButton from "./shared/SecondaryButton";

const MainNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="2xl"
      className="flex  bg-white bg-cover md:my-8 my-2"
    >
      <NavbarContent className="md:hidden ml-0" justify="start">
        <NavbarMenuToggle className="text-slate-900 ml-0" />
      </NavbarContent>

      <NavbarContent className=" md:hidden" justify="end">
        <Image
          width={100}
          height={130}
          src={"/image/apex-logo.png"}
          alt="apex-logo"
          className="object-cover cursor-pointer"
        />
      </NavbarContent>

      <NavbarContent
        className="justify-start hidden gap-10 md:flex"
        justify="start"
      >
        <NavbarItem>
          <Link href="/">
            <Image
              width={170}
              height={60}
              src={"/image/apex-logo.png"}
              alt="apex-logo"
              className="object-cover cursor-pointer !max-w-[170px]"
            />
          </Link>
        </NavbarItem>
        {SITECONFIG?.navMenuItem?.map((nav, index) => {
          return (
            <NavbarItem key={index}>
              <Link
                href={nav.slug}
                className={`flex text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black ${pathname === nav.slug ? "border-b-2 border-solid border-black" : ""}`}
              >
                {nav.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent
        className="justify-end items-end hidden gap-10 md:flex"
        justify="end"
      >
        <div className="flex gap-4 justify-end items-end">
          <SecondaryButton
            title={"Email Now"}
            link={"/"}
            style={"bg-[#0E758B] text-white"}
            radius={"sm"}
          />
          <div className="">
            <div className="mb-2 flex items-center gap-2 justify-end">
              <div className="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <p>(813) 678 2400</p>
            </div>
            <SecondaryButton
              title={"Book an appoinment"}
              link={"/"}
              style={"bg-[#0E758B] text-white"}
              radius={"sm"}
            />
          </div>
        </div>
      </NavbarContent>
      <NavbarMenu className="ml-0">
        {SITECONFIG?.navMenuItem?.map((nav, index) => (
          <NavbarMenuItem key={`${nav}-${index}`} className="list-none">
            <Link
              className={`text-slate-900 font-semibold text-lg hover:border-b-2 hover:border-solid hover:border-black list-none ${pathname === nav.slug ? "border-b-2 border-solid border-black" : ""}`}
              href={nav.slug}
              size="lg"
            >
              {nav.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
