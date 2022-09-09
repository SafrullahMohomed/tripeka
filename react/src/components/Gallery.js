import React, { useState } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { FileUploader } from "react-drag-drop-files";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'

const Gallery = () => {

    // upload photos
    const [openP, setOpenP] = useState(false);
    const handleOpenP = () => setOpenP(true);
    const handleCloseP = () => setOpenP(false);
    
    const fileTypes = ["JPEG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    return ( 

        <section class="text-gray-600 body-font px-24">
            <PhotoAlbum photos={photos} layout="columns" />
            
            <div class="px-5 py-1 mx-auto flex flex-wrap justify-center">
                
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
                                    <input hidden accept="image/*" type="file" />
                                    <CameraAltOutlinedIcon />
                                </IconButton>
                                <p className="mt-8">{file ? `File name: ${file[0].name}` : "No Images uploaded yet"}</p>
                            </Box>
                        </DialogContent>
                    </FileUploader>
                    <DialogActions>
                        <Button type="reset" onClick={handleCloseP}>Cancel</Button>
                        <Button type="submit" onClick={handleCloseP} autoFocus>
                            Upload
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        </section>
     );
}
 
export default Gallery;