import React from "react";
import SectionLayout from "./SectionLayout";
import SecondaryButton from "./SecondaryButton";

const Consultation = () => {
  return (
    <SectionLayout>
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Consultations for our service
        </h2>
        <p className="text-xl font-medium text-[#6d9bb7] pb-10">
          By being available to our clients, we can respond to their concerns
          and questions and carry out our duty for keeping our clients
          up-to-date about the case.
        </p>
        <SecondaryButton
          title={"Contact Us"}
          link={"/contact"}
          style={"bg-[#0E758B] text-white"}
          radius={"sm"}
        />
      </div>
    </SectionLayout>
  );
};

export default Consultation;
