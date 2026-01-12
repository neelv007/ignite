import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { PopupProvider } from '@/context/PopupContext';

import '@/styles/critical.css';

import SEOHead from '../components/SEOHead';
import Header from '../components/Header';

const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
const DelayedPopup = dynamic(() => import('../components/DelayedPopup'), { ssr: false });

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

export default function MyApp({ Component, pageProps }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    requestIdleCallback(() => {
      import('bootstrap/dist/css/bootstrap.min.css');
      import('@/styles/globals.css');
      import('@/styles/noncritical.css');
      import('@/styles/DelayedPopup.css');
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <PopupProvider>
      <>
        <SEOHead />
        <div className={`${montserrat.className} ${montserrat.variable}`}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <DelayedPopup />
        </div>

        {showButton && (
          <Link href="/join-free-demo-class" legacyBehavior>
            <a className="sticky-demo-button">Get a Free Demo</a>
          </Link>
        )}
      </>
    </PopupProvider>
  );
}
