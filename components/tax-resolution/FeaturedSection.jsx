// "use client";
// import React, { useState } from "react";
// import SectionLayout from "../shared/SectionLayout";
// import { TbReceiptTax } from "react-icons/tb";
// import Image from "next/image";

// const featuredData = [
//   {
//     Image: "/image/tax-resolution/tax-service.png",
//     WhiteImage: "/image/tax-resolution/tax-service-white.png",
//     title: "Tax Service ",
//   },
//   {
//     Image: "/image/tax-resolution/accounting-service.png",
//     WhiteImage: "/image/tax-resolution/accounting-service-white.png",
//     title: "Accounting Service",
//   },
//   {
//     Image: "/image/tax-resolution/insurance-service.png",
//     WhiteImage: "/image/tax-resolution/insurance-service-white.png",
//     title: "Insurance Service",
//   },
//   {
//     Image: "/image/tax-resolution/financial-service.png",
//     WhiteImage: "/image/tax-resolution/financial-service-white.png",
//     title: "Financial Service",
//   },
// ];

// const FeaturedSection = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Event handlers
//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div>
//       <SectionLayout>
//         <div className=" w-full max-w-5xl text-center mx-auto">
//           <h1 className="text-2xl md:text-4xl font-bold">
//             40+ YEARS OF COMBINED EXPERIENCE
//           </h1>
//           <p className="text-lg font-medium mt-3">
//             Stay ahead of the curve with Apex Advisor Group Inc{"'"}s
//             informative and engaging blog posts. Our commitment is to provide
//             you with valuable insights to make informed decisions for your
//             family and business, ensuring your path to financial success. Start
//             exploring our blogs now!
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
//           <div
//             className="group bg-[#EEF6F8] hover:bg-[#0E758B] flex flex-col gap-3 md:gap-5 justify-center items-center px-8 py-14 duration-300 rounded-2xl hover:mt-6"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div>
//               <Image
//                 src={
//                   isHovered
//                     ? "/image/tax-resolution/tax-service-white.png"
//                     : "/image/tax-resolution/tax-service.png"
//                 }
//                 alt=""
//                 width={80}
//                 height={80}
//               />
//             </div>
//             <h4 className="text-2xl font-semibold duration-300 group-hover:text-white">
//               Tax Service
//             </h4>
//           </div>
//           <div
//             className="group bg-[#EEF6F8] hover:bg-[#0E758B] flex flex-col gap-3 md:gap-5 justify-center items-center px-8 py-14 duration-300 rounded-2xl hover:mt-6"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div>
//               <div>
//                 <Image
//                   //   src="/image/tax-resolution/accounting-service.png"
//                   src={
//                     isHovered
//                       ? "/image/tax-resolution/accounting-service-white.png"
//                       : "/image/tax-resolution/accounting-service.png"
//                   }
//                   alt=""
//                   width={80}
//                   height={80}
//                 />
//               </div>
//             </div>
//             <h4 className="text-2xl font-semibold duration-300 group-hover:text-white">
//               Accounting Service
//             </h4>
//           </div>
//           <div
//             className="group bg-[#EEF6F8] hover:bg-[#0E758B] flex flex-col gap-3 md:gap-5 justify-center items-center px-8 py-14 duration-300 rounded-2xl hover:mt-6"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div>
//               <div>
//                 <Image
//                   //   src="/image/tax-resolution/insurance-service.png"
//                   src={
//                     isHovered
//                       ? "/image/tax-resolution/insurance-service-white.png"
//                       : "/image/tax-resolution/insurance-service.png"
//                   }
//                   alt=""
//                   width={80}
//                   height={80}
//                 />
//               </div>
//             </div>
//             <h4 className="text-2xl font-semibold duration-300 group-hover:text-white">
//               Insurance Service
//             </h4>
//           </div>
//           <div
//             className="group bg-[#EEF6F8] hover:bg-[#0E758B] flex flex-col gap-3 md:gap-5 justify-center items-center px-8 py-14 duration-300 rounded-2xl hover:mt-6"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div>
//               <div>
//                 <Image
//                   //   src="/image/tax-resolution/financial-service.png"
//                   src={
//                     isHovered
//                       ? "/image/tax-resolution/financial-service-white.png"
//                       : "/image/tax-resolution/financial-service.png"
//                   }
//                   alt=""
//                   width={80}
//                   height={80}
//                 />
//               </div>
//             </div>
//             <h4 className="text-2xl font-semibold duration-300 group-hover:text-white">
//               Financial Service
//             </h4>
//           </div>
//         </div>
//       </SectionLayout>
//     </div>
//   );
// };

// export default FeaturedSection;
"use client";
import React, { useState } from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";

const featuredData = [
  {
    Image: "/image/tax-resolution/tax-service.png",
    WhiteImage: "/image/tax-resolution/tax-service-white.png",
    title: "Tax Service",
  },
  {
    Image: "/image/tax-resolution/accounting-service.png",
    WhiteImage: "/image/tax-resolution/accounting-service-white.png",
    title: "Accounting Service",
  },
  {
    Image: "/image/tax-resolution/insurance-service.png",
    WhiteImage: "/image/tax-resolution/insurance-service-white.png",
    title: "Insurance Service",
  },
  {
    Image: "/image/tax-resolution/financial-service.png",
    WhiteImage: "/image/tax-resolution/financial-service-white.png",
    title: "Financial Service",
  },
];

const FeaturedSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <SectionLayout>
        <div className="w-full max-w-5xl text-center mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold">
            40+ YEARS OF COMBINED EXPERIENCE
          </h1>
          <p className="text-lg font-medium mt-3">
            Stay ahead of the curve with Apex Advisor Group Inc{"'"}s
            informative and engaging blog posts. Our commitment is to provide
            you with valuable insights to make informed decisions for your
            family and business, ensuring your path to financial success. Start
            exploring our blogs now!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {featuredData.map((item, index) => (
            <div
              key={index}
              className="group bg-[#EEF6F8] hover:bg-[#0E758B] flex flex-col gap-3 md:gap-5 justify-center items-center px-8 py-14 duration-300 rounded-2xl hover:-mb-6 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                <Image
                  src={hoveredIndex === index ? item.WhiteImage : item.Image}
                  alt={`${item.title} icon`}
                  width={80}
                  height={80}
                />
              </div>
              <h4 className="text-2xl font-semibold duration-300 group-hover:text-white">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default FeaturedSection;
