import Footer from "@/components/Footer";
import ClientTestimonials from "@/components/tax-planning/ClientTestimonials";
import FeaturedSection from "@/components/tax-planning/FeaturedSection";
import HeaderSection from "@/components/tax-planning/HeaderSection";
import RealLifeProblems from "@/components/tax-planning/RealLifeProblems";
import TaxPlanningServices from "@/components/tax-planning/TaxPlanningServices";
import VideoSection from "@/components/tax-planning/VideoSection";
import React from "react";

export const metadata = {
  title: "Strategic Tax Planning Services in Tampa | Apex Advisor Group",
  description: "Maximize tax efficiency and reduce liabilities with strategic tax planning services from Apex Advisor Group. Schedule a consultation for a customized tax plan today.",
  alternates: {
    canonical: "/tax-planning",
  },
};

const page = () => {
  return (
    <div>
      <HeaderSection />
      <FeaturedSection />
      <RealLifeProblems />
      <TaxPlanningServices />
      <VideoSection />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default page;
