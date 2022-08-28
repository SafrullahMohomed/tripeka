import React, { useState } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Gallery = () => {

    // upload photos
    const [openP, setOpenP] = useState(false);
    const handleOpenP = () => setOpenP(true);
    const handleCloseP = () => setOpenP(false);

    return ( 
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-1 mx-auto flex flex-wrap">

                <div class="flex flex-wrap md:-m-2 -m-1">
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
                        </div>
                        <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
                        </div>
                    </div>
                </div>

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
                    <DialogContent sx={{display: 'flex', justifyContent:'center'}}>
                        <Box component="span" sx={{ p: 2, border: '1px dashed grey', width: 1, display:'flex', alignItems:'center', flexDirection:'column' }}>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <CameraAltOutlinedIcon />
                            </IconButton>
                            Upload Photos
                        </Box>
                    </DialogContent>
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