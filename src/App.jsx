import React, { useEffect } from "react";
import Page from "./Home/Page/Page.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Downloads from "./Downloads/Downloads.jsx";
import About from "./About/About.jsx";
import Navbar from "./Home/Navbar/Navbar.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import Instruction from "./Registration/Instruction/Instruction.jsx";
import Terms from "./Registration/Terms/Terms.jsx";
import Contact from "./Contact/Contact.jsx";
import Available from "./Registration/Available/Available.jsx";
import Venue from "./Venue/Venue.jsx";
import Guidelines from "./Submission/Guidelines/Guidelines.jsx";
import Publication from "./Publication/Publication.jsx";
import SubmissionForm from "./Submission/SubmissionForm/SubmissionForm.jsx";
import Login from "./Login/Login.jsx";
import Success from "./Success/Success.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import SessionTracks from "./Sesssions/SessionTracks.jsx";
import Fees from "./Registration/Fees/Fees.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Sponsors from './Sponsors/Sponsors.jsx'
import { Toaster } from "react-hot-toast";
import Speaker from "./About/Speaker/Speaker.jsx";
import SpeakerList from "./About/Speaker/SpeakerGrid.jsx";
import OCMList from "./About/Speaker/OCMGrid.jsx";
import OCM from "./About/OCM/OCM.jsx";
import OCMform from "./About/OCM/OCMform.jsx";
import Footer from "./Home/Footer/Footer.jsx";
import Organizer from "./About/Organizer/Organizer.jsx";
import ScrollTop from "./ScrollTop.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      
      <a
        href="/Abstract&Full-paper-submission#top"
        className="px-5 py-3 bg-blue-800 hover:bg-lime-500 !text-white hover:text-blue-800 text-sm font-semibold rounded-lg shadow-lg whitespace-nowrap transition-colors duration-200 text-center"
      >
        Submit Paper
      </a>

      <a
        href="/Registration_Fees#top"
        className="px-5 py-3 bg-lime-500 hover:bg-blue-800 !text-blue-800 hover:text-white text-sm font-semibold rounded-lg shadow-lg whitespace-nowrap transition-colors duration-200 text-center"
      >
        Register Now
      </a>

    </div>
  );
}
const Layout = ({ children }) => {
  const location = useLocation();
  const SelectedRoots = [
    "/ICSTEET_2026_Login",
    "/Payment_Success_Page",
    "/ICSTEET_2026_Dashboard",
  ];

  const isRoot = SelectedRoots.includes(location.pathname);

  return (
    <>
      {!isRoot && <Navbar />}

      {/* 🔥 Anchor target */}
      <div id="top"></div>

      {children}

      {!isRoot && <Footer />}

      {/* 🔥 Floating Buttons */}
      {!isRoot && <FloatingActions />}
    </>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
    });
  }, []);
  return (
    <BrowserRouter>
      <ScrollTop />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "14px",
            fontWeight: "500",
            padding: "15px",
            boxShadow: "rgba(0, 0, 0, 0.34) 0px 4px 12px",
          },
        }}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/Essential_Downloads" element={<Downloads />} />
          <Route path="/About_ICSTEET" element={<About />} />
          <Route path="/Frequently_Asked_Question" element={<FAQ />} />
          <Route path="/Registration_Instruction" element={<Instruction />} />
          <Route path="/Terms_and_Conditions" element={<Terms />} />
          <Route path="/Contact_Us" element={<Contact />} />
          <Route path="/Available_Payment_Methods" element={<Available />} />
          <Route path="/Venue" element={<Venue />} />
          <Route path="/Submission_Guidelines" element={<Guidelines />} />
          <Route path="/Publication" element={<Publication />} />
          <Route path="/ICSTEET_2026_Login" element={<Login />} />
          <Route path="/Payment_Success_Page" element={<Success />} />
          <Route path="/Speakers" element={<Speaker />} />
          <Route path="/SpeakerList" element={<SpeakerList />} />
          <Route path="/OCMList" element={<OCMList />} />
          <Route path="/About_Organizer" element={<Organizer />} />
          <Route path="/Organizing_Committee_Member" element={<OCM />} />
          <Route path="/Sponsors" element={<Sponsors/>} />
          <Route
            path="/Organizing_Committee_Member_Form"
            element={<OCMform />}
          />
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/ICSTEET_2026_Dashboard" element={<Dashboard />} />
          {/* </Route> */}
          <Route path="/Registration_Fees" element={<Fees />} />
          <Route
            path="/Session_Tracks/Call_for_Paper"
            element={<SessionTracks />}
          />
          <Route
            path="/Abstract&Full-paper-submission"
            element={<SubmissionForm />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
