import React from "react";
import { useState } from "react";
import "../../CareTaker/style/CareTaker.css"

export const CareTaker=()=>{
 const [showChildModal, setShowChildModal] = useState(false);

const openChildModal = () => {
  setShowChildModal(true);
};

const closeChildModal = () => {
  setShowChildModal(false);
};

return (
  <div className="Dashboard1">
    {!showChildModal && (
      <div className="aside1">
        <div className="dp1"></div>
        <li onClick={() => {window.location.href = "/UpdateUserProfile";
        }}> profile</li>
        <li> Location</li>
        <li onClick={() => {
        window.location.href = "/";
      }}>logOut</li>
          <li onClick={() => { window.location.href = "/report"; }} >Report A problem</li>
      </div>
    )}

    <div className="board1">
      <div className="boardInner1">
        <div className="biboxx11">
        <div class="background-image">
</div>
          <button className="addButton1" onClick={() => {
        window.location.href = "/BookingRecords";
      }}>Check work history
       </button>
        </div>
        <div className="biboxx1">
        <div class="background-image2">
</div>
          <button className="addButton1" onClick={() => {
        window.location.href = "/ClockInOut";
      }}>Clock In/Clock out</button>
        </div>
      </div>
      <div className="boardInner1">
        <div className="biboxx21">
        <div class="background-image1">
</div>
          <button className="addButton1" onClick={() => { window.location.href = "/CareTakerBookingHistory"; }}>Booking History</button>
        </div>
        <div className="biboxx31">
        <div class="background-image3">
</div>
          <button className="addButton1">Add payment detail</button>
        </div>
      </div>
    </div>

    {showChildModal && (
      <div className="smallPageAddChild1">
      <button  className=" close1"onClick={closeChildModal}>✖️Close</button>
        <h2>Enter CareTaker gender</h2>
        <label htmlFor="Gender">Select gender:</label>
          <select id="gender" >
            <option value="">Select</option>
            <option value="Parent">female</option>
            <option value="Caretaker">male</option>
          </select>
          <button className="Find1">find</button>
      </div>
    )}
  </div>
    );
}


function Page() {
  fetch('/redirect')
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Failed to fetch');
    })
    .then(data => {
      window.location.href = data; 
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
