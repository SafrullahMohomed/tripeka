
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Test.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Searchcard from './SearchCard/Searchcard';
// import Gallery from './gallery/Gallery';
// import ImageSlider from './ImageSlider';
// import { SliderData } from './SliderData';
// import Footer from './Footer';
import Header from './Header';
import BlogAccepted from '../components/Moderator/moderator'
//<Searchcard/><ImageSlider slides={SliderData} /><Gallery/><Footer/>
const Test = () => {
 


  return (
 
    
    <div>
      <Header /><BlogAccepted/>
      
    </div>


  )

}

export default Test;