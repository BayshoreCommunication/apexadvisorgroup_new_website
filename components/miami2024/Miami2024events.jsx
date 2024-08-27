'use client';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Miami2024events = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <div className='relative'>
      <div className='relative h-[500px] md:h-[850px]'>
        <Image
          src='/image/miami2024-bg.jpg'
          alt='Miami 2024 Background'
          layout='fill'
          objectFit='cover'
          objectPosition='bottom'
          priority
          className='z-10'
          rel='preload'
        />

        <motion.div
          className='absolute inset-0 z-20 flex items-center'
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <SectionLayout>
            <div className='grid items-center grid-cols-1 text-center md:grid-cols-3 md:text-left'>
              <div className='flex justify-center col-span-2 md:justify-start'>
                <motion.div
                  variants={itemVariants}
                  className='flex justify-center mx-0 md:justify-start '
                >
                  <Image
                    src='/image/apex-advisor.png'
                    alt='2024'
                    width={270}
                    height={270}
                    className='w-[180px] h-auto'
                  />
                </motion.div>
                <motion.p
                  variants={itemVariants}
                  className='text-white text-sm md:text-base max-w-[450px] mt-3'
                >
                  06 - March. 2024 to 07 - March. 2024
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className='flex items-end mt-4 gap-x-3'
                >
                  <h1 className='text-[50px] md:text-[100px] font-extrabold text-white leading-tight tracking-normal'>
                    TAX
                  </h1>
                  <Image
                    src='/image/2024.png'
                    alt='2024'
                    width={270}
                    height={270}
                    className='md:w-[80px] md:h-[90px] w-[40px] h-[45px] md:mb-[20px] mb-[10px]'
                  />
                  <p className='text-[16px] md:text-[40px] font-extrabold text-white leading-tight tracking-normal mb-[10px] md:mb-[20px]'>
                    THE BUSINESS SHOW 2024
                  </p>
                </motion.div>
                <motion.p
                  variants={itemVariants}
                  className='text-[50px] md:text-[100px] font-extrabold text-white leading-tight tracking-normal'
                >
                  CONFERENCE
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className='text-white text-sm md:text-base max-w-[450px] mt-3'
                >
                  Miami Beach Convention Center Booth 905, 1901 Convention Ctr
                  Dr, Miami Beach, FL 33139
                </motion.p>
              </div>
            </div>
          </SectionLayout>
        </motion.div>
      </div>
    </div>
  );
};

export default Miami2024events;
