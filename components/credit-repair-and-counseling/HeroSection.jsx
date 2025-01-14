"use client";
import Link from "next/link";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const HeroSection = () => {
  // backgroundImage: `url('/image/credit-repair-and-counseling-page/credit-repair-and-counseling-img.png')`,
  return (
    <div
      className="w-full  bg-cover bg-center "
      style={{
        backgroundImage: `url('/image/credit-repair-and-counseling-page/credit-repair-and-counseling-img.png')`,
      }}
    >
      <SectionLayout>
        <div className="h-fit md:min-h-[55vh] flex flex-col lg:flex-row justify-center lg:justify-between items-center  lg:items-center gap-8 md:gap-10 lg:20 py-6">
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
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
                <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white text-center md:text-left leading-tight tracking-normal mt-6">
                  Elevate Your Credit,
                </h1>
              </ScrollMotionEffect>
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white text-center md:text-left leading-tight tracking-normal mt-2 md:mt-4">
                  Elevate Your Life.
                </h1>
              </ScrollMotionEffect>
              <ScrollMotionEffect effect="fade-right" duration="2500">
                <p className="text-white text-base md:text-xl text-center md:text-left mt-4 mb-2 md:mb-8">
                  {`My credit score has never been better since I applied. The
                  negative items are gone, and I can finally get the things I've
                  always wanted.`}
                </p>
              </ScrollMotionEffect>

              <ScrollMotionEffect effect="fade-right" duration="3000">
                <div className="pt-4 text-center md:text-start">
                  <Link
                    href="https://calendly.com/jennyapexpro/tax-preparation?month=2025-01"
                    target="_blank"
                    id="view-all-btn"
                    className="bg-[#0E758B] text-white  hover:text-[#0E758B] text-base md:text-xl px-6 md:px-10 py-3 uppercase  border !border-[#0E758B] font-bold shadow-[0px_18px_30px_rgba(0,0,0,0.25)] w-full text-center"
                  >
                    TAKE CONTROL OF YOUR CREDIT NOW
                  </Link>
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default HeroSection;
