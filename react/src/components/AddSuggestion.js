import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { getSuggestions } from "../services/SuggestionService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { createSuggestion } from "../services/SuggestionService";

const AddSuggestion = () => {

  const [suggestions, setSuggestions] = useState([]);

  const init = async () => {
    
    await getSuggestions()
      .then((response) => {
        // console.log("Printing data", response.data);
        setSuggestions(response.data)
        // setIsPending(false);
        // setError(null);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        // setIsPending(false);
        // setError(err.message);
    });

  };

  useEffect(() => {
    console.log("Run")
    init();
  }, []);

  // create group modal
  const [openM, setOpenM] = useState(false);
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);

  // creating-group form

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const createSuggestions = async (e) => {
    e.preventDefault();


    // const group = { location, description }; 
    // console.log(group);
    createSuggestion( location, description );
        
  };

    return ( 
        <section class="w-full h-full text-gray-600 body-font pt-20 bg-gray-100">
            <div class="flex flex-col items-center px-5 py-1 mx-auto">
                <div class="flex flex-wrap w-full pb-4 flex-col items-center text-center">
                    <div class="sm:text-3xl text-2xl font-medium title-font  pt-4 mb-2 text-gray-900">Location Suggestions</div>
                </div>
                <div className="w-3/4 p-2 my-4">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left"><b>Location</b></TableCell>
                                <TableCell align="center"><b>Description</b></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {suggestions.map((item) => (
                                <TableRow
                                    key={item.location}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{item.location}</TableCell>
                                    <TableCell align="left">{item.description}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div> 

                <div className='pt-10 pb-16'>
                    <Button variant="contained" onClick={handleOpenM}>Add Suggestion</Button>
                </div>

                {/* add suggestion model */}
                <Dialog
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                    onClose={handleCloseM}
                    open={openM}
                >
                    <form onSubmit={createSuggestions}>
                    <DialogTitle id="dialog-title" sx={{ width: 450, marginBottom: -1 }}>
                        {"Add New Suggestion"}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                        onChange={(e) => setLocation(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="Group-name"
                        label="Location"
                        type="text"
                        fullWidth
                        variant="filled"
                        />
                        
                        <TextField
                        onChange={(e) => setDescription(e.target.value)}
                        autoFocus
                        margin="dense"
                        name="location"
                        id="location"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        />

                        {/* <TextField
                        onChange={(e) => setURL(e.target.value)}
                        autoFocus
                        margin="dense"
                        name="location"
                        id="location"
                        label="Image"
                        type="text"
                        fullWidth
                        variant="standard"
                        /> */}
                        
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" variant="contained" onClick={handleCloseM}>Add Suggestion</Button>
                        <Button onClick={handleCloseM} autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                    </form>
                </Dialog>

            </div>
        </section>
     );
}
 
export default AddSuggestion;