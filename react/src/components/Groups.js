import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddCircle from '@mui/icons-material/AddCircle';
import { grey } from '@mui/material/colors';
import { CardActionArea } from '@mui/material';
import { getGroups } from "../services/GroupsService";
import GroupModal from './GroupModal';
import img1 from '../assets/arugam.jpg'
import img2 from '../assets/dalada.jpg'
import img3 from '../assets/jaffna.jpg'
import img from '../assets/customer2.jpg'

<GroupModal />
const Groups = () => {
    
    // Display Groups
    const [groups, setGroups] = useState([]);

    const init = () => {
        getGroups()
        .then(response => {
          console.log('Printing employees data', response.data);
          setGroups(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
    }
    
    useEffect(() => {
      init();
    }, []);

    const [openM, setOpenM] = useState(false);
    const handleOpenM = () => setOpenM(true);
    const handleCloseM = () => setOpenM(false);

    return ( 
        
        <section class="text-gray-600 body-font mb-10">
            {/*
            <div>  
                { groups.map(group => (
                <div> key={group.id}
                    <div>{group.name}</div>
        
                </div>
                )) }
            </div>
            */}
            
            <div class="container px-5 py-5 mx-auto">
                <div class="w-full mb-8 pl-2">
                    Trips
                </div> 
                <div class="flex flex-wrap -m-2">
                    <div class="p-4 lg:w-1/4 md:w-1/2 w-full">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={()=>{window.location.href = '/groupChat'}}>
                                <CardMedia
                                component="img"
                                height="140"
                                image={img2}
                                alt="green iguana"
                                sx={{height: 140}}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Dalanda Palace
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Created by : Kasun
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2 w-full">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={img1}
                                alt="green iguana"
                                sx={{height: 140}}
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
                    <div class="p-4 lg:w-1/4 md:w-1/2 w-full">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={img3}
                                alt="green iguana"
                                sx={{height: 140}}
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
                    </div>
                    <div class="p-4 lg:w-1/4 md:w-1/2 w-full">
                        <Card sx={{ maxWidth: 345 }} onClick={handleOpenM}>
                            <CardActionArea>
                                <Box sx={{ 
                                    display: 'flex',
                                    justifyContent : 'center',
                                    alignItems: 'center',
                                    bgcolor: grey[100], 
                                    color: grey[600], 
                                    height: 140
                                }}>
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
            
        </section>
     );
}
 
export default Groups;