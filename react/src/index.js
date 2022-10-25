import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Testomonials from "./components/Testomonials";
import Popular from "./components/Popular";
import ContactUs from "./components/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Budget from "./components/budget/Budget";
import Weather from "./pages/Weather";
import Climate from "./pages/Climate";
import EventCalendar from "./pages/EventCalendar";
import TypePage from "./pages/TypePage";
import Car from "./components/car/CarMain";
import GuideRegister from "./pages/GuideRegister";
import TripHotelDetails from "./pages/TripHotelDetails/TripHotelDetails";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Suggestions from "./components/Suggestions";
import Cards from "./components/Cards";
import Groups from "./components/Groups";
import Review from "./pages/Review";
import Blogs from "./pages/Blogs";
import Drawer from "./components/Drawer";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import Users from "./components/Users";
import Profile from "./components/Profile";
import Location from "./components/Location";
import Suggestion from "./pages/Suggestion";
import DeleteUser from "./components/DeleteUser";
import HotelBookingForm from "./pages/HotelBookingForm";
import Userprofile from "./pages/Userprofile";

import Test from "./components/Test";
import WriteBlog from "./pages/WriteBlog";
import ForgotPassword from "./pages/ForgotPassword";
import Complaint from "./pages/Complaint";

import ChatRoom from "./components/ChatRoom";
// import TempDashBoard from "./components/TempDashBoard";
import Help from "./pages/Help";
import ResetPassword from "./pages/ResetPassword";

import TripHotels from "./pages/TripHotels/TripHotels";
import TripList from "./pages/TripList/TripList";
import CarRegister from "./pages/CarRegister";

// import CreateGroupFloat from './components/CreateGroupFloat';

import Trip from "./components/Trip";
import SpeedDialButton from "./components/SpeedDialButton";
import CarProfile from "./components/car/CarProfile";
import authService from "./jwtAuthServices/auth.service";
import LiveLocation from "./pages/LiveLocation";
import LiveLocationMark from "./components/LiveLocationMark";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/triphotel" element={<TripHotels />} />
      <Route path="/bookingform" element={<HotelBookingForm />} />
      <Route path="/guideregister" element={<GuideRegister />} />
      <Route path="/userprofile" element={<Userprofile />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testomonials" element={<Testomonials />} />
      <Route path="/places" element={<Popular />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/triphoteldetails" element={<TripHotelDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword/:email" element={<ResetPassword />} />{" "}
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route
        path="/blogwrite"
        element={
          <>
            <Header />
            <WriteBlog />
          </>
        }
      />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/weather" element={<Weather />} />
      <Route
        path="/climate/:id"
        element={
          <>
            <Header />
            <Climate />
          </>
        }
      />
      <Route path="/events" element={<><Header /><EventCalendar /></>} />
      <Route path="/help" element={<Help />} />

      <Route path="/Hotels" element={<Test />} />
      <Route path="/ms" element={<Budget />} />
      <Route path="/registerType" element={<TypePage />} />
      <Route path="/carregister" element={<CarRegister />} />
      <Route path="/budget/:group_id" element={<Budget />} />

      <Route path="/groupChat/:id" element={authService.isSignedIn() ? <ChatRoom /> : <Login />} />
      <Route path="/triphotels" element={<TripList />} />

      <Route path="/carprofile/:id" element={<CarProfile />} />
      <Route path="/car" element={<Car />} />
      <Route path="/triphotellist" element={<TripList />} />
      <Route path="/triphotels/:id" element={<TripHotels />} />
      

      <Route path='*' element={<><Header /><NotFound /><Footer /></>}/>
      <Route path='/dashboard/:id' element={
        authService.isSignedIn() ? (
          <><Header /><SpeedDialButton /><Groups /><Suggestions /><Cards /><Footer /></>
        ) : ( <Login />)
      }/>
      <Route path='/reviews' element={<><Header /><Review /><Cards /><Footer /></>}/>
      <Route path='/blogs' element={<><Header /><Blogs /><Footer /></>}/>
      <Route path='/groups/:id' element={<><Header /><Groups /><Footer /></>}/>
      <Route path='/trip/:id' element={<><Header /><Trip /></>}/>
      <Route path='/trip/:gid/:uid' element={<><Header /><DeleteUser /></>}/>
      <Route path='/gallery/:id' element={<><Header /><Gallery /><Footer /></>}/>
      <Route path='/admin' element={<><Drawer /></>}/>
      <Route path='/users' element={<><Users /></>}/>
      <Route path='/location/:id' element={<><Location /></>}/>
      <Route path='/profile' element={<><Profile /></>}/>
      <Route path='/suggestion/:id' element={<><Header /><Suggestion /><Footer /></>}/>
      <Route path='/livelocationmark' element={<><Header /><LiveLocationMark /><Footer /></>}/>

    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
