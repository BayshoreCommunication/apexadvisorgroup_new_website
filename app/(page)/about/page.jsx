import React from 'react';
import aboutUsPage from '../../../public/image/about-us-page.jpg';
import GroupMembers from '@/components/about/GroupMembers';
import Consultation from '@/components/shared/Consultation';
import Head from 'next/head';
import PageHeroSection from '@/components/shared/PageHeroSection';


export const metadata = {
  title: "About Us | Tax Preparation & Accounting Services in Tampa",
  description:
    "Learn about Apex Advisor Group's 40+ years of experience in tax preparation, accounting, payroll, credit repair, and financial planning services in Tampa, Florida.",
};

const page = () => {
  return (
    <>

      <div className='mt-0 md:mt-[130px]'>
        <PageHeroSection
          heading={'About Us'}
          subheading={'Tax Accountants In Tampa, Florida'}
          paragraphOne={
            'We here at Apex Advisor Group are a team of highly qualified professionals that have over 40+ years of combined experience in the tax, accounting, insurance and financial services industry.'
          }
          paragraphTwo={
            'Putting the clients’ needs first has always been the Apex Advisor philosophy and has helped us create a reputation of honesty, integrity and trust with our clients and our community. We strive to increase financial literacy and awareness for all our clients and our community.'
          }
          image={aboutUsPage}
          alt={'About Us Image'}
          width={1000}
          height={750}
        />
        <GroupMembers />
        <Consultation />
      </div>
    </>
  );
};

export default page;
