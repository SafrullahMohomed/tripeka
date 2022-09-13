import React from 'react';
import carRent from "../../assets/car-rent.jpg"

const CarImage = () => {
    return (
        <div className="w-full ">
            <img src={carRent} alt="car"  />
        </div>
    );
}

export default CarImage;