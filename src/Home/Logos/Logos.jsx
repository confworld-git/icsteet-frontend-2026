import React from "react";
import "./Logos.css";
import logo from "../../assets/Images/logo.png";
import scopus from "../../assets/Images/scopus.png";
import goal1 from "../../assets/Images/goal1.png";
import goal2 from "../../assets/Images/goal2.png";
import goal3 from "../../assets/Images/goal3.png";
import goal4 from "../../assets/Images/goal4.png";
import goal5 from "../../assets/Images/goal5.png";
import goal6 from "../../assets/Images/goal6.png";

const Logos = () => {
  return (
    <section className="main-logos">
      <div>
        <img
          loading="lazy"
          src={logo}
          alt="Confworld Educational Research and Development Association logo"
        />
        <img loading="lazy" src={scopus} alt="scopus logo" />
        <div>
          <p>#CERADA Support SDGs</p>
          <img loading="lazy" src={goal1} alt="Quality Education" />
          <img
            loading="lazy"
            src={goal2}
            alt="Decent Work and Economic Growth"
          />
          <img
            loading="lazy"
            src={goal3}
            alt="Industry, Innovation, and Infrastructure"
          />
          <img
            loading="lazy"
            src={goal4}
            alt="Sustainable Cities and Communities"
          />
          <img
            loading="lazy"
            src={goal5}
            alt="Peace, Justice, and Strong Institutions"
          />
          <img loading="lazy" src={goal6} alt="Partnerships for the Goals" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
