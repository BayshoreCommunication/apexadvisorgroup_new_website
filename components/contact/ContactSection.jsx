import React from "react";
import SectionLayout from "../shared/SectionLayout";

const ContactSection = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col lg:flex-row items-center">
        {/* contact-address */}
        <div class=" flex-1">
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
        <div class="flex-1">
          <form>
            <div class="contact-form-name-container">
              <div class="contact-form-name">
                <p>First Name *</p>
                <input
                  type="text"
                  placeholder="Enter your first name."
                  value=""
                />
              </div>
              <div class="contact-form-name">
                <p>Last Name *</p>
                <input
                  type="text"
                  placeholder="Enter your last name."
                  value=""
                />
              </div>
            </div>
            <p>Email *</p>
            <input type="text" placeholder="Enter your email." value="" />
            <p>Phone *</p>
            <input
              type="text"
              placeholder="Enter your phone number."
              value=""
            />
            <p>Your Organization (if any)</p>
            <input
              type="text"
              placeholder="Enter organization name."
              value=""
            />
            <p>Message *</p>
            <textarea
              type="text"
              placeholder="Enter message."
              rows="7"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
