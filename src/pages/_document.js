import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 🔥 PRELOAD LCP IMAGE - Use exact Next.js optimized URL for mobile */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fimages%2Fvideo-cover.webp&w=640&q=75"
          type="image/webp"
          fetchpriority="high"
        />
        
        {/* Fonts - preconnect early */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://ignitetraininginstitute.b-cdn.net" />
        <link rel="dns-prefetch" href="https://api.ignitetraininginstitute.com" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
