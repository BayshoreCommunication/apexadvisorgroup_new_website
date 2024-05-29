import MotionEffect from '@/components/motion/MotionEffect';
import PageHeroSection from '@/components/shared/PageHeroSection';
import SectionLayout from '@/components/shared/SectionLayout';
import BlogSideBar from '@/components/blog/BlogSideBar';
import { serviceData } from '@/config/servicesData';
import Image from 'next/image';
import Consultation from '@/components/shared/Consultation';
import SectionLayoutBlog from '@/components/shared/SectionLayoutBlog';
import Head from 'next/head';

const page = async ({ params }) => {
  const serviceDatas = serviceData?.filter(
    (service) => service.slug === params.slug,
  );

  return (
    <>
      <Head>
        <title>{serviceDatas[0]?.title}</title>
        <meta
          name='description'
          content={`${serviceDatas[0]?.topBarDescription}`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='mt-0 md:mt-[130px]'>
        <PageHeroSection
          heading={serviceDatas[0]?.title}
          subheading={serviceDatas[0]?.topBarDescription}
          image={`/image/${serviceDatas[0]?.topBarImage}`}
          alt={'About Us Image'}
          width={1000}
          height={657}
        />

        <div className=''>
          {serviceDatas?.map((el, index) => (
            <div className='' key={index}>
              <SectionLayoutBlog>
                <div className='flex flex-col-reverse md:flex-row gap-x-12 items-center mb-4 mt-12'>
                  <div className='w-65%'>
                    <h3 className='text-black text-left text-2xl font-semibold mb-2'>
                      {el?.mainHeading}
                    </h3>

                    <p className='font-normal text-[1rem] text-black mb-8 '>
                      {el?.mainDescription}
                    </p>
                  </div>
                  <div className='w-35%'>
                    <Image
                      width={1800}
                      height={300}
                      src={`/image/${el?.mainImage}`}
                      alt={'blog-image'}
                      className='bg-center bg-cover'
                    />
                  </div>
                </div>
              </SectionLayoutBlog>

              {el?.detailSections?.map((subEl, index) => (
                <div key={index}>
                  <SectionLayoutBlog>
                    {/* <hr class='w-full border-t border-gray-500' /> */}
                    <div className='flex flex-col md:flex-row gap-x-0 md:gap-x-12 items-center mb-2 p-6 '>
                      <div className='w-35%'>
                        <Image
                          width={1800}
                          height={300}
                          src={`/image/${subEl?.image}`}
                          alt={'blog-image'}
                          className='bg-center bg-cover'
                        />
                      </div>
                      <div className='w-65%'>
                        <h3 className='text-black text-left text-2xl font-semibold mb-2'>
                          {subEl?.heading}
                        </h3>

                        <p className='font-normal text-[1rem] text-black mb-8 mt-4'>
                          {subEl?.paragraph}
                        </p>
                      </div>
                    </div>

                    <div className='p-8'>
                      <div className='flex flex-col md:flex-row items-start gap-x-10'>
                        {subEl?.cards?.map((subCard, index) => (
                          <div
                            key={index}
                            className='bg-[#EEF6F8] p-6 flex-1 w-[100%] min-h-[40px] md:min-h-[540px]'
                          >
                            <h3 className='text-black text-left text-2xl font-semibold mb-2'>
                              {subCard?.heading}
                            </h3>

                            <p className='font-normal text-[1rem] text-black mb-0 '>
                              {subCard?.paragraph}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SectionLayoutBlog>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Consultation />
      </div>
    </>
  );
};

export default page;
