import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

const EventsStart = () => {
  return (
    <div className="bg-[#101717]">
      <div className="relative">
        <div className="md:relative h-[350px] md:h-[450px] flex items-center">
          <Image
            src="/image/miami2024.jpg"
            alt="Miami 2024 Background"
            layout="fill"
            objectFit="cover"
            priority
            className="z-10 hidden md:block"
            rel="preload"
          />

          <Image
            src="/image/mobileImage2.png"
            alt="Miami 2024 Background"
            layout="fill"
            objectFit="cover"
            priority
            className="z-10 block md:hidden bg-slate-950"
            rel="preload"
          />

          <div className="hidden md:block">
            <SectionLayout>
              <div className="relative z-30 grid items-center justify-start grid-cols-4 ">
                <div></div>
                <div></div>
                <div></div>
                <div className="">
                  <p className="text-[12px] md:text-[15px] font-bold text-white">
                    EVENTS
                  </p>

                  <p className="text-[30px] md:text-[25px] font-bold text-white mt-8">
                    Start Or Grow Your Dream <br />
                    Business
                  </p>
                  <p className="text-white text-sm md:text-base max-w-[600px] text-center md:text-left mt-3">
                    Everything you need to know to start or grow your business!
                  </p>
                  <div>
                    <div className="flex justify-start gap-3 mt-3 mb-3 md:mt-8">
                      <Link
                        href="https://www.facebook.com/apexadvisorgroup"
                        target="_blank"
                        className="text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 8 19"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">Facebook page</span>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/company/apex-advisor-group-inc/"
                        target="_blank"
                        className="text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 448 512"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>

                        <span className="sr-only">Linkdin</span>
                      </Link>

                      <Link
                        href="https://www.instagram.com/apexadvisorgroup/"
                        target="_blank"
                        className="text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SectionLayout>
          </div>
        </div>
      </div>
      <div className="block py-10 md:hidden">
        <SectionLayout>
          <div className="flex items-center justify-center">
            <div className="">
              <p className="text-[12px] md:text-[15px] font-bold text-white text-center">
                EVENTS
              </p>

              <p className="text-[30px] md:text-[25px] font-bold text-white mt-8 text-center">
                Start Or Grow Your Dream <br />
                Business
              </p>
              <p className="text-white text-sm md:text-base max-w-[600px] text-center md:text-left mt-3 ">
                Everything you need to know to start or grow your business!
              </p>
              <div>
                <div className="flex justify-center gap-3 mt-8 mtce-3 md:mt-8">
                  <Link
                    href="https://www.facebook.com/apexadvisorgroup"
                    target="_blank"
                    className="text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/apex-advisor-group-inc/"
                    target="_blank"
                    className="text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>

                    <span className="sr-only">Linkdin</span>
                  </Link>

                  <Link
                    href="https://www.instagram.com/apexadvisorgroup/"
                    target="_blank"
                    className="text-[#09314A] hover:animate-pulse bg-slate-200 rounded-full p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  );
};

export default EventsStart;
