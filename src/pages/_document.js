import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 🔥 PRELOAD LCP IMAGE FOR MOBILE - Critical for < 2.2s LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/video-cover.webp"
          type="image/webp"
          fetchpriority="high"
          media="(max-width: 991px)"
        />
        
        {/* Fonts - Use font-display: swap */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://ignitetraininginstitute.b-cdn.net" />
        
        {/* Preload critical font weights only */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXp-p7K4KLg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
