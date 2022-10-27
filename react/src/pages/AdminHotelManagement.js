import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AdminHotelManagement() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div>
        <Header/>
        <br/>
        <br/>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            First Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                           Last Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                           No of Adults
                        </th>
                        <th scope="col" class="py-3 px-6">
                            No of Children
                        </th>
                        <th scope="col" class="py-3 px-6">
                           No of Rooms booked
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Check in Date
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Check out Date
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Booked Date
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Haathim 
                        </th>
                        <td class="py-4 px-6">
                            Munas
                        </td>
                        <td class="py-4 px-6">
                            3
                        </td>
                        <td class="py-4 px-6">
                            2
                        </td>
                        <td class="py-4 px-6">
                            2
                        </td>
                        <td class="py-4 px-6">
                            27/10/2022
                        </td>
                        <td class="py-4 px-6">
                            30/10/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Ashfaq 
                        </th>
                        <td class="py-4 px-6">
                            Ashar
                        </td>
                        <td class="py-4 px-6">
                            4
                        </td>
                        <td class="py-4 px-6">
                            1
                        </td>
                        <td class="py-4 px-6">
                            3
                        </td>
                        <td class="py-4 px-6">
                            27/10/2022
                        </td>
                        <td class="py-4 px-6">
                            01/11/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            David
                        </th>
                        <td class="py-4 px-6">
                            John
                        </td>
                        <td class="py-4 px-6">
                            5
                        </td>
                        <td class="py-4 px-6">
                            3
                        </td>
                        <td class="py-4 px-6">
                            4
                        </td>
                        <td class="py-4 px-6">
                            28/10/2022
                        </td>
                        <td class="py-4 px-6">
                            30/10/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Mohammed
                        </th>
                        <td class="py-4 px-6">
                            Safrullah
                        </td>
                        <td class="py-4 px-6">
                            2
                        </td>
                        <td class="py-4 px-6">
                            0
                        </td>
                        <td class="py-4 px-6">
                            1
                        </td>
                        <td class="py-4 px-6">
                            27/10/2022
                        </td>
                        <td class="py-4 px-6">
                            28/10/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Shaanika
                        </th>
                        <td class="py-4 px-6">
                            Amarathunga
                        </td>
                        <td class="py-4 px-6">
                            4
                        </td>
                        <td class="py-4 px-6">
                            1
                        </td>
                        <td class="py-4 px-6">
                            2
                        </td>
                        <td class="py-4 px-6">
                            29/10/2022
                        </td>
                        <td class="py-4 px-6">
                            03/11/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Kanishka 
                        </th>
                        <td class="py-4 px-6">
                            Maithiripala
                        </td>
                        <td class="py-4 px-6">
                            6
                        </td>
                        <td class="py-4 px-6">
                            1
                        </td>
                        <td class="py-4 px-6">
                            3
                        </td>
                        <td class="py-4 px-6">
                            29/10/2022
                        </td>
                        <td class="py-4 px-6">
                            06/11/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Imesh 
                        </th>
                        <td class="py-4 px-6">
                            Banadara
                        </td>
                        <td class="py-4 px-6">
                            4
                        </td>
                        <td class="py-4 px-6">
                            0
                        </td>
                        <td class="py-4 px-6">
                            2
                        </td>
                        <td class="py-4 px-6">
                            27/10/2022
                        </td>
                        <td class="py-4 px-6">
                            04/11/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                             Dinesh
                        </th>
                        <td class="py-4 px-6">
                            Udara
                        </td>
                        <td class="py-4 px-6">
                            2
                        </td>
                        <td class="py-4 px-6">
                            6
                        </td>
                        <td class="py-4 px-6">
                            5
                        </td>
                        <td class="py-4 px-6">
                            01/11/2022
                        </td>
                        <td class="py-4 px-6">
                            10/11/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Villi 
                        </th>
                        <td class="py-4 px-6">
                            Cassim
                        </td>
                        <td class="py-4 px-6">
                            2
                        </td>
                        <td class="py-4 px-6">
                            5
                        </td>
                        <td class="py-4 px-6">
                            4
                        </td>
                        <td class="py-4 px-6">
                            18/11/2022
                        </td>
                        <td class="py-4 px-6">
                            12/12/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Farzaan
                        </th>
                        <td class="py-4 px-6">
                            Rizwan
                        </td>
                        <td class="py-4 px-6">
                            2
                        </td>
                        <td class="py-4 px-6">
                            1
                        </td>
                        <td class="py-4 px-6">
                            1
                        </td>
                        <td class="py-4 px-6">
                            01/11/2022
                        </td>
                        <td class="py-4 px-6">
                            04/11/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Johnathan 
                        </th>
                        <td class="py-4 px-6">
                            Dass
                        </td>
                        <td class="py-4 px-6">
                            3
                        </td>
                        <td class="py-4 px-6">
                            4
                        </td>
                        <td class="py-4 px-6">
                            3
                        </td>
                        <td class="py-4 px-6">
                            27/10/2022
                        </td>
                        <td class="py-4 px-6">
                            30/10/2022
                        </td>
                        <td class="py-4 px-6">
                            {date}
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <br/>
        <Footer/>
    </div>
  )
}

export default AdminHotelManagement