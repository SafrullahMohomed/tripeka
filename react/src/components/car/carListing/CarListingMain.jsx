import React from "react";
import { useState, useEffect } from "react";

const CarListingMain = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCarList(data);
      });
  }, []);

  return (
    <div>
      {/* to get the grid card view for the card list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carList.map((car) => {
          return;
          <CarCard
            key={car.carId}
            carName={car.carName}
            carOwner={car.carOwner}
            carPhone={car.carPhone}
            carType={car.carType}
            carPrice={car.carPrice}
            carImage={car.carImage}
            carStatus={car.carstatus}
            carTotalprice={car.carTotalprice}
            carAvailableSeats={car.carAvailableSeats}
          />;
        })}
      </div>
    </div>
  );
};
