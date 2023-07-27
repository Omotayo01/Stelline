import React from "react";
import "../../LogIn/Style/login.css"
export const Login=()=>{






    
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
          />
          Enter Password
          <input
              type="password"
              placeholder="enter your password"
            className="LoginEmail"
            name="password"
          />
          <div className="LoginEmail1"> Login</div>
            </div>
            </div>
        </>
    )
}