import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
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
import { getBlogs } from "../services/BlogService";


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

const Cards = () => {

  const [blogs, setBlogs] = useState([]);

  const init = () => {

    getBlogs()
      .then((response) => {
        // console.log("Printing Blogs data", response.data);
        setBlogs(response.data);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  useEffect(() => {
    init();
  }, []);

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
    <section class="text-gray-600 body-font pb-12 bg-gray-100">
      <div class="container px-20 py-8 mx-auto">

        <div>
          {/* {blogs.map((blog, index) => (
            <div key={index}>
                <div>{blog.title}</div>
            </div>
          ))} */}
        </div>

        <div class="flex flex-wrap w-full mb-3">
          <div class="w-full mb-3 lg:mb-0">
            <h1 class="sm:text-3xl text-xl font-medium title-font mb-2 text-gray-600">Travelers' Blogs</h1>
            <p class="w-full leading-relaxed mb-2 text-gray-500">Most recent traveller Blogs</p>
          </div>
        </div>
        
        <div class="flex flex-wrap -m-4">
        
         {blogs.map((blog, index) => index < 4 && (
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar {...stringAvatar(blog.location)} />
                }
                title={blog.title}
                subheader={blog.location}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {blog.content}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
