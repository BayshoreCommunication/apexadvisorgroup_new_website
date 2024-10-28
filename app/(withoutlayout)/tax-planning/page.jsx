import FeaturedSection from "@/components/tax-planning/FeaturedSection";
import HeaderSection from "@/components/tax-planning/HeaderSection";
import InitialConsultation from "@/components/tax-planning/InitialConsultation";
import TaxBarChart from "@/components/tax-planning/TaxBarChart";
import TaxPlanningServices from "@/components/tax-planning/TaxPlanningServices";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSection />
      <FeaturedSection />
      <TaxPlanningServices />
      <TaxBarChart />
      <InitialConsultation />
    </div>
  );
};

export default page;
