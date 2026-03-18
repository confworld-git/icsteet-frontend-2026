import React from "react";
import "./Available.css";
import online from "../../assets/Images/online-payment.svg";
import net from "../../assets/Images/net-banking.svg";
import paypal from "../../assets/Images/paypal.jpeg";
import bank_transfer from "../../assets/Images/bank-transfer.svg";

const Available = () => {
  return (
    <div
      className="available"
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
    >
      <h1 data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        Available Payment methods
      </h1>
      <div
        className="available__container"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <img loading="lazy" src={online} alt="" />
          <p>Online payment using Debit/Credit card</p>
        </div>
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <img loading="lazy" src={net} alt="" />
          <p>Net Banking</p>
        </div>
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <img loading="lazy" src={paypal} alt="" />
          <p>Paypal</p>
        </div>
        <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
          <img loading="lazy" src={bank_transfer} alt="" />
          <p>Bank transfer (TT)</p>
        </div>
      </div>
      <h1 data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        Bank Details (For Bank Transfer)
      </h1>
      <ul
        className="bank__details"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <li>
          <b>Beneficiary Name:</b> CONFWORLD EDUCATIONAL RESEARCH AND
          DEVELOPMENT ASSOCIATION
        </li>
        <li>
          <b>Bank Name:</b> HDFC Bank
        </li>
        <li>
          <b>Account Number:</b> 50200097123575
        </li>
        <li>
          <b>IFSC Code:</b> HDFC0000124
        </li>
        <li>
          <b>Swift Code:</b> HDFCINBBCHE
        </li>
        <li>
          <b>Branch:</b> Kilpauk, Chennai, Tamil Nadu, India 
        </li>
      </ul>
      <p>
        For further assistance contact us at{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@icsteet.com">
          info@icsteet.com
        </a>{" "}
        and <a href="tel:+91 8072381719">+91 8072381719</a>
      </p>
    </div>
  );
};

export default Available;
