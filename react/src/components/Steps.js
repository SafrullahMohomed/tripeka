import React, {useEffect} from 'react';
import pop6 from '../assets/carousel_images_steps/10709.jpg';

// import Aos from 'aos'
// import "aos/dist/aos.css"

const Steps = () => {
    // useEffect(() => {
    //     Aos.init({duration:2000});
    // },[]);
  return (
    <div>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap w-full">
                    <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                        <h1 className="font-sans text-3xl text-gray-800 font-bold ...">Register</h1><br/>
                        <h1 className="font-sans text-3xl text-gray-800 font-bold ...">need to put a sattapadi text .....</h1>
                        <br></br>
                        <br></br>
                        <div class="flex relative pb-12">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                <p class="leading-relaxed">Create a <span className="text-red-500">TRIP GROUPS</span> among registered users......</p>
                            </div>
                        </div>
                        <div class="flex relative pb-12">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                <p class="leading-relaxed"><span className="text-red-500">CHAT</span> with your group members</p>
                            </div>
                        </div>
                        <div class="flex relative pb-12">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <circle cx="12" cy="5" r="3"></circle>
                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                                <p class="leading-relaxed">Share your <span className="text-red-500">LIVE LOCATION</span> among your group members</p>
                            </div>
                        </div>

                        <div class="flex relative pb-12">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <circle cx="12" cy="5" r="3"></circle>
                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                                <p class="leading-relaxed">Explore the <span className="text-red-500">BUDGET</span> of your trip</p>
                            </div>
                        </div>
                        
                        <div class="flex relative">
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                                <p class="leading-relaxed">Now you are start to work  on the application. Enjoy your valuable time with great trip</p>
                            </div>
                        </div>
                    </div>
                    <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={pop6} alt="step"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Steps