import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="mb-20 w-full">
            <div className="flex justify-center mb-10">Page Not found</div>
            <div className="flex justify-center bg-emerald-100">
                <Link to="/dashboard">Back to the homepage...</Link>
            </div>
            
        </div>
     );
}
 
export default NotFound;