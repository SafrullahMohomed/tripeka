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
import Budget from "./ms/components/Budget/Budget";
import Weather from "./pages/Weather";
import Climate from "./pages/Climate";
import EventCalendar from "./pages/EventCalendar";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Suggestions from "./components/Suggestions";
import Cards from "./components/Cards";
import Groups from "./components/Groups";
import Blogs from "./pages/Blogs";
import Drawer from "./components/Drawer";
import Test from './components/Test';
import WriteBlog from "./pages/WriteBlog";
import ForgotPassword from "./pages/ForgotPassword";
import Complaint from "./pages/Complaint";

import ChatRoom from "./components/ChatRoom";
import TempDashBoard from "./components/TempDashBoard";
import Help from "./pages/Help";
import ResetPassword from "./pages/ResetPassword";
import BlogView from "./components/BlogView/blogView";

import CreateGroupFloat from './components/CreateGroupFloat';
import Trip from './components/Trip';
import SpeedDialButton from './components/SpeedDialButton';


import BlogAccepted  from "./components/Moderator/moderator";
import Blog from "./components/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testomonials" element={<Testomonials />} />
      <Route path="/places" element={<Popular />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/blogwrite" element={<WriteBlog />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/climate" element={<Climate />} />
      <Route path="/events" element={<EventCalendar />} />
      <Route path="/help" element={<Help />} />
            <Route path='/Hotels' element={<Test/>}/>
            {/* new change */}
            <Route path='/BlogView' element={<BlogView/>}/>
            <Route path='/moderator' element={<BlogAccepted/>}/>
            <Route path="/ms" element={<Budget />} />

      <Route path="/budget" element={<Budget />} />
      <Route path="/groupChat" element={<ChatRoom />} />
      <Router path="/Blog" element ={<Blog/>}/>

      <Route
        path="/hotel"
        element={
          <>
            <Header />
            <Search />
            <Suggestions />
            <Cards />
            <Footer />
          </>
        }
      />
      <Route
        path="/blogs"
        element={
          <>
            <Header />
            <Blogs />
          </>
        }
      />
      <Route
        path="/groups"
        element={
          <>
            <Header />
            <Groups />
            <Footer />
          </>
        }
      />
      <Route
        path="/admin"
        element={
          <>
            <Drawer />
          </>
        }
      />

      <Route path='/dashboard' element={<><Header /><CreateGroupFloat /><Search /><Suggestions /><Cards /><Groups /><Footer /></>}/>
      <Route path='/blogs' element={<><Header /><Blogs /></>}/>
      <Route path='/groups' element={<><Header /><Groups /><Footer /></>}/>
      <Route path='/trip' element={<><Header /><Trip /><SpeedDialButton /></>}/>
      <Route path='/admin' element={<><Drawer /></>}/>

      <Route path="/help" element={<Help />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
