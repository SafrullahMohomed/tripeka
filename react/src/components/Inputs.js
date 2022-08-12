import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input
            type="text"
            placeholder="Search for city...."
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            />
            <UilSearch
                size={25}
                className="text-black cursor-pointer transition ease-out hover:scale-125"
                
            />
            <UilLocationPoint
            size={25}
            className="text-black cursor-pointer transition ease-out hover:scale-125"
            
            />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button
            name="metric"
            className="text-xl text-black font-light transition ease-out hover:scale-125 bg-inherit"
            
            >
            °C
            </button>
            <p className="text-xl text-black mx-1">|</p>
            <button
            name="imperial"
            className="text-xl text-black font-light transition ease-out hover:scale-125 bg-inherit"
            
            >
            °F
            </button>
      </div>
    </div>
  )
}

export default Inputs