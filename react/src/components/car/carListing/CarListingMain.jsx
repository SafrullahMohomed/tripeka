import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Header";
import CarCard from "./CarCard";

const CarListingMain = () => {
  const [carList, setCarList] = useState([]);

  const data = [
    {
      carId: 1,
      carName: "Volvo",
      carType: "Car",
      carOwner: "John",
      carPhone: "123456789",
      carStatus: "Available",
      carTotalprice: 1000.0,
      carAvailableSeats: 4,
      carPrice: 120.0,
      carImage: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      carId: 2,
      carName: "BMW",
      carType: "Car",
      carOwner: "John",
      carPhone: "123456789",
      carStatus: "Available",
      carTotalprice: 1000.0,
      carAvailableSeats: 4,
      carPrice: 120.0,
      carImage: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      carId: 3,
      carName: "Audi",
      carType: "Car",
      carOwner: "John",
      carPhone: "123456789",
      carStatus: "Available",
      carTotalprice: 1000.0,
      carAvailableSeats: 4,
      carPrice: 120.0,
      carImage: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      carId: 4,
      carName: "Mercedes",
      carType: "Car",
      carOwner: "John",
      carPhone: "123456789",
      carStatus: "Available",
      carTotalprice: 1000.0,
      carAvailableSeats: 4,
      carPrice: 120.0,
      carImage: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      carId: 5,
      carName: "Toyota",
      carType: "Car",
      carOwner: "John",
      carPhone: "123456789",
      carStatus: true,
      carTotalprice: 1000.0,
      carAvailableSeats: 4,
      carPrice: 120.0,
      carImage: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      carId: 6,
      carName: "Honda",
      carType: "Car",
      carOwner: "John",
      carPhone: "123456789",
      carStatus: "Available",
      carTotalprice: 1000.0,
      carAvailableSeats: 4,
      carPrice: 120.0,
      carImage: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      carId: 7,
      carName: "Suzuki",
      carType: "Car",
      carOwner: "John",
      carPhone: "123456789",
      carStatus: "Available",
      carTotalprice: 1000.0,
      carAvailableSeats: 4,
      carPrice: 120.0,
      carImage: "https://picsum.photos/seed/picsum/200/300",
    },
  ];

  // console.log(data);
  // console.log(carList);

  useEffect(() => {
    //   fetch("http://localhost:3000/cars")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setCarList(data);
    //     });
    setCarList(data);
  }, [JSON.stringify(data)]);

  return (
    <div>
      {/* adding the header for car */}
      <Header />
      {/* to get the grid card view for the card list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-center mx-auto ">
        {carList.map((car) => {

          return (
            
            
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default CarListingMain;
