import React from "react";
import { useState, useEffect } from "react";

const CarCardInnerDetails = (props) => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <div className=" flex flex-col items-start ">
        {/* <div className="carStatus">{props.carStatus}carStatus</div> */}
        <div className="carType">Vehicle Type : {props.carType}</div>
        <div className="carOwner">Vehicle Owner : {props.carOwner}</div>
        <div className="carPhone">Phone NO : {props.carPhone}</div>

        <div className="carTotalprice">
          Total price : Rs. {props.carTotalprice}
        </div>
        <div className="carAvailableSeats">
          Available No Seats : {props.carAvailableSeats}
        </div>
      </div>      
    </div>
  );
};

export default CarCardInnerDetails;
