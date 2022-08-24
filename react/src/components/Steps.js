import React, {useEffect} from 'react';
import pop6 from '../assets/step1.jpg';
import pop5 from '../assets/step2.png';
import pop4 from '../assets/step3.png';
import pop3 from '../assets/step4.png';

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
                        <h1 className="font-sans text-3xl text-gray-800 font-bold ... ml-4">Register</h1><br/>
                        <h1 className="font-sans text-3xl text-gray-800 font-bold ... ml-4">need to put a sattapadi text .....</h1>
                        <br></br>
                        <br></br>
                        <div class='ml-4'>
                        <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pop6} alt=""/>
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Form a Group</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Form a group with your members who are registered with our system</p>
                            </div>
                        </div>
                        <br/>
                        <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pop5} alt=""/>
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chat</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Chat with your teammates of your trip inorder to make decisions</p>
                            </div>
                        </div>
                        <br/>
                        <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pop4} alt=""/>
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Live Location</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Share your live locations among your teammates in case of emergency </p>
                            </div>
                        </div>
                        <br/>
                        <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pop3} alt=""/>
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Budget</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Set the budget of your trip and share it among your friends</p>
                            </div>
                        </div>
                        <br/>
                          
                        </div>  
                        
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Steps