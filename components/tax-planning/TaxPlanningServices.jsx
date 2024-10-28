import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";

const servicesProcessData = [
  {
    title: "Back Tax Resolution Services",
    description:
      "Estimate taxes due and savings across multiple years with support for federal, state and local forms.",
    icon: "/image/tax-resolution/back-tax-resolution-services.png",
  },
  {
    title: "Tax Lien and Levy Assistance",
    description:
      "Minimize taxes with Corvee's continually updated database of 1,500+ tax strategies.",
    icon: "/image/tax-resolution/tax-lien-and-levy-assistance.png",
  },
  {
    title: "Audit Representation",
    description:
      "Model the impact of entity and compensation changes to help clients choose the most tax-efficient structure.",
    icon: "/image/tax-resolution/audit-representation.png",
  },
  {
    title: "Assist Individuals Facing",
    description:
      "See how every business and entity affects the Form 1040 across jurisdictions in one consolidated multi-entity tax calculation.",
    icon: "/image/tax-resolution/assist-individuals-facing.png",
  },
  {
    title: "Penalty Abatement",
    description:
      "Gather client data with tax return scanning and questionnaires, which delve deeper when needed and omit questions when possible.",
    icon: "/image/tax-resolution/penalty-abatement.png",
  },
  {
    title: "Offer in Compromise (OIC)",
    description:
      "Show clients your value with professional plans featuring savings, strategies, documentation and calculations for every jurisdiction.",
    icon: "/image/tax-resolution/offer-in-compromise.png",
  },
  {
    title: "Installment Agreements",
    description:
      "Gather client data with tax return scanning and questionnaires, which delve deeper when needed and omit questions when possible.",
    icon: "/image/tax-resolution/installment-agreements.png",
  },
  {
    title: "Tax Court Representation",
    description:
      "Show clients your value with professional plans featuring savings, strategies, documentation and calculations for every jurisdiction.",
    icon: "/image/tax-resolution/tax-court-representation.png",
  },
];

const TaxPlanningServices = () => {
  return (
    <div className="bg-[#EEF6F8]">
      <SectionLayout>
        <div className="w-full max-w-5xl text-center mx-auto mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            A clear path to resolve your IRS issues
          </h1>
          <p className="text-lg font-medium mt-3">
            Stay ahead of the curve with Apex Advisor Group Inc{"'"}s
            informative and engaging blog posts. Our commitment is to provide
            you with valuable insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesProcessData.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-6  px-12 py-8 bg-white rounded-lg hover:shadow-md border duration-300"
            >
              <div className="flex-shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default TaxPlanningServices;
