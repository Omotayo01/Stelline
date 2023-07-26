import React from "react";
import "../../BookingHistory/Style/BookingHistory.css"
import { useState,useEffect } from "react";

export const ParentOrderBookingHistory=()=>{
    const bookings = [
        {
          parentFullName: "John Doe",
          numberOfKids: 2,
          parentEmailAddress: "johndoe@example.com",
          careTimeDuration: 4,
          packageTimeDuration: "2 hours",
          Amount :5472837
        },
      
      ];
    
      return (
        <div className="dashboard-container">
          <h1>Booking Information</h1>
          {bookings.map((item, index) => (
            <div className="booking-record" key={index}>
                <div  className="dashboard-content ">
              <div className="order-box1 ">
                <p className="InformationinnerPTag1">Parent Name</p>
                <p className="InformationinnerPTag1">Number of Kids</p>
                <p className="InformationinnerPTag1">Parent Email Address</p>
                <p className="InformationinnerPTag1">Care Time Duration</p>
                <p className="InformationinnerPTag1">Package Time Duration</p>
                <p className="InformationinnerPTag1">Amount</p>
              </div>
              <div className="order-box1 ">
                <p className="InformationinnerPTag1">{item.parentFullName}</p>
                <p className="InformationinnerPTag1">{item.numberOfKids} kid(s)</p>
                <p className="InformationinnerPTag1">{item.parentEmailAddress}</p>
                <p className="InformationinnerPTag1">{item.careTimeDuration} hrs(s)</p>
                <p className="InformationinnerPTag1">{item.packageTimeDuration}</p>
                <p className="InformationinnerPTag1">{item.Amount}</p>

              </div>
              <button className="ParentProceedToPaymentButton">
                Proceed To Make Payment
              </button>
            </div>
            </div>
          ))}
        </div>
      )
    };
