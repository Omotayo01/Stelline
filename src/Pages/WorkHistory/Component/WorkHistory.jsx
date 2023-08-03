// WorkHistory.js
import React, { useEffect, useState } from "react";
import "../../WorkHistory/Style/WorkHistory.css";

const WorkHistory = () => {
  const [clockInOutHistory, setClockInOutHistory] = useState([]);

  const numOfClockIns = clockInOutHistory.filter(
    (entry) => entry.type === "clock_in"
  ).length;

  return (
    <div className="work-history-Main">
            <h1>Work History</h1>

    <div className="work-history-container">
      <p>Total Clock Ins: {numOfClockIns}</p>
      <ul>
        {clockInOutHistory.map((entry, index) => (
          <li key={index}>
            {entry.type === "clock_in" ? "Clock In: " : "Clock Out: "}
            {entry.timestamp}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default WorkHistory;
