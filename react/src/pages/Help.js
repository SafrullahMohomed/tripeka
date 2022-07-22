

import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pop6 from '../assets/support.png'
import { useForm } from "react-hook-form";
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'

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
        <br/>
        <br/>
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-2/3 lg:h-auto h-64 object-cover object-center" src={pop6}/>
                    <div class="lg:w-1/2 w-full lg:pl-5 lg:py-2 mt-6 lg:mt-0">
                        <h1 className="font-sans text-3xl text-gray-800 font-bold ...">Frequently Asked Questions</h1><br/>
                        
                        <div class="flex mb-4">
                            <Accordion>
                                <AccordionItem>
                                    <div>
                                        <AccordionItemHeading>
                                            <AccordionItemButton class="
                                                accordion-button
                                                relative
                                                flex
                                                items-center
                                                w-full
                                                py-4
                                                px-5
                                                text-base text-gray-800 text-left
                                                border-0
                                                rounded-none
                                                transition
                                                focus:outline-none"
                                                type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                Question1?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </div>
                                    <AccordionItemPanel>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                            <div class="accordion-body py-4 px-5">
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton class="
                                            accordion-button
                                            relative
                                            flex
                                            items-center
                                            w-full
                                            py-4
                                            px-5
                                            text-base text-gray-800 text-left
                                            bg-white
                                            border-0
                                            rounded-none
                                            transition
                                            focus:outline-none"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                           Question2
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                            <div class="accordion-body py-4 px-5">
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton class="
                                            accordion-button
                                            relative
                                            flex
                                            items-center
                                            w-full
                                            py-4
                                            px-5
                                            text-base text-gray-800 text-left
                                            bg-white
                                            border-0
                                            rounded-none
                                            transition
                                            focus:outline-none"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Question 3
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                            <div class="accordion-body py-4 px-5">
                                                <p>
                                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                                    cupidatat occaecat ut occaecat consequat est minim minim
                                                    esse tempor laborum consequat esse adipisicing eu
                                                    reprehenderit enim.
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton class="
                                            accordion-button
                                            relative
                                            flex
                                            items-center
                                            w-full
                                            py-4
                                            px-5
                                            text-base text-gray-800 text-left
                                            bg-white
                                            border-0
                                            rounded-none
                                            transition
                                            focus:outline-none"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Question4?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                            <div class="accordion-body py-4 px-5">
                                                <p>
                                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                                    cupidatat occaecat ut occaecat consequat est minim minim
                                                    esse tempor laborum consequat esse adipisicing eu
                                                    reprehenderit enim.
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Further Help</h2>
                                <p class="leading-relaxed mb-5 text-gray-600">We are always welcome to help our valuable customer. Please ask us any help without any hesitation</p>
                                <div class="relative mb-4">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name"  {...register("name", { required: true })} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    <error className = 'text-red-600'>
                                        {errors.name?.type === "required" && "Name is required"}
                                    </error>
                                </div>
                                
                                <div class="relative mb-4">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" {...register("email", {required: true,pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    <error className = 'text-red-600'>
                                        {errors.email?.type === "required" && "Email is required"}
                                        {errors.email?.type === "pattern" &&
                                        "Entered email is in wrong format"}
                                    </error>
                                </div>
                                <div class="relative mb-4">
                                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message"  {...register("message", { required: true })} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    <error className = 'text-red-600'>
                                        {errors.message?.type === "required" && "Message is required"}
                                    </error>
                                </div>
                                <div className='w-3/4'>
                                    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ml-10">Clear</button>
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
