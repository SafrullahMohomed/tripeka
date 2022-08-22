import React, {useEffect} from 'react'
import Navbar from './Navbar'
// import Aos from 'aos'
// import "aos/dist/aos.css"

const Services = () => {
    // useEffect(() => {
    //     Aos.init({duration:2000});
    // },[]);
  return (
    
    <div name='Services'>
        <Navbar/>
        <section className="text-gray-600 body-font" >
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-emerald-500 tracking-widest font-medium title-font mb-1">WE PROVIDE VALUABLE SERVICES FOR OUR CUSTOMERS</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Services</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer duration-300 ...">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-plus" viewBox="0 0 16 16"> <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/> </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Calendar Service</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">We provides calender which presents public holidays to make decisions</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer duration-300 ...">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-cloud-drizzle-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" id="mainIconPathAttribute"></path> </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Weather Forecast</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Customers can able to view the climate conditions based on current or any other locations based on time</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer duration-300 ...">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"> <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/> </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Hotel Booking</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">We provide best hotel in our country according customer's taste and other information </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer duration-300 ...">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="IconChangeColor" height="200" width="200"><path d="M12 3h2l4 7h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1l4-7h2V1h4v2zm3.86 7L13 5H7l-2.86 5h11.72zM5.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" id="mainIconPathAttribute" fill="#ffffff"></path></svg>                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Car Rental Service</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">We provides best and trusted car rental services for our valuable customers with reasonable price</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer duration-300 ...">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" id="mainIconPathAttribute"></path> </svg>                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Group Chat</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">We provide facility for our customers to form a group and chat among each other to plan the desired trip</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer duration-300 ...">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="166" height="166" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" id="mainIconPathAttribute"></path> <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" id="mainIconPathAttribute"></path> </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Budget Management</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Customers can list down all the expenses and share them among the group members</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services