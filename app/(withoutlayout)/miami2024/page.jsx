import EventsCalendy from '@/components/miami2024/EventsCalendly';
import EventsGoogleMap from '@/components/miami2024/EventsGoogleMap';
import EventsStart from '@/components/miami2024/EventsStart';
import Miami2024events from '@/components/miami2024/Miami2024events';

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
