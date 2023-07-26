import React from "react";
import "../../CareTakerBookingHistory/Style/CareTakerBookingHistory.css"
import { useState } from "react";
 export const CareTakerBookingHistory = () => {
    

    const [Records, setRecords] = useState([])
    
    const careTakerEmailAddress = "emailAddress3"
    return (
      <div className="CareTakerdashboard-container">
        jgyhgfv
         {Records.map(item => (
        <div key={item.BookingId}>
        <div className="CareTakerdashboard-header">
          <h1>Welcome, Caretaker!</h1>
          <p>View and manage your orders here.</p>
        </div>
        <div className="CareTakerdashboard-content">
          <div className="CareTakerorder-box">
          <p className="CareTakerinnerPTag1">Parent Name</p>
                <p className="CareTakerinnerPTag1">Number of Kids</p>
                <p className="CareTakerinnerPTag1">Parent Email Address</p>
                <p className="CareTakerinnerPTag1">Care Time Duration</p>
                <p className="CareTakerinnerPTag1">Package Time Duration</p>
              </div>
              <div className="CareTakerorder-box1 ">
                <p className="CareTakerinnerPTag1">{item.parentFullName}</p>
                <p className="CareTakerinnerPTag1">{item.numberOfKids} kid(s)</p>
                <p className="CareTakerinnerPTag1">{item.parentEmailAddress}</p>
                <p className="CareTakerinnerPTag1">{item.careTimeDuration} hrs(s)</p>
                <p className="CareTakerinnerPTag1">{item.packageTimeDuration}</p>
          </div>
          
        </div>
        </div>

              ))}

      </div>
    );
  };
