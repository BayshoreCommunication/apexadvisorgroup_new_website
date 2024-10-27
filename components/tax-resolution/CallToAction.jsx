import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div>
      <SectionLayout>
        <div className="relative overflow-hidden bg-[#0E758B] py-10 px-10 lg:py-20 lg:px-20  rounded-2xl flex items-center gap-5 lg:gap-20 justify-between ">
          <h3 className="text-3xl lg:text-5xl font-bold text-white">
            Maximize Your Savings with Expert <br /> Tax Planning Services
          </h3>
          <Link
            href="/contact"
            id="view-all-btn"
            className="bg-white !text-[#0E758B] hover:bg-transparent hover:text-white text-base md:text-xl px-6 md:px-10 py-3  border border-white font-bold shrink-0"
          >
            Book an Appointment
          </Link>
          <Image
            src="/image/tax-resolution/shape.png"
            alt=""
            width={1000}
            height={600}
            className="absolute"
          ></Image>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CallToAction;
