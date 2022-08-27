import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddCircle from "@mui/icons-material/AddCircle";
import { grey } from "@mui/material/colors";
import { CardActionArea } from "@mui/material";
import { getGroups } from "../services/GroupsService";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";

import img1 from "../assets/arugam.jpg";
import img2 from "../assets/dalada.jpg";
import img3 from "../assets/jaffna.jpg";
import img from "../assets/customer2.jpg";
import createGroup from "../services/GroupsService";

const actions = [
  { id: "1", name: "../assets/arugam.jpg" },
  { id: "2", name: "../assets/dalanda.jpg" },
  { id: "3", name: "../assets/jaffna.jpg" },
];

const Groups = () => {
  // Display Groups
  const [groups, setGroups] = useState([]);

  const init = () => {
    getGroups()
      .then((response) => {
        console.log("Printing employees data", response.data);
        setGroups(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const [openM, setOpenM] = useState(false);
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);

  // creating croup cards
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const createGroupFrom = () => {
    createGroup(name, location).then((response) => console.log(response));
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

      <div class="container px-5 py-5 mx-auto">
        <div class="w-full mb-8 pl-2">Your Trip Groups</div>
          <div class="flex flex-wrap -m-2">
          {groups.map((group) => (
            <div key={group.group_id} class="p-4 lg:w-1/5 md:w-1/2 w-full">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  onClick={() => {
                    window.location.href = "/trip";
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
                      Created by : {group.location}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}

          {/*
          <div class="p-4 lg:w-1/5 md:w-1/2 w-full">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={img1}
                  alt="green iguana"
                  sx={{ height: 100 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Galle Fort
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Created by : Nishal
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div class="p-4 lg:w-1/5 md:w-1/2 w-full">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={img3}
                  alt="green iguana"
                  sx={{ height: 100 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Jaffna Trip
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Created by : Ninthu
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>*/}
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
