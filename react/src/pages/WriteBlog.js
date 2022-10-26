import React, { useState } from 'react'
import "../styles/write.css";
import upload from '../assets/upload.png';
import Navbar from '../components/Navbar';
import { combineEventUis } from '@fullcalendar/react';
import { Component } from 'react';




//const WriteBlog = () => {
class WriteBlog  extends Component{
  
  constructor(props){
    super(props)
    this.state ={
      title : " ",
      article: " " ,
    }

    this.changeArticleHandler =this.changeArticleHandler.bind(this);
    this.changeTitleHandler =this.changeTitleHandler.bind(this);
    this.submit =this.submit.bind(this);
  }
  changeArticleHandler =(event)=>{
    this.setState({article: event.target.value})
  }
  changeTitleHandler =(event)=>{
    this.setState({title: event.target.value})
  }
  submit = (e)=>{
    
    alert(`${this.state.title} ${this.state.article}`)
    e.preventDefault();
    let blogwrite ={title:this.state.title,article:this.state.article};
    console.log('blogwrite=>' + JSON.stringify(blogwrite));
  }

  render(){
  return (
    <div>
      <Navbar/>
      <section>
        <div className="container px-5 py-24 mx-auto">
          
          <div class="banner">
            <input type="file" accept="image/*" id="banner-upload" hidden/>
            <label for="banner-upload" class="banner-upload-btn"><img src={upload} alt="upload banner"/></label>
          </div>
        
          <div class="blog">
            <input type="text" name="title" placeholder="The Blog title..." value={this.state.title} onChange={this.changeTitleHandler}/>
            <input type="text" name="article" placeholder="Starts here ..."value={this.state.article} onChange={this.changeArticleHandler}/>
          </div>

          <div class="blog-options mb-3">
            <button type ="submit"className=  "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={this.submit}>
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Publish
              </span>
            </button>
            <input type="file" accept="image/*" id="image-upload" hidden/>
            <label for="image-upload" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 py-3 px-3 cursor-pointer">Upload Image</label>
          </div>
          
        </div>
      </section>
      
    </div>
    
  )
  
}
}

export default WriteBlog;