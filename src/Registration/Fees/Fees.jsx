import React, { useEffect, useState } from "react";
import "./Fees.css";
import axios from "axios";
import FeesTable from "./FeesTable";
import DiscountSection from "./DiscountSection";
import FeeForm from "./FeeForm";
import JournalSupport from "../JournalSupport";
import Addons from "../Addons";
import Celebration from "../Celebration/Celebration.jsx";
import Steps from "../../Home/Steps/Steps.jsx";

const Fees = () => {
  const [feesData, setFeesData] = useState(null);

  const [selectedFee, setSelectedFee] = useState({
    category: "",
    type: "",
    Title: "",
    amount: "",
  });

  // ── Lifted state: journal & addons live here, passed down as props ──
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  useEffect(() => {
    fetchRegisterData();
  }, []);

  // Reset journal & addons whenever the base fee changes
  useEffect(() => {
    setSelectedJournal(null);
    setSelectedAddons([]);
  }, [selectedFee.amount]);

  const fetchRegisterData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}api/ICSTEET_2025/Registration_Fees`
      );
      setFeesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const feeSelected = !!selectedFee.amount;

  return (
    <div className="registration">
      <Celebration />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="reg_container">
        <h1>Registration</h1>
        <p>
          Welcome to the ICSTEET 2026 registration page. Secure your spot at
          this premier conference to connect with global experts, present your
          research and advance your career. Follow the steps below to complete
          your registration.
        </p>
        <span>Register now and take advantage of discounted rates.</span>
      </div>

      {/* ── Discount banner ─────────────────────────────────────── */}
      <div>
        <DiscountSection />
      </div>

      {/* ── Steps indicator ─────────────────────────────────────── */}
      <Steps />

      {/* ── STEP 1: Fees table ──────────────────────────────────── */}
      <div>
        <h1 style={{ marginBottom: "10px" }}>Registration Fees</h1>
        <p id="note">
          *Note: Additional charges applicable for Scopus publication (T&C
          Apply)
        </p>
        <FeesTable feesData={feesData} setSelectedFee={setSelectedFee} />
        <span id="indicator">
          *Indicates - UG/PG students only (You have to submit a soft copy of your
          university/college identity card as a proof)
        </span>
      </div>

      {/* ── STEP 2: Journal Publication Support ─────────────────── */}
        <div className="px-4 md:px-8 mt-6">
          <JournalSupport
            selectedJournal={selectedJournal}
            setSelectedJournal={setSelectedJournal}
          />
        </div>

      {/* ── STEP 3: Add-ons ─────────────────────────────────────── */}
        <div className="px-4 md:px-8">
          <Addons
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
          />
        </div>

      {/* ── STEP 4: Registration form (membership + coupon + pay) ── */}
      <div className="reg_form_container">
        <h1>Online Registration form</h1>
        <p>
          International Conference on Social Sciences, Teaching & Education,
          Engineering and Technology (ICSTEET-2026)
        </p>
        <FeeForm
          selectedFee={selectedFee}
          selectedJournal={selectedJournal}
          selectedAddons={selectedAddons}
        />
      </div>
    </div>
  );
};

export default Fees;