import React from "react";
import "./Highlights.css";

const Highlights = () => {
  return (
    <div className="highlights" data-aos="fade-up">
      <section>
        <h1 id="Head_Title" data-aos="fade-up">
          <span>Key Highlights</span>
        </h1>
        <div data-aos="zoom-in-up">
          <div className="highlight_img mask_img_1 high1"></div>
          <h1>Interdisciplinary Sessions</h1>
          <p>
            Engage in thought-provoking sessions that bridge various disciplines
            and explore their interconnectedness.
          </p>
        </div>
        <div data-aos="zoom-in-up">
          <div className="highlight_img mask_img_2 high2"></div>
          <h1>Expert Keynote Speakers</h1>
          <p>
            Learn from renowned experts who will share their insights and
            experiences.
          </p>
        </div>
        <div data-aos="zoom-in-up">
          <div className="highlight_img mask_img_1 high3"></div>
          <h1>Paper Presentations</h1>
          <p>
            Present your research findings and contribute to discussions on a
            wide range of topics.
          </p>
        </div>
        <div data-aos="zoom-in-up">
          <div className="highlight_img mask_img_2 high4"></div>
          <h1>Networking Opportunities</h1>
          <p>
            Connect with peers, researchers and industry professionals to build
            collaborations and partnerships.
          </p>
        </div>
        <div data-aos="zoom-in-up">
          <div className="highlight_img mask_img_1 high5"></div>
          <h1>Publication Opportunities</h1>
          <p>
            Selected papers will have the opportunity to be published in Scopus
            indexed journals.
          </p>
        </div>
        <div data-aos="zoom-in-up">
          <div className="highlight_img mask_img_2 high6"></div>
          <h1>Confworld Awards</h1>
          <p>
            Celebrate excellence with our prestigious awards, recognizing
            outstanding contributions to the field.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
