import { Lora } from 'next/font/google';
import './globals.css';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { Providers } from '../providers';

const lora = Lora({ subsets: ['latin'] });

export const metadata = {
  title: 'Apex Advisor Group Inc | Tax Preparation, Accounting Firm Tamp',
  description:
    'Apex Advisor Group Inc is a team of highly qualified professionals that have over 40+ years of combined experience in the tax, accounting, & financial services industry.',
  metadataBase: new URL('https://www.apexadvisorgroup.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={lora.className}>
        <Providers>
          <div className='overflow-x-hidden text-black bg-white'>
            <MainNavbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
