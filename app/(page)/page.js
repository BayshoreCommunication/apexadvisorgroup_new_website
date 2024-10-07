import AboutSection from '@/components/home/AboutSection';
import AboutUs from '@/components/home/AboutUs';
import BlogSection from '@/components/home/BlogSection';
import ContactApex from '@/components/home/ContactApex';
import HeroSection from '@/components/home/HeroSection';
import ServiceSection from '@/components/home/ServiceSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import WhyUs from '@/components/home/WhyUs';


export const metadata = {
  title: 'Apex Advisor Group Inc | Tax Preparation, Accounting Firm Tamp',
  description:
    'Apex Advisor Group Inc is a team of highly qualified professionals that have over 40+ years of combined experience in the tax, accounting, & financial services industry.',
  metadataBase: new URL('https://www.apexadvisorgroup.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/opengraph-image.jpg',
  },
};

export default function Home() {
  return (
    <main className='w-full mt-0 md:mt-[130px]'>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
      <WhyUs />
      <AboutUs />
      <ContactApex />
    </main>
  );
}
