import React from "react";
import "../../ParentBookingHistory/Style/ParentHistory.css"
import { useState , useEffect} from "react";
import axios from "../../../api/axios";




 export const ParentBookingHistory = () => {
    

    const [Records, setRecords] = useState([])
    
    const parentEmailAddress = localStorage.getItem('parentEmailAddress')

    useEffect(()=>{

      const fetchData = async () => {
        try {
          const response = await axios.post
          (`/parentBookedSessions?parentEmailAddress=${encodeURIComponent("emailAddress11")}`);
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
      <div className="Parentdashboard-container">
      
         {Records.map(item => (
        <div key={item.BookingId}>
        <div className="Parentdashboard-header">
          <h1>Welcome, Dear Parent</h1>
          <p>View and manage your orders here.</p>
        </div>
        <div className="Parentdashboard-content">
          <div className="Parentorder-box">
          <p className="ParentinnerPTag1">Parent Name</p>
                <p className="ParentinnerPTag1">Number of Kids</p>
                <p className="ParentinnerPTag1">Parent Email Address</p>
                <p className="ParentinnerPTag1">Care Time Duration</p>
                <p className="ParentinnerPTag1">Package Time Duration</p>
                <p className="ParentinnerPTag1">Care Giver's Email</p>
              </div>
              <div className="order-box1 ">
                <p className="ParentinnerPTag1">{item.parentFullName}</p>
                <p className="ParentinnerPTag1">{item.numberOfKids +"kid(s)"}</p>
                <p className="ParentinnerPTag1">{item.parentEmailAddress}</p>
                <p className="ParentinnerPTag1">{item.careTimeDuration +"hrs(s)"} </p>
                <p className="ParentinnerPTag1">{item.TimeDuration}</p>
                <p className="ParentinnerPTag1">{item.careTakerEmailAddress}</p>
          </div>
          
        </div>
        </div>

              ))}

      </div>
    );
  };
