import React from "react";
import Header from "../Header";
import CarForm from "./CarForm";
import CarImage from "./CarImage";
import Footer from "../Footer";

const CarMain = () => {
  return (
    <div>

       {/* header component */}
      <div className="class-header">
        <Header />
      </div>   

       {/* main component */}
      <div className="class-main flex justify-between">
        <div className="car-left w-full item-center flex flex-col ">
          <div className="left-title text-emerald-700 2xl:text-5xl font-semibold my-4 flex justify-center mt-12 md:text-3xl lg:text-4xl"> BOOK A VEHICLE</div>
          <CarImage />
        </div>

        {/* car form component */}
        <div className="car-right w-full">
            <CarForm className="w-full" />
        </div>
      </div>

         {/* footer component */}
        <div className="class-footer">
          <Footer />
        </div>

    </div>
  );
};

export default CarMain;
