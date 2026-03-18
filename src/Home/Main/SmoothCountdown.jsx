import React, { useEffect, useState } from "react";
// import "./Countdown.css";

// const translateY = (value - 1) * 40
const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <TimeColumn label="DAYS" value={timeLeft.days} max={365} />
      <span className="colon">:</span>
      <TimeColumn label="HOURS" value={timeLeft.hours} max={24} />
      <span className="colon">:</span>
      <TimeColumn label="MINUTES" value={timeLeft.minutes} max={60} />
      <span className="colon">:</span>
      <TimeColumn label="SECONDS" value={timeLeft.seconds} max={60} />
    </div>
  );
};
// const translateY = (value - 1) * 40;

const TimeColumn = ({ label, value, max }) => {
  const heightPerItem = 40; // px
  const translateY = (value - 1) * heightPerItem;

  return (
    <div className="time-column">
      <div className="label">{label}</div>
      <div className="number-scroll">
        <div
          className="number-list"
          style={{ transform: `translateY(-${translateY}px)` }}
        >
          {Array.from({ length: max }).map((_, i) => (
            <div key={i} className={`number ${i === value ? "active" : ""}`}>
              {String(i).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getTimeRemaining = (endTime) => {
  const total = Date.parse(endTime) - Date.now();
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
  return { days, hours, minutes, seconds };
};

export default Countdown;
