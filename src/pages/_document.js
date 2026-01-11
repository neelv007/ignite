import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ✅ CRITICAL: Preload REAL LCP images */}
        <link
          rel="preload"
          as="image"
          href="/images/banner-bg-mobile.webp"
          fetchpriority="high"
          media="(max-width: 767px)"
        />

        <link
          rel="preload"
          as="image"
          href="/images/video-cover.webp"
          fetchpriority="high"
          media="(min-width: 768px)"
        />

        {/* ✅ LCP-safe layout (NO forced height) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .hero {
                position: relative;
                width: 100%;
                overflow: hidden;
              }

              .videoContainer {
                width: 100%;
                aspect-ratio: 16 / 9;
              }

              @media (min-width: 992px) {
                .videoContainer {
                  aspect-ratio: 30 / 33;
                }
              }
            `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />

        {/* ✅ Bootstrap AFTER interaction */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('scroll', function () {
                if (!window.__bsLoaded) {
                  const s = document.createElement('script');
                  s.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
                  s.async = true;
                  document.body.appendChild(s);
                  window.__bsLoaded = true;
                }
              }, { passive: true, once: true });
            `,
          }}
        />

        {/* ✅ GTM AFTER idle */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadGTM() {
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PMG2GSQ');
              }

              if ('requestIdleCallback' in window) {
                requestIdleCallback(loadGTM);
              } else {
                setTimeout(loadGTM, 4000);
              }
            `,
          }}
        />
      </body>
    </Html>
  );
}
