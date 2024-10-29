import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const CallToAction = () => {
  return (
    <div>
      <SectionLayout>
        <div className="relative overflow-hidden bg-[#0E758B] py-10 px-10 lg:py-20 lg:px-20  rounded-2xl flex flex-col lg:flex-row items-center gap-5 lg:gap-20 justify-between ">
          <ScrollMotionEffect effect="fade-right" duration="1500">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center lg:text-start">
              Maximize Your Savings with Expert Tax Planning Services
            </h3>
          </ScrollMotionEffect>

          <div className="shrink-0">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <Link
                href="/contact"
                id="view-all-btn"
                className="bg-white !text-[#0E758B] hover:bg-transparent hover:text-white text-base md:text-xl px-6 md:px-10 py-3  border border-white font-bold shrink-0"
              >
                Book an Appointment
              </Link>
            </ScrollMotionEffect>
          </div>

          <Image
            src="/image/tax-resolution/shape.png"
            alt=""
            // width={1000}
            // height={600}
            fill
            className="absolute left-0 right-0 w-full"
          ></Image>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CallToAction;
