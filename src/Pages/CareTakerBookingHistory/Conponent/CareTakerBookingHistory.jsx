import React from "react";
import "../../CareTakerBookingHistory/Style/CareTakerBookingHistory.css"
import { useState, useEffect } from "react";
import axios from "../../../api/axios";


 export const CareTakerBookingHistory = () => {
    

    const [records, setRecords] = useState([]);
  

     console.log("I got here");

    useEffect(()=>{

      const fetchData = async () => {
        try {
          const response = await axios.post
          (`/careTakerBookedSessions?careTakerEmailAddress=${encodeURIComponent("emailAddress9")}`);
          console.log("i'm here");
          const responseObject = response.data;
          console.log(response.request);
          console.log(responseObject);
          setRecords(responseObject);

        } catch (error) {
          console.log(error);
        }
      };

      fetchData()

    }, [])
    
    
    return (
      <div className="CareTakerdashboard-container">
          uiyekujjk

         {records.map(item => (
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
                <p className="CareTakerinnerPTag1">Care Giver Email</p>
              </div>
              <div className="CareTakerorder-box1 ">
                <p className="CareTakerinnerPTag1">{item.parentFullName}</p>
                <p className="CareTakerinnerPTag1">{item.numberOfKids} kid(s)</p>
                <p className="CareTakerinnerPTag1">{item.parentEmailAddress}</p>
                <p className="CareTakerinnerPTag1">{item.careTimeDuration} hrs(s)</p>
                <p className="CareTakerinnerPTag1">{item.TimeDuration}</p>
                <p className="CareTakerinnerPTag1">{item.careTakerEmailAddress}</p>
          </div>
          
        </div>
        </div>

              ))}

      </div>
    );
  };
