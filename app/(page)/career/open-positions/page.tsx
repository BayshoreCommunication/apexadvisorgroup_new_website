import OpenPositions from '@/components/career/OpenPositions';

export const metadata = {
  title: 'Open Positions | Careers at Apex Advisor Group',
  description:
    'Explore current job openings at Apex Advisor Group in Tampa, FL. Review role details and apply directly to join our tax, accounting, and financial services team.',
  alternates: {
    canonical: '/career/open-positions',
  },
};

const page = () => {
  return (
    <div>
      <OpenPositions />
    </div>
  );
};

export default page;
