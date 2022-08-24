import React from "react";
import "../../styles/Budget.css";


const ListItemsAll = (props) => {
  return (
    <div className="mainclass-list flex mr-3 ml-3 items-center">
      <div className="list flex items-center bg-slate-200">
      <div className="user font-medium text-L mr-3">User</div>
        <div className="first-column mr-3">
          <div className="title font-medium text-xl">{props.title}</div>
          <div className="description text-gray-700 ">{props.description}</div>
        </div>
        <div className="second-column mr-3 ">
          <div className="price font-medium ">Rs. {props.amount}</div>
          <div className="time">
          <p className="text-blue-500 ml-3 text-xs ">
            on {props.date} at {props.time}
          </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ListItemsAll;
