import { Suspense } from 'react';
import ApplyForm from '@/components/career/ApplyForm';

export const metadata = {
  title: 'Apply Now | Careers at Apex Advisor Group',
  description:
    'Submit your application to join the Apex Advisor Group team in Tampa, FL. Share your details and attach your resume.',
  alternates: {
    canonical: '/career/apply',
  },
};

const page = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <ApplyForm />
      </Suspense>
    </div>
  );
};

export default page;
