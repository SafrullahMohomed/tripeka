import React from 'react'
import "../styles/write.css";
import upload from '../assets/upload.png';

const WriteBlog = () => {
  return (
    <div className="write">
      <div class="banner">
        <input type="file" accept="image/*" id="banner-upload" hidden/>
        <label for="banner-upload" class="banner-upload-btn"><img src={upload} alt="upload banner"/></label>
      </div>
    
      <div class="blog">
        <textarea type="text" class="title" placeholder="Blog title..."></textarea>
        <textarea type="text" class="article" placeholder="Start writing here..."></textarea>
      </div>

      <div class="blog-options">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Teal to Lime
          </span>
        </button>
        <input type="file" accept="image/*" id="image-upload" hidden/>
        <label for="image-upload" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 py-3 px-3">Upload Image</label>
      </div>
    </div>
  )
}

export default WriteBlog