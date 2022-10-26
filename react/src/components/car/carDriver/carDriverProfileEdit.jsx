import React from 'react';


const carDriverProfileEdit = () => {
    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
      const password = useRef({});
      password.current = watch("password", "");
    
      getSignedRole()
        .then((role) => {
          if (role != null) {
            window.location.href = "http://localhost:3000/";
          }
        })
        .catch(() => {
          // window.location.href = "http://localhost:3000/";
        });
    
      return (
        <div className="flex flex-col ">
          <div className="navbar">
            <Navbar></Navbar>
          </div>
          
          <div className="container">
            <div>
              <section className="h-screen mb-8">
                <div className="pt-20 px-10 h-full text-gray-800">
                  <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                      <img src={pop6} className="w-full" alt="Sample image" />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row items-center justify-center">
                          
                        </div>
                        <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
    
                        <h3 className="text-green-700 my-4 ml-1">Basic Details</h3>
    
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
                            {errors.firstname?.type === "required" &&
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
                            {errors.lastname?.type === "required" &&
                              "Last Name is required"}
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
                            {errors.email?.type === "required" &&
                              "Email is required"}
                            {errors.email?.type === "pattern" &&
                              "Entered email is in wrong format"}
                          </error>
                        </div>
    
                        <div class="mb-6" hidden>
                          <select
                            {...register("role")}
                            id="role"
                            name="role"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                          >
                            {/* <option selected>Choose your type</option> */}
                            {/* <option value="TRAVELLER">Traveller</option>
                          <option value="LODGE_PROVIDER">Lodge Provider</option> */}
                            <option value="VEHICLE_OWNER">Vehicle Owner</option>
                            {/* <option value="TRIP_GUIDER">Trip Guider</option> */}
                          </select>
                        </div>
    
                        <div class="mb-6">
                          <input
                            type="password"
                            name="password"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            {...register("password", {
                              required: true,
                              minLength: 5,
                              maxLength: 20,
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
                          <input
                            type="password"
                            name="confirmpassword"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                            id="exampleFormControlInput3"
                            {...register("confirmpassword", {
                              validate: (value) =>
                                value === password.current ||
                                "The passwords do not match",
                            })}
                            placeholder="Confirm Password"
                          />
    
                          {errors.confirmpassword && (
                            <p className="text-red-600">
                              {errors.confirmpassword.message}
                            </p>
                          )}
                        </div>
    
                        {/* here starts to registration for car table */}
    
                            <h3 className="text-green-700 my-4 ml-1">Vehicle Details</h3>
                        <div class="mb-6">
                          <input
                            type="text"
                            name="phone_number"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                            id="exampleFormControlInput3"
                            {...register("phone_number", { required: true })}
                            placeholder="Phone Number"
                          />
                          <error className="text-red-600">
                            {errors.lastname?.type === "required" &&
                              "Phone Number is required"}
                          </error>
                        </div>
    
                        {/* vehicle type */}
                        <div class="mb-6">
                          <input
                            type="text"
                            name="vehicle_type"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                            id="exampleFormControlInput3"
                            {...register("vehicle_type", { required: true })}
                            placeholder="Vehicle Type"
                          />
                          <error className="text-red-600">
                            {errors.lastname?.type === "required" &&
                              "Vehicle type is required"}
                          </error>
                        </div>
    
                        {/* vehicle name */}
                        <div class="mb-6">
                          <input
                            type="text"
                            name="vehicle_name"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                            id="exampleFormControlInput3"
                            {...register("vehicle_name", { required: true })}
                            placeholder="Vehicle Name"
                          />
                          <error className="text-red-600">
                            {errors.lastname?.type === "required" &&
                              "Vehicle name is required"}
                          </error>
                        </div>
    
                        {/* maximum passengers  */}
                        <div class="mb-6">
                          <input
                            type="number"
                            name="max_passengers"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                            id="exampleFormControlInput3"
                            {...register("max_passengers", { required: true })}
                            placeholder="Max Passengers"
                          />
                          <error className="text-red-600">
                            {errors.lastname?.type === "required" &&
                              "Maximum passengers is required"}
                          </error>
                        </div>
    
                        {/* price per km  */}
                        <div class="mb-6">
                          <input
                            type="number"
                            name="price_per_km"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                            id="exampleFormControlInput3"
                            {...register("price_per_km", { required: true })}
                            placeholder="Price Per Km"
                          />
                          <error className="text-red-600">
                            {errors.lastname?.type === "required" &&
                              "price per km is required"}
                          </error>
                        </div>
    
                        {/* district */}
                        <div class="mb-6">
                          <input
                            type="text"
                            name="district"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                            id="exampleFormControlInput3"
                            {...register("district", { required: true })}
                            placeholder="District"
                          />
                          <error className="text-red-600">
                            {errors.lastname?.type === "required" &&
                              "District is required"}
                          </error>
                        </div>
    
                        <div class="flex justify-between items-center mb-6">
                          <div class="form-group form-check">
                            <input
                              type="checkbox"
                              name="check"
                              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-emerald-600 checked:border-emerald-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              id="exampleCheck2"
                              {...register("check", { required: true })}
                            />
                           
                          </div>
                        </div>
                        <div class="text-center lg:text-left">
                          <button
                            type="submit"
                            class="inline-block px-7 py-3 bg-emerald-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* <div className="footer">
            <Footer></Footer>
          </div> */}
        </div>
      );
}