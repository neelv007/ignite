import React, { useEffect, useState, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from '@/components/CustomImageWrapper';

// ----------------------------------------------------------------------
// Trainer Data
// ----------------------------------------------------------------------

const trainers = [
  {
    name: "MASAB",
    img: "/images/team/masab.webp",
    subtitle: "Maths & Accounting",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "SHWETHA",
    img: "/images/team/shwetha.webp",
    subtitle: "Biology",
    experience: "6+ YEARS",
    color: "green",
  },
  {
    name: "SARANYA",
    img: "/images/team/saranya.webp",
    subtitle: "Physics",
    experience: "8+ YEARS",
    color: "blue",
  },
  {
    name: "ASHWANI",
    img: "/images/team/ashwani.webp",
    subtitle: "Maths",
    experience: "7+ YEARS",
    color: "green",
  },
  {
    name: "IRTIQA",
    img: "/images/team/Irtiqa.webp",
    subtitle: "Computer Science, ICT",
    experience: "6+ YEARS",
    color: "blue",
  },
  {
    name: "ABDUL",
    img: "/images/team/abdul.webp",
    subtitle: "Maths",
    experience: "13+ YEARS",
    color: "green",
  },
  {
    name: "HARSHA",
    img: "/images/team/harsha.webp",
    subtitle: "Economics & Business",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "NAMRATA",
    img: "/images/team/namrata.webp",
    subtitle: "Maths & Physics",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "KRITIKA",
    img: "/images/team/kritika.webp",
    subtitle: "Maths",
    experience: "3+ YEARS",
    color: "blue",
  },
  {
    name: "RUSTHA",
    img: "/images/team/rustha.webp",
    subtitle: "Chemistry, Biology, & EVM",
    experience: "3+ YEARS",
    color: "green",
  },
  {
    name: "IPSITA",
    img: "/images/team/ipsita.webp",
    subtitle: "Biology & EVM",
    experience: "7+ YEARS",
    color: "blue",
  },
  {
    name: "FREEZY",
    img: "/images/team/freezy.webp",
    subtitle: "Biology, Chemistry",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "AASHIMA",
    img: "/images/team/aashima.webp",
    subtitle: "Spanish",
    experience: "5+ YEARS",
    color: "blue",
  },
  {
    name: "ANUJA",
    img: "/images/team/Anuja.webp",
    subtitle: "English & French",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "DR. HAYA",
    img: "/images/team/dr-haya.webp",
    subtitle: "Chemistry, Physics, Biology",
    experience: "9+ YEARS",
    color: "blue",
  },
  {
    name: "DEEPAK",
    img: "/images/team/deepak.webp",
    subtitle: "Physics & Maths",
    experience: "13+ YEARS",
    color: "green",
  },
];

// ----------------------------------------------------------------------
// Trainer Card Component
// ----------------------------------------------------------------------

const TrainerCard = ({ trainer }) => (
  <a href="/our-team" className="nodecoration">
    <div data-color={trainer.color} className="trainerCard">

      <div className="trainerName">{trainer.name}</div>
      <div className="trainerImgWrap">
        <Image
          src={trainer.img}
          alt={`Trainer ${trainer.name} ignite training institute`}
          className="trainerImg"
          width={300}
          height={300}
        />
      </div>
      <div className="trainerSubtitle">{trainer.subtitle}</div>
      <div className="trainerExp">{trainer.experience}</div>

    </div>
  </a>
);

// ----------------------------------------------------------------------
// Trainers Component
// ----------------------------------------------------------------------

export default function Trainers() {
  const [isTrainersSwiper, setIsTrainersSwiper] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const trainersGridRef = useRef(null);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Swiper active below 1199px
      setIsTrainersSwiper(window.innerWidth <= 1199);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayTrainers = showAll ? trainers : trainers.slice(0, 10);

  // Handlers for SEE MORE and SEE LESS
  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
    if (trainersGridRef.current) {
      trainersGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const desktopTitle = (
    <>
      The Best <span className="highlight">Trainers</span> For Your<br />Success Journey
    </>
  );

  const mobileTitle = (
    <>
      The Best <span className="highlight">Trainers</span> For Your Success Journey
    </>
  );
  const currentTitle = isTrainersSwiper ? mobileTitle : desktopTitle;


  return (
    <>
      {/* ------------------------------------------------------------------- */}
      {/* CSS IS INCLUDED HERE VIA style jsx global AS REQUESTED */}
      {/* ------------------------------------------------------------------- */}
      <style jsx global>
        {`
          .trainersSection {
            // padding: 70px 0;
            background: var(--white-bg);
            text-align: center;
          }

          .trainersSection .trainersHeader {
            margin-bottom: 32px;
          }

          .trainersSection .trainersIcon {
            width: 24px;
            height: 24px;
            margin-right: 8px;
          }

          .trainersSection .trainersTitle {
            font-size: 2rem;
            font-weight: 700;
            max-width: 60%;
            margin: 40px auto;
            line-height: 1.1;
            text-transform: uppercase;
            color: var(--blue-color);
          }

          .trainersSection .trainersHighlight {
            background: linear-gradient(
              to left,
              var(--green-color),
              var(--lightgreen-color)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .trainersSection .trainersGrid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 32px 24px;
            justify-items: center;
            margin-bottom: 36px;
            width: 70vw;
            margin: 0 auto;
            margin-bottom: 50px;
          }

          .trainersSection .trainerCard {
            padding: 20px 0 30px 0;
            border-radius: 40px;
            text-align: center;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            transition: box-shadow 0.2s;
            overflow: hidden;
          }

          .trainersSection .trainerCard:nth-child(7),
          .trainersSection .trainerCard:nth-child(9) {
            translate: 0 20px;
          }

          .trainersSection .trainerCard[data-color="blue"] {
            background: linear-gradient(var(--border-color) 0%, transparent 50%);
          }

          .trainersSection .trainerCard[data-color="green"] {
            background: linear-gradient(
              to top,
              var(--green-text) 0%,
              transparent 70%
            );
          }

          .trainersSection .trainerCard[data-color="blue"]:before {
            content: "";
            width: 100%;
            height: 50%;
            position: absolute;
            bottom: 0;
            background: linear-gradient(
              to top,
              var(--white-bg) 50%,
              transparent
            );
          }

          .trainersSection .trainerCard[data-color="green"]:before {
            content: "";
            width: 100%;
            height: 50%;
            position: absolute;
            bottom: 0;
            background: linear-gradient(to top, #d7f6e6 50%, transparent);
          }

          .trainersSection .trainerName {
            font-size: 1vw;
            font-weight: 500;
            color: var(--black-color);
            margin-bottom: 8px;
            padding: 0 10px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .trainersSection .trainerImgWrap {
            width: 100%;
            height: 100%;
          }

          .trainersSection .trainerImg {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 0.9;
          }

          .trainersSection .trainerSubtitle {
            font-size: 0.7vw;
            color: var(--black-color);
            opacity: 0.5;
            margin-bottom: 10px;
            position: absolute;
            z-index: 9;
            padding: 0 5px;
          }

          .trainersSection .trainerCard:nth-child(odd) .trainerSubtitle {
            bottom: 70px;
          }

          .trainersSection .trainerCard:nth-child(even) .trainerSubtitle {
            bottom: 50px;
          }

          .trainersSection .trainerExp {
            background: linear-gradient(to left, #3f88ba, var(--blue-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 600;
            width: 80%;
            font-size: 1.2vw;
            padding-top: 5px;
            position: absolute;
            bottom: 35px;
            z-index: 9;
            border-top: 1px solid rgba(0, 0, 0, 0.2);
          }

          .trainersSection .trainerCard:nth-child(even) .trainerExp {
            transform: translateY(20px);
            background: linear-gradient(
              to left,
              var(--green-color),
              var(--lightgreen-color)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .trainersSection .trainersSeeMore {
            position: relative;
            overflow: hidden;
            margin: 0 auto;
            padding: 5px 40px;
            border-radius: 40px;
            border: 3px solid transparent;
            background-color: var(--white-color);
            background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
            color: var(--blue-color);
            font-size: 1vw;
            font-weight: 700;
            letter-spacing: 1px;
            cursor: pointer;
            transition: transform 0.3s ease, color 0.3s ease;
            z-index: 1;
            margin-top: 20px;
            margin-bottom: 0; 
          }

          .trainersSection .trainersSeeMore::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0%;
            width: 200%;
            height: 100%;
            background: linear-gradient(
              to right,
              transparent,
              #e7f6ff 60%,
              var(--border-color) 85%,
              var(--border-color)
            );
            z-index: -1;
            transition: transform 0.6s ease-in-out;
          }

          .trainersSection .trainersSeeMore:hover::before {
            transform: translateX(-50%);
          }

          .trainersSection .trainersSeeMore * {
            position: relative;
            z-index: 1;
          }

          .trainersSection .trainersSeeMore:hover {
            color: var(--black-color);
            transform: scale(1.05);
          }
          
          .trainersSection .trainersSeeLess {
            position: relative;
            overflow: hidden;
            margin: 0 auto;
            padding: 5px 40px;
            border-radius: 40px;
            border: 3px solid transparent;
            background-color: var(--white-color);
            background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #e7f6ff, var(--border-color)) border-box;
            color: var(--blue-color);
            font-size: 1vw;
            font-weight: 700;
            letter-spacing: 1px;
            cursor: pointer;
            transition: transform 0.3s ease, color 0.3s ease;
            z-index: 1;
            margin-top: 20px;
            margin-bottom: 50px;
          }
          
          .trainersSection .trainersSeeLess::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0%;
            width: 200%;
            height: 100%;
            background: linear-gradient(
              to right,
              transparent,
              #e7f6ff 60%,
              var(--border-color) 85%,
              var(--border-color)
            );
            z-index: -1;
            transition: transform 0.6s ease-in-out;
          }

          .trainersSection .trainersSeeLess:hover::before {
            transform: translateX(-50%);
          }
          
          .trainersSection .trainersSeeLess:hover {
            color: var(--black-color);
            transform: scale(1.05);
          }


          .trainersSection .trainersPagination {
            margin-top: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 24px;
          }

          .trainersSection .trainersPagination span {
            width: 10px;
            height: 5px;
            border-radius: 4px;
          }

          .trainersSection .customNavBtn {
            background: transparent;
            border: none;
            box-shadow: none;
            border-radius: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            cursor: pointer;
            transition: none;
            padding: 0;
          }

          .trainersSection .customNavBtn img {
            width: 32px;
            height: 32px;
            object-fit: contain;
            filter: none;
          }

          .trainersSection .customNavBtn:after,
          .trainersSection .customNavBtn:after {
            display: none;
          }

          .trainersSection .trainersSwiperWrap {
            position: relative;
            padding: 0 50px;
            margin-bottom: 0;
          }

          .trainersSection .swiper-slide {
            display: flex;
            justify-content: center;
          }

          /* Swiper Custom Navigation Overrides */
          .trainersSection .swiper-button-prev,
          .trainersSection .swiper-button-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            margin-top: 0;
          }

          .trainersSection .swiper-button-prev {
            left: 0;
          }

          .trainersSection .swiper-button-next {
            right: 0;
          }

          .trainersSection .swiper-button-prev:after,
          .trainersSection .swiper-button-next:after {
            content: '';
            display: none;
          }

          /* Swiper Custom Pagination Overrides */
          .trainersSection .swiper-pagination-bullet {
            width: 10px;
            height: 5px;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.2);
            opacity: 1;
            transition: background 0.3s;
            margin: 0 4px;
          }

          .trainersSection .swiper-pagination-bullet-active {
            background: var(--blue-color);
          }


          @media (max-width: 1199px) {
            .trainersSection .trainerImg {
              height: 300px;
            }

            .trainersSection .trainerCard[data-color="green"] {
              margin-bottom: 20px;
            }

            .trainersSection .trainerCard[data-color="green"] .trainerExp {
              font-size: 20px;
              background: linear-gradient(
                to right,
                var(--lightgreen-color),
                var(--green-color)
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              bottom: 20px;
              padding-top: 10px;
            }

            .trainersSection .trainerCard:nth-child(odd) .trainerSubtitle {
              bottom: 60px;
            }

            .trainersSection .trainerCard[data-color="green"]:before {
              background: linear-gradient(to top, #d7f6e6 60%, transparent);
            }
          }

          @media (max-width: 1100px) {
            .trainersSection .trainersGrid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px 12px;
            }

            .trainersSection .trainersSubheading {
              font-size: 1.4rem;
            }

            .trainersSection .trainersTitle {
              font-size: 2rem;
            }

            .trainersSection .trainerName,
            .trainersSection .trainerExp,
            .trainersSection .trainersSeeMore,
            .trainersSection .trainersSeeLess { 
              font-size: 1rem;
            }

            .trainersSection .trainerSubtitle {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 700px) {
            .trainersSection .trainersGrid {
              grid-template-columns: 1fr;
              gap: 18px;
            }

            .trainersSection .trainersSubheading {
              font-size: 15px;
            }

            .trainersSection .trainersTitle {
              font-size: 20.4px;
              line-height: 23px;
              max-width: 100%;
              margin: 20px 0;
            }

            .trainersSection .customNavBtn {
              width: 32px;
              height: 32px;
            }

            .trainersSection .trainersSwiperWrap {
               padding: 0 40px;
            }

            .trainersSection .swiper-button-prev,
            .trainersSection .swiper-button-next {
              width: 32px;
              height: 32px;
            }
          }

          @media (max-width: 575px) {
            .trainersSection .trainerImg {
              object-fit: contain;
            }
              
          }
          .trainersSection .trainersPagination{
          margin-top: 0;}
        `}
      </style>
      {/* ------------------------------------------------------------------- */}

      <section className="trainersSection">
        <div className="container">
          <div>
            <h2
              className="SubHeading trainersSubheading fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              style={{ animationDelay: "0.1s" }}
            >
              OUR TUTORS
            </h2>
          </div>

          <h3
            className="trainersTitle fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            style={{ animationDelay: "0.2s" }}
          >
            {currentTitle}
          </h3>

          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.3s" }}
          >
            {isTrainersSwiper ? (
              <div className="trainersSwiperWrap">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  breakpoints={{
                    700: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    991: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  onBeforeInit={(swiper) => {
                    if (swiper.params.navigation) {
                      swiper.params.navigation.prevEl = navPrevRef.current;
                      swiper.params.navigation.nextEl = navNextRef.current;
                    }
                  }}
                >
                  {trainers.map((t, i) => (
                    <SwiperSlide key={i}>
                      <TrainerCard trainer={t} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button ref={navPrevRef} className="customNavBtn swiper-button-prev">
                  <img src="/images/left-arrow-blue.webp" alt="Previous" />
                </button>
                <button ref={navNextRef} className="customNavBtn swiper-button-next">
                  <img src="/images/right-arrow-blue.webp" alt="Next" />
                </button>
                <div className="trainersPagination"></div>
              </div>
            ) : (
              <>
                <div
                  className="trainersGrid"
                  ref={trainersGridRef}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                >
                  {displayTrainers.map((t, i) => (
                    <div
                      key={`${t.name}-${i}`}
                      className="trainer-animate-item"
                      /* We use a simple CSS delay based on index for the stagger effect */
                      style={{ animationDelay: `${(i % 4) * 0.1}s` }}
                    >
                      <TrainerCard trainer={t} />
                    </div>
                  ))}
                </div>
                <div
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section"
                  style={{ animationDelay: "0.3s" }}
                >
                  {trainers.length > 10 && (
                    !showAll ? (
                      <button
                        onClick={handleSeeMore}
                        className="trainersSeeMore"
                      >
                        SEE MORE
                      </button>
                    ) : (
                      <button
                        onClick={handleSeeLess}
                        className="trainersSeeLess"
                      >
                        SEE LESS
                      </button>
                    )
                  )}
                </div>

              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}