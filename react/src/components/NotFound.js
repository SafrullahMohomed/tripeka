import { Link } from "react-router-dom"
import img from '../assets/pageNotFound.png'

const NotFound = () => {
    return ( 
        <div className="flex flex-col items-center mb-20 w-full">
            <div className="notfoundpage flex flex-col items-center mb-10">
                <div className="text-2xl">Page Not found</div>
                <img className="h-96" src={img} alt="" />
            </div>
            <div className="p-2 bg-emerald-200 text-xl rounded-lg">
                <Link to="/dashboard">Back to the homepage</Link>
            </div>
            
        </div>
     );
}
 
export default NotFound;