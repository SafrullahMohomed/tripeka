import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'


export default class Blog extends Component {
    render() {
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
                                        <h1 class="mb-2 text-lg font-medium text-gray-900">Pinnawela Zoo</h1>
                                        <p class="mb-2 text-sm tracking-wide text-gray-700">I visited this elephant orphange first time. I had a great exeprience on it. Tripeka made my day</p>
                                        <div class="flex items-center ">
                                            <a class="inline-flex items-center text-emerald-500 cursor-pointer md:mb-2 lg:mb-0" href="#">Read
                                                More

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <div class="border-2 border-gray-200 rounded-lg">
                                    <img class="object-cover object-center w-full lg:h-48 md:h-36" src={blog2} alt="blog"/>
                                    <div class="p-6">
                                        <span
                                            class="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-emerald-500">Written By : Ashfaq Ashar
                                        </span>
                                        <h1 class="mb-2 text-lg font-medium text-gray-900">Hakgala Garden</h1>
                                        <p class="mb-2 text-sm tracking-wide text-gray-700">Woow ! . This place was amazing. I got a good advice from trip guider from Trip eka . Thank you</p>
                                        <div class="flex items-center ">
                                            <a class="inline-flex items-center text-emerald-500 cursor-pointer md:mb-2 lg:mb-0" href="#">Read
                                                More

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <div class="border-2 border-gray-200 rounded-lg">
                                    <img class="object-cover object-center w-full lg:h-48 md:h-36" src={blog3} alt="blog"/>
                                    <div class="p-6">
                                        <span
                                            class="inline-block p-2 mb-2 text-xs font-medium tracking-widest  text-emerald-500">Written By : Munas Haathim
                                        </span>
                                        <h1 class="mb-2 text-lg font-medium text-gray-900">Singharaja Forest</h1>
                                        <p class="mb-2 text-sm tracking-wide text-gray-700">This forest was awesome and scary. Tripeka provides me all the facilities to have a great trip with my friends</p>
                                        <div class="flex items-center ">
                                            <a class="inline-flex items-center text-emerald-500 cursor-pointer md:mb-2 lg:mb-0" href="#">Read
                                                More

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>

            <div >
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                                <div class="border-2 border-gray-200 rounded-lg">
                                    <img class="object-cover object-center w-full lg:h-48 md:h-36" src={blog4} alt="blog"/>
                                    <div class="p-6">
                                        <span
                                            class="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-emerald-500">Written By : Dinuja
                                        </span>
                                        <h1 class="mb-2 text-lg font-medium text-gray-900">Viharamaha Devi park</h1>
                                        <p class="mb-2 text-sm tracking-wide text-gray-700">I really don't know there is such a wonderful park in colombo city. Thanks Tripeka for showing good places</p>
                                        <div class="flex items-center ">
                                            <a class="inline-flex items-center text-emerald-500 cursor-pointer md:mb-2 lg:mb-0" href="#">Read
                                                More

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <div class="border-2 border-gray-200 rounded-lg">
                                    <img class="object-cover object-center w-full lg:h-48 md:h-36" src={blog5} alt="blog"/>
                                    <div class="p-6">
                                        <span
                                            class="inline-block p-2 mb-2 text-xs font-medium tracking-widest  text-emerald-500">Written By : Villcassim
                                        </span>
                                        <h1 class="mb-2 text-lg font-medium text-gray-900">Yaala National Park</h1>
                                        <p class="mb-2 text-sm tracking-wide text-gray-700">Yala is the most visited national park in Sri Lanka with record-breaking numbers every passing year. </p>
                                        <div class="flex items-center ">
                                            <a class="inline-flex items-center text-emerald-500 cursor-pointer md:mb-2 lg:mb-0" href="#">Read
                                                More

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <div class="border-2 border-gray-200 rounded-lg">
                                    <img class="object-cover object-center w-full lg:h-48 md:h-36" src={blog6} alt="blog"/>
                                    <div class="p-6">
                                        <span
                                            class="inline-block p-2 mb-2 text-xs font-medium tracking-widest  text-emerald-500">Written By : Dinujaya
                                        </span>
                                        <h1 class="mb-2 text-lg font-medium text-gray-900">Arugam Bay Beach</h1>
                                        <p class="mb-2 text-sm tracking-wide text-gray-700">Lovely Arugam Bay, a moon-shaped curl of soft sand, is home to a famed point break that many regard as the best surf spot </p>
                                        <div class="flex items-center ">
                                            <a class="inline-flex items-center text-emerald-500 cursor-pointer md:mb-2 lg:mb-0" href="#">Read
                                                More

                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            
          </Slider>
        </div>
      );
    }
  }

