hgfshgx
sdcsdc
sdcsdcsdc
sdcsdcsdcscd
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from "@mui/material/Tooltip";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InputAdornment from '@mui/material/InputAdornment';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { CardActionArea } from '@mui/material';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PlaceIcon from '@mui/icons-material/Place';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import Swal from 'sweetalert2'
import { deleteGroup, removeFriend } from "../services/GroupsService";
import { getGroup, editTrip, addFriend } from "../services/GroupsService";
import { getUsers } from "../services/UserService";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import { groupIntersectingEntries } from "@fullcalendar/react";

var user_id = null;
if (localStorage.getItem("userDetails")) {
  user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;

  console.log("Uid : " + parseInt(user_id));
}

const options = [
    {icon: <PersonAddIcon />, name: 'Add People', action: 'handleOpenFM', color: '', disable: 'false'},
    {icon: <EditIcon />, name: 'Edit Title', action: 'handleOpenTM', color: '', disable: ''},
    {icon: <CalendarMonthIcon />, name: 'View Calendar', action: 'handleOpenCal', color: '', disable: ''},
    {icon: <ExitToAppIcon />, name: 'Exit Group', action: 'handleLeave', color: 'error.main', disable: ''},
    {icon: <DeleteIcon />, name: 'Delete Group', action: 'handleDelete', color: 'error.main', disable: 'false'},
  ];

let friendId = null;
let error = false;
  
