import React from 'react';
import '../Style/WorkHistory.css';
import {useState, useEffect} from 'react';
import axios from '../../../api/axios';


export const CareTakerWorkHistory = () => {

    const [records, setRecords] = useState([])
    const careTakerEmailAddress = localStorage.getItem('careTakerEmailAddress')


    useEffect(()=>{

        const fetchData = async () => {
          try {
            const response = await axios.post
            (`/careTakerWorkHistory?careTakerEmailAddress=${encodeURIComponent(careTakerEmailAddress)}`);
            console.log("i'm here");
            const responseWorkObject = response.data;
            console.log(response.request);
            console.log(responseWorkObject);
            setRecords(responseWorkObject);
  
          } catch (error) {
            console.log(error);
          }
        };
  
        fetchData()
  
      }, [])
      


  return (
    <div className="time-records">

        <h1>Track Your Work History</h1>

      {records.map((record, index) => (
        <div key={index} className="record">
          <div className="time">{record.clockIn} clockedIn</div>
          <div className="time">{record.clockOut} clockOutTime</div>
        </div>
      ))}
    </div>
  );
};


