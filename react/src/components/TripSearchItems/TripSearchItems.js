import React from 'react'

const TripSearchItems = () => {
    return (
        <div className="searchItem" style={{border: "1px solid lightgray",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "20px"}}>
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
            className="siImg"
            style={{width: "200px",height: "200px", objectFit: "cover"}}
          />
          <div className="siDesc" style={{display: "flex",flexDirection: "column", gap: "10px",flex: "2"}}>
            <h1 className="siTitle" style={{fontSize: "20px",color: "#0071c2"}}>Tower Street Apartments</h1>
            <span className="siDistance" style={{fontSize: "12px"}}>500m from center</span>
            <span className="siTaxiOp" style={{fontSize: "12px",backgroundColor: "#008009",color: "white",width: "max-content",padding: "3px",borderRadius: "5px"}}>Free airport taxi</span>
            <span className="siSubtitle" style={{fontSize: "12px",fontWeight: "bold"}}>
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures" style={{fontSize:"12px"}}>
              Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp" style={{fontSize: "12px",color: "#008009",fontWeight: "bold"}}>Free cancellation </span>
            <span className="siCancelOpSubtitle" style={{fontSize:"12px", color:"#008009"}}>
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails" style={{flex:"1",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <div className="siRating" style={{display:"flex",justifyContent:"space-between"}}>
              <span style={{fontWeight:"500"}}>Excellent</span>
              <button style={{ backgroundColor: "#003580",color: "white",padding: "5px",fontWeight: "bold",border: "none"}}>8.9</button>
            </div>
            <div className="siDetailTexts" style={{textAlign: "right",display: "flex",flexDirection: "column",gap: "5px"}}>
              <span className="siPrice" style={{fontSize:"24px"}}>$112</span>
              <span className="siTaxOp" style={{fontSize:"12px", color:"gray"}}>Includes taxes and fees</span>
              <button className="siCheckButton" style={{backgroundColor: "#0071c2", color:"white",fontWeight:"bold", padding:"10px 5px", border:"none", cursor:"pointer",borderRadius:"5px"}}>See availability</button>
            </div>
          </div>
        </div>
      );
}

export default TripSearchItems