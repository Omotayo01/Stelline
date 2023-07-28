import React from "react";
import {useState} from 'react';
import "../../Authentication/Style/Authentication.css"
import axios from "../../../api/axios";
import {toast, ToastContainer} from 'react-toastify';

export const Authentication=()=>{

   
    const [otp, setOtp] = useState("");

    function handleChange(e){
    setOtp(e.target.value)
}

const confirmOtp = async ()=>{
    try{
    const response = await axios.post(`/verifyEmail/sendOtp/confirmOtp?otp=${encodeURIComponent(otp)}`);
    if(response.data.successful==true){
    window.location.href = "/Register";
    }
    else{
    toast.error("Invalid Otp")
    }
    } catch(error){
    console.error("AxiosError:", error);
    console.error("Network Error Details: ", error.request)}
    
    }




    return(
        <>
        <div className="AuthenticationMainContainer">
            <div className="AuthenticationSemiMain">
                Enter Otp
            <input
            type="digit"
            id="emailInput"
            className="AuthenticationEmail"
            minLength={11}
            name="otp"
            onChange={handleChange}
          />
          <div className="AuthenticationEmail1" onClick={confirmOtp}> Verify</div>
          <div className="AuthenticationEmail1">Continue</div>
            </div>
            </div>
        </>
    )
}