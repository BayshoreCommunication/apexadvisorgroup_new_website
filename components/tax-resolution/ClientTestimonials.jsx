"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonialsData } from "@/config/testimonialsData";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";

const ClientTestimonials = ({ className }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  const testimonialsInfo = testimonialsData?.find(
    (el, index) => index === sliderIndex
  );

  return (
    <div>
      <SectionLayout>
        <div className="w-full max-w-5xl text-center mx-auto mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            What Our Client Say About Us
          </h1>
        </div>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          ref={swiperRef}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={1} // Default slides for small screens
          spaceBetween={16} // Default spacing for small screens
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          onSlideChange={(swiper) => {
            setSliderIndex(swiper.activeIndex);
          }}
          className="mySwiper"
        >
          {testimonialsData?.map((el, index) => (
            <SwiperSlide key={index}>
              <div className="w-full text-stat flex flex-col justify-center items-start max-w-3xl gap-4 lg:gap-6 py-10 mx-auto">
                <div className="flex items-center gap-5 justify-start">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src={el?.image}
                        alt={el?.name}
                        className="rounded-full"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-start w-[190px]">
                        {el?.name}
                      </div>
                      <div className="flex justify-start items-center">
                        {Array(5)
                          .fill()
                          .map((_, index) => (
                            <span
                              key={index}
                              className="text-yellow-500 text-xl"
                            >
                              &#9733;
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium">{el?.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center gap-x-8 justify-center mt-4">
          <button
            ref={prevButtonRef}
            className="text-gray-500 hover:text-gray-800 p-3 border border-gray-500 rounded-full"
          >
            <IoIosArrowBack size={24} />
          </button>

          <button
            ref={nextButtonRef}
            className="text-gray-500 hover:text-gray-800 p-3 border border-gray-500 rounded-full"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </SectionLayout>
    </div>
  );
};

export default ClientTestimonials;
