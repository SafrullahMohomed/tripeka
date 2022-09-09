import React from "react";
import Header from "../Header";
import CarForm from "./CarForm";

const CarMain = () => {
  return (
    <div>
       {/* header component */}

      <div className="class-header">
        <Header />
      </div>
         

       {/* main component */}
      <div className="class-main">

        {/* car form component */}
        <div className="class-car-form">
            <CarForm />
        </div>
      </div>

         {/* footer component */}
        <div className="class-footer"></div>

    </div>
  );
};

export default CarMain;
