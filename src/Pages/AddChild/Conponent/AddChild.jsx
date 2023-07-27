import React, { useState } from "react";
import "../../AddChild/Style/AddChild.css"; 

export const AddChild = () => {
  const [childInfo, setChildInfo] = useState({
    childName: "",
    dateOfBirth: "",
    parentName: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Child Info:", childInfo);
  };

  return (
    <div className="MainContainer">
    <div className="container">
      <h1>Add a Child</h1>
      <form className="child-form" onSubmit={handleSubmit}>
        <label htmlFor="childName">Child's Name:</label>
        <input
          type="text"
          id="childName"
          name="childName"
          value={childInfo.childName}
          onChange={handleChange}
          required
        />

        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={childInfo.dateOfBirth}
          onChange={handleChange}
          required
        />

        <label htmlFor="parentName">Parent's Name:</label>
        <input
          type="text"
          id="parentName"
          name="parentName"
          value={childInfo.parentName}
          onChange={handleChange}
          required
        />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={childInfo.contactNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Child</button>
      </form>
    </div>
    </div>
  );
};

