import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import pop6 from '../assets/register.jpg'
import { useForm } from "react-hook-form";

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => console.log(data);
      
  return (
    <div>
        <Navbar></Navbar>
        <div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img src={pop6} className='w-full' alt="Sample image"/>
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-row items-center justify-center">
                                    <h2 class="text-blue-700 text-3xl font-semibold my-4">Register</h2>
                                </div>
                                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    
                                </div>

                                <div class="mb-6">
                                    <input
                                    type="text"
                                    name = "username"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    {...register("username", { required: true })}
                                    placeholder="Username"
                                    />
                                    <error className = 'text-red-600'>
                                        {errors.username?.type === "required" && "Name is required"}
                                    </error>
                                </div>

                                <div class="mb-6">
                                    <input
                                    type="text"
                                    name = "email"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                    {...register("email", {required: true,pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,})}
                                    />
                                    <error className = 'text-red-600'>
                                        {errors.email?.type === "required" && "Email is required"}
                                        {errors.email?.type === "pattern" &&
                                        "Entered email is in wrong format"}
                                    </error>
                                </div>

                                <div class="mb-6">
                                    <select id="countries" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                        <option selected>Choose your type</option>
                                        <option value="Traveller">Traveller</option>
                                        <option value="Hotel">Lodge Provider</option>
                                        <option value="Car">Vehicle Owner</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>

                                <div class="mb-6">
                                    <input
                                    type="password"
                                    name = "password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    {...register("password", {
                                        required: true,
                                        minLength: 5,
                                        maxLength: 20,
                                      })}
                                    placeholder="Password"
                                    />
                                    <error className = 'text-red-600'>
                                        {errors.password?.type === "minLength" &&
                                        "Entered password is less than 5 characters"}
                                        {errors.password?.type === "maxLength" &&
                                        "Entered password is more than 20 characters"}
                                    </error>
                                </div>

                                <div class="mb-6">
                                    <input
                                    type="password"
                                    name='password'
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Confirm Password"
                                    
                                    />
                                    
                                </div>

                                <div class="flex justify-between items-center mb-6">
                                    <div class="form-group form-check">
                                        <input
                                            type="checkbox"
                                            name = "check"
                                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck2"
                                            {...register("check", { required: true })}
                                        />
                                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck2">I hereby confrims that the above information are correct and accurate</label>
                                        <br></br>
                                        <error className = 'text-red-600'>
                                            {errors.check?.type === "required" && "Please tick it"}
                                        </error>
                                    </div>
                                    
                                </div>
                                <div class="text-center lg:text-left">
                                    <button type="submit" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Register
                                    </button>
                                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Already have a account?
                                        <a href='#' class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-2">Login</a>
                                    </p>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div> 
        <Footer></Footer>
    </div>
  )
}

export default Register