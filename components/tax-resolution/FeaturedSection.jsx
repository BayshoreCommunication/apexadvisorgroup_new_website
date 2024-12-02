"use client";
import React, { useState } from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const featuredData = [
  {
    image: "/image/tax-resolution/consultation.png",
    whiteImage: "/image/tax-resolution/consultation-white.png",
    title: "Step 1: Consultation",
    desc: "Free Confidential No obligation",
  },
  {
    image: "/image/tax-resolution/Investigation.png",
    whiteImage: "/image/tax-resolution/Investigation-white.png",
    title: "Step 2: Investigation",
    desc: "Initiate client protection Establish communication with IRS Review case resolution options",
  },
  {
    image: "/image/tax-resolution/resolution.png",
    whiteImage: "/image/tax-resolution/resolution-white.png",
    title: "Step 3: Resolution",
    desc: "Establish IRS compliance Achieve best resolution Case closed",
  },
];

const FeaturedSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-2 md:py-8">
      <SectionLayout>
        {/* Section Header */}
        <div className="w-full max-w-5xl mx-auto text-center">
          <ScrollMotionEffect effect="fade-up" duration="1500">
            <h1 className="text-2xl md:text-4xl font-bold">
              You Can Get Your Tax Relief in Three Easy Steps
            </h1>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <p className="text-lg font-medium mt-3">
              {` Stay ahead of the curve with Apex Advisor Group Inc's informative
              and engaging blog posts. Our commitment is to provide you with
              valuable insights to make informed decisions for your family and
              business, ensuring your path to financial success. Start exploring
              our blogs now!`}
            </p>
          </ScrollMotionEffect>
        </div>

        {/* Steps Grid */}
        <ScrollMotionEffect effect="fade-up" duration="2500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {featuredData.map((item, index) => (
              <div
                key={index}
                className={`group shadow-[0px_4px_30px_rgba(0,0,0,0.1)] hover:bg-[#0E758B] flex flex-col items-center gap-3 md:gap-5 px-6 py-10 duration-300 rounded-2xl`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={hoveredIndex === index ? item.whiteImage : item.image}
                  alt={`${item.title} icon`}
                  width={80}
                  height={80}
                />
                <div className="text-center">
                  <h4 className="text-2xl font-semibold group-hover:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#5C5C5C] text-xl font-medium group-hover:text-white opacity-70">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollMotionEffect>
      </SectionLayout>
    </section>
  );
};

export default FeaturedSection;
