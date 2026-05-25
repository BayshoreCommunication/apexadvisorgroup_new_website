import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import GetAllPostData from '@/lib/GetAllPostData';
import Link from 'next/link';
import SecondaryButton from '../shared/SecondaryButton';
import MotionEffect from '../motion/MotionEffect';
import Image from 'next/image';

const BlogSection = async () => {
  const blogPostData = await GetAllPostData();

  return (
    <SectionLayout bg='bg-slate-50 '>
      <div className=''>
        <MotionEffect effect='fade-up' duration='2000'>
          <div className='flex items-center justify-center'>
            <div className=''>
              <h2
                className={`text-stone-950 font-bold text-5xl mt-5 mb-4 text-center`}
              >
                Blogs
              </h2>

              <hr className='h-[2px] my-0 bg-stone-950 border-0 w-24 mx-auto'></hr>
              <p className='mb-4 text-lg text-stone-950 text-center max-w-[700px] mt-8'>
                {`Stay ahead of the curve with Apex Advisor Group Inc's
                informative and engaging blog posts. Our commitment is to
                provide you with valuable insights to make informed decisions
                for your family and business, ensuring your path to financial
                success. Start exploring our blogs now!`}
              </p>
            </div>
          </div>
        </MotionEffect>
        <div className='gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-0 md:mt-4'>
          {blogPostData?.data
            ?.filter((pub, no) => pub.published === true && no <= 2)
            ?.map((blogs, index) => (
              <MotionEffect effect='fade-up' duration='2000' key={index}>
                <article className='h-full overflow-hidden rounded-lg border bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1'>
                  <Link
                    href={`/blog/${blogs?.slug}`}
                    className='block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E758B]'
                  >
                    <div className='relative aspect-[16/9] w-full bg-slate-100'>
                      <Image
                        fill
                        sizes='(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw'
                        className='object-contain p-3'
                        src={blogs?.featuredImage?.image?.url}
                        alt={blogs?.featuredImage?.altText}
                      />
                    </div>
                  </Link>
                  <div className='flex min-h-[126px] flex-col items-start justify-between px-5 pb-5 pt-4 text-left'>
                    <Link href={`/blog/${blogs?.slug}`} className='block'>
                      <h2 className='mb-3 line-clamp-2 text-lg font-bold leading-7 text-stone-950'>
                        {blogs?.title}
                      </h2>
                    </Link>
                    <SecondaryButton
                      title={'Read More'}
                      link={`/blog/${blogs?.slug}`}
                      style={'bg-[#0E758B] text-white'}
                      radius={'sm'}
                    />
                  </div>
                </article>
              </MotionEffect>
            ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default BlogSection;
