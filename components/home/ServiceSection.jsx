'use client';
import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Mulish, Bitter } from 'next/font/google';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { articlesInfo } from '@/config/data';
import WhiteButton from '../shared/WhiteButton';
import MotionEffect from '../motion/MotionEffect';
import CardMotion from '../motion/CardMotion';
import ScondayButton from '../shared/ScondayButton';
import ServiceSlider from './ServiceSlider';
const bitter = Bitter({ subsets: ['latin'] });
const mulish = Mulish({ subsets: ['latin'] });

const ServiceSection = () => {
  const serviceData = [
    {
      icon: '/assets/home/icon/waivers.png',
      bg: "bg-[url('/assets/home/waivertwo.png')]",
      title: 'Waivers',
      dec: 'Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.',
    },
    {
      icon: '/assets/home/icon/e2-treaty-visas.png',
      bg: "bg-[url('/assets/home/e2-employees.png')]",
      title: 'E2 Treaty Visas',
      dec: 'Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.',
    },
    {
      icon: '/assets/home/icon/citizenship.png',
      bg: "bg-[url('/assets/home/waviersone.png')]",
      title: 'Citizenship',
      dec: 'Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.',
    },
    {
      icon: '/assets/home/icon/naturalization-citizenship.png',
      bg: "bg-[url('/assets/home/citizenshipbg.png')]",
      title: 'Naturalization & Citizenship',
      dec: 'Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.',
    },
    {
      icon: '/assets/home/icon/asylum.png',
      bg: "bg-[url('/assets/home/waivertwo.png')]",
      title: 'Asylum',
      dec: 'Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.',
    },
    {
      icon: '/assets/home/icon/green-card.png',
      bg: "bg-[url('/assets/home/e2-tready-visas.png')]",
      title: 'Green Card',
      dec: 'Lorem tristique netus hac idellus orci bibendum aenean pellentesque pellentesque Habitant lorem.',
    },
  ];
  return (
    <SectionLayout img="bg-[url('/image/homebanner2.png')] bg-cover bg-center bg-fixed">
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center md:justify-start'>
          <div className='col-span-1'>
            <h2
              className={`text-stone-900 md:text-stone-50 font-bold text-3xl mt-5 mb-4 text-center md:text-left`}
            >
              Our <span className='text-[#00E0FF]'>Services</span>
            </h2>
            <hr class='h-[2px] my-0 bg-[#00E0FF] border-0 w-24 mx-auto md:mx-0'></hr>
            <p className='mb-4 text-lg text-stone-900 md:text-stone-50 text-center md:text-left mt-6'>
              Introducing our top-rated service that offers expert solutions for
              all your needs. Our team of professionals provide efficient and
              reliable service that is tailored to your specific requirements.
              With a wide range of services including consulting, design,
              development, and maintenance, we have got you covered. Trust us to
              deliver high-quality results on time and within budget. Contact us
              today to experience the best service in the industry!
            </p>
            <div className='flex justify-center md:justify-start'>
              <button
                type='button'
                class='text-stone-900 md:text-stone-50 bg-none hover:bg-[#0E758B] font-medium text-base md:text-lxl px-6 md:px-8 py-2.5 me-0 md:me-6 mb-2 mt-5 border border-stone-900 md:border-white'
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
          <div className='col-span-2 ml-0 md:ml-20 md:mx-0'>
            <ServiceSlider />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ServiceSection;
