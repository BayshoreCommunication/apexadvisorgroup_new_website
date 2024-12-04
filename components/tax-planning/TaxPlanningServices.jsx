import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const servicesProcessData = [
  {
    title: "Strategic Tax Planning",
    description:
      "We provide personalized tax strategies, optimizing deductions, minimizing liabilities, and ensuring compliance to help you achieve financial success.",
    icon: "/image/tax-planning-page/back-tax-resolution-services.png",
  },
  {
    title: "International Tax Planning",
    description:
      "We offer expert international tax planning to optimize tax strategies, ensuring compliance and minimizing your global tax burden.",
    icon: "/image/tax-planning-page/tax-lien-and-levy-assistance.png",
  },
  {
    title: "Business Tax Planning",
    description:
      "Our business tax planning services optimize tax advantages, minimize liabilities, and foster long-term growth with tailored, industry-specific solutions.",
    icon: "/image/tax-planning-page/business-tax-planning.png",
  },
  {
    title: "Retirement Tax Planning",
    description:
      "Our retirement tax planning services help maximize savings, optimize tax efficiency, and ensure your plan aligns with financial goals.",
    icon: "/image/tax-planning-page/retirement-tax-planning.png",
  },
  {
    title: "Individual Income Tax Planning",
    description:
      "Our individual tax planning services optimize deductions, reduce taxable income, and minimize liabilities to help you achieve financial goals.",
    icon: "/image/tax-planning-page/individual-income-tax-planning.png",
  },
  {
    title: "State and Local Tax Planning",
    description:
      "Our experts help businesses navigate state and local taxes, optimize savings, and ensure compliance with regulations across jurisdictions.",
    icon: "/image/tax-planning-page/state-and-local-tax-planning.png",
  },
  {
    title: "Estate and Gift Tax Planning",
    description:
      "We provide personalized estate and gift tax planning to minimize taxes, ensure smooth asset transfer, and protect your legacy.",
    icon: "/image/tax-planning-page/estate-and-gift-tax-planning.png",
  },
  {
    title: "Compliance and Reporting",
    description:
      "Apex Advisors ensures accurate tax filing, optimizes deductions, and provides audit support to maintain compliance with tax regulations.",
    icon: "/image/tax-planning-page/compliance-and-reporting.png",
  },
];

const TaxPlanningServices = () => {
  return (
    <div className="bg-white">
      <SectionLayout>
        <div className="w-full max-w-5xl text-center mx-auto mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Tax Planning Services
          </h1>
          <p className="text-lg font-medium mt-3">
            {`Stay ahead of the curve with Apex Advisor Group Inc's informative
            and engaging blog posts. Our commitment is to provide you with
            valuable insights to make informed decisions for your family and
            business, ensuring your path to financial success. Start exploring
            our blogs now!`}
          </p>
        </div>
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesProcessData.map((service, index) => (
              <div key={index} className="h-full">
                <div className="flex flex-col h-full lg:flex-row items-center gap-6 px-12 py-8 bg-white rounded-lg hover:shadow-md border duration-300">
                  <div className="flex-shrink-0">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 text-center lg:text-start">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-center lg:text-start">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollMotionEffect>
      </SectionLayout>
    </div>
  );
};

export default TaxPlanningServices;
