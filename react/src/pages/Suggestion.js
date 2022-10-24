import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Suggestion = () => {

    const { id } = useParams();

    return ( 
        <section class="text-gray-600 body-font mb-10">
        <div class="container px-32 py-5 mx-auto">
            {id}
        </div>
        </section>
    );
}
 
export default Suggestion;