import React from "react";
import "./Guidelines.css";
import { useNavigate } from "react-router-dom";

const Guidelines = () => {
  const navigate = useNavigate();
  return (
    <div
      className="submission_guidelines"
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
    >
      <h1 data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        Submission Guidelines
      </h1>
      <div
        className="guide_abstract_full"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <div>
          <h1>Abstract Submission Guidelines</h1>
          <ul>
            <li>The original work should be described in the abstract.</li>
            <li>Abstract should be written in English.</li>
            <li>It should be one paragraph with a word limit of 150.</li>
            <li>
              Please provide a slight biography with your abstract (An example
              is given in the template).
            </li>
            <li>
              The abstract should be submitted in the format of an MS Word (.doc
              or .docx) document.
            </li>
            <li>
              After you've finished preparing your abstract according to the
              above instructions, submit your abstract here.
            </li>
            <li>
              After submission, you will be acknowledged of the receipt of the
              abstract via email within three working days.
            </li>
            <li>
              The Title, Author's Names and Affiliations should be centred.
              Please underline the presenting author. Corresponding author
              E-mail should be there.
            </li>
            <button onClick={() => navigate("/Abstract&Full-paper-submission")}>
              Submit your abstract
            </button>
          </ul>
        </div>
        <div data-aos-anchor-placement="top-bottom" data-aos="fade-up">
          <h1>Full Paper Submission Guidelines</h1>
          <ul>
            <li>Total number of pages must be 6-8 in double-column format.</li>
            <li>
              The manuscript should be in English and checked for grammar and
              language errors.
            </li>
            <li>
              Tables, figures and images should be properly named with good
              quality.
            </li>
            <li>
              The Title, Author's Names and Affiliations should be centred.
              Please underline the presenting author. Corresponding author
              E-mail should be there.
            </li>
            <li>Abstract not more than 150 words.</li>
            <li>
              Minimum 5 Keywords should be written in lowercase letters and
              italics (Not applicable to names/scientific names) and should be
              separated with commas.
            </li>
            <li>
              Names of affiliations should be given including the country.
            </li>
            <li>Background/Introduction, Motivation and Objectives.</li>
            <li>Statement of Contribution/Methods.</li>
            <li>Results, Discussion and Conclusion.</li>
            <li>Funding statement.</li>
            <li>Acknowledgements.</li>
            <li>
              References minimum 35 (30% of which must be within the last 2
              years) should be there. Authors may submit their references in
              Chicago style. Authors are responsible for ensuring that the
              information in each reference is complete and accurate. All
              references should be numbered consecutively in the order of their
              first citation. Citations of references in the text should be
              identified using numbers in square brackets e.g., "as discussed by
              Smith [9]"; "as discussed elsewhere [9, 10]". All references
              should be cited within the text and uncited references will be
              removed.
            </li>
            <li>
              The paper should be submitted in the format of an MS Word (.doc or
              .docx) document.
            </li>
            <li>
              After you've finished preparing your full paper according to the
              above instructions, submit your full paper here.
            </li>
            <button onClick={() => navigate("/Abstract&Full-paper-submission")}>
              Submit your full paper
            </button>
          </ul>
        </div>
      </div>
      <p>
        This ensures that your work is disseminated to a wide audience,
        including peers, scholars and academia members globally.
      </p>
    </div>
  );
};

export default Guidelines;
