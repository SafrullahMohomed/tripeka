import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BlogData from "./BlogData";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Blogs from "../pages/Blogs";
import Modal from "../components/Modal";
import "./Modal.css";
import { Button } from "@mui/material";
const TestBlog1= ()=> {


   
   
// constructor(){

    // const [BlogData, setBlogData] = useState();
    // // useEffect(()=>{
    // //     const fecthData = async()=>{
    // //         const result = await fetch("http://localhost:3000/Blog#");
    // //         const jsonResult = result.json;

    // //             setBlogData(jsonResult)
    // //     }
    // //     fecthData();
    // // })
   
    
// }
// const [accept, setaccept] = useEffect(true);


    // const [modal, setModal] = useState(false);
  
    // const toggleModal = () => {
    //   setModal(!modal);
    // };
  
    // if(modal) {
    //   document.body.classList.add('active-modal')
    // } else {
    //   document.body.classList.remove('active-modal')
    
    //   {modal && (
    //     <div className="modal">
    //       <div  className="overlay"></div>
    //       <div className="modal-content">
    //         <h2>Hello Modal</h2>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
    //           perferendis suscipit officia recusandae, eveniet quaerat assumenda
    //           id fugit, dignissimos maxime non natus placeat illo iusto!
    //           Sapiente dolorum id maiores dolores? Illum pariatur possimus
    //           quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
    //           placeat tempora vitae enim incidunt porro fuga ea.
    //         </p>
    //         <button className="close-modal" onClick={toggleModal}>
    //           CLOSE
    //         </button>
    //       </div>
    //     </div>
    //   )}

        const settings = {
            dots: false,
            infinite: true,
            speed: 400,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
           
          

        <div>
            

            
            <div className="flex flex-col text-center w-full mb-5">
                <h2 className="text-xs text-emerald-500 tracking-widest font-medium title-font mb-1">WE LIKE DISPLAY ALL THE LATEST BLOGS WRIITEN BY OUR VALUABLE CUSTOMERS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Top Blogs</h1>
            </div>
          <Slider {...settings}>
            {BlogData.map(BlogData=>{
                return(
            <div >
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 md:w-1/3">
                                <div class="border-2 border-gray-200 rounded-lg">
                                    <img class="object-cover object-center w-full lg:h-48 md:h-36" src={blog1} alt="blog"/>
                                    <div class="p-6">
                                        <span
                                            class="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-emerald-500">Written by : Shanika
                                        </span>
                                        <h1 class="mb-2 text-lg font-medium text-gray-900">{BlogData.title}</h1>
                                      
                                        <Typography paragraph class="mb-2 text-sm tracking-wide text-gray-700 " maxCharacterCount={100}>{BlogData.description} Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over '
        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
        large plate and set aside, leaving chicken and chorizo in the pan. Add
        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
        stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',</Typography>
                                        
                                        <div class="flex items-center ">
                                            <a class="inline-flex items-center text-emerald-500 cursor-pointer md:mb-2 lg:mb-0" href="#">Read
                                                More
                                                 
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                            {/* <button class="inline-flex items-center text-emerald-500 cursor-pointer md:mb-2 lg:mb-0" href="#" onClick={toggleModal}  >
                                                Accept
                                                
                                                 
                                            
                                            </button>
                                           */}

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           
                           
                        </div>
                    </div>
                    </section>
               
            </div>
    
            )})}
          </Slider>
        </div>
      );
    }

  export default TestBlog1; 