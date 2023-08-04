import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AboutUs} from "./Pages/AboutUs/Component/AboutUs";
import { LandingPage } from './Pages/LandingPage/Component/LandingPage';

import { Login } from './Pages/LogIn/Component/login';
import { SignuP } from './Pages/SignUP/Component/Signup';
import { Authentication } from './Pages/Authentication/Component/Authentication';
import { AddChild } from './Pages/AddChild/Component/AddChild';
import FindPreferredCaretaker from './Pages/FindCaretaker/Component/FindPreferredCaretaker';
import { Register } from './Pages/RealRegister/Component/Register';
import { CareTaker } from './Pages/CareTaker/component/CareTaker';
import { CareTakerBookingHistory } from './Pages/CareTakerBookingHistory/Component/CareTakerBookingHistory';
import { ParentOrderBookingHistory } from './Pages/BookingHistory/Component/ParentBookingOrderHistory';
import { ParentBookingHistory } from './Pages/ParentBookingHistory/Component/ParentBooking';
import {ClockInOut} from './Pages/ClockInAndOut/component/ClockInAndOut';
import {CareTakerWorkHistory} from './Pages/CareTakerWorkHistory/component/WorkHistory';
import { Dashboard } from './Pages/DashBoard/component/Dashboard';
import SearchCareTaker from "./Pages/SearchForCareTaker/Component/SearchForCareTaker";
import {MakePayment} from "./Pages/MakePayment/Component/MakePayment";
import Report from './Pages/report/component/report';
function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
          <Route path="/Dashboard" element={< Dashboard />} />
            <Route  path="/MakePayment" element={<MakePayment/>}/>
            <Route path="/SearchCareTaker" element={< SearchCareTaker />} />
          <Route path="/ParentBookingHistory" element={< ParentBookingHistory />} />
          <Route  path="/report" element={<Report/>}/>
          <Route path="/ParentOrderBookingHistory" element={< ParentOrderBookingHistory />} />
          <Route path="/CareTakerBookingHistory" element={<CareTakerBookingHistory />} />
          <Route path="/CareTakerWorkHistory" element={<CareTakerWorkHistory/>} />
          <Route path="/ClockInOut" element={<ClockInOut/>} />
          <Route path="/CareTaker" element={<CareTaker />} />
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
