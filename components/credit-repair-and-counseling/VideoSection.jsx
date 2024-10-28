import Link from "next/link";
import React from "react";
import SectionLayout from "../shared/SectionLayout";

const VideoSection = () => {
  return (
    <SectionLayout bg="mb-5">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center md:justify-start gap-x-6 gap-y-5 xl:gap-x-16 ">
        <div className="flex flex-col gap-y-3 lg:gap-y-6">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl ">
            Investing in You: Your Trusted Partner for a Brighter Financial
            Tomorrow
          </h2>
          <p className="text-base md:text-lg text-[#5C5C5C]">
            {`Boasting over a decade of experience, we handle everything from personal returns, non-profit & multi-state to tricky corporate tax matters.`}
          </p>
          <p className="text-base md:text-lg text-[#5C5C5C]">
            {`We walk you through tax planning, wealth management, and retirement services, ensuring you hit your financial targets.`}
          </p>
          <p className="text-base md:text-lg text-[#5C5C5C]">
            {`By cutting down on your tax bill and pumping up your savings, we make sure you keep more of your cash We help you build, grow, and maintain your wealth through personalized strategies and financial planning solutions We're all about being the best.We're plugged into the community, stay on top of tax law changes, and keep on learning.You benefit from a team that's always growing and improving to serve you better.`}
          </p>
        </div>

        <div className="">
          <div className="video-container rounded-3xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/R65ByIK9M8g?si=8G2R0TdbOg-zDqON`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title=" YouTube video player"
              loading="lazy"
              className="w-full h-64 md:h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default VideoSection;
