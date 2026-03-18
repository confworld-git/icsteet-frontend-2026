import React from "react";
import Main from "../Main/Main.jsx";
import Welcome from "../Welcome/Welcome.jsx";
import Theme from "../Theme/Theme.jsx";
import Highlights from "../Highlights/Highlights.jsx";
import Why from "../Why/Why.jsx";
import Proceedings from "../Proceedings/Proceedings.jsx";
import Deadline from "../Deadline/Deadline.jsx";
import SessionSlide from "../SessionSlide/SessionSlide.jsx";
import Steps from "../Steps/Steps.jsx";
import LogoMarquee from "../logo-marquee/Logo-marquee.jsx";
import AcademicPartnerCard from "../../academic-partner/academic-partner.jsx";
import Journals from "../Journals.jsx";
const Page = () => {
  return (
    <div>
      <Main />
      <LogoMarquee />
      <AcademicPartnerCard/>
      <Welcome />
      <Theme />
      <Highlights />
      <SessionSlide />
      <Deadline />
      <Why />
      <Steps />
      <Proceedings />
      <Journals />
    </div>
  );
};

export default Page;
