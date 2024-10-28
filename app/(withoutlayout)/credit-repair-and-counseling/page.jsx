import CounselingServices from "@/components/credit-repair-and-counseling/CounselingServices";
import FeaturedSection from "@/components/credit-repair-and-counseling/FeaturedSection";
import HeroSection from "@/components/credit-repair-and-counseling/HeroSection";
import InitialConsultation from "@/components/credit-repair-and-counseling/InitialConsultation";
import VideoSection from "@/components/credit-repair-and-counseling/VideoSection";
import TaxPlanningServices from "@/components/tax-planning/TaxPlanningServices";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <VideoSection />
      <CounselingServices />
      <FeaturedSection />
      <InitialConsultation />
    </div>
  );
};

export default page;
