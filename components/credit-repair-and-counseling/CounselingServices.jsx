import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

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
              Apex Advisor offers personalized credit solutions to improve
              scores, manage debt, and address inaccuracies, helping you regain
              financial control and unlock better opportunities.
            </p>
          </div>
          <div className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-20">
            <div>
              <ScrollMotionEffect effect="fade-right" duration="2000">
                {" "}
                <ol class="relative border-s-3 border-[#0E758B] dark:border-gray-700">
                  <li class="mb-10 ms-6 md:ms-12">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5 -top-2 ring-6 ring-[#0E758B] mt-2  "></span>
                    <h3 class="flex items-center mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      Credit Analysis and Evaluation
                    </h3>

                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Apex Advisors offers comprehensive credit repair services,
                      analyzing your credit to ensure an accurate reflection of
                      your creditworthiness.
                    </p>
                  </li>
                  <li class="mb-10 ms-6 md:ms-12">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                    <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      Personalized Dispute Process
                    </h3>

                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      We provide personalized credit repair, with a dedicated
                      specialist to guide you through correcting errors and
                      improving your credit.
                    </p>
                  </li>
                  <li class="mb-10 ms-6 md:ms-12">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                    <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      Creditor Communication and Negotiation
                    </h3>

                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      We handle creditor negotiations to remove or improve
                      negative credit entries, enhancing your overall credit
                      score.
                    </p>
                  </li>
                  <li class="ms-6 md:ms-12">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                    <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      Debt Validation Assistance
                    </h3>

                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Apex Advisor helps you verify debts, removing incorrect
                      items to improve credit scores and prevent unnecessary
                      payments.
                    </p>
                  </li>
                </ol>
              </ScrollMotionEffect>
            </div>
            <div>
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <ol class="relative border-s-3 border-[#0E758B] dark:border-gray-700">
                  <li class="mb-10 ms-6 md:ms-12">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5 -top-2 ring-6 ring-[#0E758B] mt-2  "></span>
                    <h3 class="flex items-center mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      Credit Building Strategies and Guidance
                    </h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Apex Advisor helps you repair and build credit with
                      strategies to secure your financial future and achieve
                      your goals.
                    </p>
                  </li>
                  <li class="mb-10 ms-6 md:ms-12">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                    <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      Identity Theft Resolution
                    </h3>

                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Apex Advisor offers identity theft resolution services to
                      help restore your credit and protect your financial
                      reputation from fraud.
                    </p>
                  </li>
                  <li class="mb-10 ms-6 md:ms-12">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                    <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      Rapid Rescore Services
                    </h3>

                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      {`Need a quick credit score update? ApexAdvisor's rapid
                      rescore service ensures fast results for your urgent
                      financial needs.`}
                    </p>
                  </li>
                  <li class="ms-6 md:ms-12">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3.5  ring-6 ring-[#0E758B] mt-2  "></span>
                    <h3 class="mb-1 text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      Debt Management Plans
                    </h3>

                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      Consolidate your debts into one manageable payment with a
                      debt management plan, reducing your monthly financial
                      burden.
                    </p>
                  </li>
                </ol>
              </ScrollMotionEffect>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CounselingServices;
