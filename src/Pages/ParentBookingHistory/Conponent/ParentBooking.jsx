import React from "react";
import "../../ParentBookingHistory/Style/ParentHistory.css"
import { useState } from "react";
 export const ParentBookingHistory = () => {
    

    const [Records, setRecords] = useState([])
    
    const careTakerEmailAddress = "emailAddress3"
    return (
      <div className="Parentdashboard-container">
        jgyhgfv
         {Records.map(item => (
        <div key={item.BookingId}>
        <div className="Parentdashboard-header">
          <h1>Welcome, Caretaker!</h1>
          <p>View and manage your orders here.</p>
        </div>
        <div className="Parentdashboard-content">
          <div className="Parentorder-box">
          <p className="ParentinnerPTag1">Parent Name</p>
                <p className="ParentinnerPTag1">Number of Kids</p>
                <p className="ParentinnerPTag1">Parent Email Address</p>
                <p className="ParentinnerPTag1">Care Time Duration</p>
                <p className="ParentinnerPTag1">Package Time Duration</p>
              </div>
              <div className="order-box1 ">
                <p className="ParentinnerPTag1">{item.parentFullName}</p>
                <p className="IParentinnerPTag1">{item.numberOfKids} kid(s)</p>
                <p className="ParentinnerPTag1">{item.parentEmailAddress}</p>
                <p className="ParentinnerPTag1">{item.careTimeDuration} hrs(s)</p>
                <p className="ParentinnerPTag1">{item.packageTimeDuration}</p>
          </div>
          
        </div>
        </div>

              ))}

      </div>
    );
  };
