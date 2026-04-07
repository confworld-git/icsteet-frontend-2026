import React from "react";
import "./Deadline.css";
import { Link } from "react-router-dom";
const hardcodedDeadlines = [
  {
    Deadline_Title: "Early_Bird_Registration",
    Date: "28",
    Super_Script: "th",
    Month: "Feb",
    Year: "2026",
  },
  {
    Deadline_Title: "Abstract_Submission",
    Date: "30",
    Super_Script: "th",
    Month: "Apr",
    Year: "2026",
  },
  {
    Deadline_Title: "Full_Paper_Submission",
    Date: "7",
    Super_Script: "th",
    Month: "May",
    Year: "2026",
  },
  {
    Deadline_Title: "Final_Registration",
    Date: "7",
    Super_Script: "th",
    Month: "May",
    Year: "2026",
  },
];

const Deadline = () => {
  return (
    <div className="deadline">
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Submission Deadlines
      </h1>
      <section>
        {hardcodedDeadlines.map((date, index) => (
          <div
            key={index}
            className="Calendar"
            data-aos="zoom-out-up"
            data-aos-anchor-placement="top-bottom"
          >
            <span className="span-one"></span>
            <span className="span-two"></span>
            <p>{date.Deadline_Title.replace(/_/g, " ")}</p>
            <h1>
              {date.Date}
              <span className="th">{date.Super_Script}</span> <br />
              {date.Month} {date.Year}
            </h1>
            <span className="span-three"></span>
            <span className="span-four"></span>
          </div>
        ))}
      </section>

      <div className="bg-white  p-6 max-w-md w-full mx-auto mt-2">
        {/* Title */}
        {/* <h2 className="text-xl font-semibold mb-2">{title}</h2> */}

        {/* Description */}
        {/* <p className="text-gray-600 mb-6">{description}</p> */}

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            to="/Abstract&Full-paper-submission"
            className="flex-1 text-center !text-white py-2 rounded-lg bg-green-600 hover:opacity-90 transition"
          >
            Submit Paper
          </Link>

          <Link
            to="/Registration_Fees"
            className="flex-1 text-center !text-white py-2 rounded-lg bg-blue-600 hover:opacity-90 transition"
          >
            Register Now
          </Link>
        </div>
        
      </div>
      <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        For detailed submission guidelines, please visit the{" "}
        <a href="/Submission_Guidelines">Submission Guidelines Page</a>
      </p>
    </div>
  );
};

export default Deadline;
