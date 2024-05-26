import React from 'react';
import Image from 'next/image';
import MotionEffect from '@/components/motion/MotionEffect';
import SectionLayout from '@/components/shared/SectionLayout';
import SecondaryButton from '@/components/shared/SecondaryButton';
import { serviceData } from '@/config/servicesData';
import Consultation from '@/components/shared/Consultation';
import PageHeroSection from '@/components/shared/PageHeroSection';

const page = () => {
  return (
    <>
      <PageHeroSection
        heading={'Contact Apex Advisor Group Inc'}
        subheading={
          'Accounting & Tax Preparation Firm In Tampa, Florida Notary | Credit Repair & Counseling | Insurance'
        }
        image={'/image/services.jpg'}
        alt={'About Us Image'}
        width={1000}
        height={657}
      />
      <SectionLayout>
        <div className='overflow-hidden'>
          {serviceData?.map((el, index) => (
            <>
              {index % 2 === 1 ? (
                // <MotionEffect effect={'fade-up'} duration={'2000'}>
                <div className='flex-col-reverse flex lg:flex-row gap-6 pb-10 border-b-1 mb-10'>
                  <div>
                    <h1 className='text-[32px] font-bold mb-4'>
                      {el?.cardTitle}
                    </h1>
                    <p className='text-base mb-2'>{el?.cardDescOne}</p>
                    <p className='text-base mb-4'>{el?.cardDescTwo}</p>
                    <SecondaryButton
                      title={'Read More'}
                      link={'/contact'}
                      style={'bg-[#0E758B] text-white'}
                      radius={'sm'}
                    />
                  </div>
                  <div className='lg:max-w-[23%] w-full hover:brightness-75 hover:scale-105 duration-700 mb-6 lg:mb-0'>
                    <Image
                      src={`${el.cardImage}`}
                      alt='carlos rosario'
                      width={270}
                      height={270}
                      className='w-full'
                    ></Image>
                  </div>
                </div>
              ) : (
                // </MotionEffect>
                // <MotionEffect effect={'fade-up'} duration={'2000'}>
                <div className='flex-col flex lg:flex-row gap-6 pb-10 border-b-2 mb-10'>
                  <div className='lg:max-w-[23%] w-full hover:brightness-75 hover:scale-105 duration-700 mb-6 lg:mb-0'>
                    <Image
                      src={`${el?.cardImage}`}
                      alt='carlos rosario'
                      width={270}
                      height={270}
                      className='w-full'
                    ></Image>
                  </div>
                  <div>
                    <h1 className='text-[32px] font-bold mb-4'>
                      {el?.cardTitle}
                    </h1>
                    <p className='text-base mb-2'>{el?.cardDescOne}</p>
                    <p className='text-base mb-4'>{el?.cardDescTwo}</p>
                    <SecondaryButton
                      title={'Read More'}
                      link={`services/${el.slug}`}
                      style={'bg-[#0E758B] text-white'}
                      radius={'sm'}
                    />
                  </div>
                </div>
                // </MotionEffect>
              )}
            </>
          ))}
        </div>
        <Consultation />
      </SectionLayout>
    </>
  );
};

export default page;
