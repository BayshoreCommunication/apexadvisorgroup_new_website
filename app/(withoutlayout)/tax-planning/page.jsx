import Footer from "@/components/Footer";
import ClientTestimonials from "@/components/tax-planning/ClientTestimonials";
import FeaturedSection from "@/components/tax-planning/FeaturedSection";
import HeaderSection from "@/components/tax-planning/HeaderSection";
import RealLifeProblems from "@/components/tax-planning/RealLifeProblems";
import TaxPlanningServices from "@/components/tax-planning/TaxPlanningServices";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSection />
      <FeaturedSection />
      <RealLifeProblems />
      <TaxPlanningServices />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default page;
