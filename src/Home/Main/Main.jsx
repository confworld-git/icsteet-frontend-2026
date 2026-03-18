import React from "react";
import "./Main.css";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";
import icsteet_video from "../../assets/Video/ICSTEET-video.mp4";
import Logos from "../Logos/Logos";
import SmoothCountdown from "./SmoothCountdown";
import Countdown from "./SmoothCountdown";

const Main = () => {
  return (
    <div className="main" data-aos="fade-up">
      <video autoPlay muted loop data-aos="zoom-in-up">
        <source src={icsteet_video} />
      </video>
      <div className="main-box">
        <div className="main-left">
          <h1>
            2<sub>nd</sub> International Conference on Social Sciences, Teaching
            & Education, Engineering and Technology (ICSTEET - 2026)
          </h1>
          <h2>
            THEME - "Bridging the Gap : Innovations and Challenges in Social
            Sciences, Teaching & Education, Engineering and Technology"
          </h2>
          <p>Hybrid conference (In person + Virtual)</p>
          <p>
            Organized by:  St. Dominic College of Asia, Philippines and Confworld Educational Research and Development
            Association <br />
            <span style={{ marginTop: "5px", display: "inline-block" }}>
              ISBN: 978-15-545371-2-9
            </span>
          </p>
          <div>
            <div className="dateLocation">
              <p>
                <i>
                  <HiMiniCalendarDateRange />
                </i>{" "}
                Date: 14-15 May, 2026
              </p>
              <p>
                <i>
                  <MdLocationPin />
                </i>{" "}
                Location: Manila, Philippines.
              </p>
            </div>
          </div>
            <Countdown targetDate="2026-05-14T08:33:00" />
          <Logos />
        </div>
        <div className="right-main">
          <div className="main-right">
            <video autoPlay muted loop data-aos="zoom-in-up">
              <source src={icsteet_video} />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
