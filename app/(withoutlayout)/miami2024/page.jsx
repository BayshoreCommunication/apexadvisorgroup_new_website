import EventsCalendy from '@/components/miami2024/EventsCalendly';
import EventsGoogleMap from '@/components/miami2024/EventsGoogleMap';
import EventsStart from '@/components/miami2024/EventsStart';
import Miami2024events from '@/components/miami2024/miami2024events';

const page = () => {
  return (
    <div>
      <Miami2024events />
      <EventsStart />
      <EventsCalendy />
      <EventsGoogleMap />
    </div>
  );
};

export default page;

// 'use client';

// import SectionLayout from '@/components/shared/SectionLayout';
// import Image from 'next/image';
// // import { motion } from 'framer-motion';

// const Miami2024events = () => {
//   // const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

//   // const itemVariants = {
//   //   hidden: { opacity: 0, y: 10 },
//   //   visible,
//   // };

//   return (
//     <div className='relative'>
//       <div className='relative h-[500px] md:h-[850px]'>
//         <Image
//           src='/image/miami2024-bg.jpg'
//           alt='Miami 2024 Background'
//           layout='fill'
//           objectFit='cover'
//           objectPosition='bottom'
//           priority
//           className='z-10'
//           rel='preload'
//         />

//         <div className='absolute inset-0 z-20 flex items-center '>
//           <SectionLayout>
//             <div className='grid items-center grid-cols-1 text-center md:grid-cols-3 md:text-left'>
//               <div className='col-span-2'>
//                 <div className='flex justify-center mx-0 md:justify-start '>
//                   <Image
//                     src='/image/apex-advisor.png'
//                     alt='2024'
//                     width={270}
//                     height={270}
//                     className='w-[180px] h-auto'
//                   />
//                 </div>
//                 <p className='text-white text-sm md:text-base max-w-[450px] mt-3'>
//                   06 - March. 2024 to 07 - March. 2024
//                 </p>
//                 <div className='flex items-end mt-4 gap-x-3'>
//                   <h1 className='text-[50px] md:text-[100px] font-extrabold text-white leading-tight tracking-normal'>
//                     TAX
//                   </h1>
//                   <Image
//                     src='/image/2024.png'
//                     alt='2024'
//                     width={270}
//                     height={270}
//                     className='md:w-[80px] md:h-[90px] w-[40px] h-[45px] md:mb-[20px] mb-[10px]'
//                   />
//                   <p className='text-[16px] md:text-[40px] font-extrabold text-white leading-tight tracking-normal mb-[10px] md:mb-[20px]'>
//                     THE BUSINESS SHOW 2024
//                   </p>
//                 </div>
//                 <p className='text-[50px] md:text-[100px] font-extrabold text-white leading-tight tracking-normal mt-4'>
//                   CONFERENCE
//                 </p>
//                 <p className='text-white text-sm md:text-base max-w-[450px] mt-3'>
//                   Miami Beach Convention Center Booth 905, 1901 Convention Ctr
//                   Dr, Miami Beach, FL 33139
//                 </p>
//               </div>
//             </div>
//           </SectionLayout>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Miami2024events;
