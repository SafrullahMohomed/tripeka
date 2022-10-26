import React from 'react'
import { useNavigate } from "react-router-dom";

const TripSearchItems = (props) => {
  const navigate = useNavigate();

  const showHotelDetails = () => {
    navigate("/triphoteldetails", { state: { hotelData: props } });
  };

  console.log(props)

  return (
      <div className="searchItem" style={{border: "1px solid lightgray",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          marginBottom: "20px"}}>
          {/* <div>{props.title}</div> */}
        <img
          src={props.hotelimages}
          alt=""
          className="siImg"
          style={{width: "200px",height: "200px", objectFit: "cover"}}
        />
        <div className="siDesc" style={{display: "flex",flexDirection: "column", gap: "10px",flex: "2"}}>
          <h1 className="siTitle" style={{fontSize: "20px",color: "#0071c2"}}>{props.title}</h1>
          <span className="siDistance" style={{fontSize: "12px"}}>500m from center</span>
          <span className="siTaxiOp" style={{fontSize: "12px",backgroundColor: "#008009",color: "white",width: "max-content",padding: "3px",borderRadius: "5px"}}>we have a hotel rating of {props.hotelrate} star</span>
          <span className="siSubtitle" style={{fontSize: "12px",fontWeight: "bold"}}>
            {props.facility}
          </span>
          <span className="siFeatures" style={{fontSize:"12px"}}>
            {props.beddetails}
          </span>
          <span className="siCancelOp" style={{fontSize: "12px",color: "#008009",fontWeight: "bold"}}>Free cancellation </span>
          <span className="siCancelOpSubtitle" style={{fontSize:"12px", color:"#008009"}}>
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails" style={{flex:"1",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          <div className="siRating" style={{display:"flex",justifyContent:"space-between"}}>
            <span style={{fontWeight:"500"}}>Excellent</span>
            <button style={{ backgroundColor: "#003580",color: "white",padding: "5px",fontWeight: "bold",border: "none"}}>{props.service}</button>
          </div>
          <div className="siDetailTexts" style={{textAlign: "right",display: "flex",flexDirection: "column",gap: "5px"}}>
            <span className="siPrice" style={{fontSize:"24px"}}>LKR {props.roomprice}</span>
            <span className="siTaxOp" style={{fontSize:"12px", color:"gray"}}>Includes taxes and fees</span>
            {/* <Link to="/triphoteldetails">
              <button className="siCheckButton" style={{backgroundColor: "#0071c2", color:"white",fontWeight:"bold", padding:"10px 5px", border:"none", cursor:"pointer",borderRadius:"5px"}}>See availability</button>
            </Link> */}
            <button onClick={showHotelDetails} className="siCheckButton" style={{backgroundColor: "#0071c2", color:"white",fontWeight:"bold", padding:"10px 5px", border:"none", cursor:"pointer",borderRadius:"5px"}}>See availability</button>
          </div>
        </div>
      </div>
    );
}

export default TripSearchItems