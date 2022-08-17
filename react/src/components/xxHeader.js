import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import logo from '../assets/logo.png'
import user from '../assets/customer2.jpg'

const Header = () => {

  //dropdown
  const [showResults, setShowResults] = useState(false)
  const droplist = () => setShowResults(!showResults)

  return ( 
    <header class="text-gray-600 body-font mb-8 bg-emerald-100">
      <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="" class="w-10 h-10 object-cover object-center rounded-full mr-4 border border-emerald-400"/>
          <span class="ml-2 text-2xl italic">TRIPEKA</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/dashboard" class="mr-7 hover:text-gray-900">Dashboard</Link>
          <Link to="/hotels" class="mr-7 hover:text-gray-900">Hotels</Link>
          <Link to="/restaurants" class="mr-7 hover:text-gray-900">Restaurants</Link>
          <Link to="/rentals" class="mr-7 hover:text-gray-900">Rentals</Link>
          <Link to="/budget" class="mr-7 hover:text-gray-900">Budget</Link>
          <Link to="/groups" class="mr-7 hover:text-gray-900">Trips</Link>
          <Link to="/blogs" class="mr-7 hover:text-gray-900">Blogs</Link>
        </nav>

        <button onClick={droplist} class="hidden lg:inline-flex items-center bg-emerald-100 border-0 p-0 font-normal focus:outline-none rounded text-base mt-4 md:mt-0">
          <div class="w-14 rounded-full">
            <img src={user} class="w-full h-full rounded-full p-1 bg-white" alt="" />
          </div>
          <div className="mr-2 ml-3 text-gray-600 font-normal">Abdul Qadir <br /><div className="text-gray-400">Traveller</div></div>
          <svg fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          { showResults ?
                  <div class="absolute right-4 top-16 z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                     <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Help</a>
                        </li>
                        <li class="p-0.5">
                           <a href="#" class="block px-4 py-3 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                     </ul>
                  </div>
               : null }
        </button>
      
      </div>
    </header>
  );
}
 
export default Header;