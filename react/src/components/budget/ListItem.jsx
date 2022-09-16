import React from "react";
import "../../styles/Budget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import { updateBudget, deleteBudget } from "../../services/BudgetService";


const ListItem = (props) => {

  const delete_function = async () => {
    await deleteBudget(props.budget_id)
      .then((response) => {
        console.log("successfully deleted", response.data);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        
      });
  };

  const update_function = async () => {
    await updateBudget(props.budget_id, props.title, props.amount, props.description)
      .then((response) => {
        console.log("successfully updated", response.data);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };


  // delete budget from the list

  return (
    <div className="mainclass-list flex mr-3 ml-3 items-center">
      <div className="list flex items-center bg-slate-200">
        <div className="first-column mr-5">
          <div className="title font-medium text-lg">{props.title}</div>
          <div className="description text-gray-700 text-sm">{props.description}</div>
        </div>
        <div className="second-column ">
          <div className="price font-medium ">Rs. {props.amount}</div>
          <div className="time">
            {props.date} at{" "}
            <span className="text-sm text-red-900	">{props.time}</span>
          </div>
        </div>
      </div>
      <div className="edit-delete ml-2 ">
        <div className="edit-list" onClick={ () => update_function()}>

        <FontAwesomeIcon style={{color:"green"}} icon={faPencil} /></div>
        <div className="delete-list" onClick= {() => {delete_function()}}>

        {/*Or*/}
   	    <FontAwesomeIcon style={{color:"red"}} icon={faTrash} /></div>
      </div>
    </div>
  );
};

export default ListItem;
