import React from 'react'
import c1 from '../../assets/galleFeature.jpg'
import c2 from '../../assets/colomboFeature.jpg'
import c3 from '../../assets/NuweraFeature.jpg'

const TripFeatured = () => {
  return (
    <div style={{width: "100%",maxWidth: "1024px",display: "flex",justifyContent: "space-between",gap: "20px",zIndex: "1"}}>
        <div style={{position: "relative", color: "white",borderRadius: "10px",overflow: "hidden",height: "250px",flex:"1"}}>
            <img
            src= {c1}
            alt=""
            style={{width: "100%",height: "100%",objectFit: "cover"}}
            />
            <div style={{ position: "absolute",bottom: "20px",left: "20px"}}>
                <h1 class = 'font-medium leading-tight text-2xl mt-0 mb-2'>Galle</h1>
                <h2 class = 'font-medium leading-tight text-xl mt-0 mb-2'>17 properties</h2>
            </div>
        </div>
        <div style={{position: "relative", color: "white",borderRadius: "10px",overflow: "hidden",height: "250px",flex:"1"}}>
            <img
            src={c2}
            alt=""
            style={{width: "100%",height: "100%",objectFit: "cover"}}
            />
            <div style={{ position: "absolute",bottom: "20px",left: "20px"}}>
                <h1 class = 'font-medium leading-tight text-2xl mt-0 mb-2'>Colombo</h1>
                <h2 class = 'font-medium leading-tight text-xl mt-0 mb-2'>30 properties</h2>
            </div>
        </div>
        <div style={{position: "relative", color: "white",borderRadius: "10px",overflow: "hidden",height: "250px",flex:"1"}}>
            <img
            src={c3}
            alt=""
            style={{width: "100%",height: "100%",objectFit: "cover"}}
            />
            <div style={{ position: "absolute",bottom: "20px",left: "20px"}}>
                <h1 class = 'font-medium leading-tight text-2xl mt-0 mb-2'>Nuwera Eliya</h1>
                <h2 class = 'font-medium leading-tight text-xxl mt-0 mb-2'>30 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default TripFeatured