import img1 from '../assets/arugam.jpg'
import img2 from '../assets/dalada.jpg'
import img3 from '../assets/jaffna.jpg'
import group from '../assets/group.png'
import React, { useState } from "react";
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
   return ( 
      <div class="absolute right-72 left-60 h-full bg-gray-200 px-8 py-4">
         <div class="flex w-full h-16 mb-7 rounded-lg bg-gray-100">
            <div class="w-3/12 h-full p-3 text-lg bg-gray-200">Hi, Abdul!</div>
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
                        className="w-full h-11 py-3 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                     />
                  </div>
               </form>
            </div>
            <div class="w-1/12 h-full p-1 bg-gray-200">
               <center><div class="w-11 h-11 p-2 rounded-full bg-gray-300">  
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 bg-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
               </div></center>
            </div>
         </div>

         <div class="flex justify-evenly w-full h-48 mb-7 p-2 bg-gray-100">
            <div class="h-full w-56 rounded-lg bg-gray-300">
               <img src={img1} class="w-full h-full rounded" alt="" />
            </div>
            <div class="h-full w-56 rounded-lg bg-gray-300">
               <img src={img2} class="w-full h-full rounded" alt="" />
            </div>
            <div class="h-full w-56 rounded-lg bg-gray-300">
               <img src={img3} class="w-full h-full rounded" alt="" />
            </div>
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
                              Galle Fort<br />Galle
                           </div>
                        </a>
                     </li>
                     <li class="px-5 py-3">
                        <a href="#" class="flex h-16 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white dark:hover:bg-gray-700">
                           <span class="w-16 h-full bg-gray-400">
                              <img src={img3} class="w-full h-full rounded-lg" alt="" />
                           </span>
                           <div className="ml-4">
                              Galle Fort<br />Galle
                           </div>
                        </a>
                     </li>
                     <li class="px-5 py-3">
                        <a href="#" class="flex h-16 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white dark:hover:bg-gray-700">
                           <span class="w-16 h-full bg-gray-400">
                              <img src={img2} class="w-full h-full rounded-lg" alt="" />
                           </span>
                           <div className="ml-4">
                              Galle Fort<br />Galle
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
                              <p>Hi</p>
                              <button className="close-modal" onClick={toggleModal}>Close</button>
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