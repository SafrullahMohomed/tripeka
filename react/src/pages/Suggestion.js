import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSuggestionById } from "../services/SuggestionService";

const Suggestion = () => {

    // id == location
    const { id } = useParams();
    const [about, setAbout] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");


    const init = async () => {
    
        getSuggestionById(id)
          .then((response) => {
            // console.log("Printing data", response.data);
            setAbout(response.data.description);
            // setIsPending(false);
            // setError(null);
          })
          .catch((err) => {
            console.log("Something went wrong", err);
            // setIsPending(false);
            // setError(err.message);
        });

        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${id}&client_id=9WMuH_JWZbfr3mw43CYqFVoe87rAXLKaS2iCp6ibnz0`
        );
        const dataJ = await data.json();
        const result = await dataJ.results;
        const image1 = await result[0].urls.raw;
        const image2 = await result[1].urls.raw;
        const image3 = await result[2].urls.raw;
        const image4 = await result[3].urls.raw;
        setImage1(image1)
        setImage2(image2)
        setImage3(image3)
        setImage4(image4)
    };

    useEffect(() => {
        console.log("Run")
        init();
    }, []);
    

    return ( 
        <section className="text-gray-600 body-font mb-10 px-32">
            <div className="font-bold text-4xl py-4">Explore {id}</div>
            <div className="flex items-center w-full rounded-lg">
                <div className="w-1/2 mr-1"><img src={image1} alt="" width="100%"/></div>
                <div className="w-1/4 mr-1">
                    <div className="w-full mb-1"><img src={image2} alt="" width="100%"/></div>
                    <div className="w-full"><img src={image3} alt="" width="100%"/></div>
                </div>
                <div className="w-1/4"><img src={image4} alt="" width="100%"/></div>
            </div>
            <div className="w-1/2 mt-4 pr-2">
                    <div className="font-semibold py-4 text-3xl">About {id}</div>
                    <div className="text-xl">{about}</div>
                </div>
        </section>
    );
}
 
export default Suggestion;