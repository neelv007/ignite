import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        const source = document.createElement("source");
        source.src = "/videos/hero-banner-video2.mp4";
        source.type = "video/mp4";
        videoRef.current.appendChild(source);
        videoRef.current.load();
      }
    }, 4000); // ✅ Safe for LCP

    return () => clearTimeout(timeout);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroMain}>
        {/* LEFT CONTENT */}
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>BEST TUTORS IN UAE</h1>
          <p className={styles.heroSubtitle}>
            EMPOWER YOUR ACADEMIC GOALS WITH IGNITE&apos;S TUTORS
          </p>
          <a href="/join-free-demo-class" className={styles.heroButton}>
            Get a Free Demo
          </a>
        </div>

        {/* RIGHT MEDIA — 🔑 FIXED */}
        <div className={styles.videoContainer}>
          {/* LCP IMAGE */}
          <Image
            src="/images/hero-poster.webp"
            alt="Ignite Training Institute - Best Tutors in UAE"
            fill
            priority
            quality={75}
            sizes="(max-width: 768px) 100vw, 600px"
            className={styles.heroPoster}
          />

          {/* VIDEO OVERLAY */}
          <video
            ref={videoRef}
            className={`${styles.heroVideo} ${
              videoLoaded ? styles.videoLoaded : ""
            }`}
            muted
            loop
            playsInline
            preload="none"
            onLoadedData={handleVideoLoad}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
