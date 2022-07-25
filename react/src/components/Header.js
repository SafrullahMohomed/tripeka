import logo from '../assets/logo.png'


const Header = () => {
    return ( 
        <header class="text-gray-600 body-font mb-2">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img alt="team" class="w-10 h-10 object-cover object-center rounded-full mr-4" src={logo}/>
      <span class="ml-3 text-xl">TRIPEKA</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Hotels</a>
      <a class="mr-5 hover:text-gray-900">Restaurants</a>
      <a class="mr-5 hover:text-gray-900">Rentals</a>
      <a class="mr-5 hover:text-gray-900">Budget</a>
      <a class="mr-5 hover:text-gray-900">Trips</a>
      <a class="mr-5 hover:text-gray-900">Blogs</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
     );
}
 
export default Header;