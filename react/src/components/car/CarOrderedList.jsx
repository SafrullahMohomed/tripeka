import React, { useEffect, useState } from "react";
import CarUserBookedCard from "./CarUserBookedCard";
import { getCarHireByUserId } from "../../services/CarService";


const CarOrderedList = (props) => {
  const currentUserId = JSON.parse(localStorage.getItem("userDetails")).user_id;

    const [carBookedList, setCarBookedList] = useState([]);

    useEffect(() => {
        getCarHireByUserId(currentUserId)
            .then((response) => {
                setCarBookedList(response.data);
                console.log("current users booked itemssss ",response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [JSON.stringify(carBookedList)]);
    
    // console.log("alllllll",carBookedList[0].car.vehicle_id)
    // const bookeddata = {
    //     carId : carBookedList[0].car.vehicle_id,
    //     carName: carBookedList[0].car.vehicle_name,
    //     carType: carBookedList[0].car.vehicle_type,
    //     carPhone: carBookedList[0].car.driver_phone,
    //     carAcceptedStatus: carBookedList[0].accepted,
    //     carAcceptedAndCancelledByDriverStatus: carBookedList[0].accepted_and_cancelled_by_driver,
    //     carAcceptedAndCancelledByUserStatus: carBookedList[0].accepted_and_cancelled_by_user,
    //     carTotalprice: carBookedList[0].total_price,
    //     carPickup: carBookedList[0].pickup,
    //     carDropoff: carBookedList[0].drop,
    //     carDate: carBookedList[0].date,
    //     carTime: carBookedList[0].time,
    //     carAvailableSeats : carBookedList[0].car.max_passengers,
    //     carCompletedStatus: carBookedList[0].completed

    // }
    // console.log("bookeddataaaaaa", bookeddata);
    // const data = [
    //     {
    //       carId: 1,
    //       carName: "Volvo",
    //       carType: "Car",
    //       carOwner: "John",
    //       carPhone: "123456789",
    //       carAcceptedStatus: true,
    //       carAcceptedAndCancelledByDriverStatus: false,
    //       carAcceptedAndCancelledByUserStatus: false,
    //       carTotalprice: 1000.0,
    //       carAvailableSeats: 4,
    //       carPrice: 120.0,
    //       carImage: "https://picsum.photos/seed/picsum/200/300",
    //     },
    //     {
    //       carId: 2,
    //       carName: "BMW",
    //       carType: "Car",
    //       carOwner: "John",
    //       carPhone: "123456789",
    //       carAcceptedStatus: true,
    //       carAcceptedAndCancelledByDriverStatus: true,
    //       carAcceptedAndCancelledByUserStatus: false,
    //       carTotalprice: 1000.0,
    //       carAvailableSeats: 4,
    //       carPrice: 120.0,
    //       carImage: "https://picsum.photos/seed/picsum/200/300",
    //     },
    //     {
    //       carId: 3,
    //       carName: "Audi",
    //       carType: "Car",
    //       carOwner: "John",
    //       carPhone: "123456789",
    //       carAcceptedStatus: false,
    //       carAcceptedAndCancelledByDriverStatus: false,
    //       carAcceptedAndCancelledByUserStatus: false,
    //       carTotalprice: 1000.0,
    //       carAvailableSeats: 4,
    //       carPrice: 120.0,
    //       carImage: "https://picsum.photos/seed/picsum/200/300",
    //     }
        
    //   ];
      
    //   useEffect(() => {

    //   // setCarBookedList(data);
    // }, [JSON.stringify(data)]);

  return (
    <div className="flex flex-row">
      {carBookedList.map((car) => {
        return (
          <CarUserBookedCard
            key={car.car.vehicle_id}
            carHireId = {car.hire_id}
            carName={car.car.vehicle_name}
            carOwner={car.car.driver_name}
            carPhone={car.car.driver_phone}
            carType={car.car.vehicle_type}
            carPrice={car.car.price_per_km}
            carImage={car.car.vehicle_image}
            carAcceptedStatus={car.accepted}
            carAcceptedAndCancelledByDriverStatus={car.accepted_and_cancelled_by_driver}
            carTotalprice={car.total_price}
            carAvailableSeats={car.car.max_passengers}
          />
        );
      })}
    </div>
  );
};

export default CarOrderedList;
