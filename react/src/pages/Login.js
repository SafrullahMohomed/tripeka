import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pop6 from "../assets/unlock.png";
import { useForm } from "react-hook-form";
import { getSignedRole, login } from "../services/AuthAPIService";
import { Link } from 'react-router-dom';

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
        <section className="h-screen mb-10">
          <div className="px-12 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="flex justify-center grow-0 shrink-1 p-3 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img src={pop6} className="w-4/6" alt="Sample image" />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="mb-6">
                    <input
                      type="text"
                      name="user"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
                      class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                      Don't have an account?
                      <a href="#" class="text-red-600 hover:text-red-700 focus:text-blue-700 transition duration-200 ease-in-out pl-1">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default Login;
