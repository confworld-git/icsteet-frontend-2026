import React from "react";
import "./Instruction.css";
import instruction1 from "../../assets/Images/registration-1.svg";
import instruction2 from "../../assets/Images/registration-2.svg";
import instruction3 from "../../assets/Images/registration-3.svg";
import instruction4 from "../../assets/Images/registration-4.svg";

const Instruction = () => {
  return (
    <div
      className="instruction"
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
    >
      <h3 data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        Registration Instruction
      </h3>
      <div
        className="instruction_list"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <h1>Payment</h1>
          <img loading="lazy" src={instruction1} alt="" />
          <p>Complete your payment for the conference.</p>
        </div>
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <h1>Download Registration Form</h1>
          <img loading="lazy" src={instruction2} alt="" />
          <p>After making your payment, download the Registration Form.</p>
        </div>
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <h1>Fill Out the Form</h1>
          <img loading="lazy" src={instruction3} alt="" />
          <p>Complete all required fields in the Registration Form.</p>
        </div>
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <h1>Submit Registration</h1>
          <img loading="lazy" src={instruction4} alt="" />
          <p>
            Email the filled-out Registration Form along with your payment
            information to{" "}
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@icsteet.com"
            >
              info@icsteet.com
            </a>
          </p>
        </div>
      </div>
      <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        <b>Important:</b> Please note that the payee is responsible for all bank
        charges.
      </p>
      <div
        className="guidelines"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <h3 data-aos-anchor-placement="top-bottom" data-aos="fade-up">
          Registration Guidelines
        </h3>
        <ul data-aos-anchor-placement="top-bottom" data-aos="fade-up">
          <li>
            Payment Notification: Registered members must inform us about their
            payments immediately via E-mail.
          </li>
          <li>
            Proof of Payment: After completing registration, every participant
            is required to email a scanned copy of the registration fee receipt
            or transaction proof to us immediately.
          </li>
          <li>
            Paper Submission: No modifications to the paper will be accepted
            after the final submission date.
          </li>
          <li>
            Author Limit: Only one author and one co-author are allowed per
            registration.
          </li>
          <li>
            Late Registration: If you need to register after the deadlines,
            please contact the coordinator as soon as possible.
          </li>
          <li>
            Form Submission: After making your payment, download the
            Registration Form, fill it out and email it to us at{" "}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@icsteet.com">
              info@icsteet.com
            </a>{" "}
            along with your payment information.
          </li>
        </ul>
      </div>
      <p>
        <b>Note:</b> The payee is responsible for all bank charges.
      </p>
    </div>
  );
};

export default Instruction;
