import React from 'react'
import TripFeatured from '../../components/TripFeatured/TripFeatured';
import TripHeader from '../../components/TripHeader/TripHeader'
import Navbar from './../../components/Navbar';

const TripHotels = () => {
  return (
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        
        <TripHeader/>

        <div style={{marginTop : "50px", display: "flex",flexDirection: "column",alignItems: "center",gap: "30px"}}>
        
          <TripFeatured/>
          <TripFeatured/>
        </div>
    </div>
  )
}

export default TripHotels