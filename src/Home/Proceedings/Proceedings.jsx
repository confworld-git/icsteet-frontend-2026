import React from "react";
import "./Proceedings.css";
import pro1 from "../../assets/Images/PRO1.png";
import pro2 from "../../assets/Images/PRO2.png";

const Proceedings = () => {
  return (
    <div className="proceeding" data-aos="fade-up">
      <div>
        <h1>Proceedings & Publications</h1>
        <div>
          <img loading="lazy" src={pro1} alt="" />
          <img loading="lazy" src={pro2} alt="" />
        </div>
        <p>
          <b>Note:</b> ICSTEET-2026 Proceedings will be submitted to the Web of
          science Book citation index (BkCI) and Scopus for evaluation and
          indexing purposes (T&C)* apply.
        </p>
      </div>
    </div>
  );
};

export default Proceedings;
