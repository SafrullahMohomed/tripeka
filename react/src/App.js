import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testomonials from "./components/Testomonials";
import Popular from "./components/Popular";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Steps from "./components/Steps";
import Blog from "./components/Blog";
import TestAuthJwt from "./components/TestAuthJwt";
import { useState } from "react";
import { getSignedRole } from "./services/AuthAPIService";

function App() {
  // return <TestAuthJwt></TestAuthJwt>;

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Steps></Steps>
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
