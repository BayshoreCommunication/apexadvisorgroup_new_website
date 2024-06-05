'use client';
import React, { useEffect } from 'react';
import BlogSideBar from './BlogSideBar';
import MotionEffect from '../motion/MotionEffect';
import Link from 'next/link';
import parse from 'html-react-parser';
import Image from 'next/image';

const BlogSideMotion = ({ blogPostData }) => {
  useEffect(() => {
    const handleScroll = () => {
      const blogContent = document.querySelector('.blog-content');
      const sidebar = document.querySelector('.sidebar');

      if (window.scrollY > 100) {
        // Adjust the value as needed
        blogContent.classList.add('scrolled');
        sidebar.classList.add('scrolled');
      } else {
        blogContent.classList.remove('scrolled');
        sidebar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <div className='container'>
      <div className='blog-content'>
        {blogPostData?.data
          ?.filter((pub) => pub.published)
          ?.map((blogs, index) => (
            <div key={index} className='mb-14'>
              <Link href={`/blog/${blogs?.slug}`}>
                <div>
                  <MotionEffect effect='fade-right' duration='2000'>
                    <Image
                      width={1800}
                      height={300}
                      src={blogs?.featuredImage?.image?.url}
                      alt={blogs?.featuredImage?.altText}
                      className='bg-center bg-cover'
                    />

                    <p className='text-[1rem] text-black text-left italic mt-2'>
                      {postDate(blogs?.createdAt)}
                    </p>
                    <h2 className='text-2xl tracking-normal font-bold text-[#1B2639] text-left mb-4 mt-3 '>
                      {blogs?.title}
                    </h2>
                    <div className='font-normal text-[1rem] text-black mb-8 line-clamp-6'>
                      {parse(blogs?.body)}
                    </div>
                    <div className='flex justify-center md:justify-start'>
                      <button
                        type='button'
                        className='text-white bg-[#0B7788] hover:bg-[#096573] font-medium text-lg px-4 py-2 me-2 mb-2 focus:outline-none rounded-md'
                      >
                        Read More
                      </button>
                    </div>
                  </MotionEffect>
                </div>
              </Link>
            </div>
          ))}
      </div>

      <div className='sidebar'>
        <BlogSideBar />
      </div>
    </div>
  );
};

export default BlogSideMotion;
