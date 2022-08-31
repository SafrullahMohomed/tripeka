import React, { useState, useEffect } from "react";
import UserList from "./UserList";

import ExpenseList from "./ExpenseList";

import HoverBoxes from "./HoverBoxes";
import Header from "../Header";
import {getAllUserBudgetByGroupId, getUserBudgetByGroupId, getTotalamountSpendedByGroupId, getAverageamountSpendedByGroupId, getIndividualamountSpendedByGroupIdUserId, getDueamountSpendedByGroupIdUserId} from "../../../services/BudgetService";
import jwt_decode from "jwt-decode";

// import axios from "axios";

const Budget = () => {
  const [yourAmount, setYourAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [individualAmount, setIndividualAmount] = useState(null);
  const [yourDue, setYourDue] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [Error, setError] = useState(false);
  console.log(yourAmount);
  console.log(totalAmount);
  console.log(individualAmount);
  console.log(yourDue);

  var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
  // console.log(decoded.sub);

  // initializing the state variable function
  const init = () => {

    // to get individual amount spended by user
    getIndividualamountSpendedByGroupIdUserId()
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
    getTotalamountSpendedByGroupId()
    .then((response) => {
      console.log("Printing Groups data", response.data);
      setIsPending(false);
      setTotalAmount(parseFloat(response.data.toFixed(2)));
      setError(null);
    }).catch((err) => {
      console.log("Something went wrong", err);
      setIsPending(false);
      setError(err.message);
    }
    );

    // to get average amount spended by group
    getAverageamountSpendedByGroupId()
    .then((response) => {
      console.log("Printing Groups data", response.data);
      setIsPending(false);
      setIndividualAmount(parseFloat(response.data.toFixed(2)));
      setError(null);
    }
    ).catch((err) => {
      console.log("Something went wrong", err);
      setIsPending(false);
      setError(err.message);
    }
    );

    // to get individual due amount
    getDueamountSpendedByGroupIdUserId()
    .then((response) => {
      console.log("Printing Groups data", response.data);
      setIsPending(false);
      setYourDue(parseFloat(response.data.toFixed(2)));
      setError(null);
    }
    ).catch((err) => {
      console.log("Something went wrong", err);
      setIsPending(false);
      setError(err.message);
    }
    );
  }

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

      <UserList> </UserList>

      {/* user carousel ends here */}

      {/* <div className="second-row"><ChartBudget></ChartBudget></div> */}
      <div className="third-row mx-5 mb-20">
        <ExpenseList className=""></ExpenseList>
      </div>
    </div>
  );
};

export default Budget;
