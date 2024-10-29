"use client";
import React, { useState } from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const featuredData = [
  {
    Image: "/image/tax-planning-page/no-money-down.png",
    WhiteImage: "/image/tax-planning-page/no-money-down-white.png",
    title: "No money down, no obligation",
    desc: "Only pay if you like the personalized plan we develop for you. You always get to keep your full tax history.",
  },
  {
    Image: "/image/tax-planning-page/IRS-check.png",
    WhiteImage: "/image/tax-planning-page/IRS-check-white.png",
    title: "FREE 35-point IRS Check",
    desc: "We check your full tax history against a 35-point IRS checklist and identify all avenues for tax relief.",
  },
  {
    Image: "/image/tax-planning-page/progress-promise.png",
    WhiteImage: "/image/tax-planning-page/progress-promise-white.png",
    title: "24-hour Progress Promise",
    desc: "Once you authorize us, we immediately get to work with the IRS. You get an update within 24 hours.",
  },
];

const FeaturedSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <SectionLayout>
        <div className="w-full max-w-5xl text-center mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold">
            Rapid progress with no upfront costs
          </h1>
          <p className="text-lg font-medium mt-3">
            OUR COMMITMENT TO YOU Apex Advisor Group Inc&apos;s informative and
            engaging blog posts. Our commitment is to provide you with valuable
            insights to make informed decisions for your family and business,
            ensuring your path to financial success. Start exploring our blogs
            now!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch">
          {featuredData.map((item, index) => (
            <div key={index}>
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div
                  className="group bg-[#EEF6F8] hover:bg-[#0E758B] flex flex-col gap-3 md:gap-5 justify-center items-center px-8 py-14 duration-300 rounded-2xl "
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="p-8 rounded-full bg-[#0E758B] group-hover:bg-white duration-300">
                    <Image
                      src={
                        hoveredIndex === index ? item.Image : item.WhiteImage
                      }
                      alt={`${item.title} icon`}
                      width={60}
                      height={60}
                    />
                  </div>
                  <h4 className="text-2xl font-semibold duration-300 group-hover:text-white text-center">
                    {item.title}
                  </h4>
                  <p className="text-center font-medium duration-300 group-hover:text-white ">
                    {item.desc}
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default FeaturedSection;
