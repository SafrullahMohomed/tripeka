import "../styles/write.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { createBlog } from "../services/BlogService";

var firstname = null;
var user_id = null;
if (localStorage.getItem("userDetails")) {
  user_id = JSON.parse(localStorage.getItem("userDetails")).user_id;
  firstname = JSON.parse(localStorage.getItem("userDetails")).firstname;
}

const Blogs = () => {

  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  
  const createBlogs = async (e) => {
    e.preventDefault();

    // const blog = { title, content, firstname }; 
    // console.log(blog);
    createBlog(title, content, firstname )
      .then((response) => navigate("/dashboard/" + user_id ));
        
  };

    return ( 
      <section className="text-gray-600 body-font pb-10 bg-gray-100">
        <div class="flex flex-col items-center px-20 py-5 mx-auto">
          <div class="sm:text-3xl text-2xl font-medium title-font py-8 text-gray-900">Share Your Story</div>
                   
        
          {/* <div class="p-2 w-full">
            <textarea onChange={(e) => setTitle(e.target.value)} type="text" class="w-full h-12 p-2 outline-none border resize-none rounded-sm bg-gray-100 mb-2" placeholder="Blog title"></textarea>
            <textarea onChange={(e) => setContent(e.target.value)} type="text" class="w-full h-28 p-2 outline-none border resize-none rounded-sm bg-gray-100 mb-2" placeholder="Start writing here..."></textarea>
          </div>

          <div class="flex justify-end w-full p-2">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Publish
              </span>
            </button>            
          </div> */}
      <div className="w-3/4 p-2">
        <form onSubmit={createBlogs}>
          <DialogContent>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              margin="dense"
              id="Group-name"
              label="Blog Title"
              type="text"
              fullWidth
              variant="filled"
            />
            <div className="my-10"></div>
            <TextField
              id="standard-multiline-static"
              onChange={(e) => setContent(e.target.value)}
              label="Content"
              type="text"
              multiline
              rows={6}
              fullWidth
              variant="standard"
            />             
          </DialogContent>
          <div className="mr-3">
          <DialogActions>
            <Button type="reset" variant="text">Cancel</Button>
            <Button type="submit" variant="contained">Publish</Button>
          </DialogActions>
          </div>
        </form>
        </div>
        </div>
      </section>
    
    );
}
 
export default Blogs;