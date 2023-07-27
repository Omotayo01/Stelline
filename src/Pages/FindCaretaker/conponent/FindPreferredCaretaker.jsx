import React, { useState } from "react";
import "../../FindCaretaker/Style/FindCaretaker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../../api/axios";

const FindPreferredCaretaker = () => {



  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  const [careTimeDuration, setCareTimeDuration] = useState("ONE");
  const [numberOfKids, setNumberOfKids] = useState("");

  const handleNameChange = (e) => {
    if(e.target.name=="firstName"){
    setFirstName(e.target.value);}
    if(e.target.name== "lastName"){
      setLastName(e.target.value)
    }
    // if(e.target.name== "timeDuration"){
    //   setTimeDuration(e.target.value)
    // }
    if(e.target.name=="careTimeDuration"){
      setCareTimeDuration(e.target.value)
    }
    if(e.target.name == "numberOfKids"){
      setNumberOfKids(e.target.value)
    }
  };





  let jsonData = {
    "firstName" : "",
    "lastName": "",
    "numberOfKids" : 0,
    "careTimeDuration": "",
    "timeDuration" : ""
  }

  const emailAddress ="emailAddress11";
  // localStorage.getItem('parentEmailAddress')


//const jwtToken = localStorage.getItem('jwtToken')


  const fetchData = async ()=>{

    jsonData.firstName = firstName;
    jsonData.lastName = lastName;
    jsonData.careTimeDuration = Number(careTimeDuration);
    jsonData.timeDuration = "ONE";
    jsonData.numberOfKids = Number(numberOfKids);

    try{

      console.log(jsonData);
      

    const response = await axios.post(`/careTaker/bookPreferredCareTaker?emailAddress=${encodeURIComponent(emailAddress)}`, jsonData,
    {
     // headers:{Authorization : jwtToken}
    }
    )
    
      .then(response=>{
        console.log(response.data);
        
        console.log(response.data.message);
        const bookCareTakerInfoObject = JSON.stringify(response.data)
        console.log("i got here");
        console.log("i'm ", bookCareTakerInfoObject);
     //   (bookCareTakerInfoObject)
        localStorage.setItem('bookCareTakerInfo', bookCareTakerInfoObject)
       // window.location.href = "/ParentOrderBookingHistory"
        
      })
    }
    catch(error){
        console.log(error);
        console.log("error", error);
        console.log(jsonData.timeDuration);

        //window.location.href ="findPreferredCareTaker"
    }
  }
  




  return (
    <div className="FindCareTakerMain">
      <div className="container">
        <h1>Find Preferred Caretaker</h1>
          <form className="search-form" >
            <input
              type="text"
             name="firstName"
              placeholder="Enter caretaker's first name"
              onChange={handleNameChange}
            />
          
          </form>
          <form className="search-form" >
            <input
              type="text"
              name="lastName"
              placeholder="Enter caretaker's last name"
              onChange={handleNameChange}
            />
          
          </form>

          <form className="search-form" >
            <input
              type="text"
              name="careTimeDuration"
              placeholder="Enter care time duration"
              onChange={handleNameChange}
            />
          
          </form>
          <form className="search-form" >
            <select placeholder="Enter package duration"  name="timeDuration"   >
             <option value="ONE">1 Month</option>
             <option value="TWO">2 Months</option>
              </select>
          
          </form>
          <form className="search-form" >
            <input
              type="text"
              name="numberOfKids"
              placeholder="Enter number of kids"
              onChange={handleNameChange}
            />
          
          </form>
             
              
              <button className="book-caretaker-button" onClick={fetchData} >
                Book Caretaker
              </button>
        <ToastContainer />
      </div>
      </div>
  );
};


export default FindPreferredCaretaker;
