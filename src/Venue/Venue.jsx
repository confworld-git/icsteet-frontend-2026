import React from "react";
import "./Venue.css";
import venue1 from "../assets/Venue/venue1.jpeg"
import venue2 from "../assets/Venue/venue2.jpeg"
import venue3 from "../assets/Venue/venue3.jpeg"
import venue4 from "../assets/Venue/venue4.jpeg"
import venue5 from "../assets/Venue/venue5.jpeg"
import venue6 from "../assets/Venue/venue6.jpeg"
import venue7 from "../assets/Venue/venue7.jpeg"
import venue8 from "../assets/Venue/venue8.jpeg"
import venue9 from "../assets/Venue/venue9.jpeg"
import venue10 from "../assets/Venue/venue10.jpeg"
import venue11 from "../assets/Venue/venue11.jpeg"
import venue13 from "../assets/Venue/venue12.jpeg"
import venue14 from "../assets/Venue/venue13.jpeg"
import venue12 from "../assets/Venue/venue14.jpeg"
import venue15 from "../assets/Venue/venue15.jpeg"
import venue16 from "../assets/Venue/venue16.jpeg"
import venue17 from "../assets/Venue/venue17.jpeg"
import { FaStar } from "react-icons/fa6";
import Hotel from "./Hotel";
const Venue = () => {
  return (
    <div
      className="venue"
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
    >
      <h1 data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        Venue (Manila, Philippines)
      </h1>
      {/* <div
        className="venue_location"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592.438856510903!2d121.0345651618375!3d14.420416181965232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d03492e0f54b%3A0x25e6cc09b1497bc2!2sAcacia%20Hotel%20Manila!5e1!3m2!1sen!2sin!4v1739183596574!5m2!1sen!2sin"
          height="350"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        Iconic Spots to Explore in Manila, Philippines (<FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />)
      </p>
      <Hotel/>
      <section>
        <img loading="lazy" src={venue1} alt="" />
        <img loading="lazy" src={venue2} alt="" />
        <img loading="lazy" src={venue3} alt="" />
        <img loading="lazy" src={venue4} alt="" />
        <img loading="lazy" src={venue5} alt="" />
        <img loading="lazy" src={venue6} alt="" />
        <img loading="lazy" src={venue7} alt="" />
        <img loading="lazy" src={venue8} alt="" />
        <img loading="lazy" src={venue9} alt="" />
        <img loading="lazy" src={venue10} alt="" />
        <img loading="lazy" src={venue11} alt="" />
        <img loading="lazy" src={venue12} alt="" />
        <img loading="lazy" src={venue13} alt="" />
        <img loading="lazy" src={venue14} alt="" />
        <img loading="lazy" src={venue15} alt="" />
        <img loading="lazy" src={venue16} alt="" />
        <img loading="lazy" src={venue17} alt="" />
        
      </section>
    </div>
  );
};

export default Venue;
