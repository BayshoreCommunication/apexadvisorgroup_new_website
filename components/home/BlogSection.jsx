'use client';
import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import GetAllPostData from '@/lib/GetAllPostData';
import Link from 'next/link';
import SecondaryButton from '../shared/SecondaryButton';


const BlogSection = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <SectionLayout bg='bg-slate-50 '>
      <div className=''>
        <div className='flex items-center justify-center'>
          <div className=''>
            <h2
              className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center`}
            >
              Blogs
            </h2>

            <hr class='h-[2px] my-0 bg-stone-950 border-0 w-24 mx-auto'></hr>
            <p className='mb-4 text-lg text-stone-950 text-center max-w-[700px] mt-8'>
              Stay ahead of the curve with Apex Advisor Group Inc's informative
              and engaging blog posts. Our commitment is to provide you with
              valuable insights to make informed decisions for your family and
              business, ensuring your path to financial success. Start exploring
              our blogs now!
            </p>
          </div>
        </div>

        <div className='gap-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-0 md:mt-4'>
          {blogPostData?.data
            ?.filter((pub, no) => pub.published === true && no < 3)
            ?.map((blogs, index) => (
              <Link href={`/blog/${blogs?.slug}`}>
                <div
                  key={index}
                  className='bg-slate-50 border rounded-lg shadow-lg p-5 '
                >
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
                  <div className='text-small block text-left mt-4'>
                    <h2 className='text-default-500 text-lg font-bold line-clamp-1 mb-2'>
                      {blogs?.title}
                    </h2>
                    <SecondaryButton
                      title={'Read More'}
                      href={`/blog/${blogs?.slug}`}
                      style={'bg-[#0E758B] text-white'}
                      radius={'sm'}
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

export default BlogSection;
