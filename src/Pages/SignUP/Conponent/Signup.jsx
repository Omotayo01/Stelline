import React from "react";
import {useState} from 'react'
import "../../SignUP/Style/SignUp.css"
import axios from "../../../api/axios";
import {toast, ToastContainer} from "react-toastify";


export const SignuP=()=>{

        const [emailAddress, setEmailAddress] = useState("");
        const [isButtonVisible, setIsButtonVisible] = useState(false);
      
        const handleEmailChange = (e) => {
            if(e.target.name == "emailAddress"){
          setEmailAddress(e.target.value);
          setIsButtonVisible(e.target.value.includes("@gmail.com"));
            }
        };
      
        const handleFormSubmit = async () => {
          try {
            const response = await axios.post(
              `/verifyEmail/sendOtp?emailAddress=${encodeURIComponent(
                emailAddress
              )}`
            );
            if (response.data.successful === true) {
              toast.success("OTP sent successfully!"); 
              window.location.href = "/Authentication";
            } else {
              toast.error("Error: " + response.data); 
            }
          } catch (error) {
            toast.error("Error: " + error.message); 
            console.error("AxiosError:", error);
            console.error("Network Error Details: ", error.request);
          }
        };
      
    return(
        <>
        <div className="SignUPMainContainer">
            <div className="SignUPSemiMainContainer">
            Enter Email Address
            <input
            type="email"
            id="emailInput"
            className="SignUpEmail"
            placeholder="email@gmail.com"
            minLength={11}
            name="emailAddress"
            onChange={handleEmailChange}
          />
          <div className="SignUpEmail1" onClick={() => {    localStorage.setItem("emailAddress", emailAddress);
           handleFormSubmit()}} 
           disabled={!isButtonVisible}
           >Continue</div>
            </div>
        </div>
        </>
    );
}