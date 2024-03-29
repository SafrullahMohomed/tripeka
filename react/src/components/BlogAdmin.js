import React, { useState, useEffect } from "react";
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { getBlogs } from "../services/BlogService";
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const BlogAdmin = () => {

    const [blogs, setBlogs] = useState([]);   

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

    return ( 
        <section class="w-full h-full text-gray-600 body-font pt-20 bg-gray-100">
            <div class="flex justify-center px-5 py-1 mx-auto">
                
            <div class="container px-18 py-5 mx-auto">
            <div class="flex flex-wrap w-full pb-4 flex-col items-center text-center">
              <div class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Published Blogs</div>
            </div>
                <div className="px-16 mx-auto">
                    <div class="flex justify-center flex-wrap">
                    {blogs.map((blog, index) => (
                      <div className="p-2 mx-3 my-8">
                      <Card sx={{ maxWidth: 270, height: 280 }}>
                        <CardHeader
                          avatar={
                            <Avatar {...stringAvatar(blog.location)} />
                          }
                          title={blog.title}
                          subheader={blog.location}
                        />
                        {/* <CardMedia
                          component="img"
                          image={""}
                          alt="Paella dish"
                          sx={{height: 180}}
                        /> */}
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
            </div>

            </div>
        </section>
     );
}
 
export default BlogAdmin;