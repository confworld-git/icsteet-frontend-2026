import React from "react";
import "./Footer.css";
import logo from "/logo.png";

import { FaHome, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiVideoConference } from "react-icons/pi";
import { IoNewspaper } from "react-icons/io5";
import { MdFrontHand, MdOutlineAppRegistration, MdEmail, MdMyLocation } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      {/* Left Section */}
      <div>
        <a
          href="https://confworld.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Confworld Official Website"
        >
          <img loading="lazy" src={logo} alt="Conference Logo" />
        </a>

        <p>
          “2<sub>nd</sub> International Conference on Social Sciences, Teaching
          & Education, Engineering and Technology (ICSTEET-2026)”
        </p>

        <p>
          <b>Theme:</b> "Bridging the Gap: Innovations and Challenges in Social
          Sciences, Teaching & Education, Engineering and Technology"
        </p>

        <p>
          <b>Organized by:</b> Confworld Educational Research and Development
          Association
        </p>
      </div>

      {/* Navigation Links */}
      <ul>
        <li><p>Navigation Links</p></li>

        <li>
          <a href="/" aria-label="Home">
            <FaHome /> Home
          </a>
        </li>

        <li>
          <a href="/About_ICSTEET" aria-label="About ICSTEET">
            <PiVideoConference /> About
          </a>
        </li>

        <li>
          <a href="Session_Tracks/Call_for_Paper" aria-label="Call for Papers">
            <IoNewspaper /> Call for Papers
          </a>
        </li>

        <li>
          <a href="/Abstract&Full-paper-submission" aria-label="Paper Submission">
            <MdFrontHand /> Paper Submission
          </a>
        </li>

        <li>
          <a href="/Registration_Fees" aria-label="Registration Fee">
            <MdOutlineAppRegistration /> Registration Fee
          </a>
        </li>
      </ul>

      {/* Social Media Links */}
      <ul>
        <li><p>Social Media</p></li>

        <li>
          <a href="https://www.facebook.com/people/Confworld-Educational-Research-and-Development-Association/61560894663027/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="footer-icons" /> Facebook
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/@Confworld" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="footer-icons" /> YouTube
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/infoconfworld/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="footer-icons" /> Instagram
          </a>
        </li>

        <li>
          <a href="https://x.com/infoconfworld" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter className="footer-icons" /> Twitter
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/company/confworld-educational-research-and-development-association/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="footer-icons" /> LinkedIn
          </a>
        </li>

        <li>
          <a href="https://whatsapp.com/channel/0029VbCQG5z4inos7Mt6r61W" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="footer-icons" /> WhatsApp
          </a>
        </li>
      </ul>

      {/* Contact Section */}
      <ul>
        <li><p>Get In Touch</p></li>

        <li>
          <a href="tel:+918072381719" aria-label="Call +91 8072381719">
            <IoMdCall /> +91 8072381719
          </a>
        </li>

        <li>
          <a href="mailto:info@icsteet.com" aria-label="Email info@icsteet.com">
            <MdEmail /> info@icsteet.com
          </a>
        </li>

        <li>
          <a href="/Venue" aria-label="Venue in Manila, Philippines">
            <MdMyLocation /> Manila, Philippines
          </a>
        </li>

        <li id="organizer_address">
          <b>Organizer Address</b>
          <br />
          No.147/383A, Second Floor, Paper Mills Road, Peravallur,
          Chennai-600082, Tamil Nadu, India.
        </li>
      </ul>

      {/* Copyright */}
      <p>
        Copyright © 2026 CERADA. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;