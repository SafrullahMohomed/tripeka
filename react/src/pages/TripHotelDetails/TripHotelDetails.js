import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Navbar from '../../components/Navbar';
import TripEmailList from '../../components/TripEmailList/TripEmailList';
import Footer from '../../components/Footer';
import { useLocation, useNavigate } from "react-router-dom";

const TripHotelDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [hotelData, sethotelData] = useState(location.state.hotelData);

  const bookHotel = () => {
    navigate("/bookingform", { state: { hotelData: hotelData } });
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  

  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <div className="hotelContainer" style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
        {open && (
          <div className="slider" style={{position:"sticky",top:"0",left:"0",width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,0.613)",zIndex:"999",display:"flex",alignItems:"center"}}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              style={{position:"absolute",top:"20px",right:"20px",fontSize:"30px",color:"lightgrey",cursor:"pointer"}}
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              style={{margin:"20px",fontSize:"50px",color:"lightgray",cursor:"pointer"}}
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper" style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img src={photos[slideNumber].src} alt="" className="sliderImg" style={{width:"80%",height:"80vh"}} />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              style={{margin:"20px",fontSize:"50px",color:"lightgray",cursor:"pointer"}}
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper" style={{width:"100%",maxWidth:"1024px",display:"flex",flexDirection:"column",gap:"10px",position:"relative"}}>
          <button className="bookNow" onClick={bookHotel} style={{position:"absolute",top:"10px",right:"0",border:"none",padding:"10px 20px",backgroundColor:"#0071c2",color:"white",fontWeight:"bold",borderRadius:"5px",cursor:"pointer"}}>Reserve or Book Now!</button>
          <h1 className="hotelTitle" style={{fontSize:"24px"}}>{hotelData.title}</h1>
          <div className="hotelAddress" style={{fontSize:"12px",display:"flex",alignItems:"center",gap:"10px"}}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotelData.address}</span>
          </div>
          <span className="hotelDistance" style={{color:"#0071c2",fontWeight:"500"}}>
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight" style={{color:"#008009",fontWeight:"500"}}>
            Book a stay over LKR {hotelData.roomprice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" style={{width:"33%"}} key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  style={{width:"100%",objectFit:"cover",cursor:"pointer"}}
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails" style={{display:"flex",justifyContent:"space-between",gap:"20px",marginTop:"20px"}}>
            <div className="hotelDetailsTexts" style={{flex:"3"}}>
              <h1 className="hotelTitle" style={{fontSize:"24px"}}>Stay in the heart of City</h1>
              <p className="hotelDesc" style={{fontSize:"14px", marginTop:"20px"}}>
                {/* Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service. */}
                {hotelData.comment}
              </p>
            </div>
            <div className="hotelDetailsPrice" style={{flex:"1", backgroundColor:"#ebf3ff",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"}}>
              <h1 style={{fontSize:"18px",color:"#555"}}>Perfect for a night stay!</h1>
              <span style={{fontSize:"14px"}}>
                Located in the real heart of {hotelData.district}, this property has an
                excellent location score of {hotelData.service}!
              </span>
              <h2 style={{fontWeight:"300"}}>
                <b>LKR {hotelData.roomprice}</b> (for a night)
              </h2>
              <button onClick={bookHotel} style={{border:"none",padding:"10px 20px", backgroundColor:"#0071c2",color:"white",fontWeight:"bold",cursor:"pointer",borderRadius:"5px"}}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        {/* <MailList />
        <Footer /> */}
        
      </div>
      <TripEmailList/>
      <br/>
      <Footer/>
    </div>
  );
}

export default TripHotelDetails