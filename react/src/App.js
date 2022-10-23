import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testomonials from "./components/Testomonials";
import Popular from "./components/Popular";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
// import Steps from "./components/Steps";
import Blog from "./components/Blog";
// import TestAuthJwt from "./components/TestAuthJwt";
// import { useState } from "react";
// import { getSignedRole } from "./services/AuthAPIService";
// import StepsAlter from "./components/StepsAlter";
import VerticalStepper from "./components/VerticalStepper";

function App() {
  // return <TestAuthJwt></TestAuthJwt>;

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <StepsAlter/> */}
      <VerticalStepper/>
      <Services></Services>
      <Blog></Blog>
      <Testomonials></Testomonials>
      <Popular></Popular>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
