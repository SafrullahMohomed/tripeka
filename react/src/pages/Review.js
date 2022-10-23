import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const Review = () => {
    return ( 
        <div className="px-16 mx-auto">
            <Fab 
                sx={{float: 'right'}} color="primary" aria-label="edit"
                href='/blogs'
            >
                <Tooltip title="Write Blog" arrow>   
                    <EditIcon />
                </Tooltip>
            </Fab>
            Reveiews
        </div>
     );
}
 
export default Review;
<div>
    Reveiews
</div>