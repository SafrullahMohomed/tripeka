import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Slide from '@mui/material/Slide';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateGroupFloat = () => {
    return ( 
        <Slide
            in
            direction="left"
            timeout={500}
            style={{transform: 'translateY(12px)'}}
        >
            <Box 
                sx={{ '& > :not(style)': { m: 1 }, zIndex: 10, position: 'fixed', bottom: 20, right: 30 }}
                onClick={() => window.location.href = '/groups'}
            >
                <Fab variant="extended" size="medium" color="primary" aria-label="add">
                    <AddCircleIcon sx={{mr: 1}}/>Group
                </Fab>
            </Box>
        </Slide>
     );
}
 
export default CreateGroupFloat;