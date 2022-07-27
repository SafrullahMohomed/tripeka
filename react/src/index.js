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
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";
import Dashboard from "./components/Dashboard";
import Blogs from "./pages/Blogs";
import ChatRoom from "./components/ChatRoom";
import Groups from "./pages/Groups";
import TempDashBoard from "./components/TempDashBoard";

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

      <Route path="/ms" element={<Budget />} />
      <Route path="/groupChat" element={<ChatRoom />} />

      {/* <Route path='/dashboard' element={<><Sidebar /><Dashboard /><Panel /></>}/> */}
      <Route path="/dashboard" element={<TempDashBoard />} />
      <Route
        path="/blogs"
        element={
          <>
            <Sidebar />
            <Blogs />
            <Panel />
          </>
        }
      />
      <Route
        path="/group1"
        element={
          <>
            <Sidebar />
            <Groups />
            <Panel />
          </>
        }
      />
      <Route path="/help" element={<Help />} />

      <Route
        path="/dashboard"
        element={
          <>
            <Sidebar />
            <Dashboard />
            <Panel />
          </>
        }
      />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
