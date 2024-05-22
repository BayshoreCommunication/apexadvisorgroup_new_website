'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function ServiceSlider() {
  return (
    <div className='flex justify-center items-center bg-gray-100 py-10'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
        breakpoints={{
          // when window width is >= 0px (mobile and tablets)
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 1024px (desktops)
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className='flex justify-center items-center bg-slate-50 rounded-lg h-[350px] mb-10 p-5 shadow-md'>
              <div>
                <Image
                  width={45}
                  height={45}
                  src={'/image/resicon.png'}
                  alt='about img'
                  className=''
                />
                <h2 className='text-stone-900 font-bold text-2xl mt-5 mb-2 text-left'>
                  Our Services
                </h2>
                <p className='mb-4 text-md text-stone-900 text-left mt-2'>
                  Introducing our top-rated service that offers expert solutions
                  for all your needs. Our team of professionals provide
                  efficient and reliable
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='swiper-pagination mt-5'></div>
      </Swiper>
    </div>
  );
}
