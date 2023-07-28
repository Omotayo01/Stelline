import React, { useState } from "react";
import axios from "../../../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../ClockInAndOut/Style/clockInAndOut.css";

export const ClockInOut = () => {
  const [status, setStatus] = useState("");
  const [clockedIn, setClockedIn] = useState(false);

  const emailAddress = localStorage.getItem('emailAddress');

  const handleClockIn = () => {
    axios
      .post(`/careTaker/clockIn?careTakerEmailAddress=${encodeURIComponent(emailAddress)}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          setClockedIn(true);
          setStatus("in");
          toast.success("Clock in successful!");
        } else {
          toast.error("Clock in failed. Please try again.");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while clocking in. Please try again.");
      });
  };

  const handleClockOut = () => {
    axios
      .post(`/careTaker/clockOut?careTakerEmailAddress=${encodeURIComponent(emailAddress)}`)
      .then((response) => {
        if (response.status === 200) {
          setClockedIn(false);
          setStatus("out");
          toast.success("Clock out successful!");
        } else {
          toast.error("Clock out failed. Please try again.");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while clocking out. Please try again.");
      });
  };

  return (
    <div className="clock-container">
      <div className={`status-box ${status === "in" ? "status-in" : "status-out"}`}>
        <div className="ClockMain">
          {status === "in" ? "IN" : "OUT"}
        </div>

        <div className="buttons-container">
          <button
            className={`clock-in-button ${clockedIn ? "inactive" : ""}`}
            onClick={handleClockIn}
            disabled={clockedIn}
          >
            {clockedIn ? "Clocked In" : "Clock In"}
          </button>
          <button
            className={`clock-out-button ${clockedIn ? "" : "inactive"}`}
            onClick={handleClockOut}
            disabled={!clockedIn}
          >
            {clockedIn ? "Clock Out" : "Clocked Out"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

//export default ClockInOut;