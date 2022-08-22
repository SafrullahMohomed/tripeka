

import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pop6 from '../assets/suppimage.png'
import { useForm } from "react-hook-form";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import "aos/dist/aos.css"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


const Help = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => console.log(data);
  
    

  return (
    <div>
        <Navbar/>
        <br/>
        <br/>
        
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-3 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-2/3 lg:h-auto h-64 object-cover object-center" data-aos="fade-right" src={pop6}/>
                    <div class="lg:w-1/2 w-full lg:pl-5 lg:py-2 mt-6 lg:mt-0">
                        <h1 className="font-sans text-3xl text-gray-800 font-bold ...">Frequently Asked Questions</h1><br/>
                        
                        <div class="flex mb-4" data-aos="fade-left">
                            
                                <div className="w-full max-w-md rounded-2xl bg-white p-2">
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-emerald-100 px-4 py-2 text-left text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-75">
                                                    <span>Can I able to make payment online ?</span>
                                                    <ChevronUpIcon
                                                    className={`${
                                                        open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-emerald-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
                                                    Yes, ofCourse. we provide a faciity for our valuable customers with this facility. You can make with amex, visa or mastercard
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-emerald-100 px-4 py-2 text-left text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-75">
                                                    <span>Can I make a group for the trip ?</span>
                                                    <ChevronUpIcon
                                                    className={`${
                                                        open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-emerald-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
                                                    Yes, Once you login to the system, you can see option to create group. you can create a group by putting title, images , adding members etc. also you all can chat each other easily.
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-emerald-100 px-4 py-2 text-left text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-75">
                                                    <span>Do you offer technical support ?</span>
                                                    <ChevronUpIcon
                                                    className={`${
                                                        open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-emerald-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
                                                    No.
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-emerald-100 px-4 py-2 text-left text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-75">
                                                    <span>Can I able write my experience about my trip?</span>
                                                    <ChevronUpIcon
                                                    className={`${
                                                        open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-emerald-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
                                                    In footer, you can see option called "write a blog". you are allowed to write blogs with images you have taken. Additionally, you can view others blogs and search too.
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} data-aos="fade-left">
                            <div class="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Further Help</h2>
                                <p class="leading-relaxed mb-5 text-gray-600">We are always welcome to help our valuable customer. Please ask us any help without any hesitation</p>
                                <div class="relative mb-4">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name"  {...register("name", { required: true })} class="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    <error className = 'text-red-600'>
                                        {errors.name?.type === "required" && "Name is required"}
                                    </error>
                                </div>
                                
                                <div class="relative mb-4">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" {...register("email", {required: true,pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,})} class="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    <error className = 'text-red-600'>
                                        {errors.email?.type === "required" && "Email is required"}
                                        {errors.email?.type === "pattern" &&
                                        "Entered email is in wrong format"}
                                    </error>
                                </div>
                                <div class="relative mb-4">
                                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message"  {...register("message", { required: true })} class="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    <error className = 'text-red-600'>
                                        {errors.message?.type === "required" && "Message is required"}
                                    </error>
                                </div>
                                <div className='w-3/4'>
                                    <button class="text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg mr-3">Submit</button>
                                    <button class="text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Clear</button>
                                </div>
                                <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
        
        <Footer/>
    </div>
  )
}



export default Help
