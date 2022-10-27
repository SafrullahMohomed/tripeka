import { faDiagramSuccessor } from "@fortawesome/free-solid-svg-icons";
import React  from "react";
import "./notifitest.css";


function notifitest(){



    return(
        <div className="container">
            <h1>React Notification</h1>

            <ReacNotifi/>
            <Home/>
         
        </div>
    );

}
function    homemain(){

const handleonclickdefault = ()=>{
    store.addNotify({
        title: "new card",
        message:   "",
        type: "success",
        container: " top-tight",
        insert: "top",
    })

}
    {
    return(
        <div>
<button onClick={handleonclickdefault}>
        
default
</button>
            </div>

    )

    }
}

export default notifitest;