import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import ListItemsAll from "./AllExpenses/ListItemsAll";

import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
// import createBudget from "../services/BudgetService";
import {
  addBudget,
  getAllUserBudgetByGroupId,
  getUserBudgetByGroupIdAndUserId,
} from "../../services/BudgetService";
import jwt_decode from "jwt-decode";

const ExpenseList = (props) => {
  const [userListIndividual, setUserListIndividual] = useState([]);
  const [userListAll, setUserListAll] = useState([]);
  const [error, setError] = useState(null);

  // get current users userId
  const currentUserId = JSON.parse(localStorage.getItem("user")).userId;
  // console.log(currentUserId);

  // Budget Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Budget Form
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  // to render initial list for use effect
  const init = () => {
    getUserBudgetByGroupIdAndUserId(1, currentUserId)
      .then((response) => {
        console.log("Printing Groups data", response.data);
        setUserListIndividual(response.data);
        setError(null);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        setError(err.message);
      });

    // to get all user list for user effect
    getAllUserBudgetByGroupId(1)
      .then((response) => {
        console.log("Printing Groups data", response.data);
        setUserListAll(response.data);
        setError(null);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        setError(err.message);
      });
  };

  useEffect(() => {
    init();
  }, []);
  console.log("individual list", userListIndividual);
  console.log("all list", userListAll);

  const budgetForm = (e) => {
    e.preventDefault();

    // var time = new Time().now();
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + today.getDate()).slice(-2);

    var today = new Date(),
      time =
        ("0" + today.getHours()).slice(-2) +
        ":" +
        ("0" + today.getMinutes()).slice(-2) +
        ":" +
        ("0" + today.getSeconds()).slice(-2);

    const amount_double = parseFloat(amount);
    const budget = { title, amount: amount_double, users:{user_id : currentUserId}, groups:{group_id : props.group_id},  description, date, time };
    console.log(budget);
    addBudget(1, 3, budget)
      .then((response) => {
        console.log("Printing Groups data", response.data);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  const [isIndividual, setIsIndividual] = useState(true);
  return (
    <div className="Expenses flex flex-col">
      <div className="ButtonSet flex justify-between">
        {/* Add Budget Button */}
        <Fab
          onClick={handleOpen}
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
        >
          <CreditCardIcon sx={{ mr: 1 }} />
          Add Amount
        </Fab>
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border-2 border-blue-100 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => {
              setIsIndividual(true);
            }}
          >
            My Expenses
          </button>
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-2 border-blue-100 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => {
              setIsIndividual(false);
            }}
          >
            All expenses
          </button>
        </div>
      </div>
      <div className="bothFormAndExpenses">
        <div className="forConditionalRender">
          {isIndividual ? (
            <div>
              <div className="m-auto text-3xl my-4">My expenses</div>
              <div className="lists-of-expenses overflow-y-scroll max-h-96">
                <div className="list-container">
                  {userListIndividual.map((user) => (
                    <ListItem
                      key={user.budget_id}
                      group={user.group_id}
                      user={user.title}
                      title={user.title}
                      amount={user.amount}
                      description={user.description}
                      date={user.date}
                      time={user.time}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="m-auto text-3xl my-4">All expenses</div>
              <div className="lists-of-expenses overflow-y-scroll max-h-96">
                <div className="list-container">
                  {userListAll.map((user) => (
                    <ListItemsAll
                      key={user.budget_id}
                      group={user.group_id}
                      user={user.user_id}
                      title={user.title}
                      amount={user.amount}
                      description={user.description}
                      date={user.date}
                      time={user.time}
                    />
                  ))}

                  {/* <ListItemsAll
                    user="Kamal"
                    title="Dinner"
                    description="Bought the dinner from badulla"
                    amount="5600.00"
                    date="2019-02-09"
                    time="20:23:43"
                  /> */}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <div className="formPart mx-60 md:mx-30 sm:mx-20">
          <FormPart></FormPart>
        </div> */}
      </div>

      {/* Add Expense Modal */}
      <Dialog
        aria-labelledby="expense-title"
        aria-describedby="expense-description"
        onClose={handleClose}
        open={open}
      >
        <form onSubmit={budgetForm}>
          <DialogTitle id="expense-title" sx={{ width: 450, marginBottom: -1 }}>
            {"Add Expense"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="expense-title"
              sx={{ marginTop: 2 }}
            ></DialogContentText>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              margin="dense"
              id="expense-title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
            />
            <DialogContentText
              id="expense-amount"
              sx={{ marginTop: 2 }}
            ></DialogContentText>
            <TextField
              onChange={(e) => setAmount(e.target.value)}
              autoFocus
              margin="dense"
              id="amount"
              label="Amount"
              type="text"
              fullWidth
              variant="standard"
            />
            <DialogContentText
              id="expense-description"
              sx={{ marginTop: 2 }}
            ></DialogContentText>
            <TextField
              onChange={(e) => setDescription(e.target.value)}
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleClose} autoFocus>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ExpenseList;

const params = new URLSearchParams(window.location.search);
for (const param of params) {
  console.log(param[0]);
  console.log(param[1]);
}
