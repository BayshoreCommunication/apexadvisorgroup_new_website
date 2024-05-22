import React from 'react';
import TestimonialSlider from '../shared/TestimonialSlider';
import SectionLayout from '../shared/SectionLayout';
import MotionEffect from '../motion/MotionEffect';
import CardMotion from '../motion/CardMotion';

function TestimonialSection() {
  return (
    <SectionLayout img="bg-[url('/image/homebanner3.png')] bg-cover bg-center bg-fixed">
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-start'>
          <div className=''>
            <h2
              className={`text-stone-900 md:text-stone-50 font-bold text-3xl mt-5 mb-4 text-center md:text-left`}
            >
              Investing in You: Your Trusted Partner for a Brighter Financial
              Tomorrow
            </h2>

            <p className='mb-4 text-lg text-stone-900 md:text-stone-50 text-center md:text-left mt-6'>
              Boasting over a decade of experience, we handle everything from
              personal returns, non-profit & multi-state to tricky corporate tax
              matters. We walk you through tax planning, wealth management, and
              retirement services, ensuring you hit your financial targets. By
              cutting down on your tax bill and pumping up your savings, we make
              sure you keep more of your cash We help you build, grow, and
              maintain your wealth through personalized strategies and financial
              planning solutions We're all about being the best. We're plugged
              into the community, stay on top of tax law changes, and keep on
              learning. You benefit from a team that's always growing and
              improving to serve you better.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default TestimonialSection;
