import React, { useEffect, useState } from "react";
import "./SessionTracks.css";
import axios from "axios";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Deadline from "../Home/Deadline/Deadline.jsx";
import ses1 from "../assets/Session/1.jpg";
import ses2 from "../assets/Session/2.jpg";
import ses3 from "../assets/Session/3.jpg";
import ses4 from "../assets/Session/4.jpg";
import ses5 from "../assets/Session/5.jpg";
import ses6 from "../assets/Session/6.jpg";
import ses7 from "../assets/Session/7.jpg";
import ses8 from "../assets/Session/8.jpg";
import ses9 from "../assets/Session/9.jpg";

const SessionTracks = () => {
  const [sessions, setSessions] = useState([]);

  const FetchSessionData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}api/ICSTEET_2025/Session_Tracks`
      );
      if (response.data) {
        setSessions(response.data[0].sessions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchSessionData();
  }, []);

  const sessionsLink = [ses1, ses2, ses3, ses4, ses5, ses6, ses7, ses8, ses9];

  return (
    <div
      className="session-tracks"
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
    >
      <h1 data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        Session Tracks / Call for Paper
      </h1>
      <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
        We invite researchers, academicians and professionals to submit their
        papers.
        <br /> Topics of interest include, but are not limited to:
      </p>
      <div
        className="session_container"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        {sessions &&
          sessions.map((session, index) => (
            <div
              key={index}
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
            >
              <h3>{session.session}</h3>
              <img loading="lazy" src={sessionsLink[index]} alt="" />
              <ul>
                {session.topics.map((topic, idx) => (
                  <li key={idx}>
                    <MdOutlineDoubleArrow />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
      <Deadline />
    </div>
  );
};

export default SessionTracks;
