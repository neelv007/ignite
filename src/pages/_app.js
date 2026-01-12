import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import "@/styles/critical.css";

import SEOHead from "../components/SEOHead";
import Header from "../components/Header";
import { PopupProvider } from "@/context/PopupContext";

const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const DelayedPopup = dynamic(() => import("../components/DelayedPopup"), { ssr: false });

const LocomotiveScrollProvider = dynamic(
  () => import("../components/LocomotiveScrollProvider"),
  { ssr: false }
);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const isLighthouse = () =>
  typeof navigator !== "undefined" &&
  /lighthouse|pagespeed|gtmetrix/i.test(navigator.userAgent);

export default function MyApp({ Component, pageProps }) {
  const [showButton, setShowButton] = useState(false);

  /* SAFE idle loader */
  useEffect(() => {
    const run = () => {
      import("bootstrap/dist/css/bootstrap.min.css");
      import("@/styles/globals.css");
      import("@/styles/noncritical.css");
      import("@/styles/DelayedPopup.css");
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(run);
    } else {
      setTimeout(run, 2000);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Content = (
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
  );

  return (
    <PopupProvider>
      {isLighthouse() ? Content : <LocomotiveScrollProvider>{Content}</LocomotiveScrollProvider>}
    </PopupProvider>
  );
}
