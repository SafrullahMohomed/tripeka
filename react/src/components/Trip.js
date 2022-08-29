import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from "@mui/material/Tooltip";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
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
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';

import Footer from "../components/Footer";
import dalanda from '../assets/dalada.jpg'
import img1 from '../assets/customer1.jpg'
import img2 from '../assets/customer2.jpg'
import img3 from '../assets/customer3.jpg'
import map from '../assets/map.png'

const options = [
    {name: 'Add People', action: 'handleOpenFM'},
    {name: 'Edit Trip', action: ''},
    {name: 'Delete Trip', action: 'handleDelete'},
    {name: 'Add description', action: ''},
    {name: 'Group members', action: ''},
  ];
  
const emails = ['kasun.withanage@gmail.com', 'ravindu.perera@gmail.com'];

const Trip = () => {

    // dropdown
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // add friends modal
    const [openFM, setOpenFM] = useState(false);
    const handleOpenFM = () => {
        setOpenFM(true); 
        setAnchorEl(null);
    };
    const handleCloseFM = () => setOpenFM(false);

    // delete trip
    const navigate = useNavigate();

    const handleDelete = () => {
        // fetch('http://localhost:8000/groups/' + group_id, {
        //     method: 'DELETE'
        // }).then(() => {
        //     // after Delete...
        //     navigate('/groups'); 
        // })

        // after Delete...
        navigate('/groups'); 
      }

    const addHandler = (name) => {
        if (name === "handleOpenFM") {
            handleOpenFM();
        }
        if (name === "handleDelete") {
            handleDelete();
        }
        
      }

      //prints the variable and group_id value from URL
      const params = new URLSearchParams(window.location.search);
      for (const param of params) {
        console.log(param[0]); //variable
        console.log(param[1]); //value
      }
      

    return ( 
        <>
        <div className="flex flex-wrap px-10 mb-10">
            <div class="p-1 flex lg:w-1/3 md:w-1/2 w-full">
                <Card>
                    <CardHeader
                        action={
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Dalanda Palace"
                        subheader="by Kasun"
                    />
                    <CardMedia
                        component="img"
                        image={dalanda}
                        alt=""
                        sx={{height: 180}}
                    />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <AvatarGroup max={4} sx={{mb: 2}}>
                            <Avatar alt="" src={img1} />
                            <Avatar alt="" src={img2} />
                            <Avatar alt="" src={img3} />
                            <Avatar alt="" src={img1} />
                            <Avatar alt="" src={img2} />
                            <Avatar alt="" src={img3} />
                        </AvatarGroup>
                        <Typography variant="body2" color="text.secondary">
                            The Royal Palace of Kandy, located to the north of the Temple of the Tooth in Kandy, was the royal residence of the Sri Lankan monarchy of the Kingdom of Kandy in Sri Lanka. The last king to reside in it was King Sri Vikrama Rajasinha.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Tooltip title="Chat">
                            <IconButton aria-label="group chat">
                                <ChatBubbleRoundedIcon onClick = {() => {window.location.href = '/groupChat'}}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Budget">
                            <IconButton aria-label="budget">
                                <PaidOutlinedIcon onClick = {() => {window.location.href = '/budget'}}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Weather">
                            <IconButton aria-label="climate">
                                <ThunderstormOutlinedIcon onClick = {() => {window.location.href = '/climate'}}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Gallery">
                            <IconButton aria-label="gallery">
                                <CameraAltIcon onClick = {() => {window.location.href = '/gallery'}}/>
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                </Card>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    
                >
                  {options.map((option) => (
                    <MenuItem key={option.name} onClick={() => addHandler(option.action)}>
                        {option.name}
                    </MenuItem>
                   ))}
                </Menu>

            </div>

            {/* Add Friends Modal*/}
            <Dialog
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClose={handleCloseFM}
                open={openFM}
            >
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                {"Add New Friends"}
                </DialogTitle>
                <DialogContent>
                
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
                        Group members
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
                <Button onClick={handleCloseFM}>Cancel</Button>
                <Button onClick={handleCloseFM} autoFocus>Done</Button>
                </DialogActions>
            </Dialog>


            {/* map */}
            <div class="p-1 lg:w-2/3 md:w-1/2 w-full">
                <img src={map} alt="" />
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Trip;