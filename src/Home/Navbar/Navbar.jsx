import React, { useState, useEffect } from "react";
import "./Navbar.css";
import icsteet_logo from "/ICSTEET LOGO PNG 2.png";
import { useNavigate } from "react-router-dom";
import Middle from "../Middle/Middle.jsx";
import { IoMenuOutline } from "react-icons/io5";
import Sidebar from "./Sidebar.jsx";

const Navbar = () => {
  const [ShowNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.toggle("NoScroll", ShowNavbar);

    return () => {
      document.body.classList.remove("NoScroll");
    };
  }, [ShowNavbar]);

  return (
    <div className="navbar">
      <div
        className="side_bar_parent"
        style={{ display: ShowNavbar ? "block" : "none" }}
      >
        <Sidebar setShowNavbar={setShowNavbar} />
      </div>
      <p>
        <marquee behavior="smooth" direction="left">
          HYBRID EVENT - You can participate in person at{" "}
          <b>Manila, Philippines</b> or <b>Virtually</b> from your home or
          office.
        </marquee>
      </p>
      <Middle />
      <div>
        <a href="/" style={{ display: "inline-block" }}>
          <img
            loading="lazy"
            src={icsteet_logo}
            alt="ICSTEET LOGO 2026"
            style={{ height: "60px", width: "auto" }} // adjust size
          />
        </a>
        <ul>
          {/* <li>
            <a href="/">Home</a>
          </li> */}
          <li>
            About Us
            <ul>
              <li>
                <a href="/About_ICSTEET">About ICSTEET</a>
              </li>
              <li>
                <a href="/About_Organizer">About Organizer</a>
              </li>
              {/* <li>
                <a href="/Speakers">Speakers</a>
              </li> */}
              <li>
                <a href="/SpeakerList">Speakers</a>
              </li>
              {/* <li>
                <a href="/OCMList">Organizing Committee Member</a>
              </li> */}
              <li>
                <a href="/Organizing_Committee_Member">
                  Organizing Committee Member
                </a>
              </li>
              <li>
                <a href="/Organizing_Committee_Member_Form">
                  Organizing Committee Member Form
                </a>
              </li>
            </ul>
          </li>
          <li id="parent_li">
            Session Tracks
            <ul>
              <li>
                <a href="/Session_Tracks/Call_for_Paper">
                  Session Tracks / Call for Paper
                </a>
              </li>
              <li>
                <a href="/Essential_Downloads">Essential Download</a>
              </li>
            </ul>
          </li>
          <li id="parent_li">
            Paper Submission
            <ul>
              <li>
                <a href="/Abstract&Full-paper-submission">
                  Abstract/Full paper submission
                </a>
              </li>
              <li>
                <a href="/Submission_Guidelines">Submission Guidelines</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/Publication">Publication</a>
          </li>
          <li id="parent_li">
            Registration
            <ul>
              <li>
                <a href="/Registration_Fees">Registration Fees</a>
              </li>
              <li>
                <a href="/Available_Payment_Methods">
                  Available Payment Methods
                </a>
              </li>
              <li>
                <a href="/Registration_Instruction">Registration Instruction</a>
              </li>

              <li>
                <a href="/Terms_and_Conditions">Terms and Conditions</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/Sponsors">Exhibits & Sponsors</a>
          </li>
          <li>
            <a href="/Frequently_Asked_Question">FAQ</a>
          </li>
          <li>
            <a href="/Venue">Venue</a>
          </li>
          <li>
            <a href="/Contact_Us">Contact Us</a>
          </li>
          <li>
            <button onClick={() => navigate("/ICSTEET_2026_Login")}>
              Login
            </button>
          </li>
        </ul>
        <i className="menu_icon" onClick={() => setShowNavbar(true)}>
          <IoMenuOutline />
        </i>
      </div>
    </div>
  );
};

export default Navbar;
