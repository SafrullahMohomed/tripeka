import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createApi } from "unsplash-js";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddCircle from "@mui/icons-material/AddCircle";
import { grey } from "@mui/material/colors";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { getGroups } from "../services/GroupsService";
import { getGroupsById } from "../services/GroupsService";
import { createGroup } from "../services/GroupsService";
import jwt_decode from "jwt-decode";

// userId from token
// var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
// const user_id = decoded.sub;
var user_id = null;
var firstname = null;
if (localStorage.getItem("userDetails")) {
  user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;
  firstname = JSON.parse(localStorage.getItem("userDetails")).firstname;

  // console.log("UserID : " + parseInt(user_id));
  // console.log("FirstName : " + firstname);
}

const Groups = () => {
  // Display Groups
  const [groupList, setGroups] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const init = () => {

    getGroupsById(user_id)
      .then((response) => {
        // console.log("Printing Groups data", response.data);
        setIsPending(false);
        setGroups(response.data.groups);
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

  // create group modal
  const [openM, setOpenM] = useState(false);
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);

  // creating-group form

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [username, setUsername] = useState(firstname);
  const [owner_id, setOwnerId] = useState(user_id);
  // https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwzNjIzNTd8MHwxfHNlYXJjaHwyfHxiZWFjaHxlbnwwfHx8fDE2NjYwMzE2MzQ&ixlib=rb-1.2.1
  const [url, setUrl] = useState("");
  const [startdate, setStartDate] = useState(null);
  const [enddate, setEndDate] = useState(null);

  const navigate = useNavigate();

  const createGroupFrom = async (e) => {
    e.preventDefault();

    // get location image url
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${location}&client_id=9WMuH_JWZbfr3mw43CYqFVoe87rAXLKaS2iCp6ibnz0`
    );
    const dataJ = await data.json();
    const result = await dataJ.results;
    const image = await result[0].urls.raw;
    setUrl(image);

    // const group = { username, name, location, owner_id, url, startdate, enddate, image }; 
    // console.log(group);
    createGroup(username, name, location, owner_id, url, startdate, enddate )
      .then((response) => navigate("/trip/" + response.data.group_id));
        
  };

  return (
    <section class="text-gray-600 body-font mb-10">
      {/* {console.log(groupList)}
      <div>
        {groupList.map((group, index) => (
          <div key={index}>
            <div>{group.name}</div>
          </div>
        ))}
      </div> */}

      {/*Displaying Group Cards */}
      <div class="container px-32 py-5 mx-auto">
        <div class="w-full mb-8 pl-2 text-slate-500 text-2xl">Trip Groups</div>
        <div class="flex flex-wrap -m-2">
          {error && (
            <div className="flex items-center px-10 text-rose-500">{error}</div>
          )}
          {isPending && (
            <div className="flex items-center px-10">
              <CircularProgress />
            </div>
          )}

          {groupList.map((group) => (
            <div key={group.group_id} class="px-4 py-1 lg:w-1/5 md:w-1/2 w-full">
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea
                  onClick={() => {
                    window.location.href = `/trip/${group.group_id}`;
                  }}
                >
                  <CardMedia
                    component="img"
                    image={group.url}
                    alt=""
                    sx={{ height: 120 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {group.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Created by : {group.owner}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}

          {/* Add Group Card-Button */}
          <div class="px-4 py-1 lg:w-1/5 md:w-1/2 w-full">
            <Card sx={{ maxWidth: 400 }} onClick={handleOpenM}>
              <CardActionArea>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: grey[100],
                    color: grey[600],
                    height: 120,
                  }}
                >
                  <AddCircle />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Add new trip
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Create your Group
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>

      {/* Group Modal*/}
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClose={handleCloseM}
        open={openM}
      >
        <form onSubmit={createGroupFrom}>
          <DialogTitle id="dialog-title" sx={{ width: 450, marginBottom: -1 }}>
            {"Create New Group"}
          </DialogTitle>
          <DialogContent>
            <TextField
              onChange={(e) => setName(e.target.value)}
              autoFocus
              margin="dense"
              id="Group-name"
              label="Name"
              type="text"
              fullWidth
              variant="filled"
            />
            <DialogContentText id="dialog-description" sx={{ marginTop: 2 }}>
              Trip Destination
            </DialogContentText>
            <TextField
              onChange={(e) => setLocation(e.target.value)}
              autoFocus
              margin="dense"
              name="location"
              id="location"
              label="Location"
              type="text"
              fullWidth
              variant="standard"
            />

          <div className="date-picker flex items-center mt-8">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Start-Date"
                value={startdate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Box sx={{ mx: 2 }}> to </Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="End-Date"
                value={enddate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
             
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseM}>Cancel</Button>
            <Button type="submit" onClick={handleCloseM} autoFocus>
              Done
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </section>
  );
};

export default Groups;
