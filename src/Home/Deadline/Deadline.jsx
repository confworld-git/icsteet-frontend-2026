import React from "react";
import "./Deadline.css";

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
      <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        For detailed submission guidelines, please visit the{" "}
        <a href="/Submission_Guidelines">Submission Guidelines Page</a>
      </p>
    </div>
  );
};

export default Deadline;
