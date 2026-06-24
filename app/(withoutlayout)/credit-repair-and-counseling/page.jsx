import CounselingServices from "@/components/credit-repair-and-counseling/CounselingServices";
import CreditJourney from "@/components/credit-repair-and-counseling/CreditJourney";
import HeroSection from "@/components/credit-repair-and-counseling/HeroSection";
import InitialConsultation from "@/components/credit-repair-and-counseling/InitialConsultation";
import VideoSection from "@/components/credit-repair-and-counseling/VideoSection";
import Footer from "@/components/Footer";
import ClientTestimonials from "@/components/tax-planning/ClientTestimonials";
import React from "react";

export const metadata = {
  title: "Credit Repair & Counseling Services Tampa | Apex Advisor Group",
  description: "Improve your credit score and take control of your financial life with professional credit repair and counseling services from Apex Advisor Group in Tampa.",
  alternates: {
    canonical: "/credit-repair-and-counseling",
  },
};

const page = () => {
  return (
    <div>
      <HeroSection />
      <CreditJourney />
      <CounselingServices />
      <VideoSection />
      <InitialConsultation />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default page;
