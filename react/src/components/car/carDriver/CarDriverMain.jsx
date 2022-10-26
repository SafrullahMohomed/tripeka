import React from "react";
import { useState, useEffect } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import CarDriverCard from "./CarDriverCard";
import { getCarHireByVehicleId } from "../../../services/CarService";
import CarDriverProfile from "./carDriverProfile";

const CarDriverMain = (props) => {
  const [carDriverRequestList, setCarDriverRequestList] = useState([]);
  const currentUserId = JSON.parse(localStorage.getItem("userDetails")).user_id;

  useEffect(() => {
    // TODO: get the car id
    getCarHireByVehicleId(currentUserId)
      .then((response) => {
        console.log("I am the response", response.data);
        setCarDriverRequestList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const data = [
  //   {
  //     carRequestId: 1,
  //     carRequestedUserName: "John",
  //     carRequestedUserPhone: "123456789",
  //     carPickupLocation: "Maharagama",
  //     carDropLocation: "Fort",
  //     noOfPeople: 4,
  //     carTotalPrice: 1000.0,
  //     carAcceptedStatus: false,
  //     carAcceptedAndCancelledByDriverStatus: false,
  //     carAcceptedAndCancelledByUserStatus: false,
  //   },
  //   {
  //     carRequestId: 2,
  //     carRequestedUserName: "John",
  //     carRequestedUserPhone: "123456789",
  //     carPickupLocation: "Kathmandu",
  //     carDropLocation: "Pokhara",
  //     noOfPeople: 4,
  //     carTotalPrice: 1000.0,
  //     carAcceptedStatus: true,
  //     carAcceptedAndCancelledByDriverStatus: true,
  //     carAcceptedAndCancelledByUserStatus: false,
  //   },
  //   {
  //     carRequestId: 3,
  //     carRequestedUserName: "John",
  //     carRequestedUserPhone: "123456789",
  //     carPickupLocation: "Kathmandu",
  //     carDropLocation: "Pokhara",
  //     noOfPeople: 5,
  //     carTotalPrice: 1000.0,
  //     carAcceptedStatus: true,
  //     carAcceptedAndCancelledByDriverStatus: false,
  //     carAcceptedAndCancelledByUserStatus: true,
  //   },
  //   {
  //     carRequestId: 4,
  //     carRequestedUserName: "John",
  //     carRequestedUserPhone: "123456789",
  //     carPickupLocation: "Kathmandu",
  //     carDropLocation: "Pokhara",
  //     noOfPeople: 7,
  //     carTotalPrice: 1000.0,
  //     carAcceptedStatus: true,
  //     carAcceptedAndCancelledByDriverStatus: true,
  //     carAcceptedAndCancelledByUserStatus: false,
  //   },
  //   {
  //     carRequestId: 5,
  //     carRequestedUserName: "John",
  //     carRequestedUserPhone: "123456789",
  //     carPickupLocation: "Kathmandu",
  //     carDropLocation: "Pokhara",
  //     noOfPeople: 4,
  //     carTotalPrice: 1000.0,
  //     carAcceptedStatus: true,
  //     carAcceptedAndCancelledByDriverStatus: false,
  //     carAcceptedAndCancelledByUserStatus: false,
  //   },
  //   {
  //     carRequestId: 6,
  //     carRequestedUserName: "John",
  //     carRequestedUserPhone: "123456789",
  //     carPickupLocation: "Kathmandu",
  //     carDropLocation: "Pokhara",
  //     noOfPeople: 4,
  //     carTotalPrice: 1000.0,
  //     carAcceptedStatus: true,
  //     carAcceptedAndCancelledByDriverStatus: true,
  //     carAcceptedAndCancelledByUserStatus: false,
  //   },
  // ];

  // useEffect(() => {
  //   setCarDriverRequestList(data);
  // }, [JSON.stringify(data)]);

  return (
    <div>
      <Header />
      {/* car user profile */}
      <div className="caruserprofile">
        <CarDriverProfile />
      </div>

      <div>
        {/* listing all requesting ride cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-center mx-auto ">
          {carDriverRequestList.map((car) => {
            return (
              // <h1>{car.requested_user_phone}</h1>
              // <h1>hi all</h1>
              <CarDriverCard
                key={car.hire_id}
                carRequestId={car.hire_id}
                // carRequestedUserName={car.user}
                carRequestedUserPhone={car.requested_user_phone}
                carPickupLocation={car.pickup}
                carDropLocation={car.drop}
                noOfPeople={car.total_people}
                carTotalPrice={car.total_price}
                carAcceptedStatus={car.accepted}
                carAcceptedAndCancelledByDriverStatus={
                  car.accepted_and_cancelled_by_driver
                }
                carAcceptedAndCancelledByUserStatus={
                  car.accepted_and_cancelled_by_user
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
