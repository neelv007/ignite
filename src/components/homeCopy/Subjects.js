import React, { useState, useEffect } from "react";
// Import the CSS Module
import styles from '@/styles/home-copy/Subjects.module.css';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};

const desktopSubjectRows = [
  [
    { name: "English", link: "/english-tutor-in-dubai/" },
    { name: "French", link: "/french-tutor-in-dubai/" },
  ],
  [
    { name: "Spanish", link: "/spanish-tutor-in-dubai/" },
    { name: "Computer Science", link: "/computer-science-tutor-in-dubai/" },
    { name: "Economics", link: "/economics-tutor-in-dubai/" },
  ],
  [
    { name: "Biology", link: "/biology-tutor-in-dubai/" },
    { name: "Chemistry", link: "/chemistry-tutor-in-dubai/" },
  ],
  [
    { name: "Physics", link: "/physics-tutor-in-dubai/" },
    { name: "Maths", link: "/maths-tutor-in-dubai/" },
    { name: "Accounting", link: "/accounting-tutor-in-dubai/" },
  ],
  [
    { name: "Business Studies", link: "/business-studies-tutor-in-dubai/" },
    { name: "Psychology", link: "/psychology-tutor-in-dubai/" },
  ],
];

const mobileSubjectRows = [
  [
    { name: "English", link: "/english-tutor-in-dubai/" },
    { name: "French", link: "/french-tutor-in-dubai/" },
  ],
  [
    { name: "Computer Science", link: "/computer-science-tutor-in-dubai/" },
    { name: "Maths", link: "/maths-tutor-in-dubai/" },
  ],
  [
    { name: "Economics", link: "/economics-tutor-in-dubai/" },
    { name: "Accounting", link: "/accounting-tutor-in-dubai/" },
  ],
  [
    { name: "Chemistry", link: "/chemistry-tutor-in-dubai/" },
    { name: "Physics", link: "/physics-tutor-in-dubai/" },
    { name: "Business Studies", link: "/business-studies-tutor-in-dubai/" },
    { name: "Spanish", link: "/spanish-tutor-in-dubai/" },
  ],
  [
    { name: "Psychology", link: "/psychology-tutor-in-dubai/" },
    { name: "Biology", link: "/biology-tutor-in-dubai/" },
  ],
];

export default function Subjects({ }) {
  const isMobile = useIsMobile();
  const subjectRows = isMobile ? mobileSubjectRows : desktopSubjectRows;
  const bubbleClass = isMobile ? styles.subjectBubblesSingleColumn : styles.subjectBubblesGrid;

  return (
    <section
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat="true"
      className={`fade-in-section ${styles.subjectSection}`}
      style={{ animationDelay: "0.2s" }}
    >
      <div className="container">
        <div className={`${styles.subjectSectionInner} ${styles.blue}`}>
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            src="/images/rectangle-bg4.webp"
            alt="bg-shape"
            className={styles.bgRect}
            loading="lazy"
          />
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            src="/images/rectangle-bg5.webp"
            alt="bg-shape"
            className={styles.bgRect}
            loading="lazy"
          />
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-offset="-10%"
            src="/images/rectangle-bg4.webp"
            alt="bg-shape"
            className={styles.bgRect}
            loading="lazy"
          />
          <div className={`col-4 ${styles.subjectLeft}`}>
            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section SubHeading"
              style={{ animationDelay: "0.1s" }}
            >
              SUBJECT TUTORING
            </h2>
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className={`fade-in-section ${styles.subjectTitle}`}
              style={{ animationDelay: "0.2s" }}
            >
              Expert Guidance For Every Subject In Every{" "}
              <span className={styles.subjectHighlight}>Way</span>
            </h3>
            <p
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className={`fade-in-section ${styles.subjectDesc}`}
              style={{ animationDelay: "0.3s" }}
            >
              We help students strengthen subject knowledge, choose the right curriculum path, & build the academic confidence needed to excel.
            </p>
          </div>
          <div className={`col-8 ${styles.subjectRight}`}>
            <div className={bubbleClass}>
              {subjectRows.map((row, rowIdx) => (
                <div
                  key={`subject-row-${rowIdx}`}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className={`fade-in-section ${styles.subjectBubbleRow}`}
                  style={{ animationDelay: `${0.4 + rowIdx * 0.12}s` }}
                >
                  {row.map((subj) => (
                    <h3 key={subj.name}>
                      <a href={subj.link} className={`${styles.subjectBubble} nodecoration`}>
                        {subj.name}
                      </a>
                    </h3>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}