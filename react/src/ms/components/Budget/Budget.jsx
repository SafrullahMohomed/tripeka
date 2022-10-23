import React from 'react';
import UserList from './UserList';

const Budget = () => {
    return (
        <div className='main-budget'>
            <div className="first-row">

                {/* search bar starts here */}
                <div className="first-row-row1 flex flex-row ">11
                    <div className="first-row-row1-col1 search-bar">

                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required="" />
                            </div>
                            <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </form>

                    </div>
                    {/* search bar ends here */}

                    {/* profile pic starts here */}
                    <div className="first-row-row1-col2 profile-pic">
                        <img class="inline object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />

                    </div>
                    {/* profile pic ends here */}

                </div>

                {/* cards starts here  */}
                <div className="first-row-row2 flex">12

                    <div className="first-row-row2-col1">

                        <div href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Amount</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">1200</p>
                        </div>

                    </div>
                    <div className="first-row-row2-col2">
                        <div href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Expenses</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">3400.00</p>
                        </div>
                    </div>
                    <div className="first-row-row2-col3">
                        <div href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Individual Expenses</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">760.00</p>
                        </div>
                    </div>
                </div>
                <div className="first-row-row3">
                    <UserList />
                </div>
            </div>
            <div className="second-row">2 </div>
            <div className="third-row">
                <div className="third-row-col1">31</div>
                <div className="third-row-col2">32</div>
            </div>

        </div>
    )
}

export default Budget;