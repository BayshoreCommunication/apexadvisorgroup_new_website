import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import Image from "next/image";

const TaxResolution = () => {
  return (
    <div>
      <SectionLayout>
        <div>
          <div className="w-full max-w-5xl text-center mx-auto mb-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Apex Advisor Help Your Tax Resolution{" "}
            </h1>
            <p className="text-lg font-medium mt-3">
              Stay ahead of the curve with Apex Advisor Group Inc{"'"}s
              informative and engaging blog posts. Our commitment is to provide
              you with valuable insights to make informed decisions for your
              family and business, ensuring your path to financial success.
              Start exploring our blogs now!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-20 justify-center lg:justify-start">
            <div>
              <h1 className="text-center lg:text-start text-xl md:text-3xl font-bold">
                Savings Your Tax With Apex Advisor
              </h1>
              <p className="text-center lg:text-start text-lg font-medium mt-3 mb-8">
                Our innovative system uses advanced algorithms to analyze your
                financial data and provide accurate projections, ensuring you
                are well-prepared for the upcoming tax year.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/"
                  id="view-all-btn"
                  className="bg-[#0E758B] text-white  hover:text-[#0E758B] text-base md:text-xl px-6 md:px-10 py-3  border !border-[#0E758B] font-bold "
                >
                  Read More
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/image/tax-resolution/tax-rate.png"
                alt=""
                width={750}
                height={600}
              ></Image>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default TaxResolution;
