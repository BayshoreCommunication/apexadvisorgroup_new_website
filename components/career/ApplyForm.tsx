'use client';

import React, { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import PageHeroSection from '../shared/PageHeroSection';
import SectionLayout from '../shared/SectionLayout';
import MotionEffect from '../motion/MotionEffect';
import { careerPositions } from '../../config/careerData';

const MAX_FILE_SIZE_MB = 4;
const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const ApplyForm = () => {
  const searchParams = useSearchParams();
  const preselectedPosition = searchParams.get('position') || '';

  const formRef = useRef<HTMLFormElement>(null);
  const [resumeName, setResumeName] = useState('');
  const [resumeError, setResumeError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setResumeName('');
      setResumeError('');
      return;
    }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setResumeError('Please upload a PDF or Word document.');
      e.target.value = '';
      setResumeName('');
      return;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setResumeError(`That file is too large — max size is ${MAX_FILE_SIZE_MB}MB.`);
      e.target.value = '';
      setResumeName('');
      return;
    }
    setResumeError('');
    setResumeName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || resumeError) return;

    setSubmitting(true);
    try {
      const formData = new FormData(formRef.current);
      const res = await fetch('/api/career/apply', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Submission failed');
      }
      Swal.fire({
        icon: 'success',
        text: 'Thanks for applying! We’ve received your application and will be in touch soon.',
      });
      formRef.current.reset();
      setResumeName('');
    } catch {
      Swal.fire({
        icon: 'error',
        text: 'Something went wrong sending your application. Please try again or email us directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className='mt-0 md:mt-[130px]'>
        <PageHeroSection
          heading={'Apply Now'}
          subheading={'Join the Apex Advisor Group Team'}
          paragraphOne={
            'Fill out the form below and attach your resume — we personally review every application.'
          }
          paragraphTwo={''}
          image={'/image/about-us-page.jpg'}
          alt={'Apex Advisor Group team'}
          width={1000}
          height={657}
        />
      </div>

      <SectionLayout img={''} bg={''}>
        <MotionEffect effect={'fade-up'} duration={'1200'} delay={0}>
          <div className='max-w-[760px] mx-auto'>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='bg-white border border-[#1B2639]/10 shadow-sm p-6 md:p-10'
            >
              <div className='mb-5'>
                <p className='text-lg font-semibold mb-2 text-[#1B2639]'>
                  Position *
                </p>
                <select
                  name='position'
                  required
                  defaultValue={preselectedPosition}
                  className='p-2 border-1 border-[#0b7788] w-full bg-white'
                >
                  <option value='' disabled>
                    Select a position
                  </option>
                  {careerPositions.map((position) => (
                    <option key={position.slug} value={position.title}>
                      {position.title}
                    </option>
                  ))}
                  <option value='General Application'>
                    General Application
                  </option>
                </select>
              </div>

              <div className='flex flex-col lg:flex-row gap-4 mb-5'>
                <div className='flex-1'>
                  <p className='text-lg font-semibold mb-2 text-[#1B2639]'>
                    Full Name *
                  </p>
                  <input
                    name='from_name'
                    required
                    type='text'
                    placeholder='Enter your full name.'
                    className='p-2 border-1 border-[#0b7788] w-full'
                  />
                </div>
                <div className='flex-1'>
                  <p className='text-lg font-semibold mb-2 text-[#1B2639]'>
                    Phone *
                  </p>
                  <input
                    name='phone'
                    required
                    type='tel'
                    placeholder='Enter your phone number.'
                    className='p-2 border-1 border-[#0b7788] w-full'
                  />
                </div>
              </div>

              <div className='flex flex-col lg:flex-row gap-4 mb-5'>
                <div className='flex-1'>
                  <p className='text-lg font-semibold mb-2 text-[#1B2639]'>
                    Email *
                  </p>
                  <input
                    name='from_email'
                    required
                    type='email'
                    placeholder='Enter your email.'
                    className='p-2 border-1 border-[#0b7788] w-full'
                  />
                </div>
                <div className='flex-1'>
                  <p className='text-lg font-semibold mb-2 text-[#1B2639]'>
                    LinkedIn / Portfolio
                  </p>
                  <input
                    name='linkedin'
                    type='url'
                    placeholder='Optional link.'
                    className='p-2 border-1 border-[#0b7788] w-full'
                  />
                </div>
              </div>

              <div className='mb-5'>
                <p className='text-lg font-semibold mb-2 text-[#1B2639]'>
                  Resume / CV *
                </p>
                <label
                  htmlFor='resume'
                  className='flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#0E758B]/40 hover:border-[#0E758B] transition duration-300 rounded-md p-8 cursor-pointer text-center bg-[#EEF6F8]/40'
                >
                  <span className='text-[#0E758B] font-semibold'>
                    {resumeName ? 'Change file' : 'Click to upload your resume'}
                  </span>
                  <span className='text-sm text-[#1B2639]/60'>
                    {resumeName || 'PDF or Word document — max 5MB'}
                  </span>
                </label>
                <input
                  id='resume'
                  name='attachment'
                  type='file'
                  required
                  accept='.pdf,.doc,.docx'
                  onChange={handleResumeChange}
                  className='hidden'
                />
                {resumeError && (
                  <p className='text-sm text-red-600 mt-2'>{resumeError}</p>
                )}
              </div>

              <div className='mb-6'>
                <p className='text-lg font-semibold mb-2 text-[#1B2639]'>
                  Why are you a good fit?
                </p>
                <textarea
                  name='message'
                  rows={6}
                  placeholder='Tell us a little about yourself and why you’re interested in this role.'
                  className='p-2 border-1 border-[#0b7788] w-full'
                />
              </div>

              <button
                type='submit'
                disabled={submitting}
                className='inline-flex items-center justify-center bg-[#0E758B] text-white font-semibold text-base px-8 py-3.5 rounded-md hover:bg-[#085c69] transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed w-full md:w-auto'
              >
                {submitting ? 'Submitting…' : 'Submit Application'}
              </button>
            </form>

            <p className='text-center text-sm text-[#1B2639]/60 mt-6'>
              Prefer email? Reach us directly at{' '}
              <a
                href='mailto:info@apexadvisor.pro'
                className='text-[#0E758B] font-medium'
              >
                info@apexadvisor.pro
              </a>
              .
            </p>
          </div>
        </MotionEffect>
      </SectionLayout>
    </div>
  );
};

export default ApplyForm;
