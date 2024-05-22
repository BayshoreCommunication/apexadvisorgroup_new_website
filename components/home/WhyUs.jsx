'use client';
import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import {  Image } from '@nextui-org/react';

import GetAllPostData from '@/lib/GetAllPostData';
import Link from 'next/link';

const WhyUs = async () => {
  const blogPostData = await GetAllPostData();

  return (
    <SectionLayout bg='bg-slate-50 '>
      <div className=''>
        <div className='flex items-center justify-center'>
          <div className=''>
            <h2
              className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center`}
            >
              Why Us
            </h2>

            <hr class='h-[2px] my-0 bg-stone-950 border-0 w-24 mx-auto'></hr>
            <p className='mb-4 text-lg text-stone-950 text-center max-w-[700px] mt-8'>
              Bookkeeping, Payroll, Tax Preparation, Credit Repair & Counseling
              We here at Apex Advisor Group Inc are a team of highly qualified
              professionals that have over 40+ years of combined experience in
              the tax, accounting, insurance.
            </p>
          </div>
        </div>

        <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-0 md:mt-4'>
          {blogPostData?.data
            ?.filter((pub, no) => pub.published === true && no < 3)
            ?.map((blogs, index) => (
              <Link href={`/blog/${blogs?.slug}`}>
                <div key={index} className='bg-slate-50'>
                  <div className=' p-0'>
                    <Image
                      shadow='none'
                      radius='none'
                      width='100%'
                      className='w-full object-cover h-[300px]'
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default WhyUs;
