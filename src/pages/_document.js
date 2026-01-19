import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 🔥 PRELOAD LCP IMAGE - Critical for mobile LCP < 2.2s
            Using 390w which matches mobile viewport (390px iPhone) */}
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_next/image?url=%2Fimages%2Fvideo-cover.webp&w=390&q=75 390w, /_next/image?url=%2Fimages%2Fvideo-cover.webp&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fvideo-cover.webp&w=750&q=75 750w"
          imageSizes="(max-width: 991px) 100vw, 360px"
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
