import React from 'react';
import { useState, useEffect } from 'react';


const CarDriverInnerdetails = (props) => {
    return( <div>
        <div className=" flex flex-col items-start ">
          {/* <div className="carStatus">{props.carStatus}carStatus</div> */}
            <div className="numberOfPeople">Number of people <span className='text-blue-600'>{props.noOfPeople}</span></div>
            <div className="totalPrice">ride price : <span className='text-blue-600'>{props.carTotalPrice}</span></div>
            <div className="userPhone">Phone NO : <span className='text-blue-600'>{props.carRequestedUserPhone}</span></div>
        </div>
        <br />
      </div>);
}

export default CarDriverInnerdetails;