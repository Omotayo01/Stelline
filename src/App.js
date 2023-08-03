import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AboutUs} from "./Pages/AboutUs/Component/AboutUs";
import { LandingPage } from './Pages/LandingPage/Component/LandingPage';
import { Login } from './Pages/LogIn/Component/login';
import { SignuP } from './Pages/SignUP/Component/Signup';
import { Authentication } from './Pages/Authentication/Component/Authentication';
import { AddChild } from './Pages/AddChild/Component/AddChild';
import ClockInOut from './Pages/ClockIn/Component/ClockInOut';
import Report from './Pages/report/component/report';
import FindPreferredCaretaker from './Pages/FindCaretaker/Component/FindPreferredCaretaker';
import { Register } from './Pages/RealRegister/Component/Register';
import { CareTaker } from './Pages/CareTaker/component/CareTaker';
import { CareTakerBookingHistory } from './Pages/CareTakerBookingHistory/Component/CareTakerBookingHistory';
import { ParentOrderBookingHistory } from './Pages/BookingHistory/Component/ParentBookingOrderHistory';
import { ParentBookingHistory } from './Pages/ParentBookingHistory/Component/ParentBooking';
import WorkHistory from './Pages/WorkHistory/Component/WorkHistory';
import { Dashboard } from './Pages/DashBoard/component/Dahboard';
function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
          <Route path="/Dashboard" element={< Dashboard />} />
          <Route path="/ParentBookingHistory" element={< ParentBookingHistory />} />
          <Route  path="/report" element={<Report/>}/>
          <Route path="/ParentOrderBookingHistory" element={< ParentOrderBookingHistory />} />
          <Route path="/CareTakerBookingHistory" element={<CareTakerBookingHistory />} />
          <Route path="/CareTaker" element={<CareTaker />} />
          <Route  path="/Register" element={< Register/>}/>
          <Route path="/WorkHistory" element={<WorkHistory/>} />
          <Route  path="/FindPreferredCaretaker" element={<FindPreferredCaretaker/>}/>
          <Route  path="/ClockInOut" element={<ClockInOut/>}/>
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
