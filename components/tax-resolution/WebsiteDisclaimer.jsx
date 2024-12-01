import React from "react";
import SectionLayout from "../shared/SectionLayout";

const WebsiteDisclaimer = () => {
  return (
    <div className="bg-[#617785]">
      <SectionLayout>
        <div className="flex flex-col gap-2">
          <h4 className="text-xl md:text-2xl  font-semibold  text-white mb-1">
            Apex Advisor Group Inc. Website Disclaimer
          </h4>
          <p className="text-base text-white ">
            *The estimates and statements regarding program performance are
            based on historical results, and the testimonials provided reflect
            the experiences of individual clients. Results will vary depending
            on each client’s unique circumstances, including, but not limited
            to, your financial situation and your ability to provide Apex
            Advisor Group Inc. with accurate and timely information. We do not
            guarantee that your taxes owed will be reduced by a specific amount
            or percentage, that your taxes owed will be paid off within a set
            timeframe, or that you will qualify for any IRS programs. Penalties
            and interest will continue to accrue until your tax debt is fully
            paid to the IRS. Apex Advisor Group Inc. is an independent tax
            resolution firm and is not affiliated with the IRS. We do not assume
            responsibility for tax liabilities, make payments to tax authorities
            or creditors, or provide tax, legal, bankruptcy, accounting, or
            financial advice. Apex Advisor Group Inc. is not connected to ESPN,
            MSNBC, CBS, Fox, or any other organization referenced on this
            website, and all logos displayed are the trademarks and copyrights
            of their respective owners. Please review and understand all program
            materials before enrolling. Services are not available in all
            states. Guarantee Disclaimer
          </p>
          <p className="text-base text-white ">
            **Apex Advisor Group Inc. will refund any fees paid under its Client
            Services Agreement for the Investigation Phase of services within 15
            calendar days of the client’s signature on the Client Services
            Agreement, without penalty or obligation. This money-back guarantee
            applies only to fees paid for the Investigation Phase of services
            and does not cover fees for any additional services beyond this
            phase or services provided by our Immediate Action Team.
            Testimonials & Reviews
          </p>
          <p className="text-base text-white ">
            ‡The testimonials shared on this site come from actual clients of
            Apex Advisor Group Inc. and reflect their personal opinions and
            experiences with our services. Compensation may have been provided
            to clients for offering their honest feedback. The results shared
            are based on individual client situations and will vary depending on
            personal circumstances. We do not claim that these results represent
            typical outcomes for all clients. Nothing contained in this section
            should be viewed as a guarantee, warranty, or prediction of what
            will happen in your specific situation. All testimonials, whether in
            text, audio, or video format, are shown exactly as received, with
            minimal editing for brevity where necessary.
          </p>
        </div>
      </SectionLayout>
    </div>
  );
};

export default WebsiteDisclaimer;
