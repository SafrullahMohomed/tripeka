import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
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

import img1 from "../assets/arugam.jpg";
import img2 from "../assets/dalada.jpg";
import img3 from "../assets/jaffna.jpg";
import img from "../assets/customer2.jpg";
import { getGroups } from "../services/GroupsService";
import { getGroupsById } from "../services/GroupsService";
import createGroup from "../services/GroupsService";

const Groups = () => {
  // Display Groups
  const [groups, setGroups] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  const init = () => {
    getGroups()
      .then((response) => {
        console.log("Printing Groups data", response.data);
        setIsPending(false);
        setGroups(response.data);
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

  const navigate = useNavigate();

  const createGroupFrom = (e) => {
    e.preventDefault();
    
    // const group = {name, location}; console.log(group);
    createGroup(name, location)
      .then((response) => console.log(response));

    // after done submit, navigate to the group?
    navigate('/trip');
  };

  return (
    <section class="text-gray-600 body-font mb-10">

      {/*<div>
        {groups.map((group) => (
          <div key={group.id}>
            <div>{group.name}</div>
          </div>
        ))}
        </div>*/}

      {/*Displaying Group Cards */}
      <div class="container px-5 py-5 mx-auto">
        <div class="w-full mb-8 pl-2">Your Trip Groups</div>
          <div class="flex flex-wrap -m-2">

            { error && 
            <div className="flex items-center px-10 text-rose-500">
               { error }
            </div>
           }
            { isPending && 
              <div className="flex items-center px-10">
                  <CircularProgress />
              </div> 
            }
            { groups.map((group) => (
              <div key={group.group_id} class="p-4 lg:w-1/5 md:w-1/2 w-full">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea
                    onClick={() => {
                      window.location.href = "/trip?group_id=" + group.group_id;
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={group.name === "Dalanda Palace" ? img2 : img3}
                      alt=""
                      sx={{ height: 100 }}
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
            )) }

          {/* Add Group Card-Button */}
          <div class="p-4 lg:w-1/5 md:w-1/2 w-full">
            <Card sx={{ maxWidth: 345 }} onClick={handleOpenM}>
              <CardActionArea>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: grey[100],
                    color: grey[600],
                    height: 100,
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
              id="location"
              label="Location"
              type="text"
              fullWidth
              variant="standard"
            />
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
