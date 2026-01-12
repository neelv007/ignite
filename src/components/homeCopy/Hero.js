import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/home-copy/Hero.module.css";

const Hero = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Delay video loading so LCP image always wins
    const timer = setTimeout(() => {
      if (!videoRef.current) return;

      const source = document.createElement("source");
      source.src =
        "https://ignitetraininginstitute.b-cdn.net/hero-banner-video2.mp4";
      source.type = "video/mp4";

      videoRef.current.appendChild(source);
      videoRef.current.load();
    }, 4000); // ✅ LCP-safe delay

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoaded = () => {
    setVideoReady(true);

    // 🔑 REQUIRED for Chrome autoplay when source is added dynamically
    videoRef.current?.play().catch(() => {});
  };

  return (
    <section className={`${styles.hero} ${styles.homeherosection}`}>
      <div className="container">
        <div className={`row ${styles.heroMain}`}>
          {/* LEFT CONTENT */}
          <div className={`col-12 col-lg-7 col-xl-7 pe-lg-5 ${styles.heroLeft}`}>
            <div className={styles.heroMainHeading}>
              <h2 className={styles.SubHeading}>BEST TUTORS IN UAES</h2>
            </div>

            <div className="d-lg-none">
              <h1 className={`${styles.heroTitleMobile} pt-3 pb-3`}>
                Empower Your Academic Goals With{" "}
                <span className="highlight">Ignite&apos;s</span> Tutors
              </h1>
            </div>

            <div className="d-none d-lg-block">
              <h1 className={styles.heroTitleDesktop}>
                Ignite Your Path To Top{" "}
                <span className="highlight">Academic</span> Performance
              </h1>
            </div>

            <div className={styles.heroParagraph}>
              <h3>Improve Your Grades Today!</h3>
              <b>
                We support students in progressing across IBDP, IB MYP, IGCSE,
                A-Levels, AP, & more with curriculum-specific tutoring in Dubai.
              </b>
              <strong>
                Ignite&apos;s experienced tutors help students thrive with
                personalized support & structured programs.
              </strong>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className={`col-12 col-lg-5 col-xl-5 ${styles.heroRight}`}>
            <div className={styles.videoContainer}>
              {/* ✅ LCP IMAGE (PRIMARY PAINT) */}
              <Image
  src="/images/video-cover.webp"
  alt="Ignite Tutoring Hero"
  width={520}
  height={520}
  priority
  fetchPriority="high"
  sizes="(max-width: 991px) 100vw, 520px"
  className={styles.heroPoster}
/>


              {/* 🎥 VIDEO (DESKTOP ONLY, LOADS AFTER LCP) */}
              <video
                ref={videoRef}
                className={`${styles.heroVideo} ${
                  videoReady ? styles.videoVisible : ""
                }`}
                muted
                loop
                playsInline
                preload="none"
                onLoadedData={handleVideoLoaded}
              />
            </div>

            <div className={styles.buttonGroup}>
              <a href="/join-free-demo-class/" className="buttonBlue">
                Get A Free Demo{" "}
                <Image
                  src="/images/right-arrow-skyblue.webp"
                  width={30}
                  height={30}
                  alt="Right arrow"
                />
              </a>

              <a href="/courses/" className="buttonSkyBlue">
                Explore Classes{" "}
                <Image
                  src="/images/right-arrow-blue.webp"
                  width={30}
                  height={30}
                  alt="Right arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
