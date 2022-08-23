import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
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
import { TextField } from "@mui/material";
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const GroupModal = () => {
    
    const [openM, setOpenM] = useState(false);
    const handleOpenM = () => setOpenM(true);
    const handleCloseM = () => setOpenM(false);

    return ( 
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
     );
}
 
export default GroupModal;