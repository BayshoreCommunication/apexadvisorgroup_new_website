import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const RealLifeProblems = () => {
  return (
    <div className="bg-[#EEF6F8] py-3">
      <SectionLayout>
        <div className=" flex flex-col gap-6 lg:gap-20 justify-center items-center">
          <div className="w-full max-w-5xl text-center mx-auto mb-1 lg:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Do you relate to these <br /> real-life problems?
            </h1>
          </div>
          {/* Mobile */}

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 lg:hidden">
            {/* Main Image */}
            <div className="flex justify-center items-center relative z-50">
              <Image
                src="/image/tax-planning-page/real-life-problem-mobile.png"
                alt="man image"
                width={400}
                height={400}
                className=""
              ></Image>
            </div>
            {/* Card 1 */}
            <ScrollMotionEffect effect="fade-up" duration="1000">
              <div className="p-5  bg-[#B8CED2] rounded-lg max-w-96 w-full flex items-center justify-center gap-5 ">
                <div className="p-4 bg-white inline-block rounded-full shrink-0">
                  <Image
                    src="/image/tax-planning-page/money-bag.png"
                    alt="money-bag"
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-medium text-[#0E758B]">
                      Monthly <br /> Income
                    </p>
                    <h4 className="text-[#0E758B] font-bold text-3xl">$9000</h4>
                  </div>
                  <div className="border"></div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-medium text-[#0E758B]">
                      Monthly <br /> Savings
                    </p>
                    <h4 className="text-[#0E758B] font-bold text-3xl">$1500</h4>
                  </div>
                </div>
              </div>
            </ScrollMotionEffect>

            {/* Card 2 */}
            <ScrollMotionEffect effect="fade-up" duration="1000">
              <div className="p-5 md:p-7 bg-[#DBF0E9] rounded-lg max-w-96 w-full flex items-center justify-center gap-5  ">
                <div className="p-4 bg-white inline-block rounded-full shrink-0">
                  <Image
                    src="/image/tax-planning-page/yes.png"
                    alt="yes"
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div>
                  <p className="text-xl font-medium text-[#1C8665]">
                    How can I save on taxes while simultaneously building a
                    retirement fund?
                  </p>
                </div>
              </div>
            </ScrollMotionEffect>

            {/* Card 3 */}
            <ScrollMotionEffect effect="fade-up" duration="1000">
              <div className="p-5 md:p-7 bg-[#E5E2FD] rounded-lg max-w-96 w-full flex items-center justify-center gap-5">
                <div className="p-4 bg-white inline-block rounded-full shrink-0">
                  <Image
                    src="/image/tax-planning-page/pig-money.png"
                    alt="money-bag"
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div>
                  <p className="text-xl font-medium text-[#574EAB]">
                    I am planning to purchase a health insurance policy for
                    $15,00. Can I save taxes on this expense?
                  </p>
                </div>
              </div>
            </ScrollMotionEffect>

            {/* Card 4 */}
            <ScrollMotionEffect effect="fade-up" duration="1000">
              <div className="p-5 md:p-7 bg-[#FEE7C8] rounded-lg max-w-96 w-full flex items-center justify-center gap-5">
                <div className="p-4 bg-white inline-block rounded-full shrink-0">
                  <Image
                    src="/image/tax-planning-page/money.png"
                    alt="money"
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div>
                  <p className="text-xl font-medium text-[#E17A4C]">
                    How can I save on taxes and maximize my after-tax earnings?{" "}
                  </p>
                </div>
              </div>
            </ScrollMotionEffect>

            {/* Card 5 */}
            <ScrollMotionEffect effect="fade-up" duration="1000">
              <div className="p-5 md:p-7 bg-[#FAE7E5] rounded-lg max-w-96 w-full flex items-center justify-center gap-5">
                <div className="p-4 bg-white inline-block rounded-full shrink-0">
                  <Image
                    src="/image/tax-planning-page/pig-money-2.png"
                    alt="money-bag"
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div>
                  <p className="text-xl font-medium text-[#8F312A]">
                    Is there a way to reduce my taxes and increase my in-hand
                    salary?
                  </p>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
          {/* Desktop */}
          <div className=" relative hidden lg:block">
            {/* Card 1 */}
            <div className="absolute z-10 top-[0%] right-[8%] -rotate-2">
              <ScrollMotionEffect effect="fade-down-left" duration="2000">
                <div className="p-5  rounded-lg bg-[#B8CED2] w-96 flex items-center justify-center gap-5 ">
                  <div className="p-4 bg-white inline-block rounded-full shrink-0">
                    <Image
                      src="/image/tax-planning-page/money-bag.png"
                      alt="money-bag"
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-medium text-[#0E758B]">
                        Monthly <br /> Income
                      </p>
                      <h4 className="text-[#0E758B] font-bold text-3xl">
                        $9000
                      </h4>
                    </div>
                    <div className="border"></div>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-medium text-[#0E758B]">
                        Monthly <br /> Savings
                      </p>
                      <h4 className="text-[#0E758B] font-bold text-3xl">
                        $1500
                      </h4>
                    </div>
                  </div>
                </div>
              </ScrollMotionEffect>
            </div>

            {/* Card 2 */}
            <div className="absolute z-10 top-[24%] -left-[8%] rotate-[10deg]">
              <ScrollMotionEffect effect="fade-down-right" duration="2000">
                <div className="p-5 md:p-7 bg-[#DBF0E9] rounded-lg max-w-96 w-full flex items-center justify-center gap-5 ">
                  <div className="p-4 bg-white inline-block rounded-full shrink-0">
                    <Image
                      src="/image/tax-planning-page/yes.png"
                      alt="yes"
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                  <div>
                    <p className="text-xl font-medium text-[#1C8665]">
                      How can I save on taxes while simultaneously building a
                      retirement fund?
                    </p>
                  </div>
                </div>
              </ScrollMotionEffect>
            </div>

            {/* Card 3 */}
            <div className="absolute z-10 -left-[12%] bottom-[3%] -rotate-[8deg]">
              <ScrollMotionEffect effect="fade-up-right" duration="2000">
                <div className="p-5 md:p-7 bg-[#E5E2FD]  rounded-lg max-w-96 w-full flex items-center justify-center gap-5 ">
                  <div className="p-4 bg-white inline-block rounded-full shrink-0">
                    <Image
                      src="/image/tax-planning-page/pig-money.png"
                      alt="money-bag"
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                  <div>
                    <p className="text-xl font-medium text-[#574EAB]">
                      I am planning to purchase a health insurance policy for
                      $15,00. Can I save taxes on this expense?
                    </p>
                  </div>
                </div>
              </ScrollMotionEffect>
            </div>

            {/* Card 4 */}
            <div className="absolute z-10 -right-[13%] b top-1/2 -translate-y-[50%] -rotate-[1.7deg]">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <div className="p-5 md:p-7 bg-[#FEE7C8]  rounded-lg max-w-96 w-full flex items-center justify-center gap-5 ">
                  <div className="p-4 bg-white inline-block rounded-full shrink-0">
                    <Image
                      src="/image/tax-planning-page/money.png"
                      alt="money"
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                  <div>
                    <p className="text-xl font-medium text-[#E17A4C]">
                      How can I save on taxes and maximize my after-tax
                      earnings?{" "}
                    </p>
                  </div>
                </div>
              </ScrollMotionEffect>
            </div>

            {/* Card 5 */}
            <div className=" absolute z-10 -right-[8%] bottom-[3%] rotate-[10deg]">
              <ScrollMotionEffect effect="fade-up-left" duration="2000">
                <div className="p-5 md:p-7 bg-[#FAE7E5]  rounded-lg max-w-96 w-full flex items-center justify-center gap-5 ">
                  <div className="p-4 bg-white inline-block rounded-full shrink-0">
                    <Image
                      src="/image/tax-planning-page/pig-money-2.png"
                      alt="money-bag"
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                  <div>
                    <p className="text-xl font-medium text-[#8F312A]">
                      Is there a way to reduce my taxes and increase my in-hand
                      salary?
                    </p>
                  </div>
                </div>
              </ScrollMotionEffect>
            </div>

            {/* Main Image */}
            <div className="flex justify-center items-center relative z-50">
              <Image
                src="/image/tax-planning-page/real-life-problem-main.png"
                alt="man image"
                width={800}
                height={800}
              ></Image>
            </div>
            <div className="absolute inset-0 m-auto flex justify-center items-center">
              <Image
                src="/image/tax-planning-page/shapes.png"
                alt="shapes"
                width={820}
                height={820}
              ></Image>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-6 ">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#D76FEF] to-[#5194FB] text-2xl font-bold md:text-4xl ">
              and a 100 more???
            </h3>
            <Link
              href="/contact"
              id="view-all-btn"
              className="bg-[#0E758B] text-white  hover:text-[#0E758B] text-base md:text-xl px-6 md:px-10 py-3 uppercase  border !border-[#0E758B] font-bold shadow-[0px_18px_30px_rgba(0,0,0,0.25)]"
            >
              get tax help
            </Link>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default RealLifeProblems;
