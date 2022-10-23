import React from "react";
import { useState, useEffect } from "react";
import CarCardInnerDetails from "./CarCardInnerDetails";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CarCard = (props) => {
  return (
    <Card className="w-96 grid-center mx-auto">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={props.carImage}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
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
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
