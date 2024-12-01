"use client";
import React, { useState } from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const featuredData = [
  {
    Image: "/image/tax-resolution/consultation.png",
    WhiteImage: "/image/tax-resolution/consultation-white.png",
    title: "Step 1: Consultation",
    desc: "Free Confidential No obligation",
  },
  {
    Image: "/image/tax-resolution/investigation.png",
    WhiteImage: "/image/tax-resolution/investigation-white.png",
    title: "Step 2: Investigation",
    desc: "Initiate client protection Establish communication with IRS Review case resolution options",
  },
  {
    Image: "/image/tax-resolution/resolution.png",
    WhiteImage: "/image/tax-resolution/resolution-white.png",
    title: "Step 3: Resolution",
    desc: "Establish IRS compliance Achieve best resolution Case closed",
  },
];

const FeaturedSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="py-2 md:py-8">
      <SectionLayout>
        <div className="w-full max-w-5xl text-center mx-auto">
          <ScrollMotionEffect effect="fade-up" duration="1500">
            {" "}
            <h1 className="text-2xl md:text-4xl font-bold">
              You Can Get Your Tax Relief in Three Easy Steps{" "}
            </h1>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <p className="text-lg font-medium mt-3">
              {`Stay ahead of the curve with Apex Advisor Group Inc's informative
            and engaging blog posts. Our commitment is to provide you with
            valuable insights to make informed decisions for your family and
            business, ensuring your path to financial success. Start exploring
            our blogs now!`}
            </p>
          </ScrollMotionEffect>
        </div>
        <ScrollMotionEffect effect="fade-up" duration="2500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch">
            {featuredData.map((item, index) => (
              <div
                className="group shadow-[0px_4px_30px_rgba(0,0,0,0.1)] hover:bg-[#0E758B] flex flex-col gap-3 md:gap-5 justify-stretch items-center  px-6 py-10 duration-300 rounded-2xl"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div>
                  <Image
                    src={hoveredIndex === index ? item.WhiteImage : item.Image}
                    alt={`${item.title} icon`}
                    width={80}
                    height={80}
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-semibold duration-300 group-hover:text-white mb-2 ">
                    {item.title}
                  </h4>
                  <p className="text-[#5C5C5C] text-xl font-medium text-center group-hover:text-white opacity-70 ">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollMotionEffect>
      </SectionLayout>
    </div>
  );
};

export default FeaturedSection;
