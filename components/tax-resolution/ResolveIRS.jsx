import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import Image from "next/image";

const ResolveIRS = () => {
  return (
    <div className=" bg-[#EEF6F8]">
      <SectionLayout>
        <div>
          <div className="w-full max-w-5xl text-center mx-auto mb-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              A clear path to resolve your IRS issues
            </h1>
            <p className="text-lg font-medium mt-3">
              Stay ahead of the curve with Apex Advisor Group Inc{"'"}s
              informative and engaging blog posts. Our commitment is to provide
              you with valuable.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-20">
            <div>
              {/* <h1 className="text-xl md:text-3xl font-bold">
                FREE consultation
              </h1>
              <p className="text-lg font-medium mt-3 mb-8">
                We{"'"}ll review your situation and discuss what kind of tax
                help you need.
              </p> */}
              <ol class="relative border-s-3 border-[#0E758B] dark:border-gray-700">
                <li class="mb-10 ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3 ring-8 ring-[#0E758B] mt-2  "></span>
                  <h3 class="flex items-center mb-1 text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
                    FREE consultation
                  </h3>

                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    We{"'"}ll review your situation and discuss what kind of tax
                    help you need.
                  </p>
                </li>
                <li class="mb-10 ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3 ring-8 ring-[#0E758B] mt-2  "></span>
                  <h3 class="mb-1 text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
                    FREE IRS investigation
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    We dig into your tax records and check 35 IRS compliance
                    points to identify ways to fix your tax issues.
                  </p>
                </li>
                <li class="mb-10 ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3 ring-8 ring-[#0E758B] mt-2  "></span>
                  <h3 class="mb-1 text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
                    FREE personalized plan
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Your expert Tax consultant works with you to develop a
                    detailed IRS plan with clear pricing and specific next steps
                    just for you.
                  </p>
                </li>
                <li class="ms-6 md:ms-12">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-[#0E758B] rounded-full -start-3 ring-8 ring-[#0E758B] mt-2  "></span>
                  <h3 class="mb-1 text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
                    Get back on track
                  </h3>

                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    We work directly with the IRS to resolve your case and get
                    you back in good standing.
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/image/tax-resolution/carlos-rosario.png"
                alt=""
                width={400}
                height={400}
                className="mx-auto"
              ></Image>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default ResolveIRS;
