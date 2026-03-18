import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setShowNavbar }) => {
  const navigate = useNavigate();
  return (
    <div className="side_navbar">
      <p onClick={() => setShowNavbar(false)}>
        ICSTEET 2026 <HiMiniXMark />
      </p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          About Us
          <ul>
            <li>
              <a href="/About_ICSTEET">About ICSTEET</a>
            </li>
            <li>
              <a href="/About_Organizer">About Organizer</a>
            </li>
            <li>
              <a href="/Speakers">Speakers</a>
            </li>
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
        <li>
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
        <li>
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
        <li>
          Registration
          <ul>
            <li>
              <a href="/Registration_Fees">Registration Fees</a>
            </li>
            <li>
              <a href="/Available_Payment_Methods">Available Payment Methods</a>
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
          <a href="/Frequently_Asked_Question">FAQ</a>
        </li>
        <li>
          <a href="/Venue">Venue</a>
        </li>
        <li>
          <a href="/Contact_Us">Contact Us</a>
        </li>
        <button onClick={() => navigate("/ICSTEET_2026_Login")}>Login</button>
      </ul>
    </div>
  );
};

export default Sidebar;
