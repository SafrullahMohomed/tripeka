
import React,{useState} from "react";
import Blogs from  "../../pages/Blogs"
const BlogAccepted =()=>{

//     const [blogs ,setBlogs]= useState([

//         {
//             userId:32323 ,
//             blogId: 1,
//             title: 'about',
//             desc:'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',

//         },
//         {
//             userId:3233,
//             blogId: 2,
//             title: 'about',
//             desc:'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
//         }
//     ]);

//     return(
//         <div>
//         {blogs.map(blog=>{
//             <li>{blog.userId}</li>
//         })}
//         </div>
//     );
// }
return(
    <div>
<div className=""> Blogs pending</div>

      <Blogs/>
    
        </div>



);

}

export default BlogAccepted;