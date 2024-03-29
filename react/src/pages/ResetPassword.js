import React, { useRef, useState } from "react";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useForm } from "react-hook-form";
import pop6 from "../assets/reset.jpg";
import { resetPassword } from "../services/AuthAPIService";
import { useParams } from "react-router-dom";



const ResetPassword = () => {
    const { handleSubmit, register,watch, formState: { errors } } = useForm();
    const { email } = useParams();
    const onSubmit = (data) => {
      resetPassword(email, data["password"], data["confirm1password"]).then((resp) => {
        if (resp["success"]) {
          alert(resp["msg"] + "Please login with new credentials");
          window.location.href = "http://localhost:3000/login";
        } else {
          alert("Failed : " + resp["msg"]);
        }
      });
    };
    
    const password = useRef({});
    password.current = watch("password", "");
    

    

  return (
    <div>
        <Navbar/>
        <br></br>
        <br></br>
        <section className="h-screen">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0" >
                <img src={pop6} className="w-full" alt="Sample image" />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0" >
                <h1 className='text-4xl mb-8 font-bold flex items-stretch'>Reset Your Password</h1>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-6">
                        <label className='ml-55 font-bold'>Enter your new password</label>
                        <input
                            type="password"
                            name="password"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password1"
                            {...register("password", {
                                required: "Required",
                                minLength: 5,
                                maxLength: 20,
                                pattern: {
                                  message: "invalid email address"
                                }
                              })}
                            placeholder="Password"
                        />
                        <error className="text-red-600">
                            {errors.password?.type === "minLength" &&
                                "Entered password is less than 5 characters"}
                            {errors.password?.type === "maxLength" &&
                                "Entered password is more than 20 characters"}
                        </error>    
                    </div>

                    <div class="mb-6">
                        <label className='ml-55 font-bold'>Confirm your new password</label>
                        <input
                            type="password"
                            name="confirm1password"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password2"
                            {...register("confirm1password", {
                                validate: (value) =>
                                  value === password.current ||
                                  "The passwords do not match",
                            })}
                            placeholder="Password"
                        />
                        {errors.confirm1password && (
                            <p className="text-red-600">
                                {errors.confirm1password.message}
                            </p>
                        )}   
                    </div>

                  
                    <div class="text-center lg:text-left ml-60">
                        <button
                        type="submit"
                        class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                        >
                        Submit
                        </button>
                        
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

export default ResetPassword