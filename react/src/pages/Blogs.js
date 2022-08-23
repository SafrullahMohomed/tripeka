import upload from '../assets/upload.png';
import "../styles/write.css";


const Blogs = () => {
    return ( 
        <div className="px-16 mx-auto">
          <div class="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900"><center>Share Your Story</center></div>
          <div class="flex justify-center">
            <div class="w-2/5 h-60 p-2 relative bg-cover bg-center">
                <div className="w-full h-full bg-gray-200">
                    <input type="file" accept="image/*" id="banner-upload" hidden/>
                    <label for="banner-upload" class="blog-banner-upload-btn">
                        <img src={upload} class="w-5" alt="upload banner"/>
                    </label>
                </div>
            </div>
          </div>
          
        
          <div class="p-2 w-full">
            <textarea type="text" class="w-full h-12 p-2 outline-none border resize-none rounded-sm bg-gray-100 mb-2" placeholder="Blog title"></textarea>
            <textarea type="text" class="w-full h-28 p-2 outline-none border resize-none rounded-sm bg-gray-100 mb-2" placeholder="Start writing here..."></textarea>
          </div>

          <div class="flex justify-end w-full p-2">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Publish
              </span>
            </button>
            <input type="file" accept="image/*" id="image-upload" hidden/>
            <label for="image-upload" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 py-3 px-3 cursor-pointer">Upload Image</label>
          </div>
          
        </div>
     );
}
 
export default Blogs;