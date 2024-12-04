import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const servicesProcessData = [
  {
    title: "Back Tax Resolution Services",
    description:
      "Let our experts help resolve back taxes with personalized solutions, negotiating with authorities and minimizing liabilities for financial peace.",
    icon: "/image/tax-resolution/back-tax-resolution-services.png",
  },
  {
    title: "Tax Lien and Levy Assistance",
    description:
      "We specialize in tax lien and levy assistance, negotiating with authorities to protect assets and release liens or levies.",
    icon: "/image/tax-resolution/tax-lien-and-levy-assistance.png",
  },
  {
    title: "Audit Representation",
    description:
      "Navigate tax audits confidently with Apex Advisors, offering expert guidance, thorough documentation, and effective advocacy for your interests.",
    icon: "/image/tax-resolution/audit-representation.png",
  },
  {
    title: "Assist Individuals Facing",
    description:
      "Our compassionate team helps with innocent spouse relief, guiding you through your rights and ensuring fair tax resolution.",
    icon: "/image/tax-resolution/assist-individuals-facing.png",
  },
  {
    title: "Penalty Abatement",
    description:
      "Our experts specialize in penalty abatement, negotiating with the IRS to minimize or eliminate penalties and reduce your financial burden.",
    icon: "/image/tax-resolution/penalty-abatement.png",
  },
  {
    title: "Offer in Compromise (OIC)",
    description:
      "We specialize in the Offer in Compromise program, helping reduce tax debt through expert negotiation and comprehensive guidance.",
    icon: "/image/tax-resolution/offer-in-compromise.png",
  },
  {
    title: "Installment Agreements",
    description:
      "Apex Advisors offers installment agreement services, helping you negotiate manageable payment plans to settle tax debt over time.",
    icon: "/image/tax-resolution/installment-agreements.png",
  },
  {
    title: "Tax Court Representation",
    description:
      "Our skilled attorneys provide expert tax court representation, preparing your case and advocating for a fair resolution of your dispute.",
    icon: "/image/tax-resolution/tax-court-representation.png",
  },
];

const ServicesProcess = () => {
  return (
    <div>
      <SectionLayout>
        <div className="w-full max-w-5xl text-center mx-auto mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Tax Resolution Services Process
          </h1>
          <p className="text-lg font-medium mt-3">
            We simplify complex tax challenges, guiding you through each stage
            with expert support and proven methods.
          </p>
        </div>
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesProcessData.map((service, index) => (
              <div key={index}>
                <div className=" flex h-full">
                  <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-stretch gap-6 px-12 py-8 bg-[#EEF6F8] rounded-lg hover:shadow-md border duration-300 h-full">
                    {/* Icon Section */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    {/* Content Section */}
                    <div className="flex flex-col  justify-center items-start flex-grow gap-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center lg:text-start">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-2 text-center lg:text-start text-base md:text-lg">
                        {service.description}
                      </p>
                    </div>
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

export default ServicesProcess;
