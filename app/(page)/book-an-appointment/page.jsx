import GroupMembers from '@/components/about/GroupMembers';
import Appointment from '@/components/bookInAppointment/Appointment';
import Consultation from '@/components/shared/Consultation';
import PageHeroSection from '@/components/shared/PageHeroSection';


export const metadata = {
  title: "Book a Tax & Accounting Consultation |  Tax & Accounting Services Tampa",
  description:
    "Schedule an appointment with Apex Advisor Group for expert tax preparation, accounting, payroll, and credit repair services in Tampa. Trusted professionals ready to help.",
};

const page = () => {
  return (
    <div className='mt-0 md:mt-[130px]'>
      <PageHeroSection
        heading={'Book An Appointment'}
        subheading={'By Apex Advisor Group Inc'}
        image={'/image/appointment.jpg'}
        alt={'appointment'}
        width={1000}
        height={657}
      />
      <Appointment />
      <Consultation />
    </div>
  );
};

export default page;
