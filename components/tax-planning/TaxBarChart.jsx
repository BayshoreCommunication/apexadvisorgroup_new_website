import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";

const TaxBarChart = () => {
  return (
    <div>
      <SectionLayout>
        <div>
          <Image
            src="/image/tax-planning-page/tax-bar-chart.png"
            alt=""
            width={1000}
            height={900}
            className="mx-auto"
          ></Image>
        </div>
      </SectionLayout>
    </div>
  );
};

export default TaxBarChart;
