"use client";
import Link from "next/link";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="w-full  bg-cover bg-center"
      style={{
        backgroundImage: `url('/image/tax-resolution/tax-resolution-bg.png')`,
      }}
    >
      {/* <div className="relative h-[500px] md:h-[650px]">
        <Image
          src="/image/tax-resolution/tax-resolution-bg.png"
          alt="Home Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="z-10"
          rel="preload"
        /> */}

      <SectionLayout>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image
              src="/image/tax-resolution/apex-white-logo.png"
              alt=""
              width={200}
              height={120}
              className="w-28 md:w-36 lg:w-40 mx-auto lg:mx-0"
            />
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center md:text-left leading-tight tracking-normal mt-6">
              Apex Tax Resolution Services Tampa Florida - Apex Advisor Group
              Inc
            </h1>
            <p className="text-white text-sm md:text-base text-center md:text-left mt-4 mb-8">
              Apex Advisor assists you with your tax issues, including IRS
              audits, back taxes, and liens. Our tax resolution experts will
              help you to create a personalized plan that suits your needs and
              goals.
            </p>
            <div className="flex justify-center mt-8 md:justify-start">
              <Link
                href="/contact"
                id="view-all-btn"
                className="bg-white !text-[#0E758B] hover:bg-transparent hover:text-white text-base md:text-xl px-6 md:px-10 py-3  border border-white font-bold"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default HeroSection;
