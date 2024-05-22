import React from "react";
import SectionLayout from "../shared/SectionLayout";
import SecondaryButton from "../shared/SecondaryButton";

const ContactSection = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* contact-address */}
        <div class="w-full flex-1">
          <div className="mb-5">
            <h3 className="text-2xl font-semibold mb-2">Address:</h3>
            <p>1211 TECH BLVD, SUITE 120, TAMPA, FL 33619</p>
          </div>
          <div className="mb-5">
            <h3 className="text-2xl font-semibold mb-2">Phone:</h3>
            <a href="tel:(813) 678-2400">(813) 678-2400</a>
          </div>
          <div className="mb-5">
            <h3 className="text-2xl font-semibold mb-2">Email:</h3>
            <a href="mailto: info@apexadvisor.pro">info@apexadvisor.pro</a>
          </div>
          <div className="mb-5">
            <h3 className="text-2xl font-semibold mb-2">By Appointments:</h3>
            <p className="mb-2">MON - FRI - 09:00 AM - 05:00 PM</p>
            <p>AFTER HOURS AND WEEKENDS - AVAILABLE BY EMAIL</p>
          </div>
        </div>
        {/* contact-form  */}
        <div class="w-full flex-1">
          <form>
            <div class="flex flex-col lg:flex-row w-full gap-4 mb-4">
              <div class="w-full">
                <p className="text-lg font-semibold mb-2">First Name *</p>
                <input
                  className="p-2 border-1 border-[#0b7788] w-full"
                  type="text"
                  placeholder="Enter your first name."
                  value=""
                />
              </div>
              <div class="w-full">
                <p className="text-lg font-semibold mb-2">Last Name *</p>
                <input
                  className="p-2 border-1 border-[#0b7788] w-full"
                  type="text"
                  placeholder="Enter your last name."
                  value=""
                />
              </div>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold mb-2">Email *</p>
              <input
                className="p-2 border-1 border-[#0b7788] w-full"
                type="text"
                placeholder="Enter your email."
                value=""
              />
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold mb-2">Phone *</p>
              <input
                className="p-2 border-1 border-[#0b7788] w-full"
                type="text"
                placeholder="Enter your phone number."
                value=""
              />
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold mb-2">
                Your Organization (if any)
              </p>
              <input
                className="p-2 border-1 border-[#0b7788] w-full"
                type="text"
                placeholder="Enter organization name."
                value=""
              />
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold mb-2">Message *</p>
              <textarea
                className="p-2 border-1 border-[#0b7788] w-full"
                type="text"
                placeholder="Enter message."
                rows="7"
              ></textarea>
            </div>
            <SecondaryButton
              title={"Send"}
              link={"/contact"}
              style={"bg-[#0E758B] text-white p-2"}
              radius={"sm"}
            />
          </form>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
