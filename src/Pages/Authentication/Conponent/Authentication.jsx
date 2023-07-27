import React from "react";
import "../../Authentication/Style/Authentication.css"
export const Authentication=()=>{
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
            name="emailAddress"
          />
          <div className="AuthenticationEmail1"> Verify</div>
          <div className="AuthenticationEmail1">Continue</div>
            </div>
            </div>
        </>
    )
}