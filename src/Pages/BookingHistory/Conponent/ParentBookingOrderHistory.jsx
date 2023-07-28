import React from "react";
import "../../BookingHistory/Style/BookingHistory.css"
import { useState,useEffect } from "react";

export const ParentOrderBookingHistory=()=>{
    // const bookings = [
    //     {
    //       parentFullName: "John Doe",
    //       numberOfKids: 2,
    //       parentEmailAddress: "johndoe@example.com",
    //       careTimeDuration: 4,
    //       packageTimeDuration: "2 hours",
    //       Amount :5472837
    //     },
      
    //   ];
    const bookings = JSON.parse(localStorage.getItem('bookCareTakerInfo'))

      return (
        <div className="dashboard-container">
          <h1>Booking Information</h1>
          {/* {bookings.map((item, index) => ( */}
          {/* key={index} */}
          
                     {bookings.message}
            <div className="booking-record">
                <div  className="dashboard-content ">
              <div className="order-box1 ">
                <p className="InformationinnerPTag1">Parent Name</p>
                <p className="InformationinnerPTag1">Number of Kids</p>
                <p className="InformationinnerPTag1">Care Giver Email Address</p>
                <p className="InformationinnerPTag1">Care Time Duration</p>
                <p className="InformationinnerPTag1">Package Time Duration</p>
                <p className="InformationinnerPTag1">Amount</p>
              </div>
              <div className="order-box1 ">
                <p className="InformationinnerPTag1">{bookings.parentFullName}</p>
                <p className="InformationinnerPTag1">{bookings.numberOfKids} kid(s)</p>
                <p className="InformationinnerPTag1">{bookings.careTakerEmailAddress}</p>
                <p className="InformationinnerPTag1">{bookings.careTimeDuration} hrs(s)</p>
                <p className="InformationinnerPTag1">{bookings.timeDuration}</p>
                <p className="InformationinnerPTag1">{bookings.amount}</p>

              </div>
              <button className="ParentProceedToPaymentButton">
                Proceed To Make Payment
              </button>
              <button className="ParentProceedToPaymentButton" onClick={()=>{window.location.href="/DashBoard"}}>
                GoTo Dashboard
              </button>
            </div>
            </div>
          {/* ))} */}
        </div>
      )
    };
