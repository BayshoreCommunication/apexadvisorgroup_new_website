"use client";
import Link from "next/link";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const HeaderSection = () => {
  return (
    <div
      className="w-full  bg-cover bg-center "
      style={{
        backgroundImage: `url('/image/tax-planning-page/tax-plan-hero-img.png')`,
      }}
    >
      <SectionLayout>
        <div className="min-h-[55vh] flex flex-col lg:flex-row justify-center lg:justify-between items-center  lg:items-center gap-4 md:gap-10 lg:20">
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
                  Tax Planning
                </h1>
              </ScrollMotionEffect>
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <p className="text-white text-base md:text-xl text-center md:text-left mt-4 mb-8">
                  A true financial plan maximizes tax efficiency through
                  comprehensive strategies.
                </p>
              </ScrollMotionEffect>

              <ScrollMotionEffect effect="fade-right" duration="2500">
                <div className="pt-5 text-center md:text-start">
                  <Link
                    href="/contact"
                    id="view-all-btn"
                    className="bg-[#0E758B] text-white  hover:text-[#0E758B] text-base md:text-xl px-6 md:px-10 py-3 uppercase  border !border-[#0E758B] font-bold shadow-[0px_18px_30px_rgba(0,0,0,0.25)] w-full text-center"
                  >
                    Get Tax Help
                  </Link>
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
          <div className="w-1/2 hidden lg:block">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <Image
                src="/image/tax-planning-page/tax-summary.png"
                alt=""
                width={270}
                height={480}
                className="ms-auto"
                style={{ filter: "drop-shadow(17px 26px 50px #000000)" }}
              ></Image>
            </ScrollMotionEffect>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default HeaderSection;
