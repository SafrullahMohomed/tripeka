import { Link } from "react-router-dom";
import React, { useState } from 'react';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import logo from '../assets/logo.png'
import user from '../assets/customer2.jpg'

import authService from "../jwtAuthServices/auth.service";

const Header = () => {

  //dropdown
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const openP = Boolean(anchorElProfile);
  const handleClickP = (event) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseP = () => {
    setAnchorElProfile(null);
  };

  const [anchorElNotification, setAnchorElNotification] = React.useState(null);
  const openN = Boolean(anchorElNotification);
  const handleClickN = (event) => {
    setAnchorElNotification(event.currentTarget);
  };
  const handleCloseN = () => {
    setAnchorElNotification(null);
  };

  return ( 
    <header class="text-gray-600 body-font mb-8 bg-emerald-100">
      <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="" class="w-10 h-10 object-cover object-center rounded-full mr-4 border border-emerald-400"/>
          <span class="ml-2 text-2xl italic">TRIPEKA</span>
        </div>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/dashboard" class="mr-7 hover:text-gray-900">Dashboard</Link>
          <Link to="/hotels" class="mr-7 hover:text-gray-900">Hotels</Link>
          <Link to="/restaurants" class="mr-7 hover:text-gray-900">Restaurants</Link>
          <Link to="/rentals" class="mr-7 hover:text-gray-900">Rentals</Link>
          <Link to="/budget" class="mr-7 hover:text-gray-900">Budget</Link>
          <Link to="/groups" class="mr-7 hover:text-gray-900">Trips</Link>
          <Link to="/blogs" class="mr-7 hover:text-gray-900">Blogs</Link>
        </nav>

        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Notifications">
            <IconButton
                onClick={handleClickN}
                size="small"
                sx={{ ml: 1 }}
                aria-controls={openN ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openN ? 'true' : undefined}
            >
              <Badge badgeContent={4} overlap="circular" color="error">
                <CircleNotificationsRoundedIcon sx={{ width: 38, height: 38 }} />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
            anchorEl={anchorElNotification}
            id="account-menu"
            open={openN}
            onClose={handleCloseN}
            onClick={handleCloseN}
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
            <MenuItem>
              <Avatar>N</Avatar> Notification message
            </MenuItem>
            <MenuItem>
              <Avatar>N</Avatar> Notification message
            </MenuItem>
            <MenuItem>
              <Avatar>N</Avatar> Notification message
            </MenuItem>
        </Menu>

        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Profile">
                  <IconButton
                      onClick={handleClickP}
                      size="small"
                      sx={{ ml: 1 }}
                      aria-controls={openP ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openP ? 'true' : undefined}
                  >
                      <Avatar src={user} sx={{ width: 40, height: 40 }}></Avatar>
                  </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorElProfile}
                id="account-menu"
                open={openP}
                onClose={handleCloseP}
                onClick={handleCloseP}
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
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={()=>{
                  authService.logout();
                  window.location.href = '/';
                  
                  }}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
        
        {/*<button onClick={droplist} class="hidden lg:inline-flex items-center bg-emerald-100 border-0 p-0 font-normal focus:outline-none rounded text-base mt-4 md:mt-0">
          <div class="w-14 rounded-full">
            <img src={user} class="w-full h-full rounded-full p-1 bg-white" alt="" />
          </div>
          <div className="mr-2 ml-3 text-gray-600 font-normal">Abdul Qadir <br /><div className="text-gray-400">Traveller</div></div>
          <svg fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          { showResults ?
                  <div class="absolute right-4 top-16 z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                     <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Help</a>
                        </li>
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                     </ul>
                  </div>
               : null }
          </button>*/}
      
      </div>
    </header>
  );
}
 
export default Header;