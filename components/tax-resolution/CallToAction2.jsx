import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const CallToAction2 = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(/image/tax-resolution/cta-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Image
        src="/image/tax-resolution/cta-bg.png"
        alt=""
        width={1920}
        height={600}
        className="absolute left-0 right-0 top-0 -z-10"
      ></Image> */}
      <SectionLayout>
        {" "}
        <div className="container w-full max-w-5xl text-center mx-auto">
          <ScrollMotionEffect effect="fade-up" duration="1000">
            <h1 className="text-2xl md:text-4xl font-bold">
              Tax Resolution Service to Build your Business More Profitable
            </h1>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="1500">
            <p className="text-lg font-medium mt-3 mb-9">
              Until now, tax projections have been nearly impossible for the
              accountant to do quickly and effectively. Manually doing tax
              projections and authoring deliverables takes hours.
            </p>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <Link
              href="/contact"
              id="view-all-btn"
              className="bg-[#0E758B] text-white  hover:text-[#0E758B] text-base md:text-xl px-6 md:px-10 py-3 uppercase  border !border-[#0E758B] font-bold "
            >
              get tax help
            </Link>
          </ScrollMotionEffect>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CallToAction2;
