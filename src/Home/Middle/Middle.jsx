import React, { useEffect } from "react";
import reg from "../../assets/Images/register.png";
import partner from "../../assets/Images/partner.png";
import mail from "../../assets/Images/mail.png";
import call from "../../assets/Images/call.png";
import trans from "../../assets/Images/trans.png";
import "./Middle.css";

const Middle = () => {
  useEffect(() => {
    // Define the translate init function globally before script loads
    window.googleTranslateElementInit = () => {
      if (
        !document.getElementById("google_translate_element").hasChildNodes()
      ) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        );
      }
    };

    // Inject Google Translate script if not already loaded
    if (
      !document.querySelector(
        'script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
      )
    ) {
      const addScript = document.createElement("script");
      addScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }
  }, []);

  return (
    <div id="middle-nav-bar">
      <div className="trans_icons">
        <img loading="lazy" src={trans} alt="Translate Icon" />
        <div id="google_translate_element"></div>
      </div>
      <a href="/Registration_Fees">
        <img loading="lazy" src={reg} alt="Register Icon" />
        Register Now
      </a>
      <a href="mailto:info@icsteet.com">
        <img loading="lazy" src={mail} alt="Mail Icon" />
        info@icsteet.com
      </a>
      <a
        href="https://wa.me/918072381719"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img loading="lazy" src={call} alt="Call Icon" />
        +91 8072381719
      </a>
      <a href="/Contact_Us">
        <img loading="lazy" src={partner} alt="Partner Icon" />
        Apply for Academic Partner
      </a>
    </div>
  );
};

export default Middle;
