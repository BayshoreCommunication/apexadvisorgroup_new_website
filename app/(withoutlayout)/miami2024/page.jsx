import EventsCalendy from '@/components/miami2024/EventsCalendly';
import EventsGoogleMap from '@/components/miami2024/EventsGoogleMap';
import EventsStart from '@/components/miami2024/EventsStart';
import Miami2024events from '@/components/miami2024/Miami2024events';

export const metadata = {
  title: "Miami Tax Business Show Conference 2024 | Apex Advisor Group",
  description: "Apex Advisor Group at The Business Show 2024 Conference in Miami Beach. Join us on March 6-7, 2024, at the Miami Beach Convention Center, Booth 905.",
  alternates: {
    canonical: "/miami2024",
  },
};

const page = () => {
  return (
    <div>
      <Miami2024events />
      <EventsStart />
      <EventsCalendy />
      <EventsGoogleMap />
    </div>
  );
};

export default page;

