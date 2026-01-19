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

        {/* LEFT CONTENT (TEXT) */}
        <div className={`col-12 col-lg-7 col-xl-7 pe-lg-5 ${styles.heroLeft}`}>
          <div className={styles.heroMainHeading}>
            <h2 className={styles.SubHeading}>BEST TUTORS IN UAE</h2>
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

        {/* 🔥 MOBILE IMAGE COLLAGE — After text on mobile */}
        <div className={`col-12 d-lg-none ${styles.mobileImageSection}`}>
          <div className={styles.mobileImageCollage}>
            <div className={styles.mobileLeftImages}>
              <div className={styles.mobileCircleImage}>
                <Image
                  src="/images/test-section1.webp"
                  alt="Student with laptop"
                  width={140}
                  height={140}
                  priority
                  fetchPriority="high"
                />
              </div>
              <div className={styles.mobileOvalImage}>
                <Image
                  src="/images/test-section2.webp"
                  alt="Tutoring session"
                  width={140}
                  height={200}
                  priority
                />
              </div>
            </div>
            <div className={styles.mobileRightImages}>
              <div className={styles.mobileRoundedImage}>
                <Image
                  src="/images/trainer1.webp"
                  alt="Teacher and student"
                  width={180}
                  height={80}
                  priority
                />
              </div>
              <div className={styles.mobileRoundedImage}>
                <Image
                  src="/images/trainer2.webp"
                  alt="Student learning"
                  width={180}
                  height={80}
                  priority
                />
              </div>
              <div className={styles.mobileRoundedImage}>
                <Image
                  src="/images/test-section3.webp"
                  alt="Study group"
                  width={180}
                  height={80}
                  priority
                />
              </div>
            </div>
          </div>

          <div className={styles.mobileButtonGroup}>
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

        {/* 🖥 DESKTOP IMAGE + VIDEO (UNCHANGED LOGIC) */}
        <div className={`col-12 col-lg-5 col-xl-5 d-none d-lg-block ${styles.heroRight}`}>
          <div className={styles.videoContainer}>
            <Image
              src="/images/video-cover.webp"
              alt="Ignite Tutoring Hero"
              width={520}
              height={520}
              priority
              fetchPriority="high"
              sizes="520px"
              className={styles.heroPoster}
            />

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
