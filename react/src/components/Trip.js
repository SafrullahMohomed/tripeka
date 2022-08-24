import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';

import Footer from "../components/Footer";
import dalanda from '../assets/dalada.jpg'
import img1 from '../assets/customer1.jpg'
import img2 from '../assets/customer2.jpg'
import img3 from '../assets/customer3.jpg'
import map from '../assets/map.png'

const options = [
    'Add Friends',
    'Edit Trip',
    'Delete Trip',
    'Add description',
    'Group chat',
  ];
  
const ITEM_HEIGHT = 48;

const Trip = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        alt="Paella dish"
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ullam omnis est. Itaque dolore molestias similique error vel eaque.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="group chat">
                            <ChatBubbleRoundedIcon onClick = {() => {window.location.href = '/groupChat'}}/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
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
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                   ))}
                </Menu>
            </div>

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