"use client";
import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import CardMotion from "../motion/CardMotion";
import ImageMotion from "../motion/ImageMotion";
import MotionEffect from "../motion/MotionEffect";
import { motion } from "framer-motion";
import { Mulish, Bitter } from "next/font/google";
import BlackButton from "../shared/BlackButton";
import RevealMotion from "../motion/RevealMotion";
import SecondaryButton from "../shared/SecondaryButton";
import { Suspense } from "react";
import VideoPlayer from "../shared/Video/VideoPlayer";

const AboutSection = () => {
  return (
    <SectionLayout bg="bg-slate-50 ">
      <div className="space-y-14">
        <div className="flex items-center justify-center">
          <div className="">
            <h2
              className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center `}
            >
              Apex Advisor Group Inc
            </h2>
            <h4 className="mb-4 text-lg text-stone-950 font-bold text-center">
              Accounting Firm In Tampa, Florida
            </h4>

            <p className="mb-4 text-lg text-stone-950 text-center">
              Bookkeeping, Payroll, Tax Preparation, Credit Repair & Counseling
              We here at Apex Advisor Group Inc are a team of highly qualified
              professionals that have over 40+ years of combined experience in
              the tax, accounting, insurance and financial services industry.
              From personal tax returns and financial planning to corporate
              formations and accounting services, you can be confident that Apex
              Advisor Group Inc is the right choice for you, your family and
              your business.
            </p>
            <p className="mb-4 text-lg text-stone-950 text-center">
              Our Tax Accountants serve clients across{" "}
              <strong>
                Tampa, Brandon, Riverview, Sun City, Ruskin, Plant City, Wesley
                Chapel, Lithia{" "}
              </strong>
              and the surrounding areas.
            </p>
            <p className="mb-4 text-lg text-stone-950 text-center">
              <strong>Contact Apex Advisor Group Inc</strong> - Tax Preparation
              & Accounting Firm in Tampa, Florida.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
