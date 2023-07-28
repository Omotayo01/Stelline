import React from "react";
import { useState } from "react";
import "../../LogIn/Style/login.css"
import axios from "../../../api/axios";
import {toast, ToastContainer} from 'react-toastify'
export const Login=()=>{



    const[emailAddress, setEmailAddress] = useState("");
    const[password, setPassword] = useState(null);

    const handleChange= (e)=>{
        if(e.target.name=="emailAddress"){
            setEmailAddress(e.target.value)
        }
        if(e.target.name=="password"){
            setPassword(e.target.value)
        }
    }


    const userRole = (jwtToken)=>{

        const [, payloadBase64] = jwtToken.split('.');
        const payloadJSON = atob(payloadBase64);
        const payload = JSON.parse(payloadJSON);
        const userRoles = payload.roles;


        if(userRoles[0]=="PARENT"){
            localStorage.setItem('parentEmailAddress', emailAddress)
            localStorage.setItem('parentToken', jwtToken);
            window.location.href = "/Dashboard"
        }
        else{
            localStorage.setItem('careTakerEmailAddress', emailAddress)
            localStorage.setItem('careTakerToken', jwtToken);
            window.location.href = "/CareTaker"
        }

  }

  const loginData = {
    "emailAddress": emailAddress,
    "password": password
}


    const userLogin = async ()=>{
        try{
            const response = await axios.post('/auth/login', loginData)
            const jwtToken = response.data.data;
            userRole(jwtToken);

        }
        catch(error){
            toast.error("Invalid Credentials")
            console.log("error", error)
        }
    }


    
    return(
        <>
        <div className="LoginMainContainer">
            <div className="LoginSemiMain">
                Enter Email Address
            <input
            type="email"
            id="emailInput"
            className="LoginEmail"
            placeholder="email@gmail.com"
            minLength={11}
            name="emailAddress"
            onChange={handleChange}
          />
          Enter Password
          <input
              type="password"
              placeholder="enter your password"
            className="LoginEmail"
            name="password"
            onChange={handleChange}
          />
          <div className="LoginEmail1" onClick={userLogin}> Login</div>
            </div>
            </div>
        </>
    )
}