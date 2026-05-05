import React from "react";
import "./Steps.css";
import anime1 from "../../assets/Video/anime1.gif";
import anime2 from "../../assets/Video/anime2.gif";
import anime3 from "../../assets/Video/anime3.gif";
import anime4 from "../../assets/Video/anime4.gif";
import arrow from "../../assets/Video/arrow.png";

const Steps = () => {
  return (
    <div className="infographic-container">
      <h2 className="infographic-title" data-aos="fade-up">
        Registration Steps
      </h2>
      <p className="infographic-subtitle" data-aos="fade-up">
        Follow these steps to complete your registration
      </p>
      <div className="infographic-steps" data-aos="fade-right">
        <div className="step">
          <div className="circles orange">
            <div className="step-number">
              <img loading="lazy" src={anime1} alt="" />
            </div>
          </div>
          <p className="step-description">
            Choose Your Preferred Admittance Category
          </p>
        </div>
        <img loading="lazy" src={arrow} alt="" />
        <div className="step">
          <div className="circles red">
            <div className="step-number">
              <img loading="lazy" src={anime2} alt="" />
            </div>
          </div>
          <p className="step-description">Enter your details in the form</p>
        </div>
        <img loading="lazy" src={arrow} alt="" />
        <div className="step">
          <div className="circles blue">
            <div className="step-number">
              <img loading="lazy" src={anime3} alt="" />
            </div>
          </div>
          <p className="step-description">Proceed to Payment Gateway</p>
        </div>
        <img loading="lazy" src={arrow} alt="" />
        <div className="step">
          <div className="circles red-red">
            <div className="step-number">
              <img loading="lazy" src={anime4} alt="" />
            </div>
          </div>
          <p className="step-description">
            Request an official conference invitation letter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
