import PageHeroSection from '@/components/shared/PageHeroSection';
import React from 'react';
import ContactPageImg from '../../../public/image/contact.jpg';
import MapSection from '@/components/contact/MapSection';
import ContactSection from '@/components/contact/ContactSection';
import Head from 'next/head';


export const metadata = {
  title: "About - Apex Advisor",
  description:
    "Contact Apex Advisor Group Inc - Accounting &amp; Tax Preparation Firm in Tampa, Florida for Accounting, Tax Preparation, Tax Planning &amp; Tax Resolution Services.",
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
