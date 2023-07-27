
import React, { useState, useEffect } from "react";
import "../../ClockIn/Style/ClockInOut.css"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClockInOut = () => {
  const [clockedIn, setClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState("");
  const [clockOutTime, setClockOutTime] = useState("");

  useEffect(() => {
    const storedClockInTime = localStorage.getItem("clockInTime");
    const storedClockOutTime = localStorage.getItem("clockOutTime");

    if (storedClockInTime) {
      setClockInTime(storedClockInTime);
      setClockedIn(true);
    }

    if (storedClockOutTime) {
      setClockOutTime(storedClockOutTime);
      setClockedIn(false);
    }
  }, []);

  const handleClockInOut = () => {
    if (clockedIn) {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setClockOutTime(formattedTime);
      localStorage.setItem("clockOutTime", formattedTime);
      setClockedIn(false);

      toast.success("Successfully Clocked Out!", {
        position: toast.POSITION.TOP_CENTER,
        color: toast.black,
      });
    } else {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setClockInTime(formattedTime);
      localStorage.setItem("clockInTime", formattedTime);
      setClockedIn(true);

      toast.success("Successfully Clocked In!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="ClockMain">
    <div className="Clockcontainer">
      <h1>Clock In / Clock Out</h1>
      <div className="clock-info">
        {clockedIn ? (
          <p>Currently Clocked In: {clockInTime}</p>
        ) : (
          <p>Currently Clocked Out</p>
        )}
        {clockedIn && (
          <button className="clock-out-btn" onClick={handleClockInOut}>
            Clock Out
          </button>
        )}
        {!clockedIn && (
          <button className="clock-in-btn" onClick={handleClockInOut}>
            Clock In
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
    </div>
  );
};

export default ClockInOut;
