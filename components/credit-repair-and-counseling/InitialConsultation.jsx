import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";
import { FaCircleCheck } from "react-icons/fa6";

const InitialConsultation = () => {
  return (
    <div className=" pb-6">
      <SectionLayout>
        <div className="">
          {/* top */}
          <div>
            <div className="w-full max-w-5xl text-center mx-auto mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-[#2B7F90]">
                Get your FREE online credit evaluation now
              </h2>
            </div>
            <div className="flex p-10 rounded-lg border max-w-xl justify-center items-center mx-auto">
              <div className="flex flex-col gap-3">
                <div className=" flex items-center gap-2">
                  <FaCircleCheck size={20} color="#0DC004" />
                  <p className="text-xl font-medium text-[#5C5C5C]">
                    FREE credit score
                  </p>
                </div>
                <div className=" flex items-center gap-2">
                  <FaCircleCheck size={20} color="#0DC004" />
                  <p className="text-xl font-medium text-[#5C5C5C]">
                    FREE negative item summary{" "}
                  </p>
                </div>
                <div className=" flex items-center gap-2">
                  <FaCircleCheck size={20} color="#0DC004" />
                  <p className="text-xl font-medium text-[#5C5C5C]">
                    FREE recommended credit solution{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}

          <div className="w-full mt-6 lg:mt-10 max-w-7xl mx-auto">
            <div className="w-full max-w-5xl text-center mx-auto mb-4 lg:mb-8">
              <h2 className="text-2xl md:text-3xl font-medium text-[#2B7F90]">
                {` We'll need a few details to get your credit report started`}
              </h2>
              <p className="text-lg font-medium mt-3 max-w-lg text-center mx-auto">
                {` No need to worry—this is secure and won't affect your credit
                score. And did we mention it’s FREE?`}
              </p>
            </div>
            <form>
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 ">
                <input
                  type="text"
                  id="First Name"
                  placeholder="First Name"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent  placeholder: "
                />
                <input
                  type="text"
                  id="Last Name"
                  placeholder="Last Name"
                  autoComplete="off"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent placeholder:"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 ">
                <input
                  type="email"
                  id="Email"
                  placeholder="Email"
                  autoComplete="off"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent placeholder:"
                />
                <input
                  type="email"
                  id="Phone"
                  placeholder="Phone"
                  autoComplete="off"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent placeholder:"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6 ">
                <input
                  type="text"
                  id="Street address"
                  placeholder="Street address"
                  autoComplete="off"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent placeholder:"
                />
                <input
                  type="text"
                  id="Zip code"
                  placeholder="Zip code"
                  autoComplete="off"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent placeholder:"
                />
              </div>

              <div className="text-center mt-4">
                <Link
                  href="#"
                  id="view-all-btn"
                  className="bg-[#0E758B] text-white  hover:text-[#0E758B] text-base md:text-xl px-6 md:px-10 py-3 uppercase  border !border-[#0E758B] font-bold shadow-[0px_18px_30px_rgba(0,0,0,0.25)] w-full text-center "
                >
                  submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default InitialConsultation;
