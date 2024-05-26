import GroupMembers from '@/components/about/GroupMembers';
import Appointment from '@/components/bookInAppointment/Appointment';
import Consultation from '@/components/shared/Consultation';
import PageHeroSection from '@/components/shared/PageHeroSection';

const page = () => {
  return (
    <div>
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
