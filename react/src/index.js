import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Services from './components/Services';
import Testomonials from './components/Testomonials';
import Popular from './components/Popular';
import ContactUs from './components/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import Budget from './ms/components/Budget/Budget';

import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Suggestions from './components/Suggestions';
import Carousel from './components/Carousel';
import Groups from './components/Groups';
import Blogs from './pages/Blogs';
import Chat from './pages/Chat';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/testomonials' element={<Testomonials/>}/>
      <Route path='/places' element={<Popular/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route path='/ms' element={<Budget/>} />
      
      <Route path='/dashboard' element={<><Header /><Search /><Suggestions /><Carousel /><Groups /><Footer /></>}/>
      <Route path='/blogs' element={<><Header /><Blogs /></>}/>
      <Route path='/groups' element={<><Header /><Groups /><Footer /></>}/>

    </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
