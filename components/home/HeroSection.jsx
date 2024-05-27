'use client';
import Link from 'next/link';
import SectionLayout from '../shared/SectionLayout';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  const text = '40+ YEARS OF COMBINED EXPERIENCE'.split(' ');

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <div className="bg-[url('/image/homebanner.png')] bg-cover bg-left-bottom md:bg-center bg-fixed">
        <SectionLayout>
          <div className='grid grid-cols-1 md:grid-cols-3 items-center my-4 md:my-28'>
            <div className='col-span-2'>
              <h1
                className={`text-[50px] md:text-[100px] font-[800] text-white text-center md:text-left leading-tight tracking-normal `}
              >
                {text.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {el}{' '}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                variants={itemVariants}
                className='text-white text-sm md:text-base max-w-[450px] text-center md:text-left mt-3'
              >
                in the tax, accounting, insurance and financial services
                industry.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className='mt-8 flex justify-center md:justify-start'
              >
                <Link
                  id='view-all-btn'
                  href={'/contact'}
                  type='button'
                  class='text-white bg-none hover:bg-[#0E758B] font-medium text-base md:text-lxl px-6 md:px-8 py-2.5 me-0 md:me-6 mb-2 border border-white '
                >
                  GET IN TOUCH
                </Link>
              </motion.div>
            </div>
            <div></div>
          </div>
        </SectionLayout>
      </div>
    </motion.div>
  );
};

export default HeroSection;
