import img from '../assets/customer2.jpg'
import img1 from '../assets/arugam.jpg'
import img2 from '../assets/dalada.jpg'
import img3 from '../assets/jaffna.jpg'
import group from '../assets/group.png'
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Modal.css";

const Dashboard = () => {
   const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
   };

   return ( 
      <div class="absolute right-0 left-60 h-full bg-gray-200 px-8 py-4">
         <div class="flex w-full h-16 mb-2 rounded-lg bg-gray-200">
            <div class="w-3/12 h-full p-3 text-lg font-medium ml-1 text-slate-700 bg-gray-200">Hi, Abdul!</div>
            <div class="w-3/12 h-full p-3 bg-gray-200"></div>
            <div class="w-5/12 h-full p-1 bg-gray-200">
               <form className="max-w-sm px-4 drop-shadow-lg">
                  <div className="relative">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                     </svg>
                     <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-11 py-3 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-emerald-300"
                     />
                  </div>
               </form>
            </div>
            <div class="w-1/12 h-full p-1 bg-gray-200">
               <center><div class="w-11 h-11 p-2 rounded-full bg-gray-100"> 
                  <span class="relative inline-block">
                     <svg class="w-7 h-7 text-gray-700 fill-current rounded-full" viewBox="0 0 20 20"><path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                     <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">3</span>
                  </span> 
               </div></center>
            </div>
         </div>
      
         <div class="w-full h-48 mb-14 p-1 bg-gray-200">
               <div class="font-semibold text-xl ml-3 mb-1 text-slate-500">Top Suggestions</div>
               <Slider {...settings}>
                     <div class="relative">
                        <img src={img1} class="rounded-xl object-cover object-center w-full h-44 p-2 hover:p-1 hover:opacity-80" alt=""/>
                        <div class="absolute left-5 bottom-3 text-white">
                           <h4 class="font-semibold text-2xl">Hikkaduwa</h4>
                           <p>Description</p>
                        </div>
                     </div>
                    <div class="relative">
                        <img src={img2} class="rounded-xl object-cover object-center w-full h-44 p-2 hover:p-1 hover:opacity-80" alt=""/>
                        <div class="absolute left-5 bottom-3 text-white">
                           <h4 class="font-semibold text-2xl">Hikkaduwa</h4>
                           <p>Description</p>
                        </div>
                    </div>
                    <div class="relative">
                        <img src={img3} class="rounded-xl object-cover object-center w-full h-44 p-2 hover:p-1 hover:opacity-80" alt=""/>
                        <div class="absolute left-5 bottom-3 text-white">
                           <h4 class="font-semibold text-2xl">Hikkaduwa</h4>
                           <p>Description</p>
                        </div>
                    </div>
                    <div class="relative">
                        <img src={img2} class="rounded-xl object-cover object-center w-full h-44 p-2 hover:p-1 hover:opacity-80" alt=""/>
                        <div class="absolute left-5 bottom-3 text-white">
                           <h4 class="font-semibold text-2xl">Hikkaduwa</h4>
                           <p>Description</p>
                        </div>
                    </div>
                    <div class="relative">
                        <img src={img3} class="rounded-xl object-cover object-center w-full h-44 p-2 hover:p-1 hover:opacity-80" alt=""/>
                        <div class="absolute left-5 bottom-3 text-white">
                           <h4 class="font-semibold text-2xl">Hikkaduwa</h4>
                           <p>Description</p>
                        </div>
                    </div>
                    <div class="relative">
                        <img src={img1} class="rounded-xl object-cover object-center w-full h-44 p-2 hover:p-1 hover:opacity-80" alt=""/>
                        <div class="absolute left-5 bottom-3 text-white">
                           <h4 class="font-semibold text-2xl">Hikkaduwa</h4>
                           <p>Description</p>
                        </div>
                    </div>
                </Slider>

         </div>

         <div class="flex w-full h-72 mb-7 rounded-lg bg-white">

            <div class="w-3/4 h-full px-4 py-3 bg-gray-200">
               <div className="flex flex-col w-full h-full overflow-auto rounded-lg bg-gray-300 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  <div class="pt-3 pl-6 mb-1 font-semibold">
                     Popular Destinations
                  </div>
                  <ul>

                     <li class="px-5 py-3">
                        <a href="#" class="flex h-16 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white dark:hover:bg-gray-700">
                           <span class="w-16 h-full bg-gray-400">
                              <img src={img1} class="w-full h-full rounded-lg" alt="" />
                           </span>
                           <div className="ml-4">
                              <div className="">Galle fort</div>
                              <div className="flex text-slate-400">
                                 <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                       <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                 </div>
                                 <div className="ml-1">Galle</div>
                              </div>
                           </div>
                        </a>
                     </li>
      
                     <li class="px-5 py-3">
                        <a href="#" class="flex h-16 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white dark:hover:bg-gray-700">
                           <span class="w-16 h-full bg-gray-400">
                              <img src={img2} class="w-full h-full rounded-lg" alt="" />
                           </span>
                           <div className="ml-4">
                              <div className="">Galle fort</div>
                              <div className="flex text-slate-400">
                                 <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                       <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                 </div>
                                 <div className="ml-1">Galle</div>
                              </div>
                           </div>
                        </a>
                     </li>

                     <li class="px-5 py-3">
                        <a href="#" class="flex h-16 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white dark:hover:bg-gray-700">
                           <span class="w-16 h-full bg-gray-400">
                              <img src={img3} class="w-full h-full rounded-lg" alt="" />
                           </span>
                           <div className="ml-4">
                              <div className="">Galle fort</div>
                              <div className="flex text-slate-400">
                                 <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                       <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                 </div>
                                 <div className="ml-1">Galle</div>
                              </div>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div class="w-1/4 h-full bg-gray-200 p-3">
               <div class="w-full h-full rounded-lg p-2 bg-gray-300">
                  <div class="align-middle w-full h-3/4 bg-white">
                     <img src={group} class="pt-4" alt="" />
                  </div>
                  <div class="w-full h-1/4 pt-4 bg-gray-200"><center>
                     <button onClick={toggleModal} class="flex m-0 px-2 py-1 bg-emerald-300 border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        </svg>
                        <div class="pl-1">Create Group</div>
                     </button></center>
                     {modal && (
                        <div className="modal">
                           <div onClick={toggleModal} className="overlay"></div>
                           <div className="modal-content">
                              <div className='mb-4 text-xl'>Add friends to 'trip-title'</div>
                              <form>
                                 <div class="inputBox">
                                    <input type="email" name="email" required onkeyup="this.setAttribute('value', this.value);" value="" />
                                    <label>Email</label>
                                 </div>
                                 <div class="mb-2 text-slate-500">People with access</div>
                                 <div class="h-24 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                                    <div class="added">
                                       <div class='added-names'>
                                          <div><img src={img} class="h-10 w-10 rounded-full" alt="" /></div>
                                          <div className='ml-3'>Abdul Qadir</div>
                                       </div>
                                       <div className='mr-5 text-slate-500'>Owner</div>
                                    </div>
                                    
                                 </div>
                                 <button className="close-modal bg-emerald-300 border-transparent" onClick={toggleModal}>Done</button>
                              </form>
                           </div>
                        </div> 
                     )}
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}
 
export default Dashboard;