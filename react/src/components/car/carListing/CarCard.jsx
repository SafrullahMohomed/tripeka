import React from 'react';
import {useState, useEffect} from 'react';
import CarCardInnerDetails from './CarCardInnerDetails';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   

    const CarCard = (props) => {

    return (
      <Card className="w-96">
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
                carType = {props.carType}
                carOwner = {props.carOwner}
                carPhone = {props.carPhone}
                carStatus = {props.carStatus}
                carTotalprice = {props.carTotalprice}
                carAvailableSeats = {props.carAvailableSeats}
            />
            
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$899/night</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Barcelona, Spain
          </Typography>
        </CardFooter>
      </Card>
    );
  }