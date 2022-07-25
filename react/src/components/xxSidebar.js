import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Sidebar = () => {
   return ( 
         <div class="w-60 absolute top-0 bottom-0 bg-gray-100" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
               <div class="flex items-center pl-6 mt-2 mb-10">
                  <img src={logo} class="mr-3 h-6 sm:h-8 rounded-full" alt="" />
                  <span class="italic self-center text-2xl font-semibold whitespace-nowrap text-slate-500 dark:text-white pl-2">TRIPEKA</span>
               </div>
               <ul>
                  <li class="p-3">
                     <Link to="/dashboard" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                        <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span class="ml-3">Dashboard</span>
                     </Link>
                  </li>
                  <li class="p-3">
                     <Link to="/hotels" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Hotels</span>
                        <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                     </Link>
                  </li>
                  <li class="p-3">
                     <Link to="/restaurants" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Restaurants</span>
                     </Link>
                  </li>
                  <li class="p-3">
                     <Link to="/rentals" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" /></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Rentals</span>
                     </Link>
                  </li>
                  <li class="p-3">
                     <Link to="/messages" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                        <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
                        <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                     </Link>
                  </li>
                  <li class="p-3">
                     <Link to="/budget" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Budget</span>
                     </Link>
                  </li>
                  <li class="p-3">
                     <Link to="/blogs" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Blogs</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
    );
}
 
export default Sidebar;