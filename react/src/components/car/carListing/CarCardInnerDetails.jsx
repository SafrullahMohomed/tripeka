import React from "react";
import { useState, useEffect } from "react";

const CarCardInnerDetails = () => {
  const [carList, setCarList] = useState([]);

  useEffect((props) => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCarList(data);
      });
  }, []);

  return (
    <div>
      <div className="carStatus">{props.carStatus}carStatus</div>
      <div className="carType">{props.carType}carType</div>
      <div className="carOwner">{props.carOwner}carOwner</div>
      <div className="carPhone">{props.carPhone}carPhone</div>

      <div className="carTotalprice">{props.carTotalprice}carTotalprice</div>
      <div className="carAvailableSeats">
        {props.carAvailableSeats}carAvailableSeats
      </div>
      <div class="flex space-x-2 justify-center mr-10 pb-10 ">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-10 py-2.5 bg-green-600 text-white font-medium text-lg leading-tight uppercase
           rounded shadow-md hover:bg-green-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition 
           duration-150 ease-in-out"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
