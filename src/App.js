import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AboutUs} from "./Pages/AboutUs/Component/AboutUs";
import { LandingPage } from './Pages/LandingPage/Component/LandingPage';
import { Login } from './Pages/LogIn/Conponent/login';
import { SignuP } from './Pages/SignUP/Conponent/Signup';
import { Authentication } from './Pages/Authentication/Conponent/Authentication';
import { AddChild } from './Pages/AddChild/Conponent/AddChild';
import FindPreferredCaretaker from './Pages/FindCaretaker/conponent/FindPreferredCaretaker';
import { Register } from './Pages/RealRegister/Conponent/Register';
import { CareTaker } from './Pages/CareTaker/component/CareTaker';
import { CareTakerBookingHistory } from './Pages/CareTakerBookingHistory/Conponent/CareTakerBookingHistory';
import { ParentOrderBookingHistory } from './Pages/BookingHistory/Conponent/ParentBookingOrderHistory';
import { ParentBookingHistory } from './Pages/ParentBookingHistory/Conponent/ParentBooking';
import {ClockInOut} from './Pages/ClockInAndOut/component/ClockInAndOut';
import {CareTakerWorkHistory} from './Pages/CareTakerWorkHistory/component/WorkHistory';
import { Dashboard } from './Pages/DashBoard/component/Dashboard';
import SearchCareTaker from "./Pages/SearchForCareTaker/Component/SearchForCareTaker";
import {MakePayment} from "./Pages/MakePayment/Component/MakePayment";
function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route  path="/MakePayment" element={<MakePayment/>}/>
            <Route path="/SearchCareTaker" element={< SearchCareTaker />} />
          <Route path="/ParentBookingHistory" element={< ParentBookingHistory />} />
          <Route path="/ParentOrderBookingHistory" element={< ParentOrderBookingHistory />} />
          <Route path="/CareTakerBookingHistory" element={<CareTakerBookingHistory />} />
          <Route path="/CareTakerWorkHistory" element={<CareTakerWorkHistory/>} />
          <Route path="/ClockInOut" element={<ClockInOut/>} />
          <Route path="/CareTaker" element={<CareTaker />} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route  path="/Register" element={< Register/>}/>
          <Route  path="/FindPreferredCaretaker" element={<FindPreferredCaretaker/>}/>
          <Route  path="/Child" element={<AddChild/>}/>
          <Route  path="/Authentication" element={< Authentication/>}/>
          <Route  path="/SignUp" element={<SignuP/>}/>
            <Route  path="/AboutUs" element={<AboutUs/>}/>
            <Route  path="/LogIn" element={<Login/>}/>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
