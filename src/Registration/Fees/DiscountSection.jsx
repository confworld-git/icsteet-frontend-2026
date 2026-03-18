import React from "react";
import "./Fees.css";

const DiscountSection = () => {
  return (
    <section className="discount-section">
      <div className="card card_1" data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        <h3>Group Discount</h3>
        <ul>
          <li>
            You qualify for a discounted registration fee if you are a group of
            5 members or more individuals or if you are a co-author of a paper
            presentation.
          </li>
          <li>
            If your group consists of more than 10 members, please reach out to
            our Academic Partnership Team to discuss a higher discount
            percentage on the registration fee.
          </li>
        </ul>
        <hr />
        <div className="discount_contact-info">
          <span>More than 10 members?</span>
          <button
            className="contact-button"
            onClick={() => (window.location.href = "mailto:info@icsteet.com")}
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="card card_2" data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        <h3>If you are presenting more than one paper</h3>
        <ul>
          <li>
            An author may submit and present a maximum of three papers at the
            conference.{" "}
          </li>
          <li>
            If you are presenting more than one paper at the conference, full
            payment is required for the first paper.
          </li>
          <li>
            If other papers are oral or poster presentations, an additional fee
            of 150 USD will be charged for each paper.
          </li>
          <li>
            If any of the papers requires scopus publication then you have to
            pay the publication fee for each paper.
          </li>
          <li>
            If you have more than 3 papers, the additional paper can be
            presented by a co-authors on full registration.
          </li>
          <li>
            Confirmation on the number of papers should be given to the
            Conference co-ordinator 3 weeks prior to the final payment deadline.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DiscountSection;
