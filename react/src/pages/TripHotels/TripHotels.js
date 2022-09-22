import React from 'react'
import TripFeatured from '../../components/TripFeatured/TripFeatured';
import TripHeader from '../../components/TripHeader/TripHeader'
import Navbar from './../../components/Navbar';
import c3 from '../../assets/galleFeature.jpg'


import Footer from '../../components/Footer';
import TripFavourite from '../../components/TripFavourite/TripFavourite';
import TripEmailList from '../../components/TripEmailList/TripEmailList';

const TripHotels = () => {
  return (
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        
        <TripHeader/>

        <div style={{marginTop : "50px", display: "flex",flexDirection: "column",alignItems: "center",gap: "30px"}}>
        
          <br></br>
          <TripFeatured/>
          <br/>
          
          <h1 class="font-medium leading-tight text-3xl mt-0 mb-2 text-emerald-600" style={{width: "1024px"}}>Browse by best hotels in Island</h1>
          <br/>
          <TripFavourite/>
          <br/>
          <TripEmailList/>
        </div>
        <br/>
        <br/>
        <Footer/>
    </div>
  )
}

export default TripHotels