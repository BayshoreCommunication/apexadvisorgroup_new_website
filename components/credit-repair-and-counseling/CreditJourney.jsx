import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const CreditJourney = () => {
  return (
    <div>
      <SectionLayout>
        <div>
          <div className="w-full max-w-5xl text-center mx-auto mb-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              What is credit repair?{" "}
            </h1>
            <p className="text-lg font-medium mt-3">
              Credit repair involves identifying and resolving any inaccurate,
              unfair, or unverified negative items impacting your credit, such
              as collections, late payments, charge-offs, and other blemishes.
            </p>
          </div>
          <div className="w-full max-w-5xl text-center mx-auto p-6 pb-8 lg:p-14 rounded-2xl bg-[#2B7F90] ">
            <h4 className="text-2xl text-white text-center font-semibold mb-5 lg:mb-10">
              Ready to start your credit journey
            </h4>
            <div className="flex flex-col lg:flex-row items-stretch justify-evenly gap-y-3">
              <div className="w-full max-w-96 gap-4 ">
                <p className="text-base text-white text-center mb-5">
                  After checking my credit, <br /> I noticed something’s wrong
                </p>
                <Link
                  href="/contact"
                  id="white-btn"
                  className="bg-white   hover:text-white text-base md:text-lg px-6 md:px-10 py-3 uppercase border border-[#0E758B] font-bold w-full text-center"
                >
                  get credit help
                </Link>
              </div>
              <div className="w-px bg-white h-28xl "></div>
              <div className="w-full max-w-96">
                <p className="text-base text-white text-center mb-5">
                  I don’t know what’s listed <br /> on my credit
                </p>
                <Link
                  href="/contact"
                  id="white-btn"
                  className="bg-white   hover:text-white text-base md:text-lg px-6 md:px-10 py-3 uppercase border border-[#0E758B] font-bold w-full text-center"
                >
                  get a free credit report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CreditJourney;
