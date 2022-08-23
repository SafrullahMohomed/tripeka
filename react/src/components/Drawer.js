import React, { useState, useEffect } from "react";
import { styled, useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AdminDash from './AdminDash';
import user from '../assets/customer2.jpg';

const customTheme = createTheme({
  palette: {
    primary: {
      dark:  '#34d399',
      main: '#6ee7b7',
      light: '#d1fae5',
    },
    secondary: {
      dark: '#9f1239',
      main: '#fda4af',
      light: '#fecdd3',
    }
  },
});

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 15px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 15px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{
          boxShadow: 0,
          bgcolor: "primary.light"
        }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            
            <Box sx={{display: 'flex', position: 'absolute', right: 30}}> 
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
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} PaperProps={{
          sx: {
            border: 0,
            bgcolor: 'primary.main'
          }
        }}>
          <DrawerHeader sx={{bgcolor: 'primary.light'}}>
            <Typography></Typography>
            <IconButton onClick={handleDrawerClose}> 
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <List>
            {['Home', 'Starred', 'Send email', 'Drafts', 'Hotels', 'Draft'].map((text, index) => (
              <ListItem key={text} sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2,
                    borderRadius: 2,
                    bgcolor: 'primary.light',
                    "&:hover": {
                      bgcolor: 'primary.dark',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <AdminDash />
      </Box>
      </ThemeProvider>
  );
}