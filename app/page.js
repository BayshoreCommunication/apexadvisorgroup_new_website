import AboutSection from '@/components/home/AboutSection';
import HeroSection from '@/components/home/HeroSection';
import ServiceSection from '@/components/home/ServiceSection';
import TestimonialSection from '@/components/home/TestimonialSection';

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
    </main>
  );
}
