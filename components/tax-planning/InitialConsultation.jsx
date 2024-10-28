import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const InitialConsultation = () => {
  return (
    <div className="bg-[#0E758B] pb-6">
      <SectionLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ">
          <div>
            <h4 className="text-2xl md:text-5xl font-semibold text-white mb-4 !leading-tight">
              Arrange a free initial consultation
            </h4>
            <p className="text-base md:text-xl font-normal text-white mb-2">
              We are committed to helping all of our clients create, sustain,
              protect and grow wealth for them and their families.
            </p>
            <p className="text-base md:text-xl font-normal text-white ">
              To ersure we are a good fit for your needs, please provide your
              details below and we
            </p>
            <div className="mt-5 lg:mt-8">
              <h4 className="text-2xl md:text-5xl font-semibold text-white mb-4">
                Our relationship step by step
              </h4>
              <ul className=" flex flex-col gap-5">
                <li className="flex gap-4 items-start">
                  <span className="mb-2 text-lg md:text-xl font-semibold text-white">
                    01.
                  </span>
                  <div>
                    <h5 className="mb-2 text-lg md:text-xl font-semibold text-white ">
                      Discovery
                    </h5>
                    <p className="text-base md:text-lg text-white  opacity-90">
                      A short phone call with some simple questions lo ensure we
                      {"'"}re a good fit. Inltlal meeting, without chargc or
                      oblgatlon, with a qualified financial advkor to get to
                      know you and your financlal postion
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mb-2 text-lg md:text-xl font-semibold text-white">
                    02.
                  </span>
                  <div>
                    <h5 className="mb-2 text-lg md:text-xl font-semibold text-white ">
                      How can we help
                    </h5>
                    <p className="text-base md:text-lg text-white  opacity-90">
                      Formulation and agreement of your bespoke service and
                      fees.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mb-2 text-lg md:text-xl font-semibold text-white">
                    03.
                  </span>
                  <div>
                    <h5 className="mb-2 text-lg md:text-xl font-semibold text-white ">
                      Solutions and advice
                    </h5>
                    <p className="text-base md:text-lg text-white  opacity-90">
                      Detalked Inanclal plan based on market research and
                      tinancial modellng
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mb-2 text-lg md:text-xl font-semibold text-white">
                    04.
                  </span>
                  <div>
                    <h5 className="mb-2 text-lg md:text-xl font-semibold text-white ">
                      Implementation and ongoing review and service
                    </h5>
                    <p className="text-base md:text-lg text-white  opacity-90">
                      Implementation and ongoing review and service
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-2xl md:text-4xl text-white font-medium">
              Contact us today to see how we can help you manage your wealth.
            </h4>
            <div className="w-full mt-6 lg:mt-10">
              <form>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent  placeholder:text-white "
                />
                <input
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                  autoComplete="off"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent placeholder:text-white"
                />
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last Name"
                  autoComplete="off"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent placeholder:text-white"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent placeholder:text-white"
                />
                <textarea
                  id="message"
                  placeholder="Message"
                  autoComplete="off"
                  className="mb-5 lg:mb-8 w-full px-5 py-3 border rounded-md bg-transparent  h-40"
                ></textarea>

                <p className="text-base text-gray-300 mb-8">
                  This question is for testing whether or not you are a human
                  visitor and to prevent automated spam submissions.
                </p>

                {/* <Link
                  href=""
                  id="view-all-btn"
                  className="bg-white !text-[#0E758B] hover:bg-transparent hover:text-white text-base md:text-lg px-6 md:px-10 py-5  border border-white font-bold"
                >
                  BOOK A FREE INITIAL CONSULTATION NOW
                </Link> */}
                <Link
                  href=""
                  id="view-all-btn"
                  className="bg-white !text-[#0E758B]  hover:text-[#0E758B] text-sm md:text-xl px-2 md:px-10 py-3  border !border-white font-bold hover:shadow-xl duration-300 focus:!border-none inline-block"
                >
                  Book A Free Consultation Now
                </Link>
              </form>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default InitialConsultation;
