import React from "react";

const page = () => {
  return (
    <div>
      <PageHeroSection
        heading={"Services"}
        subheading={"By Apex Advisor Group Inc"}
        image={ServicePage}
        width={1000}
        height={657}
      />
      <Services />
      <Consultation />
    </div>
  );
};

export default page;
