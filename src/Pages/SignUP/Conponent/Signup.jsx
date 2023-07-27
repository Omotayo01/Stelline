import React from "react";
import "../../SignUP/Style/SignUp.css"
export const SignuP=()=>{
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
          />
          <div className="SignUpEmail1" onClick={() => { window.location.href = "/Authentication" }}>Continue</div>
            </div>
        </div>
        </>
    );
}