import React, { useEffect, useState } from "react";
import CarUserBookedCard from "./CarUserBookedCard";


const CarOrderedList = (props) => {
    const [carBookedList, setCarBookedList] = useState([]);

    const data = [
        {
          carId: 1,
          carName: "Volvo",
          carType: "Car",
          carOwner: "John",
          carPhone: "123456789",
          carAcceptedStatus: true,
          carAcceptedAndCancelledByDriverStatus: false,
          carAcceptedAndCancelledByUserStatus: false,
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
          carAcceptedStatus: true,
          carAcceptedAndCancelledByDriverStatus: true,
          carAcceptedAndCancelledByUserStatus: false,
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
          carAcceptedStatus: false,
          carAcceptedAndCancelledByDriverStatus: false,
          carAcceptedAndCancelledByUserStatus: false,
          carTotalprice: 1000.0,
          carAvailableSeats: 4,
          carPrice: 120.0,
          carImage: "https://picsum.photos/seed/picsum/200/300",
        }
        
      ];
      
      useEffect(() => {

      setCarBookedList(data);
    }, [JSON.stringify(data)]);

  return (
    <div>
      {carBookedList.map((car) => {
        return (
          <CarUserBookedCard
            key={car.carId}
            carName={car.carName}
            carOwner={car.carOwner}
            carPhone={car.carPhone}
            carType={car.carType}
            carPrice={car.carPrice}
            carImage={car.carImage}
            carAcceptedStatus={car.carAcceptedStatus}
            carAcceptedAndCancelledByDriverStatus={car.carAcceptedAndCancelledByDriverStatus}
            carTotalprice={car.carTotalprice}
            carAvailableSeats={car.carAvailableSeats}
          />
        );
      })}
    </div>
  );
};

export default CarOrderedList;
