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


    return ( 
        <section class="w-full h-full text-gray-600 body-font pt-20 bg-gray-100">
            <div class="flex justify-center px-5 py-1 mx-auto">
                
                <div className="w-3/4 p-2 my-4">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">Location</TableCell>
                                <TableCell align="left">Description</TableCell>
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

                <div className='hidden w-1/2'>
                    <div className='w-full p-4 bg-gray-300'>ADD NEW SUGGESTION</div>
                    <div className='w-full p-1 bg-gray-300'>
                        <div className='p-2'><TextField id="outlined-basic" label="Location" variant="outlined" sx={{width: 1}} /></div>
                        <div className='p-2'><TextField id="outlined-basic" label="Description" variant="outlined" sx={{width: 1}} /></div>
                        <div className='p-2'>Button</div>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export default AddSuggestion;