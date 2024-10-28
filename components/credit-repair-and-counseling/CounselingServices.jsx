import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import Image from "next/image";

const CounselingServices = () => {
  return (
    <div className=" bg-[#EEF6F8]">
      <SectionLayout>
        <div>
          <div className="w-full max-w-5xl text-center mx-auto mb-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Credit Repair & Counseling Services
            </h1>
            <p className="text-lg font-medium mt-3">
              Stay ahead of the curve with Apex Advisor Group Inc{"'"}s
              informative and engaging blog posts. Our commitment is to provide
              you with valuable insights to make informed decisions for your
              family and business, ensuring your path to financial success.
              Start exploring our blogs now!
            </p>
          </div>
          <div className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-20">
            <div>
              <ol class="relative border-s-3 border-[#0E758B] dark:border-gray-700">
                <li class="mb-10 ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5 -top-2 ring-6 ring-[#0E758B] mt-2  "></span>
                  <h3 class="flex items-center mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                    Credit Analysis and Evaluation
                  </h3>

                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Estimate taxes due and savings across multiple years with
                    support for federal, state and local forms.
                  </p>
                </li>
                <li class="mb-10 ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                  <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                    Personalized Dispute Process
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Model the impact of entity and compensation changes to help
                    clients choose the most tax-efficient structure.
                  </p>
                </li>
                <li class="mb-10 ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                  <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                    Creditor Communication and Negotiation
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Gather client data with tax return scanning and
                    questionnaires, which delve deeper when needed and omit
                    questions when possible.
                  </p>
                </li>
                <li class="ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                  <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                    Debt Validation Assistance
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Gather client data with tax return scanning and
                    questionnaires, which delve deeper when needed and omit
                    questions when possible.
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <ol class="relative border-s-3 border-[#0E758B] dark:border-gray-700">
                <li class="mb-10 ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5 -top-2 ring-6 ring-[#0E758B] mt-2  "></span>
                  <h3 class="flex items-center mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                    Credit Building Strategies and Guidance
                  </h3>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Minimize taxes with Corvee’s continually updated database of
                    1,500+ tax strategies.
                  </p>
                </li>
                <li class="mb-10 ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                  <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                    Identity Theft Resolution
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    See how every business and entity affects the Form 1040
                    across jurisdictions in one consolidated multi-entity tax
                    calculation.
                  </p>
                </li>
                <li class="mb-10 ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                  <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                    Rapid Rescore Services
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Show clients your value with professional plans featuring
                    savings, strategies, documentation and calculations for
                    every jurisdiction.
                  </p>
                </li>
                <li class="ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                  <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                    Debt Management Plans
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Show clients your value with professional plans featuring
                    savings, strategies, documentation and calculations for
                    every jurisdiction.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CounselingServices;
