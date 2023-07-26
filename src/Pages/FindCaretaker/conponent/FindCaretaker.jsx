import React, { useState } from "react";
import "../../FindCaretaker/Style/FindCaretaker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FindCaretaker = () => {
  return (
    <div className="FindCareTakerMain">
      <div className="container">
        <h1>Find Preferred Caretaker</h1>
          <form className="search-form" >
            <input
              type="text"
             
              placeholder="Enter caretaker's first name"
            />
          
          </form>
          <form className="search-form" >
            <input
              type="text"
              placeholder="Enter caretaker's last name"
            />
          
            
          </form>
             
              
              <button className="book-caretaker-button" >
                Book Caretaker
              </button>
        <ToastContainer />
      </div>
      </div>
  );
};


export default FindCaretaker;
