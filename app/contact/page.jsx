import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
import ContactPageImg from "../../public/image/contact.jpg";
import MapSection from "@/components/contact/MapSection";
import ContactSection from "@/components/contact-us/ContactSection";
// import ContactSection from "@/components/contact/ContactSection";

const page = () => {
  return (
    <div>
      <PageHeroSection
        heading={"Contact Apex Advisor Group Inc"}
        subheading={
          "Accounting & Tax Preparation Firm In Tampa, Florida Notary | Credit Repair & Counseling | Insurance"
        }
        image={ContactPageImg}
        alt={"About Us Image"}
        width={1000}
        height={657}
      />
      <ContactSection />
      <ContactSection />
      <MapSection />
    </div>
  );
};

export default page;
