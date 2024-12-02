"use client";
import Link from "next/link";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const HeroSection = () => {
  return (
    <div
      className="w-full  bg-cover bg-center "
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
        <div className="h-fit md:min-h-[55vh] flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-center gap-8 md:gap-10 lg:20 py-6">
          <div className="max-w-xl ">
            <ScrollMotionEffect effect="fade-right" duration="1000">
              <Image
                src="/image/tax-resolution/apex-white-logo.png"
                alt=""
                width={200}
                height={120}
                className="w-28 md:w-36 lg:w-40 mx-auto lg:mx-0"
              />
            </ScrollMotionEffect>
            <ScrollMotionEffect effect="fade-right" duration="1500">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center md:text-left leading-tight tracking-normal mt-6">
                Millions written off by the IRS each year— see if you qualify
              </h1>
            </ScrollMotionEffect>
            {/* <ScrollMotionEffect effect="fade-right" duration="2000">
              <p className="text-white text-sm md:text-base text-center md:text-left mt-4 mb-8">
                Apex Advisor assists you with your tax issues, including IRS
                audits, back taxes, and liens. Our tax resolution experts will
                help you to create a personalized plan that suits your needs and
                goals.
              </p>
            </ScrollMotionEffect> */}
            <ScrollMotionEffect effect="fade-right" duration="2500">
              <div className="pt-5 text-center md:text-start">
                <Link
                  href="/contact"
                  id="white-btn"
                  className="bg-white   hover:text-white text-base md:text-xl px-6 md:px-10 py-3 uppercase border border-[#0E758B] font-bold w-full text-center"
                >
                  Get Tax Help
                </Link>
              </div>
            </ScrollMotionEffect>
          </div>
          <div>
            <ScrollMotionEffect effect="zoom-in" duration="2000">
              <Image
                src="/image/tax-resolution/estimated-tax-resolution.png"
                alt=""
                width={400}
                height={200}
                className="shadow-2xl mx-auto"
              ></Image>
            </ScrollMotionEffect>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default HeroSection;
