import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { CardActionArea } from '@mui/material';

import { FileUploader } from "react-drag-drop-files";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";

import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { addurl } from "../services/GalleryService";
import { geturls } from "../services/GalleryService";
import jwt_decode from "jwt-decode";

import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'

// userId from token
var decoded = jwt_decode(JSON.parse(localStorage.getItem("user")).jwtToken);
const user_id = decoded.sub;
console.log("UserID : " + user_id);



const Gallery = () => {

    // get groupId
    const { id } = useParams();

    const [urlList, seturlList] = useState([]);


    // let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // list = list.sort(() => Math.random() - 0.5)

    const init = () => {
        geturls(id)
            .then((item) => {
                seturlList(item.data.sort(() => Math.random() - 0.5));
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });
    };

    useEffect(() => {
        init();
    }, []);

    // upload photos-modal
    const [openP, setOpenP] = useState(false);
    const handleOpenP = () => setOpenP(true);
    const handleCloseP = () => setOpenP(false);
    
    const fileTypes = ["JPEG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    // **********Clodinary**********

const [image, setImage ] = useState("");
const [imgurl, setImgurl ] = useState("");

const uploadImage = async(e) => {
    e.preventDefault();

    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "tripeka")
    data.append("cloud_name","tripeka")
    await fetch("  https://api.cloudinary.com/v1_1/tripeka/image/upload",{
      method:"post",
      body: data
    })
    .then(resp => resp.json())
    .then(data => {
      setImgurl(data.url)
    })
    .catch(err => console.log("Cloud Error : "+err))

    setOpenP(false);

    // const url = {id, imgurl}; console.log(url);
    addurl(id, imgurl)
      .then((response) => {
        console.log(response.data)
      });
}

    return ( 

        <section class="flex flex-col items-center text-gray-600 body-font px-24">
            {console.log(urlList)}

            <div className="w-5/6 mb-8">
                <Card>
                    <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Because every photo has a story to tell
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Generate your album 
                            <IconButton aria-label="refresh" sx={{ml: 1}}>
                                <RefreshRoundedIcon onClick = {() => {window.location.reload(false);}}/>
                            </IconButton>
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div id="album" className="w-5/6">
                <ImageList cols={4}>
                {urlList.map((item) => (
                    <ImageListItem key={item.photo_id}>
                    <img
                        src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    />
                    </ImageListItem>
                ))}
                </ImageList>
            </div>

            <div class="px-5 py-1 mx-auto flex flex-wrap justify-center">
                
                <div className="flex justify-center w-full my-8">
                    <Button variant="contained" onClick={handleOpenP}>Upload</Button>
                </div>

                {/* Upload Modal*/}
                {/* <Dialog
                    aria-labelledby="upload-title"
                    aria-describedby="upload-description"
                    onClose={handleCloseP}
                    open={openP}
                >
                    
                    <DialogTitle id="upload-title" sx={{ width: 450, marginBottom: -1 }}>
                        {"Upload Images"}
                    </DialogTitle>
                    <FileUploader
                        multiple={true}
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                        maxSize={2}
                    >
                        <DialogContent sx={{display: 'flex', justifyContent:'center'}}>
                            <Box component="span" sx={{p: 2, border: '1px dashed grey', width: 1, display:'flex', alignItems:'center', flexDirection:'column' }}>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input onChange= {(e)=> setImage(e.target.files[0])} type="file"></input>
                                    <CameraAltOutlinedIcon />
                                </IconButton>
                                <p className="mt-8">{file ? `File name: ${file[0].name}` : "No Images uploaded yet"}</p>
                            </Box>                            
                        </DialogContent>
                    </FileUploader>
                    <DialogActions>
                        <Button type="reset" onClick={handleCloseP}>Cancel</Button>
                        <Button onClick={uploadImage} autoFocus>
                            Upload
                        </Button>
                    </DialogActions>
                </Dialog> */}

                <div className="bg-gray-900">
                    <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
                    <button onClick={uploadImage}>Upload</button>
                </div>       
                {console.log(imgurl)}       
                {/* <div>
                    <img src={} />    
                </div>   */}
            </div>
        </section>
     );
}
 
export default Gallery;