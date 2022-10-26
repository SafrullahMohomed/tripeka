import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const Review = () => {
    return ( 
           
        <section className="text-gray-600 body-font pb-10 bg-gray-100">
            {/*<div>
                    {groupList.map((group, index) => (
                    <div key={index}>
                        <div>{group.name}</div>
                    </div>
                    ))}
                </div> */}
            <div class="container px-20 py-5 mx-auto">
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
            </div>
        </section>
     );
}
 
export default Review;
<div>
    Reveiews
</div>