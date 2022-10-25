import React from 'react'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Navbar from '../../components/Navbar';
import '../TripList/TripList.css'
import TripSearchItems from './../../components/TripSearchItems/TripSearchItems';
import { getAllHotelsAvailableByFilters } from "../../services/TripHotelService";

const TripList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [hotelData, setHotelData] = useState(location.state.data);

  const handleOption = (name, value) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSearch = () => {

    const params = {
      district: destination,
      fromDate: format(date[0].startDate, "yyyy-MM-dd"),
      toDate: format(date[0].endDate, "yyyy-MM-dd"),
      noOfAdults: options.adult,
      noOfChildren: options.children,
      rooms: options.room,
      minPrice: ("minPrice" in options && options.minPrice !== "") ? options.minPrice : 0,
      maxPrice: ("maxPrice" in options && options.maxPrice !== "") ? options.maxPrice : 0
    };
    
    // to get all hotels by filters
    getAllHotelsAvailableByFilters(params)
    .then((response) => {
      setHotelData(response.data);
    })
    .catch((err) => {
      alert("Something went wrong");
    });
  };

  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="triplistContainer" style={{display: "flex",justifyContent: "center",marginTop: "20px"}}>
        <div className="triplistWrapper" style={{width: "100%", maxWidth: "1024px", display: "flex",gap: "20px"}}>
          <div className="triplistSearch" style={{flex: "1",backgroundColor: "#febb02",padding: "10px",borderRadius: "10px",position: "sticky",top: "10px",height: "max-content"}}>
            <h1 className="triplsTitle" style={{fontSize: "20px",color: "#555",marginBottom: "10px"}}>Search</h1>
            <div className="triplsItem" style={{display: "flex",flexDirection: "column",gap: "5px",marginBottom: "10px"}}>
              <label style={{fontSize: "12px"}}>Destination</label>
              <input value={destination} onChange={(e) => setDestination(e.target.value)} style={{height: "30px",border: "none",padding: "5px"}} type="text" />
            </div>
            <div className="triplsItem" style={{display: "flex",flexDirection: "column",gap: "5px",marginBottom: "10px"}}>
              <label style={{fontSize: "12px"}}>Check-in Date</label>
              <span style={{ height: "30px",padding: "5px",backgroundColor: "white",display: "flex",alignItems: "center",cursor: "pointer"}} onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="triplsItem" style={{display: "flex",flexDirection: "column",gap: "5px",marginBottom: "10px"}}>
              <label style={{fontSize: "12px"}}>Options</label>
              <div className="triplsOptions" style={{padding: "10px"}}>
                <div className="lsOptionItem" style={{display: "flex",justifyContent: "space-between",marginBottom: "10px",color: "#555",fontSize: "12px"}}>
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" value={options.minPrice} onChange={(e) => handleOption("minPrice", e.target.value)} className="lsOptionInput" style={{width: "70px"}} />
                </div>
                <div className="lsOptionItem" style={{display: "flex",justifyContent: "space-between",marginBottom: "10px",color: "#555",fontSize: "12px"}}>
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" value={options.maxPrice} onChange={(e) => handleOption("maxPrice", e.target.value)} className="lsOptionInput" style={{width:"70px"}} />
                </div>
                <div className="lsOptionItem" style={{display: "flex",justifyContent: "space-between",marginBottom: "10px",color: "#555",fontSize: "12px"}}>
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    style={{width:"70px"}}
                    value={options.adult}
                    onChange={(e) => handleOption("adult", e.target.value)}
                  />
                </div>
                <div className="lsOptionItem" style={{display: "flex",justifyContent: "space-between",marginBottom: "10px",color: "#555",fontSize: "12px"}}>
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    style={{width:"70px"}}
                    value={options.children}
                    onChange={(e) => handleOption("children", e.target.value)}
                  />
                </div>
                <div className="lsOptionItem" style={{display: "flex",justifyContent: "space-between",marginBottom: "10px",color: "#555",fontSize: "12px"}}>
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    style={{width:"70px"}}
                    value={options.room}
                    onChange={(e) => handleOption("room", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearch} style={{padding: "10px",backgroundColor: "#0071c2",color: "white",border: "none",width: "100%",fontWeight: "500",cursor: "pointer"}}>Search</button>
          </div>
          <div className="listResult" style={{flex:"3"}}>

            {/* will loop the hotel list got from the api */}
            {hotelData.map((hotel) => (
              <TripSearchItems
                key={hotel.hotelId}
                title={hotel.name}
                address={hotel.address}
                rooms={hotel.rooms}
                roomprice = {hotel.priceRoom} 
                facility = {hotel.facilities}
                service = {hotel.serviceRate}
                beddetails = {hotel.bedroom}
                hotelrate = {hotel.hotelRating}
                district = {hotel.district}
                description = {hotel.shortDescription}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripList