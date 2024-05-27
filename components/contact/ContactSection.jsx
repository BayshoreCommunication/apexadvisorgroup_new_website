'use client';
import React, { useState } from 'react';
import SectionLayout from '../shared/SectionLayout';
import SecondaryButton from '../shared/SecondaryButton';
import { send } from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactSection = () => {
  const [emailForm, setEmailForm] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    organization: '',
    message: '',
  });

  const SendMail = (e) => {
    e.preventDefault();
    console.log('check', emailForm);
    send('service_zwnokrn', 'template_kz85het', emailForm, 'D2XgZB_GRuQIbbOL8')
      .then((response) => {
        console.log('response', response);
        Swal.fire({
          icon: 'success',
          text: 'Thanks for being awesome! We have received your message and would like to thank you for writing to us.',
        }).then(() => {
          setEmailForm({
            fname: '',
            lname: '',
            phone: '',
            email: '',
            organization: '',
            message: '',
          });
        });
      })
      .catch((err) => {
        console.log('err', err);
        Swal.fire({
          icon: 'error',
          text: 'Something went wrong!',
        }).then(() => {
          setEmailForm({
            fname: '',
            lname: '',
            phone: '',
            email: '',
            organization: '',
            message: '',
          });
        });
      });
  };
  return (
    <SectionLayout>
      <div className='flex flex-col lg:flex-row gap-6 items-center'>
        {/* contact-address */}
        <div class='w-full flex-1'>
          <div className='mb-5'>
            <h3 className='text-2xl font-semibold mb-2'>Address:</h3>
            <p>1211 TECH BLVD, SUITE 120, TAMPA, FL 33619</p>
          </div>
          <div className='mb-5'>
            <h3 className='text-2xl font-semibold mb-2'>Phone:</h3>
            <a href='tel:(813) 678-2400'>(813) 678-2400</a>
          </div>
          <div className='mb-5'>
            <h3 className='text-2xl font-semibold mb-2'>Email:</h3>
            <a href='mailto: info@apexadvisor.pro'>info@apexadvisor.pro</a>
          </div>
          <div className='mb-5'>
            <h3 className='text-2xl font-semibold mb-2'>By Appointments:</h3>
            <p className='mb-2'>MON - FRI - 09:00 AM - 05:00 PM</p>
            <p>AFTER HOURS AND WEEKENDS - AVAILABLE BY EMAIL</p>
          </div>
        </div>
        {/* contact-form  */}
        <div class='w-full flex-1'>
          <form onSubmit={SendMail}>
            <div class='flex flex-col lg:flex-row w-full gap-4 mb-4'>
              <div class='w-full'>
                <p className='text-lg font-semibold mb-2'>First Name *</p>
                <input
                  className='p-2 border-1 border-[#0b7788] w-full'
                  type='text'
                  placeholder='Enter your first name.'
                  value={emailForm.fname}
                  onChange={(event) => {
                    setEmailForm({
                      ...emailForm,
                      fname: event.target.value,
                    });
                  }}
                />
              </div>
              <div class='w-full'>
                <p className='text-lg font-semibold mb-2'>Last Name *</p>
                <input
                  className='p-2 border-1 border-[#0b7788] w-full'
                  type='text'
                  placeholder='Enter your last name.'
                  value={emailForm.lname}
                  onChange={(event) => {
                    setEmailForm({
                      ...emailForm,
                      lname: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className='mb-4'>
              <p className='text-lg font-semibold mb-2'>Email *</p>
              <input
                className='p-2 border-1 border-[#0b7788] w-full'
                type='text'
                placeholder='Enter your email.'
                onChange={(event) => {
                  setEmailForm({
                    ...emailForm,
                    email: event.target.value,
                  });
                }}
              />
            </div>
            <div className='mb-4'>
              <p className='text-lg font-semibold mb-2'>Phone *</p>
              <input
                className='p-2 border-1 border-[#0b7788] w-full'
                type='text'
                placeholder='Enter your phone number.'
                value={emailForm.phone}
                onChange={(event) => {
                  setEmailForm({
                    ...emailForm,
                    phone: event.target.value,
                  });
                }}
              />
            </div>
            <div className='mb-4'>
              <p className='text-lg font-semibold mb-2'>
                Your Organization (if any)
              </p>
              <input
                className='p-2 border-1 border-[#0b7788] w-full'
                type='text'
                placeholder='Enter organization name.'
                value={emailForm.organization}
                onChange={(event) => {
                  setEmailForm({
                    ...emailForm,
                    organization: event.target.value,
                  });
                }}
              />
            </div>
            <div className='mb-4'>
              <p className='text-lg font-semibold mb-2'>Message *</p>
              <textarea
                className='p-2 border-1 border-[#0b7788] w-full'
                type='text'
                placeholder='Enter message.'
                rows='7'
                value={emailForm.message}
                onChange={(event) => {
                  setEmailForm({
                    ...emailForm,
                    message: event.target.value,
                  });
                }}
              ></textarea>
            </div>
            <button
              type='submit'
              class='text-white bg-[#0B7788] hover:bg-[#085c69] font-medium rounded-lg text-md px-6 py-2.5 me-2 mb-2 '
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
