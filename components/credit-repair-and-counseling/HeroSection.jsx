"use client";
import Link from "next/link";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const HeroSection = () => {
  return (
    <div
      className="w-full  bg-cover bg-center"
      style={{
        backgroundImage: `url('/image/credit-repair-and-counseling-page/credit-repair-and-counseling-img.png')`,
      }}
    >
      <div className="">
        <SectionLayout>
          <div>
            <div className="lg:max-w-3xl bg-[rgba(15,118,140,0.81)] p-8 md:p-12 lg:p-20 rounded-2xl overflow-hidden">
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
                  Apex Tax Resolution Services Tampa Florida - Apex Advisor
                  Group Inc
                </h1>
              </ScrollMotionEffect>
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <p className="text-white text-sm md:text-base text-center md:text-left mt-4 mb-8">
                  Apex Advisor assists you with your tax issues, including IRS
                  audits, back taxes, and liens. Our tax resolution experts will
                  help you to create a personalized plan that suits your needs
                  and goals.
                </p>
              </ScrollMotionEffect>
              <ScrollMotionEffect effect="fade-right" duration="2500">
                <div className="flex justify-center mt-8 md:justify-start">
                  <Link
                    href="/contact"
                    id="view-all-btn"
                    className="bg-white !text-[#0E758B] hover:bg-transparent hover:text-white text-base md:text-xl px-6 md:px-10 py-3  border border-white font-bold"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  );
};

export default HeroSection;
