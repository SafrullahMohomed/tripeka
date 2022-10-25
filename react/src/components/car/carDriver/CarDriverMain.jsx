import React from "react";
import { useState, useEffect } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import CarDriverCard from "./CarDriverCard";

const CarDriverMain = (props) => {
  const [carDriverRequestList, setCarDriverRequestList] = useState([]);

  const data = [
    {
      carRequestId: 1,
      carRequestedUserName: "John",
      carRequestedUserPhone: "123456789",
      carPickupLocation: "Maharagama",
      carDropLocation: "Fort",
      noOfPeople: 4,
      carTotalPrice: 1000.0,
      carAcceptedStatus: false,
      carAcceptedAndCancelledByDriverStatus: false,
      carAcceptedAndCancelledByUserStatus: false,
    },
    {
      carRequestId: 2,
      carRequestedUserName: "John",
      carRequestedUserPhone: "123456789",
      carPickupLocation: "Kathmandu",
      carDropLocation: "Pokhara",
      noOfPeople: 4,
      carTotalPrice: 1000.0,
      carAcceptedStatus: true,
      carAcceptedAndCancelledByDriverStatus: true,
      carAcceptedAndCancelledByUserStatus: false,
    },
    {
      carRequestId: 3,
      carRequestedUserName: "John",
      carRequestedUserPhone: "123456789",
      carPickupLocation: "Kathmandu",
      carDropLocation: "Pokhara",
      noOfPeople: 5,
      carTotalPrice: 1000.0,
      carAcceptedStatus: true,
      carAcceptedAndCancelledByDriverStatus: false,
      carAcceptedAndCancelledByUserStatus: true,
    },
    {
      carRequestId: 4,
      carRequestedUserName: "John",
      carRequestedUserPhone: "123456789",
      carPickupLocation: "Kathmandu",
      carDropLocation: "Pokhara",
      noOfPeople: 7,
      carTotalPrice: 1000.0,
      carAcceptedStatus: true,
      carAcceptedAndCancelledByDriverStatus: true,
      carAcceptedAndCancelledByUserStatus: false,
    },
    {
      carRequestId: 5,
      carRequestedUserName: "John",
      carRequestedUserPhone: "123456789",
      carPickupLocation: "Kathmandu",
      carDropLocation: "Pokhara",
      noOfPeople: 4,
      carTotalPrice: 1000.0,
      carAcceptedStatus: true,
      carAcceptedAndCancelledByDriverStatus: false,
      carAcceptedAndCancelledByUserStatus: false,
    },
    {
      carRequestId: 6,
      carRequestedUserName: "John",
      carRequestedUserPhone: "123456789",
      carPickupLocation: "Kathmandu",
      carDropLocation: "Pokhara",
      noOfPeople: 4,
      carTotalPrice: 1000.0,
      carAcceptedStatus: true,
      carAcceptedAndCancelledByDriverStatus: true,
      carAcceptedAndCancelledByUserStatus: false,
    },
  ];

  useEffect(() => {
    setCarDriverRequestList(data);
  }, [JSON.stringify(data)]);

  return (
    <div>
      <Header />
      <div>
        {/* listing all requesting ride cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-center mx-auto ">
          {carDriverRequestList.map((car) => {
            return (
              <CarDriverCard
                key={car.carRequestId}
                carRequestedUserName={car.carRequestedUserName}
                carRequestedUserPhone={car.carRequestedUserPhone}
                carPickupLocation={car.carPickupLocation}
                carDropLocation={car.carDropLocation}
                noOfPeople={car.noOfPeople}
                carTotalPrice={car.carTotalPrice}
                carAcceptedStatus={car.carAcceptedStatus}
                carAcceptedAndCancelledByDriverStatus={
                  car.carAcceptedAndCancelledByDriverStatus
                }
                carAcceptedAndCancelledByUserStatus={
                  car.carAcceptedAndCancelledByUserStatus
                }
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default CarDriverMain;
