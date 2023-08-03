import React, { useState } from "react";
import "../Style/SearchForCareTaker.css"
import axios from "../../../api/axios";
import { toast, ToastContainer } from "react-toastify";

const SearchCareTaker=()=>{

    const [numberOfKids, setNumberOfKids] = useState();
    const [packageDuration, setPackageDuration] = useState();
    const[gender, setGender] = useState("");
    const[careTimeDuration, setCareTimeDuration] = useState("");


    // const [bookCareTakerInfo, setBookCareTakerInfo] = useState({});

    const handleChange = (e)=>{

        if(e.target.name == "numberOfKids"){
            setNumberOfKids(e.target.value)
        }
        if(e.target.name == "packageDuration"){
            setPackageDuration(e.target.value)
        }
        if(e.target.name == "gender"){
            setGender(e.target.value)
        }
        if(e.target.name== "careTimeDuration"){
            setCareTimeDuration(e.target.value)
        }

    }


    const emailAddress = localStorage.getItem('parentEmailAddress');



    // localStorage.setItem('numberOfKids', numberOfKids);
    // localStorage.setItem('packageDuration', packageDuration);
    // localStorage.setItem('gender', gender);
    // localStorage.setItem('careTimeDuration', careTimeDuration);



    const fetchData = async ()=>{




        // const numberOfKids = localStorage.getItem('numberOfKids')
        // const packageDuration = localStorage.getItem('packageDuration')
        // const careTimeDuration = (localStorage.getItem('careTimeDuration'))
        // const gender = localStorage.getItem('gender')


        const jwtToken = localStorage.getItem('jwtToken')


        const jsonData = {
            "numberOfKids" : "",
            "timeDuration": "",
            "genderType": "",
            "careTimeDuration": ""
        }


        jsonData.careTimeDuration = Number(careTimeDuration);
        jsonData.genderType = gender;
        jsonData.numberOfKids = Number(numberOfKids);
        jsonData.timeDuration = packageDuration;


        try{
            const response =  await axios.post(`/bookCareTaker?parentEmailAddress=${encodeURIComponent(emailAddress)}`, jsonData,
                {
                    headers: {   "authorization": jwtToken}
                }
            )
                .then(response=>{
                    console.log(response.data)
                    const bookCareTakerInfoObject = JSON.stringify(response.data)
                    localStorage.setItem('bookCareTakerInfo', bookCareTakerInfoObject)
                    toast.success("Successful")
                    window.location.href = "/ParentOrderBookingHistory"
                })

        }

        catch(error){

            toast.error("Unsuccessful, please ensure to fill all fields")
            console.error("Error : " , error)
            window.location.href = "/SearchCareTaker"
        }

    };


    return(
        <>
            <div className="InformationMain">
                <div className="InformationSemiMain" >
                    <li>enter number of kids</li>
                    <select
                        className="InformationText" name="numberOfKids" onChange={handleChange}>
                        <option >Select</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                    <li>enter package duration</li>
                    <select
                        className="InformationText" name="packageDuration" onChange={handleChange}>
                        <option value="">Select</option>
                        <option  value="ONE">1 Month</option>
                        <option value="TWO" >2 Months</option>
                        <option  value="THREE">3 Months</option>
                        <option  value="FOUR">4 Months</option>
                        <option value="FIVE">5 Months</option>
                        <option value="SIX">6 Months</option>
                        <option value="SEVEN">7 Months</option>
                        <option value="EIGHT">8 Months</option>
                        <option value="NINE">9 Months</option>
                        <option  value="TEN">10 Months</option>
                        <option  value="ELEVEN">11 Months</option>
                        <option  value="TWELVE">12 Months</option>

                    </select>
                    <li>enter gender</li>
                    <select
                        className="InformationText" name="gender" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="FEMALE">female</option>
                        <option value="MALE">male</option>
                    </select>
                    <li> enter Care Time Duration</li>

                    <input
                        type="text"
                        className="InformationText1"
                        placeholder="enter Care Time Duration"
                        minLength={11}
                        name="careTimeDuration"
                        onChange={handleChange}
                    />
                    <button  className="pai" onClick={fetchData}>Submit</button>
                </div>

            </div>
            <ToastContainer/>
        </>
    )
}
export default SearchCareTaker;