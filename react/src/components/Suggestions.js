import blog1 from '../assets/arugam.jpg'
import blog2 from '../assets/dalada.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'

const Suggestions = () => {
  return ( 
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Top Suggestions</h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">These are our best suggestions for you to travel around the country!</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="relative border border-gray-200 p-2 rounded-lg hover:text-black">
            <img class="h-56 w-full rounded object-cover object-center mb-2 p-1 hover:p-0 hover:opacity-90" src={blog6} alt="content"/>
            <h2 class="text-lg font-semibold text-2xl title-font mb-1 pl-1">Hikkaduwa</h2>
            <p class="leading-relaxed text-base pl-1">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="relative border border-gray-200 p-2 rounded-lg hover:text-black">
            <img class="h-56 w-full rounded object-cover object-center mb-2 p-1 hover:p-0 hover:opacity-90" src={blog5} alt="content"/>
            <h2 class="text-lg font-semibold text-2xl title-font mb-1 pl-1">Hikkaduwa</h2>
            <p class="leading-relaxed text-base pl-1">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="relative border border-gray-200 p-2 rounded-lg hover:text-black">
            <img class="h-56 w-full rounded object-cover object-center mb-2 p-1 hover:p-0 hover:opacity-90" src={blog4} alt="content"/>
            <h2 class="text-lg font-semibold text-2xl title-font mb-1 pl-1">Hikkaduwa</h2>
            <p class="leading-relaxed text-base pl-1">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="relative border border-gray-200 p-2 rounded-lg hover:text-black">
            <img class="h-56 w-full rounded object-cover object-center mb-2 p-1 hover:p-0 hover:opacity-90" src={blog3} alt="content"/>
            <h2 class="text-lg font-semibold text-2xl title-font mb-1 pl-1">Hikkaduwa</h2>
            <p class="leading-relaxed text-base pl-1">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="relative border border-gray-200 p-2 rounded-lg hover:text-black">
            <img class="h-56 w-full rounded object-cover object-center mb-2 p-1 hover:p-0 hover:opacity-90" src={blog2} alt="content"/>
            <h2 class="text-lg font-semibold text-2xl title-font mb-1 pl-1">Hikkaduwa</h2>
            <p class="leading-relaxed text-base pl-1">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="relative border border-gray-200 p-2 rounded-lg hover:text-black">
            <img class="h-56 w-full rounded object-cover object-center mb-2 p-1 hover:p-0 hover:opacity-90" src={blog1} alt="content"/>
            <h2 class="text-lg font-semibold text-2xl title-font mb-1 pl-1">Hikkaduwa</h2>
            <p class="leading-relaxed text-base pl-1">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
 
export default Suggestions;