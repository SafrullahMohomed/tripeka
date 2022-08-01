import { Outlet, Link } from "react-router-dom";
import u1 from '../assets/customer1.jpg'
import u2 from '../assets/customer2.jpg'
import u3 from '../assets/customer3.jpg'
import img1 from '../assets/arugam.jpg'
import img2 from '../assets/dalada.jpg'
import img3 from '../assets/jaffna.jpg'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/calendar.css'

const Panel = () => {
   //dropdown
   const [showResults, setShowResults] = useState(false)
   const droplist = () => setShowResults(true)
   
   //calendar
   const [date, setDate] = useState(new Date())

   return ( 
      <div class="absolute right-0 w-72 h-full bg-gray-100 p-4">
         <div class="flex w-full h-16 mb-7">
            <div class="w-1/4 h-full p-1 rounded-full bg-white">
               <img src={u2} class="w-full h-full rounded-full" alt="" />
            </div>
            <div class="w-2/4 h-full p-1 pl-3 font-semibold">Abdul Qadir<br /><div class="text-slate-400 font-light">Traveler</div></div>
            <div class="w-1/4 h-full">
            
               <button onClick={droplist} id="dropdownDefault" data-dropdown-toggle="dropdown" class="py-2 border-transparent text-black focus:outline-none font-medium rounded-lg text-sm px-4 text-center inline-flex items-center" type="button"><svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
               { showResults ?
                  <div id="dropdown" class="absolute right-4 z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                     <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">help</a>
                        </li>
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                     </ul>
                  </div>
               : null }
               
            </div>
         </div>

         <div class="w-full h-48 mb-12 rounded-lg border border-emerald-300 drop-shadow-lg overflow-hidden">
   
               <div className='calendar-container'>
                  <Calendar onChange={setDate} value={date} selectRange={true}/>
               </div>
               
               {date.length > 0 ? (
                  <p className='text-center'>
                     <span className='bold'>Start:</span>{' '}
                     {date[0].toDateString()}
                     &nbsp;|&nbsp;
                     <span className='bold'>End:</span> {date[1].toDateString()}
                  </p>
                  ) : (
                  <p className='text-center'>
                     <span className='bold'>Default selected date:</span>{' '}
                     {date.toDateString()}
                  </p>
                  )
               }
            
         </div>
         
         <div class="w-full h-64 mb-7 rounded-lg bg-white">
         <div className="flex flex-col w-full h-full overflow-auto rounded-lg bg-white scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  <div class="pt-3 pl-6 mb-1 font-semibold">
                     My groups
                  </div>
                  <ul>
                     <li class="p-2 pl-4">
                        <Link to="/chat"  class="border border-slate-400 flex h-16 w-11/12 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700">
                           <span class="w-16 h-full bg-gray-400">
                              <img src={img1} class="w-full h-full rounded-lg" alt="" />
                           </span>
                           <div className="ml-4">
                              <div className="">Trip-title</div>
                              <div className="flex text-slate-400">
                                 <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                 </div>   
                                 <div className="">Galle</div>
                                 <div class="-space-x-4 ml-2">
                                    <img class="relative z-3 inline object-cover w-6 h-6 border-2 border-white rounded-full" src={u1} alt=""/>
                                    <img class="relative z-2 inline object-cover w-6 h-6 border-2 border-white rounded-full" src={u2} alt=""/>
                                    <img class="relative z-1 inline object-cover w-6 h-6 border-2 border-white rounded-full" src={u3} alt=""/>
                                 </div> 
                              </div>
                           </div>            
                        </Link>
                     </li>
                     <li class="p-2 pl-4">
                        <a href="#" class="border border-slate-400 flex h-16 w-11/12 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700">
                           
                           <span class="w-16 h-full bg-gray-400">
                              <img src={img2} class="w-full h-full rounded-lg" alt="" />
                           </span>
                           <div className="ml-4">
                              <div className="">Trip-title</div>
                              <div className="flex text-slate-400">
                                 <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                 </div>   
                                 <div className="">Galle</div>
                                 <div class="-space-x-4 ml-2">
                                    <img class="relative z-3 inline object-cover w-6 h-6 border-2 border-white rounded-full" src={u1} alt=""/>
                                    <img class="relative z-2 inline object-cover w-6 h-6 border-2 border-white rounded-full" src={u2} alt=""/>
                                    <img class="relative z-1 inline object-cover w-6 h-6 border-2 border-white rounded-full" src={u3} alt=""/>
                                 </div> 
                              </div>
                           </div>

                        </a>
                     </li>
                     <li class="p-2 pl-4">
                        <a href="#" class="border border-slate-400 flex h-16 w-11/12 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700">
                           
                           <span class="w-16 h-full bg-gray-400">
                              <img src={img3} class="w-full h-full rounded-lg" alt="" />
                           </span>
                           <div className="ml-4">
                              <div className="">Trip-title</div>
                              <div className="flex text-slate-400">
                                 <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                 </div>   
                                 <div className="">Galle</div>
                                 <div class="-space-x-4 ml-2">
                                    <img class="relative z-3 inline object-cover w-6 h-6 border-2 border-white rounded-full" src={u1} alt=""/>
                                    <img class="relative z-2 inline object-cover w-6 h-6 border-2 border-white rounded-full" src={u2} alt=""/>
                                    <img class="relative z-1 inline object-cover w-6 h-6 border-2 border-white rounded-full" src={u3} alt=""/>
                                 </div> 
                              </div>
                           </div>

                        </a>
                     </li>
                  </ul>
               </div>
         </div>
      </div>
   );
}
 
export default Panel;