import React from "react";
import "./Theme.css";
import icsteet_img_2025 from "../../assets/Images/icsteet.jpeg";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Theme = () => {
  return (
    <div>
      <div className="theme" data-aos="fade-up">
        <div>
          <h3>About ICSTEET-2026</h3>
          <p>
            <span>
              <BiSolidQuoteAltLeft />
            </span>
            ICSTEET unites top academic scientists, researchers and scholars to
            exchange experiences and share groundbreaking research. This
            conference offers an interdisciplinary platform to present new
            advances in Education, Engineering & Technology, Social Sciences and
            Humanities. Join us to explore cutting-edge research, foster
            interdisciplinary collaborations and network with peers worldwide.
            <span style={{ display: "inline-block", textAlign: "end" }}>
              <BiSolidQuoteAltRight />
            </span>
          </p>
        </div>
        <p>
          <img
            loading="lazy"
            data-aos="zoom-in-up"
            src={icsteet_img_2025}
            alt=""
          />
        </p>
      </div>
      <div className="theme conference_theme" data-aos="fade-up">
        <div>
          <h3 data-aos="fade-up">Conference Theme</h3>
          <span data-aos="fade-up">
            "Bridging the Gap: Innovations and Challenges in Social Sciences,
            Teaching & Education, Engineering and Technology"
          </span>
          <p data-aos="fade-up">
            ICSTEET-2026 aims to bring together scholars, researchers and
            industry experts to explore how innovations in social sciences,
            teaching and education and engineering and technology can bridge
            gaps in knowledge, industry practices and global challenges. This
            conference will emphasize interdisciplinary approaches that address
            contemporary challenges, inspire future research and encourage
            collaboration for global sustainability.
          </p>
          <p data-aos="fade-up">
            The conference is dedicated to the dissemination of cutting-edge
            knowledge, groundbreaking discoveries and innovative practices in
            areas such as emerging educational technologies, innovative teaching
            methods, industry-academia collaboration and advancements in
            sociology, psychology, humanities, engineering and technology. It
            offers a platform for expert researchers to showcase their work,
            connect with peers and publish their findings in Scopus-indexed
            journals. Attendees will gain inspiration from the experiences and
            insights shared by distinguished keynote speakers, industry leaders
            and session presenters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Theme;
