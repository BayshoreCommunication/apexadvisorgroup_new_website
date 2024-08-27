'use client';
import React from 'react';
import { InlineWidget } from 'react-calendly';
import SectionLayout from '../shared/SectionLayout';

const EventsCalendy = () => {
  return (
    <SectionLayout bg={'bg-black'}>
      <p className='text-[25px] md:text-[35px] font-extrabold text-white leading-tight tracking-normal text-center'>
        Schedule An <span className='text-[#3DBCD1]'>Appointment</span> <br />
        With Apex Advisor
      </p>
      <div>
        <div className='py-6 md:py-10'>
          <InlineWidget
            className='inline-widget'
            url='https://calendly.com/apexadvisorgroup/15min'
            styles={{
              height: '750px',
            }}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '#0b7788',
              textColor: '4d5055',
            }}
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default EventsCalendy;
