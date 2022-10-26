import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const Review = () => {

    // Expand cards
  const [expanded1, setExpanded1] = useState(false);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Generate Random Colors on avatar
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

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
                <Fab 
                    sx={{float: 'right'}} color="primary" aria-label="edit"
                    href='/blogs'
                >
                    <Tooltip title="Write Blog" arrow>   
                        <EditIcon />
                    </Tooltip>
                </Fab>
                <div className="px-16 mx-auto">
                   
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                            <Avatar {...stringAvatar('Shakir Saheel')} />
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Infamous Maggona"
                            subheader="September 14, 2022"
                        />
                        {/* <CardMedia
                            component="img"
                            image={""}
                            alt="Paella dish"
                            sx={{height: 180}}
                        /> */}
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                            <ExpandMore
                            expand={expanded1}
                            onClick={handleExpandClick1}
                            aria-expanded={expanded1}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded1} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                            </CardContent>
                        </Collapse>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Review;
<div>
    Reveiews
</div>