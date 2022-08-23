import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GroupIcon from '@mui/icons-material/Group';
import CreateIcon from '@mui/icons-material/Create';
import CallIcon from '@mui/icons-material/Call';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from "@mui/material";
import { blue } from '@mui/material/colors';

const actions = [
    { icon: <GroupIcon />, name: 'Create Group'},
    { icon: <CreateIcon />, name: 'Review'},
    { icon: <CallIcon />, name: 'Contact'},
    { icon: <HelpCenterIcon />, name: 'Help'},
  ];
  
const emails = ['username@gmail.com', 'user02@gmail.com'];

const SpeedDialButton = () => {

    // speed dial
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // create-group modal
  const [openM, setOpenM] = useState(false);
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);

  const addHandler = (name) => {
    if (name === "Create Group") {
      handleOpenM()
    }
    if (name === "Review") {
      window.location.href = '/blogs'
    }
    if (name === "Contact") {
      window.location.href = '/contactus'
    }
    if (name === "Help") {
      window.location.href = '/help'
    }
  }
    return ( 
        <div>
          <Box sx={{ height: 300, transform: 'translateZ(0px)', flexGrow: 1, 
           position: 'fixed', bottom: 20, right: 30, zIndex: 10  }}>
            <SpeedDial
              ariaLabel="SpeedDial"
              icon={<SpeedDialIcon />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => addHandler(action.name)}
              />
            ))}
            </SpeedDial>
          </Box>
          
          {/*Group-Modal*/}
          <Dialog
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            onClose={handleCloseM}
            open={openM}
          >
            <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
              {"Create New Group"}
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="Group-name"
                label="Name"
                type="text"
                fullWidth
                variant="filled"
              />
              <DialogContentText id="dialog-description" sx={{marginTop: 2}}>
                Add friends
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="standard"
              />
              <DialogContentText id="dialog-description" sx={{marginY: 2}}>
                People with access
              </DialogContentText>
              <List sx={{ p: 0 }}>
                {emails.map((email) => (
                <ListItem sx={{ pl: 0 }} key={email}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email} />
                </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseM}>Cancel</Button>
              <Button onClick={handleCloseM} autoFocus>Done</Button>
            </DialogActions>
          </Dialog>
        </div>
     );
}
 
export default SpeedDialButton;