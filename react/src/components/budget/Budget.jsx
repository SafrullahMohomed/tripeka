import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import { useParams } from "react-router-dom";
import ExpenseList from "./ExpenseList";

import HoverBoxes from "./HoverBoxes";
import Header from "../Header";
import {
  getTotalamountSpendedByGroupId,
  getAverageamountSpendedByGroupId,
  getIndividualamountSpendedByGroupIdUserId,
  getDueamountSpendedByGroupIdUserId,
} from "../../services/BudgetService";

import jwt_decode from "jwt-decode";

const Budget = () => {
  const [yourAmount, setYourAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [individualAmount, setIndividualAmount] = useState(0);
  const [yourDue, setYourDue] = useState();
  const [isPending, setIsPending] = useState(true);
  const [Error, setError] = useState(false);
  console.log(yourAmount);
  console.log(totalAmount);
  console.log(individualAmount);
  console.log(yourDue);

  // to get the group id

  const { group_id } = useParams();
  console.log(group_id);

  // var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
  // const currentUserId = decoded.sub;
  // console.log(decoded.sub);
  const currentUserId = JSON.parse(localStorage.getItem("userDetails")).user_id;

  const group_id_int = parseInt(group_id);
  const user_id_int = parseInt(currentUserId);
  // initializing the state variable function
  const init = () => {
    // to get individual amount spended by user
    getIndividualamountSpendedByGroupIdUserId(group_id_int, user_id_int)
      .then((response) => {
        console.log("Printing Groups data", response.data);
        setIsPending(false);
        setYourAmount(parseFloat(response.data.toFixed(2)));
        setError(null);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        setIsPending(false);
        setError(err.message);
      });

    // to get total amount spended by group
    getTotalamountSpendedByGroupId(group_id_int)
      .then((response) => {
        console.log("Printing Groups data", response.data);
        setIsPending(false);
        setTotalAmount(parseFloat(response.data.toFixed(2)));
        setError(null);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        setIsPending(false);
        setError(err.message);
      });

    // to get average amount spended by group
    getAverageamountSpendedByGroupId(group_id_int)
      .then((response) => {
        console.log("Printing Groups data", response.data);
        setIsPending(false);
        setIndividualAmount(parseFloat(response.data.toFixed(2)));
        setError(null);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        setIsPending(false);
        setError(err.message);
      });

    // to get individual due amount
    getDueamountSpendedByGroupIdUserId(group_id_int, user_id_int)
      .then((response) => {
        console.log("Printing Groups data", response.data);
        setIsPending(false);
        setYourDue(parseFloat(response.data.toFixed(2)));
        setError(null);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        setIsPending(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="main-budget">
      <div className="first-row">
        <Header />

        {/* cards starts here  */}

        {/* {axios.get("http://localhost:8080/api/v1/budget/totalamount/1")
        .then(res => res.data).
        then(data => {
          setTotalAmount(data.totalAmount);
        })} */}

        <div className="first-row-row2 flex flex-wrap justify-around">
          <div className="first-row-row2-col1 w-40 m-3">
            <HoverBoxes title="Your Amount" amount={yourAmount} />
          </div>
          <div className="first-row-row2-col2 w-40 h-20 m-3">
            <HoverBoxes title="Total Expenses" amount={totalAmount} />
          </div>
          <div className="first-row-row2-col3 w-40 m-3">
            <HoverBoxes title="Individual Expense" amount={individualAmount} />
          </div>
          <div className="first-row-row2-col3 w-40 m-3">
            <HoverBoxes title="Your Due" amount={yourDue} />
          </div>
        </div>
        {/* cards ends here  */}

        <div className="first-row-row3"></div>
      </div>
      {/* user carousel starts here */}

      <UserList group_id = {group_id} user_id = {user_id_int} > </UserList>

      {/* user carousel ends here */}

      {/* <div className="second-row"><ChartBudget></ChartBudget></div> */}
      <div className="third-row mx-5 mb-20">
        <ExpenseList
          group_id={group_id}
          user_id={user_id_int}
          className=""
        ></ExpenseList>
      </div>
    </div>
  );
};

export default Budget;
