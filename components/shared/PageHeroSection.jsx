import Image from "next/image";
import MotionEffect from "../motion/MotionEffect";

// img="bg-[url('/assets/services/hero-banner.png')] bg-cover bg-center"
const PageHeroSection = ({
  heading,
  subheading,
  paragraphOne,
  paragraphTwo,
  image,
  alt = heading || "",
  width,
  height,
}) => {
  return (
    <section className="bg-[#11869912] overflow-hidden mt-[62px] md:mt-[130px]">
      <div className="lg:flex gap-10 items-center ">
        <div className="p-6 lg:pe-0 lg:ps-[5%] 2xl:ps-[10%] w-full lg:max-w-[50%] text-center lg:text-start">
          <MotionEffect effect={"fade-right"} duration={"2000"}>
            <h1 className="text-4xl font-semibold mb-3 ">{heading}</h1>
            {subheading && (
              <h4 className="text-2xl font-medium mb-1 ">{subheading}</h4>
            )}
            {paragraphOne && <p className="text-sm my-1 ">{paragraphOne}</p>}
            {paragraphTwo && <p className="text-sm  ">{paragraphTwo}</p>}
          </MotionEffect>
        </div>

        {image && (
          <div className="w-full hidden lg:block">
            <MotionEffect effect={"fade-left"} duration={"2000"}>
              <Image
                src={image}
                alt={alt}
                width={width}
                height={height}
                priority
                sizes="(min-width: 1024px) 50vw, 0px"
                className="w-full rounded-tl-[180px] rounded-bl-[180px]"
              ></Image>
            </MotionEffect>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeroSection;
