import React from 'react'
import Header from '../components/Header'
import Footer from './../components/Footer';
import { Link } from "react-router-dom";
import pop3 from '../assets/arugam.jpg';
import pop4 from '../assets/nuwera.jpg';
import pop5 from '../assets/trinco.jpg';
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
                        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative" style={{backgroundImage: 'url('+pop5+')', backgroundSize: "cover",}}>
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <Link to="/register" class="text-emerald-500 inline-flex items-center cursor-pointer">Register
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative" style={{backgroundImage: 'url('+pop4+')', backgroundSize: "cover",}}>
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <Link to="/register" class="text-emerald-500 inline-flex items-center cursor-pointer">Register
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3">
                        <div class="h-full  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative" style={{backgroundImage: 'url('+pop3+')', backgroundSize: "cover",}}>
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <Link to="/register" class="text-emerald-500 inline-flex items-center cursor-pointer">Register
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default TypePage