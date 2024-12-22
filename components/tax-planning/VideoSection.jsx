import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const VideoSection = () => {
  return (
    <div className="relative overflow-hidden bg-[#0E758B]">
      <SectionLayout>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center md:justify-start gap-x-6 gap-y-5 xl:gap-x-16 ">
          <div className="mt-10 md:mt-0">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="video-container rounded-3xl overflow-hidden border-3 ">
                <iframe
                  src={`https://www.youtube.com/embed/fNJtpj7ZZ2Y?si=0QqrJzagEPfbvuuB`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title=" YouTube video player"
                  loading="lazy"
                  className="w-full h-64 md:h-96"
                ></iframe>
              </div>
            </ScrollMotionEffect>
          </div>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <div className="flex flex-col gap-y-4  lg:gap-y-6">
              <h2 className="font-semibold text-2xl md:text-5xl text-white">
                Tax Planning for Your Business? Get Expert Help
              </h2>
              <p className="text-base lg:text-lg text-white">
                {`Tax planning is essential for your business’s financial success. Our team of tax experts, including attorneys, CPAs, and enrolled agents, brings over 40 years of experience to help minimize tax liabilities, ensure compliance, and avoid costly mistakes. `}
              </p>
              <p className="text-base lg:text-lg text-white">
                {`Let us handle your taxes while you focus on growing your business.`}
              </p>
            </div>
          </ScrollMotionEffect>
        </div>
      </SectionLayout>
    </div>
  );
};

export default VideoSection;
