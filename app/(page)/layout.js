import { Lora } from 'next/font/google';
import './globals.css';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { Providers } from '../providers';

const lora = Lora({ subsets: ['latin'] });


export const metadata = {
  metadataBase: new URL("https://www.apexadvisorgroup.com"),
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
