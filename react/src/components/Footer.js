import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const url="";
  return (
    <div>
        <footer className="text-gray-600 body-font bg-emerald-100">
            <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href={url}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-emerald-400 rounded-full" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        
                        <span className="ml-3 text-xl">Travel</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li className="p-0">
                                    <Link to ='/help' className="text-gray-600 hover:text-gray-800">Help</Link>
                                </li>
                                <li className="p-0">
                                    <Link to ='/complaint' className="text-gray-600 hover:text-gray-800">Complaint</Link>
                                </li>
                                <li className="p-0">
                                    <Link to ='/blogwrite' className="text-gray-600 hover:text-gray-800">Write a blog</Link>
                                </li>
                                <li className="p-0">
                                    <Link to ='/weather' className="text-gray-600 hover:text-gray-800">Weather</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li className="p-0">
                                    <Link to ='/climate' className="text-gray-600 hover:text-gray-800">Climate</Link>
                                </li>
                                <li className="p-0">
                                    <Link to ='/events' className="text-gray-600 hover:text-gray-800">Calendar</Link>
                                </li>
                                <li className="p-0">
                                    <a className="text-gray-600 hover:text-gray-800" href={url}>Third Link</a>
                                </li>
                                <li className="p-0">
                                    <a className="text-gray-600 hover:text-gray-800" href={url}>Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li className="p-0">
                                    <a className="text-gray-600 hover:text-gray-800" href={url}>First Link</a>
                                </li>
                                <li className="p-0">
                                    <a className="text-gray-600 hover:text-gray-800" href={url}>Second Link</a>
                                </li>
                                <li className="p-0">
                                    <a className="text-gray-600 hover:text-gray-800" href={url}>Third Link</a>
                                </li>
                                <li className="p-0">
                                    <a className="text-gray-600 hover:text-gray-800" href={url}>Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Travel —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@3rdyearproject@gmail.com</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500" href="https://www.google.com">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500" href={url}>
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500"  href={url}>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500"  href={url}>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    
  )
}

export default Footer