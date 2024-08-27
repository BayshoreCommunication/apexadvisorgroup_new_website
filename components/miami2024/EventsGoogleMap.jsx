import React from 'react';
import SectionLayout from '../shared/SectionLayout';

const EventsGoogleMap = () => {
  return (
    <div className='bg-[#111617] overflow-hidden relative'>
      <div className=''>
        <iframe
          title='map-apex'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225538.9814776819!2d-82.63712980546875!3d27.961859500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cfbb1f31d2d9%3A0x7b3e4d8f350e516e!2sApex%20Advisor%20Group%20Inc!5e0!3m2!1sen!2sbd!4v1693223168093!5m2!1sen!2sbd'
          width='100%'
          height='450px'
          allowfullscreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          style={{
            border: 'none',
            marginTop: '5px',
            filter: 'grayscale(100%) invert(100%)',
          }}
        ></iframe>
      </div>
      <SectionLayout>
        <div className='relative z-30 grid grid-cols-1 gap-2 mt-8 sm:grid-cols-4'>
          <div className='flex items-center justify-center p-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z'
              />
            </svg>

            <p className='pl-2 text-[16px] font-thin text-white'>
              info@apexadvisor.pro
            </p>
          </div>
          <div className='flex items-center justify-center p-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
              />
            </svg>
            <p className='pl-2 text-[16px] font-thin text-white'>
              (813) 678-2400
            </p>
          </div>

          <div className='max-w-[620px] items-end justify-end bg-[black] p-10 sm:col-span-2 sm:mt-[-200px]'>
            <label
              htmlFor='street-address'
              className='block text-lg font-normal leading-6 text-white'
            >
              LOCATION
            </label>
            <h1 className='mt-2 text-lg font-semibold leading-normal text-white md:text-2xl'>
              Miami Beach Convention Center Booth 905 1901 Convention Ctr Dr,
              <br />
              Miami Beach, FL 33139
            </h1>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default EventsGoogleMap;
