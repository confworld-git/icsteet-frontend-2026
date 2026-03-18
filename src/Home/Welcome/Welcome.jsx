import React, { useEffect, useRef } from "react";
import "./Welcome.css";
import rocket from "../../assets/Images/rocket.png";

const Welcome = () => {
  const rocketRef = useRef(null);
  useEffect(() => {
    const rocket = rocketRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          rocket.classList.add("animate-rocket");
        } else {
          rocket.classList.remove("animate-rocket");
        }
      });
    });

    observer.observe(rocket);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="welcome" data-aos="fade-up">
      <h1 data-aos="fade-up">Welcome to ICSTEET-2026</h1>
      <h2 data-aos="fade-up">
        Ignite Your Passion for Innovation at ICSTEET-2026
      </h2>
      <p data-aos="fade-up">
        The{" "}
        <b>
          "International Conference on Social Sciences, Teaching & Education,
          Engineering and Technology (ICSTEET-2026)"
        </b>{" "}
        is back for its <b>second edition</b> and we are excited to invite you
        to join us in this groundbreaking event! ICSTEET-2026 will bring
        together{" "}
        <b>leading scholars, industry experts, academics and researchers</b>{" "}
        from around the world to explore the latest advancements and tackle the
        challenges faced by interdisciplinary fields.
      </p>
      <img
        loading="lazy"
        data-aos="zoom-in-up"
        ref={rocketRef}
        src={rocket}
        alt=""
      />
    </div>
  );
};

export default Welcome;