const Trip = () => {

    const navigate = useNavigate();
    // prints the group_id value from URL
    const { id } = useParams();
    // console.log(id);

    
    const [trip, setTrip] = useState([]);
    // console.log(trip.name);
    const [members, setMembers]  = useState([]);
    // console.log(members[0])
    // console.log( members.map((user) => (user.user_id)));
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    
    const init = async() => {
    
        await getGroup(id)
          .then((response) => {
            //console.log("Printing Group data", response.data);
            //setIsPending(false);
            setTrip(response.data);
            setMembers(response.data.users);
            setLatitude(response.data.lat);
            setLongitude(response.data.lon);
            //setError(null);
          })
          .catch((err) => {
            console.log("Something went wrong", err);
            //setIsPending(false);
            //setError(err.message);
          });

        await getUsers()
         .then((response) => {
            // console.log("Printing user data", response.data);
            setUsers(response.data)
          })
          .catch((err) => {
            console.log("Something went wrong", err);
        });

      };

      useEffect(() => {
        console.log("run...")
        init();
      }, [error]);

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

    // add friend form
    // const [friend, setFriend] = useState("");
    const [users, setUsers]  = useState([]);
    const [friendEmail, setFriendEmail] = useState("");
    // const [friendId, setFriendId] = useState(null);

    const addFriendForm = async(e) => {
        e.preventDefault();
        console.log("start...")
        for (let i=0 ; i < users.length ; i ++){
            if (friendEmail == users[i].email) {
                friendId = users[i].user_id;
                // console.log("id " + users[i].user_id)
                // setFriendId(users[i].user_id);
                break;
            }
        }
        console.log("FID1 " + friendId)
        if (friendId != null){
            addFriend(id, friendId)
              .then((response) => 
                  console.log(response)
              );
        }
        else{
            error = true;
        }
        console.log("Error " + error)
        console.log("FID2 " + friendId)
        console.log("finish...")


        // console.log("Email " + friendEmail)
        // console.log("ID " + frid)
        // console.log("Error "+ error)

        // users.map((user) => (
        //     console.log("emails "+user.email)
        // ))

    };

    // edit title modal
    const [openTM, setOpenTM] = useState(false);
    const handleOpenTM = () => {
        setOpenTM(true); 
        setAnchorEl(null);
    };
    const handleCloseTM = () => setOpenTM(false);

    // edit location modal
    // const [openLM, setOpenLM] = useState(false);
    // const handleOpenLM = () => {
    //     setOpenLM(true); 
    //     setAnchorEl(null);
    // };
    // const handleCloseLM = () => setOpenLM(false);

    // leave group
    const handleLeave = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to leave?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Leave '
          }).then((result) => {
            if (result.isConfirmed) {
              removeFriend(id, user_id)
              Swal.fire(
                '',
                'You have left the group!',
                'success'
              ).then((result) => {
                if (result.isConfirmed){
                  navigate('/dashboard/'+ user_id); 
                }
              })
            }
          })
    }


    // delete trip
    const handleDelete = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to Delete Group?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteGroup(id)
                Swal.fire(
                  '',
                  'Group Deleted!',
                  'success'
                ).then((result) => {
                  if (result.isConfirmed){
                      navigate('/groups/'+ user_id); 
                  }
                })
            }
        })        
    }

    // edit trip form
    
    const [name, setName] = useState(trip.name);
    // const [location, setLocation] = useState(trip.location);
    // console.log("trip.location :"+ trip.location)

    const editform = (e) => {
        e.preventDefault();

        //{console.log('Inside form '+location)}
        editTrip(id, name)
            .then((response) => {
                console.log('group Edited successfully', response.data);
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });      
    };

    // dropdown calls
    const addHandler = (name) => {
        if (name === "handleOpenFM") {
            handleOpenFM();
        }
        if (name === "handleOpenTM") {
            handleOpenTM();
        }
        if (name === "handleOpenCal") {
            window.location.href = '/events'
        }
        if (name === "handleLeave") {
            handleLeave();
        }
        if (name === "handleDelete") {
            handleDelete();
        }
        
      }      

    // map
    const [selectPosition, setSelectPosition] = useState(null);

    //toggle search
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    //Trip.handleClickOutside = () => setIsOpen(false);

    // alert toggle
    // const [openAlert, setOpenAlert] = useState(true);

    return ( 
        <>
        {/* <div>
            {trip.users.map((user, index) => (
            <div key={index}>
                <div>{user.email}</div>
            </div>
            ))}
        </div> */}        
        
        <div className="flex flex-wrap px-6 py-8 bg-gray-100">
            <div>
                {error ?
                    "user does not exist"
                    // <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={error} autoHideDuration={3000}>
                    //     <Alert severity="warning" sx={{ width: '100%' }}>
                    //             User does not Exist!
                    //     </Alert>
                    // </Snackbar>

                : ""}
            </div>
            <div class="p-1 flex lg:w-1/3 md:w-1/2 w-full">
                <Card sx={{width: 1}}>
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
                        title={trip.name ? trip.name : "Trip"}
                        subheader={trip.owner ? "By " + trip.owner : "Loading..."}
                        
                    />
                    <CardMedia
                        component="img"
                        image={trip.url}
                        alt=""
                        sx={{height: 180, px: 0.5}}
                    />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pb: 0}}>
                        <AvatarGroup max={4}>
                            { members[0] ? 
                                members.map((user) => (
                                    <Avatar alt="" src={user.profile_url} />
                                ))
                                :
                                <Avatar />
                            }                
                        </AvatarGroup>
                        <Typography variant="body2" color="text.secondary" sx={{mt: 2, pl: 1}}>
                            Trip Timeline
                        </Typography>
                        <Typography variant="body1" color="text.main" sx={{mt: 0, pl: 1}}>
                            {trip.start_date ? trip.start_date : <CircularProgress size={15} /> } 
                            {"  to  "}
                            {trip.end_date ? trip.end_date : <CircularProgress size={15} />}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{flexWrap: 'wrap'}} disableSpacing>
                        <Card 
                          onClick = {() => {window.location.href = `/gallery/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Gallery">
                                <IconButton aria-label="gallery">
                                    <CameraAltIcon/>
                                </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Gallery
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/budget/${id}` }}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Budget">
                            <IconButton aria-label="budget">
                                <PaidOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Budget
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/climate/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Weather">
                            <IconButton aria-label="climate">
                                <ThunderstormOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Weather
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/groupChat/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Chat">
                                    <IconButton aria-label="group chat">
                                        <ChatBubbleRoundedIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Chat
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/location/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {/* TODO : Location based on group ID if doing for all users location*/}
                            <Tooltip title="Live Location">
                                <IconButton aria-label="location">
                                    <PlaceIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Location
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                            // TODO : /car/${id} per group?
                          onClick = {() => {window.location.href = `/car`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Rental">
                                <IconButton aria-label="Rental">
                                    <AirportShuttleIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Rental
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
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

                 {/* if owner == user <MenuItem disabled> */}
                 {/* Dropdown */}
                  {options.map((option) => (
                    <div key={option.name}>
                        {trip.owner_id === user_id ? 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem> 
                            : 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}} disabled={option.disable}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem>
                        }
                    </div>
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
                <form onSubmit={addFriendForm}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                {"Add New Friends"}
                </DialogTitle>
                <DialogContent>
                
                    <TextField
                        onChange={(e) => setFriendEmail(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <DialogContentText id="dialog-description" sx={{marginY: 2}}>
                        Group members
                    </DialogContentText>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', height: 200 }} >
                        
                        {members.map((user, index) => (
                        <ListItem sx={{ pl: 0 }} key={index}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id="switch-list-label-wifi" primary={user.email} />
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon onClick = {() => {window.location.href = `/trip/${id}/${user.user_id}`}}/>
                            </IconButton>
                        </ListItem>
                        ))}

                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseFM} autoFocus>Done</Button>
                </DialogActions>
                </form>
            </Dialog>

            {/* Edit Title Modal*/}
            <Dialog
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClose={handleCloseTM}
                open={openTM}
            >
              <form onSubmit={editform}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                    {"Change Name"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {/* <TextField
                        //sx={{ display: 'none' }}
                        //value={trip.location}
                        //onChange={(e) => setLocation(e.target.value)}
                    /> */}
                    
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleCloseTM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseTM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog>

            {/* Edit Location Modal*/}
            {/* <Dialog
                aria-labelledby="dialog-location"
                aria-describedby="dialog-location"
                onClose={handleCloseLM}
                open={openLM}
            > 
              <form onSubmit={editform}>
                <DialogTitle id="dialog-location" sx={{width: 450, marginBottom: -1}}>
                    {"Change Location"}
                </DialogTitle>
                <DialogContent>
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
                    <Button onClick={handleCloseLM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseLM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog> */}

            {/* map */}
            <div class="p-1 lg:w-2/3 md:w-1/2 w-full">
                {/* <img src={map} alt="" />
                <div>{trip.location}</div> */}
                <div className="flex relative drop-shadow-lg bg-white">
                    <div className="absolute top-1 right-3" onClick={toggle}>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            {isOpen ? <CancelRoundedIcon /> : <KeyboardDoubleArrowLeftIcon />}
                        </IconButton>
                    </div>
                    <div className="w-11/12">
                        {latitude ? 
                            <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/>
                        : 
                            <div className="flex justify-center text-2xl mt-20" style={{ height: '590px', width: '100%' }}>
                                <div className="mr-2">Loading Map Data </div> 
                                <div className="ml-2"><CircularProgress /></div>
                            </div>
                        }
                        {/* <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/> */}
                    </div>
                    <div className={isOpen ? 'w-2/3 float-right mt-10 p-2' : 'hidden'} >
                        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Trip;
hgfshgx
sdcsdc
sdcsdcsdc
sdcsdcsdcscd
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from "@mui/material/Tooltip";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InputAdornment from '@mui/material/InputAdornment';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { CardActionArea } from '@mui/material';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PlaceIcon from '@mui/icons-material/Place';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import Swal from 'sweetalert2'
import { deleteGroup, removeFriend } from "../services/GroupsService";
import { getGroup, editTrip, addFriend } from "../services/GroupsService";
import { getUsers } from "../services/UserService";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import { groupIntersectingEntries } from "@fullcalendar/react";

var user_id = null;
if (localStorage.getItem("userDetails")) {
  user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;

  console.log("Uid : " + parseInt(user_id));
}

const options = [
    {icon: <PersonAddIcon />, name: 'Add People', action: 'handleOpenFM', color: '', disable: 'false'},
    {icon: <EditIcon />, name: 'Edit Title', action: 'handleOpenTM', color: '', disable: ''},
    {icon: <CalendarMonthIcon />, name: 'View Calendar', action: 'handleOpenCal', color: '', disable: ''},
    {icon: <ExitToAppIcon />, name: 'Exit Group', action: 'handleLeave', color: 'error.main', disable: ''},
    {icon: <DeleteIcon />, name: 'Delete Group', action: 'handleDelete', color: 'error.main', disable: 'false'},
  ];

let friendId = null;
let error = false;
  
const Trip = () => {

    const navigate = useNavigate();
    // prints the group_id value from URL
    const { id } = useParams();
    // console.log(id);

    
    const [trip, setTrip] = useState([]);
    // console.log(trip.name);
    const [members, setMembers]  = useState([]);
    // console.log(members[0])
    // console.log( members.map((user) => (user.user_id)));
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    
    const init = async() => {
    
        await getGroup(id)
          .then((response) => {
            //console.log("Printing Group data", response.data);
            //setIsPending(false);
            setTrip(response.data);
            setMembers(response.data.users);
            setLatitude(response.data.lat);
            setLongitude(response.data.lon);
            //setError(null);
          })
          .catch((err) => {
            console.log("Something went wrong", err);
            //setIsPending(false);
            //setError(err.message);
          });

        await getUsers()
         .then((response) => {
            // console.log("Printing user data", response.data);
            setUsers(response.data)
          })
          .catch((err) => {
            console.log("Something went wrong", err);
        });

      };

      useEffect(() => {
        console.log("run...")
        init();
      }, [error]);

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

    // add friend form
    // const [friend, setFriend] = useState("");
    const [users, setUsers]  = useState([]);
    const [friendEmail, setFriendEmail] = useState("");
    // const [friendId, setFriendId] = useState(null);

    const addFriendForm = async(e) => {
        e.preventDefault();
        console.log("start...")
        for (let i=0 ; i < users.length ; i ++){
            if (friendEmail == users[i].email) {
                friendId = users[i].user_id;
                // console.log("id " + users[i].user_id)
                // setFriendId(users[i].user_id);
                break;
            }
        }
        console.log("FID1 " + friendId)
        if (friendId != null){
            addFriend(id, friendId)
              .then((response) => 
                  console.log(response)
              );
        }
        else{
            error = true;
        }
        console.log("Error " + error)
        console.log("FID2 " + friendId)
        console.log("finish...")


        // console.log("Email " + friendEmail)
        // console.log("ID " + frid)
        // console.log("Error "+ error)

        // users.map((user) => (
        //     console.log("emails "+user.email)
        // ))

    };

    // edit title modal
    const [openTM, setOpenTM] = useState(false);
    const handleOpenTM = () => {
        setOpenTM(true); 
        setAnchorEl(null);
    };
    const handleCloseTM = () => setOpenTM(false);

    // edit location modal
    // const [openLM, setOpenLM] = useState(false);
    // const handleOpenLM = () => {
    //     setOpenLM(true); 
    //     setAnchorEl(null);
    // };
    // const handleCloseLM = () => setOpenLM(false);

    // leave group
    const handleLeave = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to leave?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Leave '
          }).then((result) => {
            if (result.isConfirmed) {
              removeFriend(id, user_id)
              Swal.fire(
                '',
                'You have left the group!',
                'success'
              ).then((result) => {
                if (result.isConfirmed){
                  navigate('/dashboard/'+ user_id); 
                }
              })
            }
          })
    }


    // delete trip
    const handleDelete = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to Delete Group?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteGroup(id)
                Swal.fire(
                  '',
                  'Group Deleted!',
                  'success'
                ).then((result) => {
                  if (result.isConfirmed){
                      navigate('/groups/'+ user_id); 
                  }
                })
            }
        })        
    }

    // edit trip form
    
    const [name, setName] = useState(trip.name);
    // const [location, setLocation] = useState(trip.location);
    // console.log("trip.location :"+ trip.location)

    const editform = (e) => {
        e.preventDefault();

        //{console.log('Inside form '+location)}
        editTrip(id, name)
            .then((response) => {
                console.log('group Edited successfully', response.data);
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });      
    };

    // dropdown calls
    const addHandler = (name) => {
        if (name === "handleOpenFM") {
            handleOpenFM();
        }
        if (name === "handleOpenTM") {
            handleOpenTM();
        }
        if (name === "handleOpenCal") {
            window.location.href = '/events'
        }
        if (name === "handleLeave") {
            handleLeave();
        }
        if (name === "handleDelete") {
            handleDelete();
        }
        
      }      

    // map
    const [selectPosition, setSelectPosition] = useState(null);

    //toggle search
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    //Trip.handleClickOutside = () => setIsOpen(false);

    // alert toggle
    // const [openAlert, setOpenAlert] = useState(true);

    return ( 
        <>
        {/* <div>
            {trip.users.map((user, index) => (
            <div key={index}>
                <div>{user.email}</div>
            </div>
            ))}
        </div> */}        
        
        <div className="flex flex-wrap px-6 py-8 bg-gray-100">
            <div>
                {error ?
                    "user does not exist"
                    // <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={error} autoHideDuration={3000}>
                    //     <Alert severity="warning" sx={{ width: '100%' }}>
                    //             User does not Exist!
                    //     </Alert>
                    // </Snackbar>

                : ""}
            </div>
            <div class="p-1 flex lg:w-1/3 md:w-1/2 w-full">
                <Card sx={{width: 1}}>
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
                        title={trip.name ? trip.name : "Trip"}
                        subheader={trip.owner ? "By " + trip.owner : "Loading..."}
                        
                    />
                    <CardMedia
                        component="img"
                        image={trip.url}
                        alt=""
                        sx={{height: 180, px: 0.5}}
                    />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pb: 0}}>
                        <AvatarGroup max={4}>
                            { members[0] ? 
                                members.map((user) => (
                                    <Avatar alt="" src={user.profile_url} />
                                ))
                                :
                                <Avatar />
                            }                
                        </AvatarGroup>
                        <Typography variant="body2" color="text.secondary" sx={{mt: 2, pl: 1}}>
                            Trip Timeline
                        </Typography>
                        <Typography variant="body1" color="text.main" sx={{mt: 0, pl: 1}}>
                            {trip.start_date ? trip.start_date : <CircularProgress size={15} /> } 
                            {"  to  "}
                            {trip.end_date ? trip.end_date : <CircularProgress size={15} />}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{flexWrap: 'wrap'}} disableSpacing>
                        <Card 
                          onClick = {() => {window.location.href = `/gallery/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Gallery">
                                <IconButton aria-label="gallery">
                                    <CameraAltIcon/>
                                </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Gallery
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/budget/${id}` }}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Budget">
                            <IconButton aria-label="budget">
                                <PaidOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Budget
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/climate/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Weather">
                            <IconButton aria-label="climate">
                                <ThunderstormOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Weather
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/groupChat/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Chat">
                                    <IconButton aria-label="group chat">
                                        <ChatBubbleRoundedIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Chat
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/location/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {/* TODO : Location based on group ID if doing for all users location*/}
                            <Tooltip title="Live Location">
                                <IconButton aria-label="location">
                                    <PlaceIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Location
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                            // TODO : /car/${id} per group?
                          onClick = {() => {window.location.href = `/car`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Rental">
                                <IconButton aria-label="Rental">
                                    <AirportShuttleIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Rental
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
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

                 {/* if owner == user <MenuItem disabled> */}
                 {/* Dropdown */}
                  {options.map((option) => (
                    <div key={option.name}>
                        {trip.owner_id === user_id ? 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem> 
                            : 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}} disabled={option.disable}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem>
                        }
                    </div>
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
                <form onSubmit={addFriendForm}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                {"Add New Friends"}
                </DialogTitle>
                <DialogContent>
                
                    <TextField
                        onChange={(e) => setFriendEmail(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <DialogContentText id="dialog-description" sx={{marginY: 2}}>
                        Group members
                    </DialogContentText>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', height: 200 }} >
                        
                        {members.map((user, index) => (
                        <ListItem sx={{ pl: 0 }} key={index}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id="switch-list-label-wifi" primary={user.email} />
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon onClick = {() => {window.location.href = `/trip/${id}/${user.user_id}`}}/>
                            </IconButton>
                        </ListItem>
                        ))}

                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseFM} autoFocus>Done</Button>
                </DialogActions>
                </form>
            </Dialog>

            {/* Edit Title Modal*/}
            <Dialog
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClose={handleCloseTM}
                open={openTM}
            >
              <form onSubmit={editform}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                    {"Change Name"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {/* <TextField
                        //sx={{ display: 'none' }}
                        //value={trip.location}
                        //onChange={(e) => setLocation(e.target.value)}
                    /> */}
                    
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleCloseTM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseTM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog>

            {/* Edit Location Modal*/}
            {/* <Dialog
                aria-labelledby="dialog-location"
                aria-describedby="dialog-location"
                onClose={handleCloseLM}
                open={openLM}
            > 
              <form onSubmit={editform}>
                <DialogTitle id="dialog-location" sx={{width: 450, marginBottom: -1}}>
                    {"Change Location"}
                </DialogTitle>
                <DialogContent>
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
                    <Button onClick={handleCloseLM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseLM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog> */}

            {/* map */}
            <div class="p-1 lg:w-2/3 md:w-1/2 w-full">
                {/* <img src={map} alt="" />
                <div>{trip.location}</div> */}
                <div className="flex relative drop-shadow-lg bg-white">
                    <div className="absolute top-1 right-3" onClick={toggle}>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            {isOpen ? <CancelRoundedIcon /> : <KeyboardDoubleArrowLeftIcon />}
                        </IconButton>
                    </div>
                    <div className="w-11/12">
                        {latitude ? 
                            <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/>
                        : 
                            <div className="flex justify-center text-2xl mt-20" style={{ height: '590px', width: '100%' }}>
                                <div className="mr-2">Loading Map Data </div> 
                                <div className="ml-2"><CircularProgress /></div>
                            </div>
                        }
                        {/* <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/> */}
                    </div>
                    <div className={isOpen ? 'w-2/3 float-right mt-10 p-2' : 'hidden'} >
                        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Trip;
hgfshgx
sdcsdc
sdcsdcsdc
sdcsdcsdcscd
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from "@mui/material/Tooltip";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InputAdornment from '@mui/material/InputAdornment';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { CardActionArea } from '@mui/material';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PlaceIcon from '@mui/icons-material/Place';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import Swal from 'sweetalert2'
import { deleteGroup, removeFriend } from "../services/GroupsService";
import { getGroup, editTrip, addFriend } from "../services/GroupsService";
import { getUsers } from "../services/UserService";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import { groupIntersectingEntries } from "@fullcalendar/react";

var user_id = null;
if (localStorage.getItem("userDetails")) {
  user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;

  console.log("Uid : " + parseInt(user_id));
}

const options = [
    {icon: <PersonAddIcon />, name: 'Add People', action: 'handleOpenFM', color: '', disable: 'false'},
    {icon: <EditIcon />, name: 'Edit Title', action: 'handleOpenTM', color: '', disable: ''},
    {icon: <CalendarMonthIcon />, name: 'View Calendar', action: 'handleOpenCal', color: '', disable: ''},
    {icon: <ExitToAppIcon />, name: 'Exit Group', action: 'handleLeave', color: 'error.main', disable: ''},
    {icon: <DeleteIcon />, name: 'Delete Group', action: 'handleDelete', color: 'error.main', disable: 'false'},
  ];

let friendId = null;
let error = false;
  
const Trip = () => {

    const navigate = useNavigate();
    // prints the group_id value from URL
    const { id } = useParams();
    // console.log(id);

    
    const [trip, setTrip] = useState([]);
    // console.log(trip.name);
    const [members, setMembers]  = useState([]);
    // console.log(members[0])
    // console.log( members.map((user) => (user.user_id)));
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    
    const init = async() => {
    
        await getGroup(id)
          .then((response) => {
            //console.log("Printing Group data", response.data);
            //setIsPending(false);
            setTrip(response.data);
            setMembers(response.data.users);
            setLatitude(response.data.lat);
            setLongitude(response.data.lon);
            //setError(null);
          })
          .catch((err) => {
            console.log("Something went wrong", err);
            //setIsPending(false);
            //setError(err.message);
          });

        await getUsers()
         .then((response) => {
            // console.log("Printing user data", response.data);
            setUsers(response.data)
          })
          .catch((err) => {
            console.log("Something went wrong", err);
        });

      };

      useEffect(() => {
        console.log("run...")
        init();
      }, [error]);

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

    // add friend form
    // const [friend, setFriend] = useState("");
    const [users, setUsers]  = useState([]);
    const [friendEmail, setFriendEmail] = useState("");
    // const [friendId, setFriendId] = useState(null);

    const addFriendForm = async(e) => {
        e.preventDefault();
        console.log("start...")
        for (let i=0 ; i < users.length ; i ++){
            if (friendEmail == users[i].email) {
                friendId = users[i].user_id;
                // console.log("id " + users[i].user_id)
                // setFriendId(users[i].user_id);
                break;
            }
        }
        console.log("FID1 " + friendId)
        if (friendId != null){
            addFriend(id, friendId)
              .then((response) => 
                  console.log(response)
              );
        }
        else{
            error = true;
        }
        console.log("Error " + error)
        console.log("FID2 " + friendId)
        console.log("finish...")


        // console.log("Email " + friendEmail)
        // console.log("ID " + frid)
        // console.log("Error "+ error)

        // users.map((user) => (
        //     console.log("emails "+user.email)
        // ))

    };

    // edit title modal
    const [openTM, setOpenTM] = useState(false);
    const handleOpenTM = () => {
        setOpenTM(true); 
        setAnchorEl(null);
    };
    const handleCloseTM = () => setOpenTM(false);

    // edit location modal
    // const [openLM, setOpenLM] = useState(false);
    // const handleOpenLM = () => {
    //     setOpenLM(true); 
    //     setAnchorEl(null);
    // };
    // const handleCloseLM = () => setOpenLM(false);

    // leave group
    const handleLeave = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to leave?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Leave '
          }).then((result) => {
            if (result.isConfirmed) {
              removeFriend(id, user_id)
              Swal.fire(
                '',
                'You have left the group!',
                'success'
              ).then((result) => {
                if (result.isConfirmed){
                  navigate('/dashboard/'+ user_id); 
                }
              })
            }
          })
    }


    // delete trip
    const handleDelete = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to Delete Group?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteGroup(id)
                Swal.fire(
                  '',
                  'Group Deleted!',
                  'success'
                ).then((result) => {
                  if (result.isConfirmed){
                      navigate('/groups/'+ user_id); 
                  }
                })
            }
        })        
    }

    // edit trip form
    
    const [name, setName] = useState(trip.name);
    // const [location, setLocation] = useState(trip.location);
    // console.log("trip.location :"+ trip.location)

    const editform = (e) => {
        e.preventDefault();

        //{console.log('Inside form '+location)}
        editTrip(id, name)
            .then((response) => {
                console.log('group Edited successfully', response.data);
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });      
    };

    // dropdown calls
    const addHandler = (name) => {
        if (name === "handleOpenFM") {
            handleOpenFM();
        }
        if (name === "handleOpenTM") {
            handleOpenTM();
        }
        if (name === "handleOpenCal") {
            window.location.href = '/events'
        }
        if (name === "handleLeave") {
            handleLeave();
        }
        if (name === "handleDelete") {
            handleDelete();
        }
        
      }      

    // map
    const [selectPosition, setSelectPosition] = useState(null);

    //toggle search
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    //Trip.handleClickOutside = () => setIsOpen(false);

    // alert toggle
    // const [openAlert, setOpenAlert] = useState(true);

    return ( 
        <>
        {/* <div>
            {trip.users.map((user, index) => (
            <div key={index}>
                <div>{user.email}</div>
            </div>
            ))}
        </div> */}        
        
        <div className="flex flex-wrap px-6 py-8 bg-gray-100">
            <div>
                {error ?
                    "user does not exist"
                    // <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={error} autoHideDuration={3000}>
                    //     <Alert severity="warning" sx={{ width: '100%' }}>
                    //             User does not Exist!
                    //     </Alert>
                    // </Snackbar>

                : ""}
            </div>
            <div class="p-1 flex lg:w-1/3 md:w-1/2 w-full">
                <Card sx={{width: 1}}>
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
                        title={trip.name ? trip.name : "Trip"}
                        subheader={trip.owner ? "By " + trip.owner : "Loading..."}
                        
                    />
                    <CardMedia
                        component="img"
                        image={trip.url}
                        alt=""
                        sx={{height: 180, px: 0.5}}
                    />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pb: 0}}>
                        <AvatarGroup max={4}>
                            { members[0] ? 
                                members.map((user) => (
                                    <Avatar alt="" src={user.profile_url} />
                                ))
                                :
                                <Avatar />
                            }                
                        </AvatarGroup>
                        <Typography variant="body2" color="text.secondary" sx={{mt: 2, pl: 1}}>
                            Trip Timeline
                        </Typography>
                        <Typography variant="body1" color="text.main" sx={{mt: 0, pl: 1}}>
                            {trip.start_date ? trip.start_date : <CircularProgress size={15} /> } 
                            {"  to  "}
                            {trip.end_date ? trip.end_date : <CircularProgress size={15} />}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{flexWrap: 'wrap'}} disableSpacing>
                        <Card 
                          onClick = {() => {window.location.href = `/gallery/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Gallery">
                                <IconButton aria-label="gallery">
                                    <CameraAltIcon/>
                                </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Gallery
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/budget/${id}` }}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Budget">
                            <IconButton aria-label="budget">
                                <PaidOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Budget
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/climate/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Weather">
                            <IconButton aria-label="climate">
                                <ThunderstormOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Weather
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/groupChat/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Chat">
                                    <IconButton aria-label="group chat">
                                        <ChatBubbleRoundedIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Chat
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/location/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {/* TODO : Location based on group ID if doing for all users location*/}
                            <Tooltip title="Live Location">
                                <IconButton aria-label="location">
                                    <PlaceIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Location
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                            // TODO : /car/${id} per group?
                          onClick = {() => {window.location.href = `/car`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Rental">
                                <IconButton aria-label="Rental">
                                    <AirportShuttleIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Rental
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
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

                 {/* if owner == user <MenuItem disabled> */}
                 {/* Dropdown */}
                  {options.map((option) => (
                    <div key={option.name}>
                        {trip.owner_id === user_id ? 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem> 
                            : 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}} disabled={option.disable}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem>
                        }
                    </div>
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
                <form onSubmit={addFriendForm}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                {"Add New Friends"}
                </DialogTitle>
                <DialogContent>
                
                    <TextField
                        onChange={(e) => setFriendEmail(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <DialogContentText id="dialog-description" sx={{marginY: 2}}>
                        Group members
                    </DialogContentText>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', height: 200 }} >
                        
                        {members.map((user, index) => (
                        <ListItem sx={{ pl: 0 }} key={index}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id="switch-list-label-wifi" primary={user.email} />
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon onClick = {() => {window.location.href = `/trip/${id}/${user.user_id}`}}/>
                            </IconButton>
                        </ListItem>
                        ))}

                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseFM} autoFocus>Done</Button>
                </DialogActions>
                </form>
            </Dialog>

            {/* Edit Title Modal*/}
            <Dialog
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClose={handleCloseTM}
                open={openTM}
            >
              <form onSubmit={editform}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                    {"Change Name"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {/* <TextField
                        //sx={{ display: 'none' }}
                        //value={trip.location}
                        //onChange={(e) => setLocation(e.target.value)}
                    /> */}
                    
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleCloseTM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseTM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog>

            {/* Edit Location Modal*/}
            {/* <Dialog
                aria-labelledby="dialog-location"
                aria-describedby="dialog-location"
                onClose={handleCloseLM}
                open={openLM}
            > 
              <form onSubmit={editform}>
                <DialogTitle id="dialog-location" sx={{width: 450, marginBottom: -1}}>
                    {"Change Location"}
                </DialogTitle>
                <DialogContent>
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
                    <Button onClick={handleCloseLM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseLM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog> */}

            {/* map */}
            <div class="p-1 lg:w-2/3 md:w-1/2 w-full">
                {/* <img src={map} alt="" />
                <div>{trip.location}</div> */}
                <div className="flex relative drop-shadow-lg bg-white">
                    <div className="absolute top-1 right-3" onClick={toggle}>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            {isOpen ? <CancelRoundedIcon /> : <KeyboardDoubleArrowLeftIcon />}
                        </IconButton>
                    </div>
                    <div className="w-11/12">
                        {latitude ? 
                            <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/>
                        : 
                            <div className="flex justify-center text-2xl mt-20" style={{ height: '590px', width: '100%' }}>
                                <div className="mr-2">Loading Map Data </div> 
                                <div className="ml-2"><CircularProgress /></div>
                            </div>
                        }
                        {/* <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/> */}
                    </div>
                    <div className={isOpen ? 'w-2/3 float-right mt-10 p-2' : 'hidden'} >
                        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Trip;
hgfshgx
sdcsdc
sdcsdcsdc
sdcsdcsdcscd
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from "@mui/material/Tooltip";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InputAdornment from '@mui/material/InputAdornment';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { CardActionArea } from '@mui/material';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PlaceIcon from '@mui/icons-material/Place';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import Swal from 'sweetalert2'
import { deleteGroup, removeFriend } from "../services/GroupsService";
import { getGroup, editTrip, addFriend } from "../services/GroupsService";
import { getUsers } from "../services/UserService";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import { groupIntersectingEntries } from "@fullcalendar/react";

var user_id = null;
if (localStorage.getItem("userDetails")) {
  user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;

  console.log("Uid : " + parseInt(user_id));
}

const options = [
    {icon: <PersonAddIcon />, name: 'Add People', action: 'handleOpenFM', color: '', disable: 'false'},
    {icon: <EditIcon />, name: 'Edit Title', action: 'handleOpenTM', color: '', disable: ''},
    {icon: <CalendarMonthIcon />, name: 'View Calendar', action: 'handleOpenCal', color: '', disable: ''},
    {icon: <ExitToAppIcon />, name: 'Exit Group', action: 'handleLeave', color: 'error.main', disable: ''},
    {icon: <DeleteIcon />, name: 'Delete Group', action: 'handleDelete', color: 'error.main', disable: 'false'},
  ];

let friendId = null;
let error = false;
  
const Trip = () => {

    const navigate = useNavigate();
    // prints the group_id value from URL
    const { id } = useParams();
    // console.log(id);

    
    const [trip, setTrip] = useState([]);
    // console.log(trip.name);
    const [members, setMembers]  = useState([]);
    // console.log(members[0])
    // console.log( members.map((user) => (user.user_id)));
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    
    const init = async() => {
    
        await getGroup(id)
          .then((response) => {
            //console.log("Printing Group data", response.data);
            //setIsPending(false);
            setTrip(response.data);
            setMembers(response.data.users);
            setLatitude(response.data.lat);
            setLongitude(response.data.lon);
            //setError(null);
          })
          .catch((err) => {
            console.log("Something went wrong", err);
            //setIsPending(false);
            //setError(err.message);
          });

        await getUsers()
         .then((response) => {
            // console.log("Printing user data", response.data);
            setUsers(response.data)
          })
          .catch((err) => {
            console.log("Something went wrong", err);
        });

      };

      useEffect(() => {
        console.log("run...")
        init();
      }, [error]);

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

    // add friend form
    // const [friend, setFriend] = useState("");
    const [users, setUsers]  = useState([]);
    const [friendEmail, setFriendEmail] = useState("");
    // const [friendId, setFriendId] = useState(null);

    const addFriendForm = async(e) => {
        e.preventDefault();
        console.log("start...")
        for (let i=0 ; i < users.length ; i ++){
            if (friendEmail == users[i].email) {
                friendId = users[i].user_id;
                // console.log("id " + users[i].user_id)
                // setFriendId(users[i].user_id);
                break;
            }
        }
        console.log("FID1 " + friendId)
        if (friendId != null){
            addFriend(id, friendId)
              .then((response) => 
                  console.log(response)
              );
        }
        else{
            error = true;
        }
        console.log("Error " + error)
        console.log("FID2 " + friendId)
        console.log("finish...")


        // console.log("Email " + friendEmail)
        // console.log("ID " + frid)
        // console.log("Error "+ error)

        // users.map((user) => (
        //     console.log("emails "+user.email)
        // ))

    };

    // edit title modal
    const [openTM, setOpenTM] = useState(false);
    const handleOpenTM = () => {
        setOpenTM(true); 
        setAnchorEl(null);
    };
    const handleCloseTM = () => setOpenTM(false);

    // edit location modal
    // const [openLM, setOpenLM] = useState(false);
    // const handleOpenLM = () => {
    //     setOpenLM(true); 
    //     setAnchorEl(null);
    // };
    // const handleCloseLM = () => setOpenLM(false);

    // leave group
    const handleLeave = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to leave?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Leave '
          }).then((result) => {
            if (result.isConfirmed) {
              removeFriend(id, user_id)
              Swal.fire(
                '',
                'You have left the group!',
                'success'
              ).then((result) => {
                if (result.isConfirmed){
                  navigate('/dashboard/'+ user_id); 
                }
              })
            }
          })
    }


    // delete trip
    const handleDelete = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to Delete Group?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteGroup(id)
                Swal.fire(
                  '',
                  'Group Deleted!',
                  'success'
                ).then((result) => {
                  if (result.isConfirmed){
                      navigate('/groups/'+ user_id); 
                  }
                })
            }
        })        
    }

    // edit trip form
    
    const [name, setName] = useState(trip.name);
    // const [location, setLocation] = useState(trip.location);
    // console.log("trip.location :"+ trip.location)

    const editform = (e) => {
        e.preventDefault();

        //{console.log('Inside form '+location)}
        editTrip(id, name)
            .then((response) => {
                console.log('group Edited successfully', response.data);
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });      
    };

    // dropdown calls
    const addHandler = (name) => {
        if (name === "handleOpenFM") {
            handleOpenFM();
        }
        if (name === "handleOpenTM") {
            handleOpenTM();
        }
        if (name === "handleOpenCal") {
            window.location.href = '/events'
        }
        if (name === "handleLeave") {
            handleLeave();
        }
        if (name === "handleDelete") {
            handleDelete();
        }
        
      }      

    // map
    const [selectPosition, setSelectPosition] = useState(null);

    //toggle search
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    //Trip.handleClickOutside = () => setIsOpen(false);

    // alert toggle
    // const [openAlert, setOpenAlert] = useState(true);

    return ( 
        <>
        {/* <div>
            {trip.users.map((user, index) => (
            <div key={index}>
                <div>{user.email}</div>
            </div>
            ))}
        </div> */}        
        
        <div className="flex flex-wrap px-6 py-8 bg-gray-100">
            <div>
                {error ?
                    "user does not exist"
                    // <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={error} autoHideDuration={3000}>
                    //     <Alert severity="warning" sx={{ width: '100%' }}>
                    //             User does not Exist!
                    //     </Alert>
                    // </Snackbar>

                : ""}
            </div>
            <div class="p-1 flex lg:w-1/3 md:w-1/2 w-full">
                <Card sx={{width: 1}}>
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
                        title={trip.name ? trip.name : "Trip"}
                        subheader={trip.owner ? "By " + trip.owner : "Loading..."}
                        
                    />
                    <CardMedia
                        component="img"
                        image={trip.url}
                        alt=""
                        sx={{height: 180, px: 0.5}}
                    />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pb: 0}}>
                        <AvatarGroup max={4}>
                            { members[0] ? 
                                members.map((user) => (
                                    <Avatar alt="" src={user.profile_url} />
                                ))
                                :
                                <Avatar />
                            }                
                        </AvatarGroup>
                        <Typography variant="body2" color="text.secondary" sx={{mt: 2, pl: 1}}>
                            Trip Timeline
                        </Typography>
                        <Typography variant="body1" color="text.main" sx={{mt: 0, pl: 1}}>
                            {trip.start_date ? trip.start_date : <CircularProgress size={15} /> } 
                            {"  to  "}
                            {trip.end_date ? trip.end_date : <CircularProgress size={15} />}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{flexWrap: 'wrap'}} disableSpacing>
                        <Card 
                          onClick = {() => {window.location.href = `/gallery/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Gallery">
                                <IconButton aria-label="gallery">
                                    <CameraAltIcon/>
                                </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Gallery
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/budget/${id}` }}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Budget">
                            <IconButton aria-label="budget">
                                <PaidOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Budget
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/climate/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Weather">
                            <IconButton aria-label="climate">
                                <ThunderstormOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Weather
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/groupChat/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Chat">
                                    <IconButton aria-label="group chat">
                                        <ChatBubbleRoundedIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Chat
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/location/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {/* TODO : Location based on group ID if doing for all users location*/}
                            <Tooltip title="Live Location">
                                <IconButton aria-label="location">
                                    <PlaceIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Location
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                            // TODO : /car/${id} per group?
                          onClick = {() => {window.location.href = `/car`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Rental">
                                <IconButton aria-label="Rental">
                                    <AirportShuttleIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Rental
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
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

                 {/* if owner == user <MenuItem disabled> */}
                 {/* Dropdown */}
                  {options.map((option) => (
                    <div key={option.name}>
                        {trip.owner_id === user_id ? 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem> 
                            : 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}} disabled={option.disable}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem>
                        }
                    </div>
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
                <form onSubmit={addFriendForm}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                {"Add New Friends"}
                </DialogTitle>
                <DialogContent>
                
                    <TextField
                        onChange={(e) => setFriendEmail(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <DialogContentText id="dialog-description" sx={{marginY: 2}}>
                        Group members
                    </DialogContentText>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', height: 200 }} >
                        
                        {members.map((user, index) => (
                        <ListItem sx={{ pl: 0 }} key={index}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id="switch-list-label-wifi" primary={user.email} />
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon onClick = {() => {window.location.href = `/trip/${id}/${user.user_id}`}}/>
                            </IconButton>
                        </ListItem>
                        ))}

                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseFM} autoFocus>Done</Button>
                </DialogActions>
                </form>
            </Dialog>

            {/* Edit Title Modal*/}
            <Dialog
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClose={handleCloseTM}
                open={openTM}
            >
              <form onSubmit={editform}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                    {"Change Name"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {/* <TextField
                        //sx={{ display: 'none' }}
                        //value={trip.location}
                        //onChange={(e) => setLocation(e.target.value)}
                    /> */}
                    
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleCloseTM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseTM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog>

            {/* Edit Location Modal*/}
            {/* <Dialog
                aria-labelledby="dialog-location"
                aria-describedby="dialog-location"
                onClose={handleCloseLM}
                open={openLM}
            > 
              <form onSubmit={editform}>
                <DialogTitle id="dialog-location" sx={{width: 450, marginBottom: -1}}>
                    {"Change Location"}
                </DialogTitle>
                <DialogContent>
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
                    <Button onClick={handleCloseLM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseLM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog> */}

            {/* map */}
            <div class="p-1 lg:w-2/3 md:w-1/2 w-full">
                {/* <img src={map} alt="" />
                <div>{trip.location}</div> */}
                <div className="flex relative drop-shadow-lg bg-white">
                    <div className="absolute top-1 right-3" onClick={toggle}>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            {isOpen ? <CancelRoundedIcon /> : <KeyboardDoubleArrowLeftIcon />}
                        </IconButton>
                    </div>
                    <div className="w-11/12">
                        {latitude ? 
                            <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/>
                        : 
                            <div className="flex justify-center text-2xl mt-20" style={{ height: '590px', width: '100%' }}>
                                <div className="mr-2">Loading Map Data </div> 
                                <div className="ml-2"><CircularProgress /></div>
                            </div>
                        }
                        {/* <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/> */}
                    </div>
                    <div className={isOpen ? 'w-2/3 float-right mt-10 p-2' : 'hidden'} >
                        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Trip;
hgfshgx
sdcsdc
sdcsdcsdc
sdcsdcsdcscd
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from "@mui/material/Tooltip";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InputAdornment from '@mui/material/InputAdornment';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { CardActionArea } from '@mui/material';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PlaceIcon from '@mui/icons-material/Place';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import Swal from 'sweetalert2'
import { deleteGroup, removeFriend } from "../services/GroupsService";
import { getGroup, editTrip, addFriend } from "../services/GroupsService";
import { getUsers } from "../services/UserService";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import { groupIntersectingEntries } from "@fullcalendar/react";

var user_id = null;
if (localStorage.getItem("userDetails")) {
  user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;

  console.log("Uid : " + parseInt(user_id));
}

const options = [
    {icon: <PersonAddIcon />, name: 'Add People', action: 'handleOpenFM', color: '', disable: 'false'},
    {icon: <EditIcon />, name: 'Edit Title', action: 'handleOpenTM', color: '', disable: ''},
    {icon: <CalendarMonthIcon />, name: 'View Calendar', action: 'handleOpenCal', color: '', disable: ''},
    {icon: <ExitToAppIcon />, name: 'Exit Group', action: 'handleLeave', color: 'error.main', disable: ''},
    {icon: <DeleteIcon />, name: 'Delete Group', action: 'handleDelete', color: 'error.main', disable: 'false'},
  ];

let friendId = null;
let error = false;
  
const Trip = () => {

    const navigate = useNavigate();
    // prints the group_id value from URL
    const { id } = useParams();
    // console.log(id);

    
    const [trip, setTrip] = useState([]);
    // console.log(trip.name);
    const [members, setMembers]  = useState([]);
    // console.log(members[0])
    // console.log( members.map((user) => (user.user_id)));
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    
    const init = async() => {
    
        await getGroup(id)
          .then((response) => {
            //console.log("Printing Group data", response.data);
            //setIsPending(false);
            setTrip(response.data);
            setMembers(response.data.users);
            setLatitude(response.data.lat);
            setLongitude(response.data.lon);
            //setError(null);
          })
          .catch((err) => {
            console.log("Something went wrong", err);
            //setIsPending(false);
            //setError(err.message);
          });

        await getUsers()
         .then((response) => {
            // console.log("Printing user data", response.data);
            setUsers(response.data)
          })
          .catch((err) => {
            console.log("Something went wrong", err);
        });

      };

      useEffect(() => {
        console.log("run...")
        init();
      }, [error]);

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

    // add friend form
    // const [friend, setFriend] = useState("");
    const [users, setUsers]  = useState([]);
    const [friendEmail, setFriendEmail] = useState("");
    // const [friendId, setFriendId] = useState(null);

    const addFriendForm = async(e) => {
        e.preventDefault();
        console.log("start...")
        for (let i=0 ; i < users.length ; i ++){
            if (friendEmail == users[i].email) {
                friendId = users[i].user_id;
                // console.log("id " + users[i].user_id)
                // setFriendId(users[i].user_id);
                break;
            }
        }
        console.log("FID1 " + friendId)
        if (friendId != null){
            addFriend(id, friendId)
              .then((response) => 
                  console.log(response)
              );
        }
        else{
            error = true;
        }
        console.log("Error " + error)
        console.log("FID2 " + friendId)
        console.log("finish...")


        // console.log("Email " + friendEmail)
        // console.log("ID " + frid)
        // console.log("Error "+ error)

        // users.map((user) => (
        //     console.log("emails "+user.email)
        // ))

    };

    // edit title modal
    const [openTM, setOpenTM] = useState(false);
    const handleOpenTM = () => {
        setOpenTM(true); 
        setAnchorEl(null);
    };
    const handleCloseTM = () => setOpenTM(false);

    // edit location modal
    // const [openLM, setOpenLM] = useState(false);
    // const handleOpenLM = () => {
    //     setOpenLM(true); 
    //     setAnchorEl(null);
    // };
    // const handleCloseLM = () => setOpenLM(false);

    // leave group
    const handleLeave = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to leave?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Leave '
          }).then((result) => {
            if (result.isConfirmed) {
              removeFriend(id, user_id)
              Swal.fire(
                '',
                'You have left the group!',
                'success'
              ).then((result) => {
                if (result.isConfirmed){
                  navigate('/dashboard/'+ user_id); 
                }
              })
            }
          })
    }


    // delete trip
    const handleDelete = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to Delete Group?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteGroup(id)
                Swal.fire(
                  '',
                  'Group Deleted!',
                  'success'
                ).then((result) => {
                  if (result.isConfirmed){
                      navigate('/groups/'+ user_id); 
                  }
                })
            }
        })        
    }

    // edit trip form
    
    const [name, setName] = useState(trip.name);
    // const [location, setLocation] = useState(trip.location);
    // console.log("trip.location :"+ trip.location)

    const editform = (e) => {
        e.preventDefault();

        //{console.log('Inside form '+location)}
        editTrip(id, name)
            .then((response) => {
                console.log('group Edited successfully', response.data);
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });      
    };

    // dropdown calls
    const addHandler = (name) => {
        if (name === "handleOpenFM") {
            handleOpenFM();
        }
        if (name === "handleOpenTM") {
            handleOpenTM();
        }
        if (name === "handleOpenCal") {
            window.location.href = '/events'
        }
        if (name === "handleLeave") {
            handleLeave();
        }
        if (name === "handleDelete") {
            handleDelete();
        }
        
      }      

    // map
    const [selectPosition, setSelectPosition] = useState(null);

    //toggle search
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    //Trip.handleClickOutside = () => setIsOpen(false);

    // alert toggle
    // const [openAlert, setOpenAlert] = useState(true);

    return ( 
        <>
        {/* <div>
            {trip.users.map((user, index) => (
            <div key={index}>
                <div>{user.email}</div>
            </div>
            ))}
        </div> */}        
        
        <div className="flex flex-wrap px-6 py-8 bg-gray-100">
            <div>
                {error ?
                    "user does not exist"
                    // <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={error} autoHideDuration={3000}>
                    //     <Alert severity="warning" sx={{ width: '100%' }}>
                    //             User does not Exist!
                    //     </Alert>
                    // </Snackbar>

                : ""}
            </div>
            <div class="p-1 flex lg:w-1/3 md:w-1/2 w-full">
                <Card sx={{width: 1}}>
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
                        title={trip.name ? trip.name : "Trip"}
                        subheader={trip.owner ? "By " + trip.owner : "Loading..."}
                        
                    />
                    <CardMedia
                        component="img"
                        image={trip.url}
                        alt=""
                        sx={{height: 180, px: 0.5}}
                    />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pb: 0}}>
                        <AvatarGroup max={4}>
                            { members[0] ? 
                                members.map((user) => (
                                    <Avatar alt="" src={user.profile_url} />
                                ))
                                :
                                <Avatar />
                            }                
                        </AvatarGroup>
                        <Typography variant="body2" color="text.secondary" sx={{mt: 2, pl: 1}}>
                            Trip Timeline
                        </Typography>
                        <Typography variant="body1" color="text.main" sx={{mt: 0, pl: 1}}>
                            {trip.start_date ? trip.start_date : <CircularProgress size={15} /> } 
                            {"  to  "}
                            {trip.end_date ? trip.end_date : <CircularProgress size={15} />}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{flexWrap: 'wrap'}} disableSpacing>
                        <Card 
                          onClick = {() => {window.location.href = `/gallery/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Gallery">
                                <IconButton aria-label="gallery">
                                    <CameraAltIcon/>
                                </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Gallery
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/budget/${id}` }}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Budget">
                            <IconButton aria-label="budget">
                                <PaidOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Budget
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/climate/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Weather">
                            <IconButton aria-label="climate">
                                <ThunderstormOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Weather
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/groupChat/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Chat">
                                    <IconButton aria-label="group chat">
                                        <ChatBubbleRoundedIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Chat
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/location/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {/* TODO : Location based on group ID if doing for all users location*/}
                            <Tooltip title="Live Location">
                                <IconButton aria-label="location">
                                    <PlaceIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Location
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                            // TODO : /car/${id} per group?
                          onClick = {() => {window.location.href = `/car`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Rental">
                                <IconButton aria-label="Rental">
                                    <AirportShuttleIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Rental
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
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

                 {/* if owner == user <MenuItem disabled> */}
                 {/* Dropdown */}
                  {options.map((option) => (
                    <div key={option.name}>
                        {trip.owner_id === user_id ? 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem> 
                            : 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}} disabled={option.disable}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem>
                        }
                    </div>
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
                <form onSubmit={addFriendForm}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                {"Add New Friends"}
                </DialogTitle>
                <DialogContent>
                
                    <TextField
                        onChange={(e) => setFriendEmail(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <DialogContentText id="dialog-description" sx={{marginY: 2}}>
                        Group members
                    </DialogContentText>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', height: 200 }} >
                        
                        {members.map((user, index) => (
                        <ListItem sx={{ pl: 0 }} key={index}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id="switch-list-label-wifi" primary={user.email} />
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon onClick = {() => {window.location.href = `/trip/${id}/${user.user_id}`}}/>
                            </IconButton>
                        </ListItem>
                        ))}

                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseFM} autoFocus>Done</Button>
                </DialogActions>
                </form>
            </Dialog>

            {/* Edit Title Modal*/}
            <Dialog
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClose={handleCloseTM}
                open={openTM}
            >
              <form onSubmit={editform}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                    {"Change Name"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {/* <TextField
                        //sx={{ display: 'none' }}
                        //value={trip.location}
                        //onChange={(e) => setLocation(e.target.value)}
                    /> */}
                    
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleCloseTM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseTM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog>

            {/* Edit Location Modal*/}
            {/* <Dialog
                aria-labelledby="dialog-location"
                aria-describedby="dialog-location"
                onClose={handleCloseLM}
                open={openLM}
            > 
              <form onSubmit={editform}>
                <DialogTitle id="dialog-location" sx={{width: 450, marginBottom: -1}}>
                    {"Change Location"}
                </DialogTitle>
                <DialogContent>
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
                    <Button onClick={handleCloseLM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseLM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog> */}

            {/* map */}
            <div class="p-1 lg:w-2/3 md:w-1/2 w-full">
                {/* <img src={map} alt="" />
                <div>{trip.location}</div> */}
                <div className="flex relative drop-shadow-lg bg-white">
                    <div className="absolute top-1 right-3" onClick={toggle}>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            {isOpen ? <CancelRoundedIcon /> : <KeyboardDoubleArrowLeftIcon />}
                        </IconButton>
                    </div>
                    <div className="w-11/12">
                        {latitude ? 
                            <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/>
                        : 
                            <div className="flex justify-center text-2xl mt-20" style={{ height: '590px', width: '100%' }}>
                                <div className="mr-2">Loading Map Data </div> 
                                <div className="ml-2"><CircularProgress /></div>
                            </div>
                        }
                        {/* <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/> */}
                    </div>
                    <div className={isOpen ? 'w-2/3 float-right mt-10 p-2' : 'hidden'} >
                        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Trip;
hgfshgx
sdcsdc
sdcsdcsdc
sdcsdcsdcscd
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from "@mui/material/Tooltip";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InputAdornment from '@mui/material/InputAdornment';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { CardActionArea } from '@mui/material';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PlaceIcon from '@mui/icons-material/Place';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import Swal from 'sweetalert2'
import { deleteGroup, removeFriend } from "../services/GroupsService";
import { getGroup, editTrip, addFriend } from "../services/GroupsService";
import { getUsers } from "../services/UserService";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import { groupIntersectingEntries } from "@fullcalendar/react";

var user_id = null;
if (localStorage.getItem("userDetails")) {
  user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;

  console.log("Uid : " + parseInt(user_id));
}

const options = [
    {icon: <PersonAddIcon />, name: 'Add People', action: 'handleOpenFM', color: '', disable: 'false'},
    {icon: <EditIcon />, name: 'Edit Title', action: 'handleOpenTM', color: '', disable: ''},
    {icon: <CalendarMonthIcon />, name: 'View Calendar', action: 'handleOpenCal', color: '', disable: ''},
    {icon: <ExitToAppIcon />, name: 'Exit Group', action: 'handleLeave', color: 'error.main', disable: ''},
    {icon: <DeleteIcon />, name: 'Delete Group', action: 'handleDelete', color: 'error.main', disable: 'false'},
  ];

let friendId = null;
let error = false;
  
const Trip = () => {

    const navigate = useNavigate();
    // prints the group_id value from URL
    const { id } = useParams();
    // console.log(id);

    
    const [trip, setTrip] = useState([]);
    // console.log(trip.name);
    const [members, setMembers]  = useState([]);
    // console.log(members[0])
    // console.log( members.map((user) => (user.user_id)));
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    
    const init = async() => {
    
        await getGroup(id)
          .then((response) => {
            //console.log("Printing Group data", response.data);
            //setIsPending(false);
            setTrip(response.data);
            setMembers(response.data.users);
            setLatitude(response.data.lat);
            setLongitude(response.data.lon);
            //setError(null);
          })
          .catch((err) => {
            console.log("Something went wrong", err);
            //setIsPending(false);
            //setError(err.message);
          });

        await getUsers()
         .then((response) => {
            // console.log("Printing user data", response.data);
            setUsers(response.data)
          })
          .catch((err) => {
            console.log("Something went wrong", err);
        });

      };

      useEffect(() => {
        console.log("run...")
        init();
      }, [error]);

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

    // add friend form
    // const [friend, setFriend] = useState("");
    const [users, setUsers]  = useState([]);
    const [friendEmail, setFriendEmail] = useState("");
    // const [friendId, setFriendId] = useState(null);

    const addFriendForm = async(e) => {
        e.preventDefault();
        console.log("start...")
        for (let i=0 ; i < users.length ; i ++){
            if (friendEmail == users[i].email) {
                friendId = users[i].user_id;
                // console.log("id " + users[i].user_id)
                // setFriendId(users[i].user_id);
                break;
            }
        }
        console.log("FID1 " + friendId)
        if (friendId != null){
            addFriend(id, friendId)
              .then((response) => 
                  console.log(response)
              );
        }
        else{
            error = true;
        }
        console.log("Error " + error)
        console.log("FID2 " + friendId)
        console.log("finish...")


        // console.log("Email " + friendEmail)
        // console.log("ID " + frid)
        // console.log("Error "+ error)

        // users.map((user) => (
        //     console.log("emails "+user.email)
        // ))

    };

    // edit title modal
    const [openTM, setOpenTM] = useState(false);
    const handleOpenTM = () => {
        setOpenTM(true); 
        setAnchorEl(null);
    };
    const handleCloseTM = () => setOpenTM(false);

    // edit location modal
    // const [openLM, setOpenLM] = useState(false);
    // const handleOpenLM = () => {
    //     setOpenLM(true); 
    //     setAnchorEl(null);
    // };
    // const handleCloseLM = () => setOpenLM(false);

    // leave group
    const handleLeave = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to leave?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Leave '
          }).then((result) => {
            if (result.isConfirmed) {
              removeFriend(id, user_id)
              Swal.fire(
                '',
                'You have left the group!',
                'success'
              ).then((result) => {
                if (result.isConfirmed){
                  navigate('/dashboard/'+ user_id); 
                }
              })
            }
          })
    }


    // delete trip
    const handleDelete = () => {
        setAnchorEl(null);
        Swal.fire({
            title: 'Are you sure, You want to Delete Group?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteGroup(id)
                Swal.fire(
                  '',
                  'Group Deleted!',
                  'success'
                ).then((result) => {
                  if (result.isConfirmed){
                      navigate('/groups/'+ user_id); 
                  }
                })
            }
        })        
    }

    // edit trip form
    
    const [name, setName] = useState(trip.name);
    // const [location, setLocation] = useState(trip.location);
    // console.log("trip.location :"+ trip.location)

    const editform = (e) => {
        e.preventDefault();

        //{console.log('Inside form '+location)}
        editTrip(id, name)
            .then((response) => {
                console.log('group Edited successfully', response.data);
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });      
    };

    // dropdown calls
    const addHandler = (name) => {
        if (name === "handleOpenFM") {
            handleOpenFM();
        }
        if (name === "handleOpenTM") {
            handleOpenTM();
        }
        if (name === "handleOpenCal") {
            window.location.href = '/events'
        }
        if (name === "handleLeave") {
            handleLeave();
        }
        if (name === "handleDelete") {
            handleDelete();
        }
        
      }      

    // map
    const [selectPosition, setSelectPosition] = useState(null);

    //toggle search
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    //Trip.handleClickOutside = () => setIsOpen(false);

    // alert toggle
    // const [openAlert, setOpenAlert] = useState(true);

    return ( 
        <>
        {/* <div>
            {trip.users.map((user, index) => (
            <div key={index}>
                <div>{user.email}</div>
            </div>
            ))}
        </div> */}        
        
        <div className="flex flex-wrap px-6 py-8 bg-gray-100">
            <div>
                {error ?
                    "user does not exist"
                    // <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={error} autoHideDuration={3000}>
                    //     <Alert severity="warning" sx={{ width: '100%' }}>
                    //             User does not Exist!
                    //     </Alert>
                    // </Snackbar>

                : ""}
            </div>
            <div class="p-1 flex lg:w-1/3 md:w-1/2 w-full">
                <Card sx={{width: 1}}>
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
                        title={trip.name ? trip.name : "Trip"}
                        subheader={trip.owner ? "By " + trip.owner : "Loading..."}
                        
                    />
                    <CardMedia
                        component="img"
                        image={trip.url}
                        alt=""
                        sx={{height: 180, px: 0.5}}
                    />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pb: 0}}>
                        <AvatarGroup max={4}>
                            { members[0] ? 
                                members.map((user) => (
                                    <Avatar alt="" src={user.profile_url} />
                                ))
                                :
                                <Avatar />
                            }                
                        </AvatarGroup>
                        <Typography variant="body2" color="text.secondary" sx={{mt: 2, pl: 1}}>
                            Trip Timeline
                        </Typography>
                        <Typography variant="body1" color="text.main" sx={{mt: 0, pl: 1}}>
                            {trip.start_date ? trip.start_date : <CircularProgress size={15} /> } 
                            {"  to  "}
                            {trip.end_date ? trip.end_date : <CircularProgress size={15} />}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{flexWrap: 'wrap'}} disableSpacing>
                        <Card 
                          onClick = {() => {window.location.href = `/gallery/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Gallery">
                                <IconButton aria-label="gallery">
                                    <CameraAltIcon/>
                                </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Gallery
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/budget/${id}` }}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Budget">
                            <IconButton aria-label="budget">
                                <PaidOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Budget
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/climate/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Weather">
                            <IconButton aria-label="climate">
                                <ThunderstormOutlinedIcon/>
                            </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Weather
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/groupChat/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Tooltip title="Chat">
                                    <IconButton aria-label="group chat">
                                        <ChatBubbleRoundedIcon/>
                                    </IconButton>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Chat
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                          onClick = {() => {window.location.href = `/location/${id}`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {/* TODO : Location based on group ID if doing for all users location*/}
                            <Tooltip title="Live Location">
                                <IconButton aria-label="location">
                                    <PlaceIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Location
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card 
                            // TODO : /car/${id} per group?
                          onClick = {() => {window.location.href = `/car`}}
                          sx={{minWidth: 100, m: 1, display: 'flex', justifyContent: 'center', boxShadow: 1}}>
                            <CardActionArea>
                            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Tooltip title="Rental">
                                <IconButton aria-label="Rental">
                                    <AirportShuttleIcon/>
                                </IconButton>
                            </Tooltip>
                            <Typography variant="body2" color="text.secondary">
                                Rental
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
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

                 {/* if owner == user <MenuItem disabled> */}
                 {/* Dropdown */}
                  {options.map((option) => (
                    <div key={option.name}>
                        {trip.owner_id === user_id ? 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem> 
                            : 
                            <MenuItem onClick={() => addHandler(option.action)} sx={{color: `${option.color}`}} disabled={option.disable}> 
                                <Avatar sx={{bgcolor: `${option.color}`}}>{option.icon}</Avatar>
                                <div className="mr-2"></div>
                                {option.name}
                            </MenuItem>
                        }
                    </div>
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
                <form onSubmit={addFriendForm}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                {"Add New Friends"}
                </DialogTitle>
                <DialogContent>
                
                    <TextField
                        onChange={(e) => setFriendEmail(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <DialogContentText id="dialog-description" sx={{marginY: 2}}>
                        Group members
                    </DialogContentText>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', height: 200 }} >
                        
                        {members.map((user, index) => (
                        <ListItem sx={{ pl: 0 }} key={index}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id="switch-list-label-wifi" primary={user.email} />
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon onClick = {() => {window.location.href = `/trip/${id}/${user.user_id}`}}/>
                            </IconButton>
                        </ListItem>
                        ))}

                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseFM} autoFocus>Done</Button>
                </DialogActions>
                </form>
            </Dialog>

            {/* Edit Title Modal*/}
            <Dialog
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClose={handleCloseTM}
                open={openTM}
            >
              <form onSubmit={editform}>
                <DialogTitle id="dialog-title" sx={{width: 450, marginBottom: -1}}>
                    {"Change Name"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {/* <TextField
                        //sx={{ display: 'none' }}
                        //value={trip.location}
                        //onChange={(e) => setLocation(e.target.value)}
                    /> */}
                    
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleCloseTM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseTM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog>

            {/* Edit Location Modal*/}
            {/* <Dialog
                aria-labelledby="dialog-location"
                aria-describedby="dialog-location"
                onClose={handleCloseLM}
                open={openLM}
            > 
              <form onSubmit={editform}>
                <DialogTitle id="dialog-location" sx={{width: 450, marginBottom: -1}}>
                    {"Change Location"}
                </DialogTitle>
                <DialogContent>
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
                    <Button onClick={handleCloseLM}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseLM} autoFocus>Done</Button>
                </DialogActions>
              </form>
            </Dialog> */}

            {/* map */}
            <div class="p-1 lg:w-2/3 md:w-1/2 w-full">
                {/* <img src={map} alt="" />
                <div>{trip.location}</div> */}
                <div className="flex relative drop-shadow-lg bg-white">
                    <div className="absolute top-1 right-3" onClick={toggle}>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            {isOpen ? <CancelRoundedIcon /> : <KeyboardDoubleArrowLeftIcon />}
                        </IconButton>
                    </div>
                    <div className="w-11/12">
                        {latitude ? 
                            <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/>
                        : 
                            <div className="flex justify-center text-2xl mt-20" style={{ height: '590px', width: '100%' }}>
                                <div className="mr-2">Loading Map Data </div> 
                                <div className="ml-2"><CircularProgress /></div>
                            </div>
                        }
                        {/* <Maps selectPosition={selectPosition} latitude={latitude} longitude={longitude}/> */}
                    </div>
                    <div className={isOpen ? 'w-2/3 float-right mt-10 p-2' : 'hidden'} >
                        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Trip;
