import React from "react";
import "../../LandingPage/Style/LandingPage.css";
export const LandingPage=()=>{
    return(
        <>
        <div className="LandingPage">
            <div className="LandingPageTopNav">
            <div className="LandingPageTopNavText">
                <li onClick={() => { window.location.href = "/SignUp" }}> SignUp</li>
                <li onClick={() => { window.location.href = "/Login" }}>LogIn</li>
                <li>Contact</li>
                <li>AboutUs</li>
                </div>
            </div>
        <div className="LandingPageMainContainer">
                <div className="BlueBox">
                    <h1 className="LandingPageBigText">Imagine</h1>
                    <h2 className="LandingPageBigText2">a caregiver who doesn't just "watch" <p>over your child but truly becomes a</p> part of their world </h2>
                    <div className="LandingPageBlackButton">
                    Find a CareTaker
                    </div>
                </div>
                <div className="ImageBox"> </div>
        </div>
        </div>
        </>
    )
}