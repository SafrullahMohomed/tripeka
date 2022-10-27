import React, { useState, useEffect } from "react";
import { getUsers } from "../services/UserService";

import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

const Users = () => {

  const init = async() => {

    await getUsers()
     .then((response) => {
        console.log("Printing user data", response.data);
        setUsers(response.data)
      })
      .catch((err) => {
        console.log("Something went wrong", err);
    });

  };

  useEffect(() => {
    init();
  }, []);


  const [users, setUsers]  = useState([]);

  return ( 
    <>
        <section class="w-full h-full text-gray-600 body-font pt-20 bg-gray-100">
            <div class="flex flex-col items-center px-5 py-1 mx-auto">
                <div class="flex flex-wrap w-full pb-4 flex-col items-center text-center">
                    <div class="sm:text-3xl text-2xl font-medium title-font  pt-4 mb-2 text-gray-900">System Users</div>
                </div>
                <div className="w-3/4 p-2 my-4">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left"><b>Name</b></TableCell>
                                <TableCell align="left"><b>Email</b></TableCell>
                                <TableCell align="left"><b>Role</b></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {users.map((item) => (
                                item.firstname ? 
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{item.firstname + " " + item.lastname}</TableCell>
                                    <TableCell align="left">{item.email}</TableCell>
                                    <TableCell align="left">{item.userrole}</TableCell>
                                </TableRow>
                                : ""
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div> 
            </div>
        </section>
    </>
   );
}
 
export default Users;
<div>
  Users
</div>