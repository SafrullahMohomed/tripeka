import React from 'react'

const TripFavourite = () => {
    return (
        <div className="fp" style={{width: "100%",maxWidth: "1024px", display: "flex",justifyContent: "space-between",gap: "20px"}}>
          <div className="fpItem" style={{flex: "1", gap: "10px", display: "flex",flexDirection: "column"}}>
            <img
              src="https://res.cloudinary.com/dkg96z4u9/image/upload/v1666796312/cin_qabnob.jpg"
              alt=""
              style={{ width: "100%",height: "250px",objectFit: "cover"}}
            />
            <span className="fpName" style={{color: "#333",fontWeight: "bold"}}>Cinnamon Grand Hotel</span>
            <span className="fpCity" style={{fontWeight: "300"}}>Colombo</span>
            <span className="fpPrice" style={{fontWeight: "500"}}>Price per night LKR 1400</span>
            <div className="fpRating">
              <button style={{backgroundColor: "#003580",color: "white",border: "none",padding: "3px",marginRight: "10px",fontWeight: "bold"}}>8.9</button>
              <span style={{fontSize: "14px"}}>Excellent</span>
            </div>
          </div>
          <div className="fpItem" style={{flex: "1", gap: "10px", display: "flex",flexDirection: "column"}}>
            <img
              src="https://res.cloudinary.com/dkg96z4u9/image/upload/v1666795932/ocean_tl2sup.jpg"
              alt=""
              style={{ width: "100%",height: "250px",objectFit: "cover"}}
            />
            <span className="fpName" style={{color: "#333",fontWeight: "bold"}}>Ocean Hotel</span>
            <span className="fpCity" style={{fontWeight: "300"}}>Colombo</span>
            <span className="fpPrice" style={{fontWeight: "500"}}>Price per night LKR 2000</span>
            <div className="fpRating">
              <button style={{backgroundColor: "#003580",color: "white",border: "none",padding: "3px",marginRight: "10px",fontWeight: "bold"}}>8.9</button>
              <span style={{fontSize: "14px"}}>Excellent</span>
            </div>
          </div>
          <div className="fpItem" style={{flex: "1", gap: "10px", display: "flex",flexDirection: "column"}}>
            <img
              src="https://res.cloudinary.com/dkg96z4u9/image/upload/v1666795799/kingsbury_vhtztj.jpg"
              alt=""
              style={{ width: "100%",height: "250px",objectFit: "cover"}}
            />
            <span className="fpName" style={{color: "#333",fontWeight: "bold"}}>Kingsbury Hotel</span>
            <span className="fpCity" style={{fontWeight: "300"}}>Colombo</span>
            <span className="fpPrice" style={{fontWeight: "500"}}>Price per night LKR 3000</span>
            <div className="fpRating">
              <button style={{backgroundColor: "#003580",color: "white",border: "none",padding: "3px",marginRight: "10px",fontWeight: "bold"}}>8.9</button>
              <span style={{fontSize: "14px"}}>Excellent</span>
            </div>
          </div>
          <div className="fpItem" style={{flex: "1", gap: "10px", display: "flex",flexDirection: "column"}}>
            <img
              src="https://res.cloudinary.com/dkg96z4u9/image/upload/v1666794791/taj_aqp9b8.jpg"
              alt=""
              style={{ width: "100%",height: "250px",objectFit: "cover"}}
            />
            <span className="fpName" style={{color: "#333",fontWeight: "bold"}}>Taj Samudra</span>
            <span className="fpCity" style={{fontWeight: "300"}}>Colombo</span>
            <span className="fpPrice" style={{fontWeight: "500"}}>Price per night LKR 2000</span>
            <div className="fpRating">
              <button style={{backgroundColor: "#003580",color: "white",border: "none",padding: "3px",marginRight: "10px",fontWeight: "bold"}}>8.9</button>
              <span style={{fontSize: "14px"}}>Excellent</span>
            </div>
          </div>
        </div>
      );
}

export default TripFavourite