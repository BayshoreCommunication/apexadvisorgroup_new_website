"use client";
import React, { useState } from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const featuredData = [
  {
    Image: "/image/tax-planning-page/planning-money-1.png",
    WhiteImage: "/image/tax-planning-page/planning-money.png",
    title: "Tax planning impacts your entire financial plan",
    desc: "Tax management plays a crucial role in every comprehensive financial plan and should be a consideration for every aspect within it.",
  },
  {
    Image: "/image/tax-planning-page/planning-my-money-1.png",
    WhiteImage: "/image/tax-planning-page/planning-my-money.png",
    title: "You could save money by paying less tax",
    desc: "Tax management plays a crucial role in every comprehensive financial plan and should be a consideration for every aspect within it.",
  },
  {
    Image: "/image/tax-planning-page/planning-face-happy-1.png",
    WhiteImage: "/image/tax-planning-page/planning-face-happy.png",
    title: "You could reduce liabilities and protect your assets",
    desc: "Good tax management can lessen an estate’s tax liabilities, as well as ensure you keep more of your investment growth.",
  },
];

const FeaturedSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <SectionLayout>
        <div className="w-full max-w-5xl text-center mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold">
            Why is tax planning important?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch">
          {featuredData.map((item, index) => (
            <div key={index}>
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div
                  className="group shadow-[0px_4px_30px_rgba(0,0,0,0.1)] hover:bg-[#0E758B] flex flex-col gap-3 md:gap-5 justify-stretch items-center  px-8 py-10 duration-300 rounded-2xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={hoveredIndex === index ? item.WhiteImage : item.Image}
                    alt={`${item.title} icon`}
                    width={60}
                    height={60}
                  />

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
