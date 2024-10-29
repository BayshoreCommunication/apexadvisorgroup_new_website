import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion copy/ScrollMotionEffect";

const TaxBarChart = () => {
  return (
    <div>
      <SectionLayout>
        <ScrollMotionEffect effect="zoom-in" duration="3000">
          <div className=" max-w-screen-xl mx-auto">
            <Image
              src="/image/tax-planning-page/tax-bar-chart.png"
              alt=""
              width={1000}
              height={900}
              className="mx-auto"
            ></Image>
          </div>
        </ScrollMotionEffect>
      </SectionLayout>
    </div>
  );
};

export default TaxBarChart;
