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

            <div class="w-3/4 h-full px-4 py-3 bg-gray-200">
               <div className="flex flex-col w-full h-full overflow-hidden rounded-lg bg-gray-300">
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
                        </a>
                     </li>
                     <li class="px-5 py-3">
                        <a href="#" class="flex h-16 items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-white dark:hover:bg-gray-700">
                           <span class="w-16 h-full bg-gray-400">
                              <img src={img2} class="w-full h-full rounded-lg" alt="" />
                           </span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div class="w-1/4 h-full bg-gray-200 p-3">
               <div class="w-full h-full rounded-lg p-2 bg-gray-300">
                  <div class="w-full h-3/4 bg-gray-100"></div>
                  <div class="w-full h-1/4 bg-gray-200 text-center">
                     <button class=" mt-4 px-2 py-1">Create Group</button>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}
 
export default Dashboard;