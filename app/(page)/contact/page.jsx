import PageHeroSection from '@/components/shared/PageHeroSection';
import React from 'react';
import ContactPageImg from '../../../public/image/contact.jpg';
import MapSection from '@/components/contact/MapSection';
import ContactSection from '@/components/contact/ContactSection';
import Head from 'next/head';


export const metadata = {
  title: "Contact Apex Advisor Group | Tampa's Trusted Tax & Financial Experts",
  description:
    "Get in touch with Apex Advisor Group in Tampa, FL for expert tax, accounting, and financial services. Whether you need help with personal or business finances, our experienced team is here to assist. Call or visit us today for a consultation tailored to your financial needs.",
};



const page = () => {
  return (
    <>
      
      <div className='mt-0 md:mt-[130px]'>
        <PageHeroSection
          heading={'Contact Apex Advisor Group Inc'}
          subheading={
            'Accounting & Tax Preparation Firm In Tampa, Florida Notary | Credit Repair & Counseling | Insurance'
          }
          image={ContactPageImg}
          alt={'About Us Image'}
          width={1000}
          height={657}
        />
        <ContactSection />
        <MapSection />
      </div>
    </>
  );
};

export default page;
