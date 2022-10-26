import React, { useEffect, useState } from "react";
import axios from "axios";
import { ServerBaseUrl } from "../constants/Server";
import { BlockSharp } from "@mui/icons-material";


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
        <div>

            <div>
                <button className="bg-red-600" onClick={()=>{setinUncheckedBlogs(() => true); setcurrentBlogId(-1)}}>Unchecked Blogs</button>
                <button className="bg-red-600" onClick={()=>{setinUncheckedBlogs(() => false); setcurrentBlogId(-1)}}>Checked Blogs</button>
            </div>    

            <div>
                {inUncheckedBlogs && currentBlogId === -1 &&
                
                <div>
                    {blogs.map((blog) => {
                        if(blog.moderatedStatus === 0){
                        return <div><h1>{blog.title}</h1> <button className="bg-red-500" onClick={()=>{setcurrentBlogId(blog.blog_id)}}>View</button></div>
                        }
                    })}
                </div>

                }

                {!inUncheckedBlogs && currentBlogId === -1 &&
                
                <div>
                    {blogs.map((blog) => {
                        if(blog.moderatedStatus !== 0){
                        return <div><h1>{blog.title}</h1><button className="bg-red-500" onClick={()=>{setcurrentBlogId(blog.blog_id)}}>View</button></div>
                        }
                    })}
                </div>

                }

                
            </div>

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
            
        </div>  
    )
}
 
export default ModeratorDash;