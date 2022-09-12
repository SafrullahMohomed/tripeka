import React from 'react'
import Header from '../components/Header'
import Footer from './../components/Footer';
import { Link } from "react-router-dom";
import pop3 from '../assets/GuiderRegister.jpg';
import pop4 from '../assets/HotelRegister.jpg';
import pop5 from '../assets/TravelRegister.jpg';
import Navbar from '../components/Navbar';

const TypePage = () => {
  return (
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 class="font-medium leading-tight text-4xl mt-5 mb-2 text-emerald-600 text-align:center grid justify-items-center ">Choose the type you wish to register</h2>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/3">
                        <Link to="/register" class="cursor-pointer">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative" style={{backgroundImage: 'url('+pop5+')', backgroundSize: "cover",}}>
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"></h1>
                                <p class="leading-relaxed mb-3"></p>   
                            </div>
                            <h2 class="tracking-widest text-xl title-font font-medium text-gray-400 mb-1" style={{marginLeft:"200px"}}>Traveller</h2>
                        </Link>
                    </div>
                    <div class="p-4 lg:w-1/3">
                        <Link to="/carregister" class="cursor-pointer">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative" style={{backgroundImage: 'url('+pop4+')', backgroundSize: "cover",}}>
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"></h1>
                                <p class="leading-relaxed mb-3"></p>   
                            </div>
                            <h2 class="tracking-widest text-xl title-font font-medium text-gray-400 mb-1" style={{marginLeft:"200px"}}>Car Providers</h2>
                        </Link>
                    </div>
                    <div class="p-4 lg:w-1/3">
                        <Link to="/guideregister" class="cursor-pointer">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative" style={{backgroundImage: 'url('+pop3+')', backgroundSize: "cover",}}>
                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"></h1>
                                <p class="leading-relaxed mb-3"></p>   
                            </div>
                            <h2 class="tracking-widest text-xl title-font font-medium text-gray-400 mb-1" style={{marginLeft:"200px"}}>Tour Guiders</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default TypePage