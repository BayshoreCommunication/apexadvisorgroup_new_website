// import CallToAction from "@/components/tax-resolution/CallToAction";
import Footer from "@/components/Footer";
import CallToAction2 from "@/components/tax-resolution/CallToAction2";
import ClientTestimonials from "@/components/tax-resolution/ClientTestimonials";
import FeaturedSection from "@/components/tax-resolution/FeaturedSection";
import HeroSection from "@/components/tax-resolution/HeroSection";
import ResolveIRS from "@/components/tax-resolution/ResolveIRS";
import ServicesProcess from "@/components/tax-resolution/ServicesProcess";
// import TaxResolution from "@/components/tax-resolution/TaxResolution";
import VideoSection from "@/components/tax-resolution/VideoSection";
import WebsiteDisclaimer from "@/components/tax-resolution/WebsiteDisclaimer";

const page = () => {
  return (
    <div>
      {/*  */}
      <HeroSection />
      <FeaturedSection />
      {/* <CallToAction /> */}
      {/* <TaxResolution /> */}
      <ResolveIRS />
      <ServicesProcess />
      <VideoSection />

      <ClientTestimonials />
      <CallToAction2 />
      <Footer />
      <WebsiteDisclaimer />
    </div>
  );
};

export default page;
