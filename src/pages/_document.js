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
          fetchPriority="high"
        />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          as="style"
        />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://ignitetraininginstitute.b-cdn.net" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
