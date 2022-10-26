import React from "react";
import { useState, useEffect } from "react";
import CarCardInnerDetails from "./CarCardInnerDetails";
import { addCarHire } from "../../../services/CarService";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CarCard = (props) => {
  const time = props.carBooking.time + ":00";

  const bookingObject = {
    user: {
      user_id: props.userId,
    },
    car: {
      vehicle_id: props.carId,
    },
    requested_user_phone: props.carBooking.phone,
    total_people: props.carBooking.passengers,
    pickup: null,
    drop: null,
    distance: 4.0,
    total_price: 1000.0,
    booked: true,
    accepted: false,
    date: props.carBooking.date,
    time: props.carBooking.time,
    accepted_and_cancelled_by_user: false,
    accepted_and_cancelled_by_driver: false,
    completed: false,
  };

  const BookNowButton = () => {
    addCarHire(bookingObject)
      .then((response) => {
        console.log("I am added who is book button", response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("I am the booking object ", bookingObject);
  };

  return (
    <Card className="w-96 grid-center mx-auto">
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {props.carName}
        </Typography>
        <Typography>
          <CarCardInnerDetails
            key={props.carId}
            carType={props.carType}
            carOwner={props.carOwner}
            carPhone={props.carPhone}
            // carStatus = {props.carStatus}
            carTotalprice={props.carTotalprice}
            carAvailableSeats={props.carAvailableSeats}
          />

          <div class="flex space-x-2 justify-center mr-10 pb-5">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-10 py-2.5 bg-green-600 text-white font-medium text-lg leading-tight uppercase
           rounded shadow-md hover:bg-green-700 hover:shadow-lg  focus:ring-0  active:shadow-lg transition 
           duration-150 ease-in-out"
              onClick={() => {
                console.log("I am clicked book button");
                BookNowButton();
                window.location.reload();
              }}
            >
              Book Now
            </button>
          </div>
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{props.carPrice}/km</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          {props.carDistrict}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
