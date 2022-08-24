import React from "react";

const ListObject = (props) => {
  <tr className="border-solid border-2 bg-slate-300">
    <td>
      <div className="flex items-center">
        <div className="pl-3">
          <div className="flex items-center text-sm leading-none">
            <p className="font-semibold text-gray-800">{props.title}</p>
          </div>
          <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">
            {props.description}
          </p>
        </div>
      </div>
    </td>
    <td className="pl-16">
      <div>
        <p className="text-lg font-semibold leading-none text-right text-gray-800 mr-10 mt-3">
          Rs.{props.amount}
        </p>
        <div className="flex items-center justify-center px-2 py-1 mt-2 mb-2 mr-2 bg-green-200 rounded-full">
          <p className="text-blue-500 ml-3 text-xs ">
            on {props.date} at {props.time}
          </p>
        </div>
      </div>
    </td>
  </tr>;
};

export default ListObject;
