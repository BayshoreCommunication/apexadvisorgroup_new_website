import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
import aboutUsPage from "../../public/image/about-us-page.jpg";
import GroupMembers from "@/components/about/GroupMembers";
import Consultation from "@/components/shared/Consultation";

const page = () => {
  return (
    <div>
      <PageHeroSection
        heading={"About Us"}
        subheading={"Tax Accountants In Tampa, Florida"}
        paragraphOne={
          "We here at Apex Advisor Group are a team of highly qualified professionals that have over 40+ years of combined experience in the tax, accounting, insurance and financial services industry."
        }
        paragraphTwo={
          "Putting the clients’ needs first has always been the Apex Advisor philosophy and has helped us create a reputation of honesty, integrity and trust with our clients and our community. We strive to increase financial literacy and awareness for all our clients and our community."
        }
        image={aboutUsPage}
        alt={"About Us Image"}
        width={1000}
        height={657}
      />
      <GroupMembers />
      <Consultation />
    </div>
  );
};

export default page;
