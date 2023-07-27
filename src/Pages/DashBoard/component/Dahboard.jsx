import React, { useState } from "react";
import "../../Dashboard/Style/Dashboard.css";

export const Dashboard = () => {
  const [showChildModal, setShowChildModal] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [preferredCareTakerFirstName, setPreferredCareTakerFirstName] = useState("");
  const[preferredCareTakerLastName, setPreferredCareTakerLastName] = useState("");
  const [displayMessage, setDisplayMessage] = useState('');

  const openChildModal = () => {
    setShowChildModal(true);
    setShowSidebar(false);
  };

  const closeChildModal = () => {
    setShowChildModal(false);
    setShowSidebar(true);
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    window.location.href = "/";
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };




   const bookPreferredCareTaker = async()=>{
    
   const preferredCareTakerFirstDetails = {
    "firstName" : preferredCareTakerFirstName,
    "lastName" : preferredCareTakerLastName
     }

     const jwtToken = localStorage.getItem('jwtToken')

     try{
      const parentEmailAddress = localStorage.getItem('parentEmailAddress')
      const response = 
      
      {
        headers: {   "authorization": jwtToken}
      }
        if(response.data.successful === true){
          setDisplayMessage(response.data.data)
        }
        else{
          setDisplayMessage(response.data.data)
        }
     }
     catch(error){
      alert(error)
     }
   }
  return (
    <div className="Dashboard">
      
      {showSidebar && (
        <div className="aside">
           <div className="dp"></div>
           <div className="realLi">
          <li  onClick={() => { window.location.href = "/UpdateUserProfile"; }}>profile</li>
          <li onClick={() => { window.location.href = "/BookingRecords"; }}>Check booking(s)</li>
          <li onClick={handleLogout}>logOut</li>
          <li onClick={() => { window.location.href = "/report"; }} >Report A problem</li>
          </div>
        </div>
      )}

      <div className="board">
        <div className="boardInner">
          <div className="bibox">
          <div class="Dashboardbackground-image">
</div>
            <button className="addButton"  onClick={() => { window.location.href = "/AddChild"; }}>
              add a child
            </button>
          </div>
          <div className="bibox1">
          <div class="Dashboardbackground-image1">
</div>
            <button className="addButton"onClick={()=>{window.location.href="/Information"}} >
              find CareTaker
            </button>
          </div>
        </div>
        <div className="boardInner">
          <div className="bibox2">
          <div class="Dashboardbackground-image2">
</div>
            <button className="addButton"onClick={() => { window.location.href = "/Preferred"; }} >Find preferred CareTaker</button>
          </div>
          <div className="bibox3">
          <div class="Dashboardbackground-image3">
</div>
            <button className="addButton">Parenting advice</button>
          </div>
        </div>
      </div>

      {showChildModal && (
        <div className="smallPageAddChild">
          <button className="close" onClick={closeChildModal}>
          ✖️Close
          </button>
          <h2>Enter Caretaker<br></br> gender</h2>
          <label htmlFor="name"> </label><br></br>
          <select id="gender">
            <option value="">Select</option>
            <option value="Parent">female</option>
            <option value="Caretaker">male</option>
          </select>
         {/* First Name : <input className="special" name="preferredCareTakerFirstName"  onChange={handleName}></input>
          Last Name : <input className="special" name="preferredCareTakerLastName" onChange={handleName}></input> */}
          <button className="Find"onClick={() => { window.location.href = "/Payment"; }} 
          // onClick={bookPreferredCareTaker}
          >find</button>
        </div>
      )}

      {showLogoutConfirmation && (
        <div className="notification">
          <h3>Are you sure you want to log out?</h3>
          <div className="confirmationButtons">
            <button className="yesButton" onClick={confirmLogout}>
              Yes
            </button>
            <button className="noButton" onClick={cancelLogout}>
              No
            </button>
          </div>
        </div>
      )}

      {!showSidebar && (
        <div className="sidebarToggle" onClick={toggleSidebar}>
          ❮
        </div>
      )}
    </div>
  );
};





