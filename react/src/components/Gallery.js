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
        <div>

            <Button variant="contained" onClick={handleOpenP}>Upload</Button>

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
     );
}
 
export default Gallery;