import React from "react";
import { useState, useEffect } from "react";
import "../../styles/Budget.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { updateBudget, deleteBudget } from "../../services/BudgetService";

const ListItem = (props) => {
  const delete_function = () => {
    deleteBudget(props.budget_id)
      .then((response) => {
        console.log("successfully deleted", response.data);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    
  }, [title, amount, description]);

  // const update_function = async () => {
  //    updateBudget(props.budget_id, props.title, props.amount, props.description)
  //     .then((response) => {
  //       console.log("successfully updated", response.data);
  //     })
  //     .catch((err) => {
  //       console.log("Something went wrong", err);
  //     });
  // };

  // Update budget modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // delete budget from the list

  return (
    <div className="mainclass-list flex mr-3 ml-3 items-center">
      <div className="list flex items-center bg-slate-200">
        <div className="first-column mr-5">
          <div className="title font-medium text-lg">{props.title}</div>
          <div className="description text-gray-700 text-sm">
            {props.description}
          </div>
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
        <div className="edit-list" onClick={() => handleOpen()}>
          <FontAwesomeIcon style={{ color: "green" }} icon={faPencil} />
        </div>
        <div
          className="delete-list"
          onClick={() => {
            let confirmAction = window.confirm(
              "Are you sure to delete the budget?"
            );
            if (confirmAction) {
              alert("You have deleted the budget successfully");
              delete_function();
            } else {
              alert("Cancelled the action");
            }
          }}
        >
          {/*Or*/}
          <FontAwesomeIcon style={{ color: "red" }} icon={faTrash} />
        </div>
      </div>

      {/* Update Modal*/}
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClose={handleClose}
        open={open}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <DialogTitle id="dialog-title" sx={{ width: 450, marginBottom: -1 }}>
            {"Update Budget"}
          </DialogTitle>
          <DialogContent>
          
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              margin="dense"
              id="update-title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              // value="some value"
            />
            <DialogContentText
              id="dialog-description"
              sx={{ marginTop: 2 }}
            ></DialogContentText>
            <TextField
              onChange={(e) => setAmount(e.target.value)}
              autoFocus
              margin="dense"
              name="amount"
              id="amount"
              label="Amount"
              type="text"
              fullWidth
              variant="standard"
              // value={props.amount}
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
              // value={props.description}
            />
          </DialogContent>
          <DialogActions>
            <Button type="reset" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => {
                updateBudget(props.budget_id, title, amount, description)
                  .then((response) => {
                    console.log("successfully updated", response.data);
                  })
                  .catch((err) => {
                    console.log("Something went wrong", err);
                  });
                handleClose();
              }}
              autoFocus
            >
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ListItem;
