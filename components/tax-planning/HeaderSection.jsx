"use client";
import Link from "next/link";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import { motion } from "framer-motion";

const HeaderSection = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  const text =
    "Apex Tax Resolution Services Tampa Florida - Apex Advisor Group Inc".split(
      " "
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
      <div className="bg-[#0E758B]  h-full">
        <div className="flex align-middle justify-center h-full">
          <SectionLayout>
            <div className="max-w-2xl mx-auto">
              <Image
                src="/image/tax-resolution/apex-white-logo.png"
                alt=""
                width={200}
                height={120}
              />
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left leading-tight tracking-normal mt-6">
                {text.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                variants={itemVariants}
                className="text-white text-sm md:text-base text-center md:text-left mt-4 mb-8"
              >
                Apex Advisor assists you with your tax issues, including IRS
                audits, back taxes, and liens. Our tax resolution experts will
                help you to create a personalized plan that suits your needs and
                goals.
              </motion.p>
              <motion.div
                className="flex justify-center mt-8 md:justify-start"
                variants={itemVariants}
              >
                <Link
                  href="/contact"
                  id="view-all-btn"
                  className="bg-white !text-[#0E758B] hover:bg-transparent hover:text-white text-base md:text-xl px-6 md:px-10 py-3  border border-white font-bold"
                >
                  Book an Appointment
                </Link>
              </motion.div>
            </div>
          </SectionLayout>
        </div>
      </div>
      <div>
        <Image
          src="/image/tax-planning-page/tax-plan-hero-img.png"
          alt=""
          width={1000}
          height={800}
          className="w-full"
        ></Image>
      </div>
    </div>
  );
};

export default HeaderSection;
