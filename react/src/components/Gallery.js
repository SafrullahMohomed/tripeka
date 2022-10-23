import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
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
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import photos from "./photos";

import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { addurl } from "../services/GalleryService";
import { geturls } from "../services/GalleryService";

import upoload from '../assets/upoload.png'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'

// userId - who uploaded the photo?
// var user_id = null;
// if (localStorage.getItem("userDetails")) {
//   user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;
// }

const Gallery = () => {

    // get groupId
    const { id } = useParams();

    const [urlList, seturlList] = useState([]);

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
    const [imgurl, setImgurl ] = useState(null);
    const [uploaded, setUploaded ] = useState(false);

    const uploadImage = async(e) => {
        e.preventDefault();

        // put this at start to close modal
        setOpenP(false);

        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "tripeka")
        data.append("cloud_name","tripeka")
        await fetch("https://api.cloudinary.com/v1_1/tripeka/image/upload",{
            method:"POST",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            setImgurl(data.url)
            setUploaded(true)
        })
        .catch(err => console.log(err))
        // setImgurl(resp.data.url)

         console.log("url " + imgurl);
        // addurl(id, imgurl)
        // .then((response) => {
        //     console.log("uploaded " + response.data)
        // });
        
        
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setUploaded(false);
    };

    return ( 

        <section className="flex flex-col items-center text-gray-600 body-font px-24">

            <div> 
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={uploaded}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Image have been Uploaded
                    </Alert>
                </Snackbar>
            </div>
            <div className="w-5/6 mb-8">
                {/* <Card>
                    <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h6" color="text.secondary">
                            Generate a random album 
                            <IconButton aria-label="refresh" sx={{ml: 1}}>
                                <DriveFileMoveIcon onClick = {() => {window.location.reload(false);}}/>
                            </IconButton>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                            Because every photo has a story to tell
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                </Card> */}
            </div>
            <div id="album" className="w-5/6">

                {urlList[0] ? 
                    <ImageList cols={4}>
                    { urlList.map((item) => (
                        <ImageListItem key={item.photo_id}>
                        <img
                            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                : 
                    <center><div className="w-1/3">
                        <h2 className="mb-6">Upload Your Images</h2>
                        <img src={upoload} alt="" />
                    </div></center>
                }
                

            </div>

            <div className="px-5 py-1 mx-auto flex flex-wrap justify-center">
                
                <div className="flex justify-center w-full my-8">
                    <Button variant="contained" onClick={handleOpenP}>Upload</Button>
                </div>

                {/* Upload Modal*/}
                <Dialog
                    aria-labelledby="upload-title"
                    aria-describedby="upload-description"
                    onClose={handleCloseP}
                    open={openP}
                >
                    
                    <DialogTitle id="upload-title" sx={{ width: 450, marginBottom: -1 }}>
                        {"Upload Images"}
                    </DialogTitle>
                    {/* <FileUploader
                        multiple={true}
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                        maxSize={2}
                    > */}
                        <DialogContent sx={{display: 'flex', justifyContent:'center'}}>
                            <Box component="span" sx={{p: 2, border: '1px dashed grey', width: 1, display:'flex', alignItems:'center', flexDirection:'column' }}>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input onChange= {(e)=> setImage(e.target.files[0])} type="file" id="image-upload" hidden></input>
                                    <label for="image-upload">
                                        <CameraAltOutlinedIcon />
                                    </label>
                                </IconButton>
                                {/* <p className="mt-8">{file ? `File name: ${file[0].name}` : "No Images uploaded yet"}</p> */}
                            </Box>                            
                        </DialogContent>
                    {/* </FileUploader> */}
                    <DialogActions>
                        <Button type="reset" onClick={handleCloseP}>Cancel</Button>
                        <Button onClick={uploadImage} autoFocus>
                            Upload
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* {console.log("put this url in DB "+imgurl)}
                <div className="bg-gray-900">
                    <input multiple type="file" onChange= {(e)=> setImage(e.target.files)}></input>
                    <button onClick={uploadImage}>Upload</button>
                </div> */}
                       
            </div>
        </section>
     );
}
 
export default Gallery;