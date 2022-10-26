import React from "react";
import Header from "../Header";
import CarForm from "./CarForm";
import Footer from "../Footer";
import "../../styles/Car.css";
import CarOrderedList from "./CarOrderedList";

const CarMain = () => {
  return (
    <div>
      {/* header component */}
      <div className="class-header">
        <Header />
      </div>

      {/* main component */}
      <div className="class-main flex justify-between">
        

        {/* car form component */}
        <div className="car-right w-full">
          <CarForm className="w-full" />
        </div>
      </div>
      <div className="booked-vehicle-part">
        <h2 className="flex justify-center text-xl my-4 text-green-800">Your Booked Hires</h2>
        <CarOrderedList />
      </div>

      {/* footer component */}
      <div className="class-footer">
        <Footer />
      </div>
    </div>
  );
};

export default CarMain;
