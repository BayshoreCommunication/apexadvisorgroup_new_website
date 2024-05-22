import React from "react";
import SectionLayout from "../shared/SectionLayout";
import MotionEffect from "../motion/MotionEffect";
import Image from "next/image";

// img="bg-[url('/assets/services/hero-banner.png')] bg-cover bg-center"
const PageHeroSection = ({
  heading,
  subheading,
  paragraphOne,
  paragraphTwo,
  image,
  alt,
  width,
  height,
}) => {
  return (
    <section className="bg-[#11869912] overflow-hidden">
      <MotionEffect effect={"fade-up"} duration={"2000"}>
        <div className="lg:flex gap-10 items-center ">
          <div className="p-10 lg:py-0 lg:pe-0 lg:ps-[11%] w-full lg:max-w-[50%] text-center lg:text-start">
            <h2 className="text-4xl font-semibold mb-4 ">{heading}</h2>
            <h4 className="text-2xl font-medium mb-4 ">{subheading}</h4>
            <p className="text-base my-3 ">{paragraphOne}</p>
            <p className="text-base  ">{paragraphTwo}</p>
          </div>
          <div className="w-full hidden lg:block">
            <Image
              src={image}
              alt={alt}
              width={width}
              height={height}
              className="w-full rounded-tl-[180px] rounded-bl-[180px]"
            ></Image>
          </div>
        </div>
      </MotionEffect>
    </section>
  );
};

export default PageHeroSection;
