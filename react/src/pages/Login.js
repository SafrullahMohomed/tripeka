import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pop6 from "../assets/loginImage.png";
import { useForm } from "react-hook-form";
import { getSignedRole, login } from "../services/AuthAPIService";
import { Link } from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css"

function onSubmit(data) {
  console.log(data);
  login(data["user"], data["password"]).then((resp) => {
    if (resp["success"]) {
      alert("Success : " + resp["msg"]);
      window.location.href = "http://localhost:3000/";
    } else {
      alert("Log In Failed : " + resp["msg"]);
    }
  });
}

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  getSignedRole()
    .then((role) => {
      if (role != null) {
        window.location.href = "http://localhost:3000/";
      }
    })
    .catch(() => {
      window.location.href = "http://localhost:3000/";
    });

  return (
    <div>
      <Navbar />  
      <div>
        <section className="h-screen">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-30 mt-39 md:mb-0"  data-aos="fade-right">
                <img src={pop6} className="w-full" alt="Sample image" />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0" data-aos="fade-left">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="text-3xl mb-0 ml-auto mr-auto font-bold">Sign In </p>
                  </div>
                  <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    
                  </div>

                  <div class="mb-6">
                    <input
                      type="text"
                      name="user"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      {...register("user", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      })}
                      placeholder="Email address"
                    />
                    <error className="text-red-600">
                      {errors.user?.type === "required" && "Email is required"}
                      {errors.user?.type === "pattern" &&
                        "Entered email is in wrong format"}
                    </error>
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

                  <div class="flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        name="check"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-emerald-600 checked:border-emerald-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    
                    <Link to ='/forgotpassword' className="text-gray-600 hover:text-gray-800">Forgot password?</Link>
                  </div>
                  <div class="text-center lg:text-left">
                    <button
                      type="submit"
                      class="inline-block px-7 py-3 bg-emerald-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-2">
                      Don't have an account?
                      <br/>
                      <Link to ='/register' class="text-emerald-600 hover:text-emerald-700 focus:text-emerald-700 transition duration-200 ease-in-out" style={{'marginTop':'4px'}}>Register</Link>
                      
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
