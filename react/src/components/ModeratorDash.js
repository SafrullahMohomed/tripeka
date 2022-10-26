import React, { useEffect, useState } from "react";
import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import { BlockSharp } from "@mui/icons-material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const ModeratorDash = () => {

    // const [blogs, setblogs] = useState([
    //     {
    //         blog_id: 1,
    //         moderatedStatus: 0,
    //         title: "Test Title",
    //         subtitle: "Test Subtitle",
    //         content: "This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. "
    //     },
    //     {
    //         blog_id: 2,
    //         moderatedStatus: 0,
    //         title: "Test Title 2",
    //         subtitle: "Test Subtitle 2",
    //         content: "This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. "
    //     },
    //     {
    //         blog_id: 3,
    //         moderatedStatus: 1,
    //         title: "Test Title 3",
    //         subtitle: "Test Subtitle 3",
    //         content: "This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. "
    //     },
    //     {
    //         blog_id: 4,
    //         moderatedStatus: 1,
    //         title: "Test Title 4",
    //         subtitle: "Test Subtitle 4",
    //         content: "This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. "
    //     },
    //     {
    //         blog_id: 5,
    //         moderatedStatus: 2,
    //         title: "Test Title 5",
    //         subtitle: "Test Subtitle 5",
    //         content: "This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. "
    //     },
    //     {
    //         blog_id: 6,
    //         moderatedStatus: 2,
    //         title: "Test Title 6",
    //         subtitle: "Test Subtitle 6",
    //         content: "This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. This is a blog about Test Trip. "
    //     }

    // ]);

    const [blogs, setblogs] = useState([]);

    const [inUncheckedBlogs, setinUncheckedBlogs] = useState(true);

    const [currentBlogId, setcurrentBlogId] = useState(-1);

    const acceptBlog = (blog_id) => {
        return axios.post(ServerBaseUrl + "/moderator/accept/" + blog_id);
    }

    const rejectBlog = (blog_id) => {
        return axios.post(ServerBaseUrl + "/moderator/reject/" + blog_id);
    }

    useEffect(() => {
        
        // get unchecked (or all) blogs and set to the variables
        axios.get(ServerBaseUrl + "/moderator/all").then((response) => {
            setblogs(response.data);
          });
    }, [currentBlogId]);


    return (
        <section class="w-full h-screen flex items-center flex-col text-gray-600 body-font pt-20 bg-gray-100">

            {/* buttons */}
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={()=>{setinUncheckedBlogs(() => true); setcurrentBlogId(-1)}}>Unchecked Blogs</Button>
                <Button onClick={()=>{setinUncheckedBlogs(() => false); setcurrentBlogId(-1)}}>Checked Blogs</Button>
                
            </ButtonGroup>  

            {/* table view  */}
            <div className="w-3/4 p-4">
                
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Location</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">View</TableCell>
                            </TableRow>
                        </TableHead>
                {inUncheckedBlogs && currentBlogId === -1 &&
                
                <TableBody>
                    {blogs.map((blog) => {
                        if(blog.moderatedStatus === 0){
                            return <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{blog.title}</TableCell>
                                        <TableCell align="left">{blog.location}</TableCell> 
                                        <TableCell align="left">{blog.image_url}</TableCell>
                                        <TableCell align="left"><Button variant="contained" disableElevation onClick={()=>{setcurrentBlogId(blog.blog_id)}}  >View</Button></TableCell>
                                    </TableRow>
                        }
                    })}
                 
                 </TableBody>
                }
                

                {!inUncheckedBlogs && currentBlogId === -1 &&
                
                <TableBody>
                    {blogs.map((blog) => {
                        if(blog.moderatedStatus !== 0){
                        return <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                            <TableCell align="left">{blog.title}</TableCell>
                            <TableCell align="left">{blog.location}</TableCell> 
                            <TableCell align="left">{blog.image_url}</TableCell> 
                            <TableCell align="left"><Button variant="contained" disableElevationon onClick={()=>{setcurrentBlogId(blog.blog_id)}}>View</Button></TableCell>
                        </TableRow>
                        }
                    })}
                </TableBody>

                }
                </Table>
                </TableContainer>
                
            </div>

            {/* per blog view */}

            <div>
                {currentBlogId !== -1 &&
                
                <div>
                    {blogs.filter((blog) => blog.blog_id === currentBlogId).map((blog) => (
                        <div>
                            {blog.moderatedStatus === 1 && <h1>ACCEPTED BLOG</h1>}
                            {blog.moderatedStatus === 2 && <h1>REJECTED BLOG</h1>}
                            <h1>{blog.title}</h1>
                            <p>{blog.content}</p>
                            {(blog.moderatedStatus === 0 || blog.moderatedStatus === 1) && <button className="bg-slate-600" onClick={()=>{rejectBlog(blog.blog_id).then((res) => {console.log(res); setcurrentBlogId(-1);}).catch((err) => console.log(err))}}>Reject</button>} 
                            {(blog.moderatedStatus === 0 || blog.moderatedStatus === 2) && <button className="bg-slate-600" onClick={()=>{acceptBlog(blog.blog_id).then((res) => {console.log(res); setcurrentBlogId(-1);}).catch((err) => console.log(err))}}>Accept</button>}
                        </div>
                    ))}
                </div>

                }
            </div>
            
        </section>  
    )
}
 
export default ModeratorDash;