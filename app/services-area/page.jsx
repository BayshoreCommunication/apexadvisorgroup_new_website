import ServicesArea from "@/components/servicesArea/ServicesArea";
import Consultation from "@/components/shared/Consultation";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
import ServiceArea from "../../public/image/services-area.jpg";

const page = () => {
  return (
    <div>
      <PageHeroSection
        heading={"Services Area"}
        subheading={"By Apex Advisor Group Inc"}
        image={ServiceArea}
        width={1000}
        height={657}
      />
      <ServicesArea />
      <Consultation />
    </div>
  );
};

export default page;
