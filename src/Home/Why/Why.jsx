import React from "react";
import {
  FaMicroscope,
  FaGlobe,
  FaLightbulb,
  FaHandsHelping,
  FaUserTie,
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaPoll,
  FaAward,
} from "react-icons/fa";
import "./Why.css";

const Why = () => {
  return (
    <div className="why" data-aos="fade-up">
      <h1 data-aos="fade-up">Why Join Us at ICSTEET-2026?</h1>
      <p data-aos="fade-up">ICSTEET 2026 CONFERENCE</p>
      <section data-aos="fade-up">
        <div
          data-aos="zoon-in-up"
          data-aos-anchor-placement="top-bottom"
          style={{ backgroundColor: "#155DFC" }}
        >
          <FaMicroscope />
          <h1>Explore Cutting-Edge Research and Innovations</h1>
          <p>
            At ICSTEET-2026, you’ll have the opportunity to engage with the
            latest research and technological innovations across social
            sciences, education, engineering and technology. Our carefully
            curated sessions and keynote addresses will showcase groundbreaking
            work that is shaping the future of these diverse fields.
          </p>
        </div>
        <div data-aos="zoom-in-up" style={{ backgroundColor: "#9810FA" }}>
          <FaGlobe />
          <h1>Foster Global Networking and Collaborations</h1>
          <p>
            Connect with leading experts, academics and industry professionals
            from around the world. ICSTEET-2026 provides a platform to engage in
            meaningful discussions, explore potential collaborations and create
            lasting professional relationships that can impact your future
            projects and research.
          </p>
        </div>
        <div data-aos="zoom-in-up" style={{ backgroundColor: "#00A63E" }}>
          <FaLightbulb />
          <h1>Gain Diverse Perspectives</h1>
          <p>
            As we bring together a diverse set of disciplines, you’ll gain
            valuable insights from different fields of study. The
            interdisciplinary nature of the conference encourages participants
            to view challenges and solutions through various lenses, enhancing
            the depth of knowledge and understanding.
          </p>
        </div>
        <div data-aos="zoom-in-up" style={{ backgroundColor: "#E7000B" }}>
          <FaChalkboardTeacher />
          <h1>Interactive and Engaging Sessions</h1>
          <p>
            With workshops, panel discussions and ample Q&A time, ICSTEET-2026
            is designed to be an interactive conference. We focus on creating an
            engaging environment where participants can ask questions, exchange
            ideas and delve deep into the subjects that matter most.
          </p>
        </div>
        <div data-aos="zoom-in-up" style={{ backgroundColor: "#D08700" }}>
          <FaUserTie />
          <h1>Contribute to Global Challenges</h1>
          <p>
            The theme of "Bridging the Gap: Innovations and Challenges in Social
            Sciences, Teaching & Education, Engineering and Technology" invites
            you to contribute to solutions that address global challenges. By
            joining us, you’ll be part of a forward-thinking community that is
            focused on fostering positive change.
          </p>
        </div>
        <div data-aos="zoom-in-up" style={{ backgroundColor: "#4F39F6" }}>
          <FaHandsHelping />
          <h1>Professional Development</h1>
          <p>
            Attendees of ICSTEET-2026 will gain new insights, develop essential
            skills and stay up-to-date on the latest trends in their fields.
            Whether you're a researcher, academic, industry leader, or student,
            this conference offers valuable learning and professional
            development opportunities.
          </p>
        </div>
        <div data-aos="zoom-in-up" style={{ backgroundColor: "#E60076" }}>
          <FaProjectDiagram />
          <h1>Share Your Expertise</h1>
          <p>
            If you are a researcher, educator, or professional, ICSTEET-2026
            provides the perfect platform to present your work and exchange
            ideas with others. Share your research findings, contribute to
            discussions and engage with experts in your field to elevate your
            academic and professional journey.
          </p>
        </div>
        <div data-aos="zoom-in-up" style={{ backgroundColor: "#F54A00" }}>
          <FaPoll />
          <h1>Celebrate Interdisciplinary Innovation</h1>
          <p>
            ICSTEET-2026 is all about bridging gaps between different
            disciplines. It’s an opportunity to witness how engineering,
            technology, education and social sciences can work together to find
            creative solutions to the world’s most pressing problems.
          </p>
        </div>
        <div data-aos="zoom-in-up" style={{ backgroundColor: "#009689" }}>
          <FaGraduationCap />
          <h1>Publication Opportunities</h1>
          <p>
            Publish your research in prestigious journals and conference
            proceedings.
          </p>
        </div>
        <div data-aos="zoom-in-up" style={{ backgroundColor: "#c39b0b" }}>
          <FaAward />
          <h1>CERADA Awards</h1>
          <p>
            Celebrate excellence with our prestigious awards, recognizing
            outstanding contributions to the field.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Why;
