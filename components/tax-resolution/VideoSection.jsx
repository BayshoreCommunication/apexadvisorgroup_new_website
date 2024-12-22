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
                  src={`https://www.youtube.com/embed/MzU5m_4yGlA?si=G3e_53Jn3lNVU6R7`}
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
              <h1 className="font-semibold text-2xl md:text-5xl text-white">
                Owe the IRS money? Get expert help
              </h1>
              <p className="text-base lg:text-lg text-white">
                {`Melamed Law, conveniently located in South Florida, provides professional legal representation for Residential and Commercial Property Damage as well as Insurance Claims. Contact us today to schedule an appointment.`}
              </p>
              <p className="text-base lg:text-lg text-white">
                {`Your legal matters are important to us. We can help you achieve the best possible outcome for your situation. The firm prides itself on being able to support clients with a diverse number of problems.`}
              </p>
            </div>
          </ScrollMotionEffect>
        </div>
      </SectionLayout>
    </div>
  );
};

export default VideoSection;
