import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../RealRegister/Style/Register.css"
import axios from "../../../api/axios";
export const Register = () => {


  const [selectedAccount, setSelectedAccount] = useState("");
  const [genderType, setGenderType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "userType") {
      setSelectedAccount(value);
    } else if (name === "gender") {
      setGenderType(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPass") {
      setConfirmPassword(value);
    }
  };


  const emailAddress = localStorage.getItem('emailAddress')

  const data = {
    "emailAddress" : emailAddress,
    "password" : password,
    "userCategory" : selectedAccount,
    "genderType": genderType
   
  }
  console.log(data)

  // const handleContinue =()=>{
  //   if (confirmPassword === password){
  //     setIsDisabled(false);
  //   }
  //   else{
  //     setIsDisabled(true);
  //   } 
  // }
   const saveToken = (token) => {
    localStorage.setItem('jwtToken', token);
  };
  const getToken = ()=>{
    return localStorage.getItem('jwtToken')
  }



  const userRole = (jwtToken)=>{
       
        const [, payloadBase64] = jwtToken.split('.');
        const payloadJSON = atob(payloadBase64);
        const payload = JSON.parse(payloadJSON);
        const userRoles = payload.roles; 
    
        
        if(userRoles[0]=="PARENT"){
          localStorage.setItem('parentEmailAddress', emailAddress)
        
          localStorage.setItem('parentToken', jwtToken)
        console.log(userRoles);

        window.location.href = "/Dashboard"
        }

        else{
          localStorage.setItem('careTakerEmailAddress', emailAddress)
          localStorage.setItem('careTakerToken', jwtToken)
          window.location.href = "/CareTaker"
        }
      
      }

      const registerUser = async ()=>{
        
        try{
          const response = await axios.post('/auth/register', data)
         const jwtToken = response.data.data;
         toast.success("Registration successful")
          userRole(jwtToken);
         
       
        }

        catch(error){
          toast.error("Registration Failed!!! \n Invalid Credentials")
          console.error("Error : " , error)
        }

      }

  const isDisabled = selectedAccount && genderType && password && password === confirmPassword;

  return (
    <>
        <div className="RegisterSemiMain">
          <label htmlFor="AccountType">Select Account Type:</label>
          <select
            id="AccountType"
            name="userType"
            value={selectedAccount}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="PARENT">Parent</option>
            <option value="CARETAKER">CareTaker</option>
          </select>
          <br />
          <label htmlFor="gender">Select Gender :</label>
          <select
            id="genderType"
            name="gender"
            value={genderType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>

          <div className="real3">
            <p className="RealT">Enter Password</p>
            <input
              type="password"
              name="password"
              className="Real"
              value={password}
              placeholder="password"
              onChange={handleChange}
            />
          </div>
          {/* <p className="RealT">Confirm Password</p>
          <input
            type="password"
            id="password"
            className="Real"
            value={confirmPassword}
            placeholder="password"
            onChange={handleChange}
          /> */}
             <button
        type="submit"
        className="RealContinue"
        onClick={registerUser}
      >
        Continue
      </button>
      <ToastContainer />
        </div>
     
      
    </>
  );
};
