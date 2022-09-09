import React from 'react';
import { useForm } from "react-hook-form";


const CarForm =  () =>{
     
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
        const onSubmit = (data) => console.log(data);
      
        
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
      
          <div className="flex flex-row items-center justify-center">
                  <h2 class="text-emerald-700 text-3xl font-semibold my-4">
                    Register
                  </h2>
                </div>
                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
                
                <div class="mb-6">
                  <input
                    type="text"
                    name="firstname"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                    id="exampleFormControlInput4"
                    {...register("firstname", { required: true })}
                    placeholder="First Name"
                  />
                  <error className="text-red-600">
                    {errors.username?.type === "required" &&
                      "First Name is required"}
                  </error>
                </div>

                <div class="mb-6">
                    <input
                      type="text"
                      name="lastname"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                      id="exampleFormControlInput3"
                      {...register("lastname", { required: true })}
                      placeholder="Last name"
                    />
                    <error className="text-red-600">
                      {errors.username?.type === "required" &&
                        "Last Name is required"}
                    </error>
                  </div>

                  <div class="mb-6">
                    <input
                      type="text"
                      name="username"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      {...register("username", { required: true })}
                      placeholder="Username"
                    />
                    <error className="text-red-600">
                      {errors.username?.type === "required" &&
                        "Name is required"}
                    </error>
                  </div>

                  <div class="mb-6">
                    <input
                      type="text"
                      name="email"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      })}
                    />
                    <error className="text-red-600">
                      {errors.email?.type === "required" && "Email is required"}
                      {errors.email?.type === "pattern" &&
                        "Entered email is in wrong format"}
                    </error>
                  </div>

                  <div class="mb-6">
                    <select 
                      {...register("role")}
                      id="role"
                      name="role"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                    >
                      <option selected>Choose your type</option>
                      <option value="TRAVELLER">Traveller</option>
                      <option value="LODGE_PROVIDER">Lodge Provider</option>
                      <option value="VEHICLE_OWNER">Vehicle Owner</option>
                      <option value="TRIP_GUIDER">Trip Guider</option>
                    </select>
                  </div>
        </form>
      );
      
}

export default CarForm;