import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../RealRegister/Style/Register.css"
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

  const registerUser = () => {
    toast.success("User registration successful!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

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
        disabled={!isDisabled}
      >
        Continue
      </button>
      <ToastContainer />
        </div>
     
      
    </>
  );
};
