import React from "react";
import "./Publication.css";
import conference_proceeding from "../assets/Images/Conference-proceeding.jpg";
import journal from "../assets/Images/journal1.png";
import review from "../assets/Images/review.svg";
import check from "../assets/Images/check.svg";
import Proceedings from "../Home/Proceedings/Proceedings.jsx";

const Publication = () => {
  return (
    <div
      className="publication"
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
    >
      <h1 data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        Publication of Presented Research
      </h1>
      <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        The{" "}
        <b>
          2<sub>nd</sub> International Conference on Social Sciences, Teaching &
          Education, Engineering and Technology (ICSTEET-2026)
        </b>{" "}
        provides several publication opportunities for presented work:
      </p>
      <section
        className="conference-proceeding"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <h1>Conference Proceedings</h1>
          <img
            loading="lazy"
            src="/images/F&B.jpg"
            alt="ICSTEET - Conference Proceedings with an ISBN Number"
          />
          <p>
            All accepted and registered abstracts will be published in the
            Conference Proceedings with an ISBN Number.
          </p>
        </div>
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <h1>Journal Publication</h1>
          <img
            loading="lazy"
            src={journal}
            alt="ICSTEET - Journal Publication"
          />
          <p>
            Publish your high-quality paper in various Web of Science, Scopus
            and other internationally indexed journals, increasing the
            visibility and impact of your research.
          </p>
        </div>
      </section>
      <Proceedings />
      <div class="section-container" data-aos="fade-up">
        <h1 class="section-title" data-aos="fade-up">
          PEER-REVIEWED SCOPUS-INDEXED JOURNALS
        </h1>
        <p class="section-description" data-aos="fade-up">
          Access our collection of high-quality, peer-reviewed journals indexed
          in Scopus trusted sources for impactful and reliable research.
        </p>

        <div class="journal-card" data-aos="fade-up">
          <div class="journal-image-wrapper">
            <img
              src="/images/journal/ijesty.png"
              alt="Journal Cover"
              class="journal-image"
            />
          </div>

          <div class="journal-content">
            <h2 class="journal-title">
              International Journal of Engineering, Science and Information
              Technology (IJESTY)
            </h2>
            <hr class="divider" />
            <p>
              <span class="text">ISSN : </span>
              <span class="value">2775-2674</span>
            </p>
          </div>
        </div>
      </div>
      <h1
        id="plagiarism-policy-ethics"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        Plagiarism Policy & Publication Ethics
      </h1>
      <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        The{" "}
        <b>
          2<sub>nd</sub> International Conference on Social Sciences, Teaching &
          Education, Engineering and Technology (ICSTEET-2026)
        </b>{" "}
        adheres to stringent anti-plagiarism policies. Here are the key points
        about their process:
      </p>
      <div
        className="policy-ethics"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <img loading="lazy" src={check} alt="" />
          <div>
            <h1>Plagiarism Check</h1>
            <ul>
              <li>
                Every submission undergoes a plagiarism check using Crossref
                Similarity Check, which is powered by iThenticate.
              </li>
              <li>
                This ensures that all articles submitted to the conference are
                original and free from plagiarism.
              </li>
            </ul>
          </div>
        </div>
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <img loading="lazy" src={review} alt="" />
          <div>
            <h1>Review Process</h1>
            <ul>
              <li>
                Submissions that pass the plagiarism check are sent to the
                scientific committee for review.
              </li>
              <li>
                Any submission found to be plagiarized at any stage will be
                automatically rejected.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
