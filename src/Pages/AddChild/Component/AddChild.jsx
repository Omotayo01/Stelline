import React, { useState } from "react";
import "../../AddChild/Style/AddChild.css"; 
import axios from "../../../api/axios";
import { toast, ToastContainer } from "react-toastify";

export const AddChild = () => {
  const [childData, setChildInfo] = useState({
    // childName: "",
    // dateOfBirth: "",
    // parentName: "",
    // contactNumber: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    specialNeedCategory: "",
    specialNeedDescription: "",
    homeAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 3);
  const maxDate = currentDate.toISOString().split("T")[0];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Child Info:", childData);
  // };

  const emailAddress = localStorage.getItem('parentEmailAddress')
    
  // useEffect(() => {
  //     const requiredFields = [
  //         "firstName",
  //         "lastName",
  //         "gender",
  //         "dateOfBirth",
  //         "specialNeedCategory",
  //         "homeAddress",
  //     ];
  //     const filled = requiredFields.every((field) => !!childData[field]);
  //     setAreFieldsFilled(filled);

  // }, [childData]);




  const handleSubmit = async (event) => {
      event.preventDefault();

      console.log(childData);
      const jwtToken = localStorage.getItem("parentToken");
      console.log(jwtToken);
      

      try{
          const response = await axios.post(`/parent/addChild?parentEmail=${encodeURIComponent(emailAddress)}`, 
          childData, 
          {headers : {
              "Authorization": jwtToken
          }
          
      })
     console.log(jwtToken)
          console.log("response:", response.data);
          if(response.data.successful===true){
              toast.success(response.data.data)
          console.log(response.data.data);
          window.location.href = "/Dashboard";
      }    
      else{
          console.log(response.data.data)
          console.log(response.data);
          toast.success(response.data.data)
      
          window.location.href = "/AddChild"

      }
      }
      catch(error){
          console.log(error)
          console.log(error);
          window.location.href = "/AddChild"
      }

  };
 

  return (
    <div className="MainContainer">
    <div className="container">
      <h1>Add a Child</h1>
      <form className="child-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
            type="text"
            id="firstName"
            name="firstName"
            value={childData.firstName}
            onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
            type="text"
            id="lastName"
            name="lastName"
            value={childData.lastName}
            onChange={handleChange}
        />

        <label htmlFor="sex">Gender:</label>
        <select
            type="text"
            id="sex"
            name="sex"
            value={childData.gender}
            onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={childData.dateOfBirth}
            onChange={handleChange}
            max={maxDate}
        />

        <label htmlFor="specialNeedCategory">Special Need Category:</label>
        <select
            type="text"
            id="specialNeedCategory"
            name="specialNeedCategory"
            value={childData.specialNeedCategory}
            onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>

        <label htmlFor="specialNeedDescription">Special Need Description:</label>
        <input
            type = "text"
            id="specialNeedDescription"
            name="specialNeedDescription"
            value={childData.specialNeedDescription}
            onChange={handleChange}
        />

        <label htmlFor="homeAddress">Home Address:</label>
        <input
            type = "text"
            id="homeAddress"
            name="homeAddress"
            value={childData.homeAddress}
            onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>Add Child</button>
      </form>
    </div>
    <ToastContainer/>
    </div>
  );
};





