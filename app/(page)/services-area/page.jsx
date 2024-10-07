import ServicesArea from '@/components/servicesArea/ServicesArea';
import Consultation from '@/components/shared/Consultation';
import PageHeroSection from '@/components/shared/PageHeroSection';
import React from 'react';
import ServiceArea from '../../../public/image/services-area.jpg';
import Head from 'next/head';
import MotionEffect from '@/components/motion/MotionEffect';


export const metadata = {
  title: "Service Area - Apex Advisor",
  description:
    "Apex Advisor Group Inc provides financial and tax services to clients in many areas. Our experienced team tailors high-quality services to meet your unique needs. Contact us to achieve your financial goals.",
};

const page = () => {
  return (
    <>
      
      <div className='mt-0 md:mt-[130px]'>
        <PageHeroSection
          heading={'Services Area'}
          subheading={'By Apex Advisor Group Inc'}
          image={ServiceArea}
          width={1000}
          height={657}
        />
        <MotionEffect effect='fade-up' duration='2000'>
          <ServicesArea />
        </MotionEffect>

        <Consultation />
      </div>
    </>
  );
};

export default page;
