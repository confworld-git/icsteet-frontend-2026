import React from "react";
import "./SessionSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import { useNavigate } from "react-router-dom";

import session1 from "../../assets/Session/session1.webp";
import session2 from "../../assets/Session/session2.webp";
import session3 from "../../assets/Session/session3.webp";
import session4 from "../../assets/Session/session4.webp";
import session5 from "../../assets/Session/session5.webp";
import session6 from "../../assets/Session/session6.webp";
import session7 from "../../assets/Session/session7.webp";
import session8 from "../../assets/Session/session8.webp";
import session9 from "../../assets/Session/session9.webp";

const SessionSlide = () => {
  const navigate = useNavigate();
  const sessionsLink = [
    {
      title: "Session 1: Emerging Technologies & Education",
      image: session1,
    },
    {
      title: "Session 2: New Trends & Modern Approaches",
      image: session2,
    },
    {
      title: "Session 3: Education & Industry Co-operation",
      image: session3,
    },
    {
      title: "Session 4: Education & International Cooperation",
      image: session4,
    },
    {
      title: "Session 5: Teaching - Learning Relationship",
      image: session5,
    },
    {
      title: "Session 6: Sociology and Anthropology",
      image: session6,
    },
    {
      title: "Session 7: Psychology",
      image: session7,
    },
    {
      title: "Session 8: Social Science & Humanities",
      image: session8,
    },
    {
      title: "Session 9: Engineering & Technology",
      image: session9,
    },
  ];
  return (
    <div className="session-track-slide" data-aos="fade-up">
      <h1 data-aos="fade-up">Session and Tracks/Call for Papers</h1>
      <p data-aos="fade-up">Dive into the future with ICSTEET-2026.</p>
      <span data-aos="fade-up">
        Our diverse sessions and tracks are designed to spark insightful
        discussions, foster collaboration and drive transformative advancements
        across social sciences, teaching, education, engineering and technology.
        We invite researchers, academicians and professionals to submit their
        papers. Topics of interest include, but are not limited to:
      </span>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          700: {
            slidesPerView: 2,
          },
        }}
      >
        {sessionsLink &&
          sessionsLink.map((sessionImage, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="session-image-container"
                  onClick={() => navigate("/Session_Tracks/Call_for_Paper")}
                >
                  <img
                    loading="lazy"
                    id="Session_Image"
                    src={sessionImage.image}
                    alt={sessionImage.title}
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SessionSlide;
