import img from '../assets/customer2.jpg'

const Panel = () => {
   return ( 
      <div class="absolute right-0 w-72 h-full bg-gray-100 p-4">
         <div class="flex w-full h-16 mb-7">
            <div class="w-1/4 h-full p-1 rounded-full bg-white">
               <img src={img} class="w-full h-full rounded-full" alt="" />
            </div>
            <div class="w-2/4 h-full p-1 pl-3 font-semibold">Abdul Qadir<br /><div class="text-slate-400 font-light">Traveler</div></div>
            <div class="w-1/4 h-full">
            
               <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="py-2 border-transparent text-black focus:outline-none font-medium rounded-lg text-sm px-4 text-center inline-flex items-center" type="button"><svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
               <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                     <li>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                     </li>
                     <li>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                     </li>
                     <li>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                     </li>
                     <li>
                     <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                     </li>
                  </ul>
               </div>
               
            </div>
         </div>

         <div class="w-full h-48 mb-7 rounded-lg bg-gray-300"><center><br />Calender</center></div>
         
         <div class="w-full h-72 mb-7 rounded-lg bg-white">
         </div>
      </div>
   );
}
 
export default Panel;