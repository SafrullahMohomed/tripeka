import img1 from '../assets/arugam.jpg'
import img2 from '../assets/dalada.jpg'
import img3 from '../assets/jaffna.jpg'

const Dashboard = () => {
   return ( 
      <div class="absolute right-72 left-60 h-full bg-gray-200 px-8 py-4">
         <div class="w-full h-16 mb-7 rounded-lg bg-gray-100"></div>
         <div class="flex justify-evenly w-full h-48 mb-7">
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

            <div class="w-3/4 h-full bg-gray-300 px-4 py-3">
               <div className="flex flex-col w-full h-full bg-gray-400">
                  <div class="pt-3 pl-3 font-semibold">
                     Popular Destinations
                  </div>
                  <ul>
                     <li class="p-3">
                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                           <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                           <span class="ml-3">Dashboard</span>
                        </a>
                     </li>
                     <li class="p-3">
                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                           <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                           <span class="flex-1 ml-3 whitespace-nowrap">Hotels</span>
                        </a>
                     </li>
                     <li class="p-3">
                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white hover:bg-emerald-300 hover:text-white dark:hover:bg-gray-700">
                           <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                           <span class="flex-1 ml-3 whitespace-nowrap">Restaurants</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div class="w-1/4 h-full bg-gray-100 p-3">

            </div>

         </div>
      </div>
   );
}
 
export default Dashboard;