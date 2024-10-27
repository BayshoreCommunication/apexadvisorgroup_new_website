import CallToAction from "@/components/tax-resolution/CallToAction";
import CallToAction2 from "@/components/tax-resolution/CallToAction2";
import FeaturedSection from "@/components/tax-resolution/FeaturedSection";
import HeroSection from "@/components/tax-resolution/HeroSection";
import ResolveIRS from "@/components/tax-resolution/ResolveIRS";
import ServicesProcess from "@/components/tax-resolution/ServicesProcess";
import TaxResolution from "@/components/tax-resolution/TaxResolution";
import VideoSection from "@/components/tax-resolution/VideoSection";

const page = () => {
  return (
    <div>
      {/*  */}
      <HeroSection />
      <FeaturedSection />
      <CallToAction />
      <TaxResolution />
      <ResolveIRS />
      <ServicesProcess />
      <VideoSection />
      <CallToAction2 />
    </div>
  );
};

export default page;
