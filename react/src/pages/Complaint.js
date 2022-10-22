import React, { useState } from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import pop6 from "../assets/complaint.png";
import { FaStar } from "react-icons/fa";
import ImageUploader from "react-images-uploading";
import Dropzone from "react-dropzone";
import { complaint } from '../services/ComplaintService';
// import Aos from "aos";
// import "aos/dist/aos.css";

const colors = {
  orange: "#34D399",
  grey: "#a9a9a9",
};

function onSubmit(data) {
  console.log(data);
  complaint(
    data["name"],
    data["email"],
    data["message"],
    JSON.parse(localStorage.getItem("userDetails"))
  ).then((resp) => {
    if (resp["success"]) {
      alert("Success : " + resp["msg"]);
      window.location.href = "http://localhost:3000/";
    } else {
      alert(resp["msg"]);
      window.location.href = "http://localhost:3000/";
    }
  });
}

const Complaint = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div class="complaintContainer">
      <Header />

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pl-5 lg:py-2 mt-6 lg:mt-0">
              <img
                alt="ecommerce"
                class="lg:h-auto h-64 object-cover object-justify"
                // data-aos="fade-right"
                src={pop6}
              />
            </div>
            <div class="lg:w-1/2 w-full lg:pl-5 lg:py-2 mt-6 lg:mt-0">
              <div class="flex mb-2">
                <div className="w-full max-w-md  bg-white">
                  <h1 class="font-medium leading-tight text-4xl mt-0 mb-3 text-[#34D399]">
                    File your Complaint
                  </h1>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                  <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Provide you complaint
                  </h2>
                  <p class="leading-relaxed mb-5 text-gray-600">
                    We are always ready to listen your complaints and take
                    necessary actions against it
                  </p>
                  <div class="relative mb-4">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      {...register("name", { required: true })}
                      class="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <error className="text-red-600">
                      {errors.name?.type === "required" && "Name is required"}
                    </error>
                  </div>
                  <input
                      type="text"
                      id="user_id"
                      name="user_id"
                      hidden
                      value= "123"
                      {...register("user_id", { required: true })}
                      class="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                  <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      })}
                      class="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <error className="text-red-600">
                      {errors.email?.type === "required" && "Email is required"}
                      {errors.email?.type === "pattern" &&
                        "Entered email is in wrong format"}
                    </error>
                  </div>
                  <div class="relative mb-4">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      {...register("message", { required: true })}
                      class="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    <error className="text-red-600">
                      {errors.message?.type === "required" &&
                        "Message is required"}
                    </error>
                  </div>
                  <div class="relative mb-4">
                    <input
                      type="file"
                      accept="image/*"
                      id="image-upload"
                      hidden
                    />
                    <label
                      for="complaintimage"
                      class="leading-7 text-sm text-gray-600 font-bold mr-20 mb-2"
                    >
                      If you have any image proof of your complaint. Upload it
                    </label>
                    <label
                      for="image-upload"
                      class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-3 overflow-hidden  font-medium group  text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg cursor-pointer"
                    >
                      Upload Image
                    </label>
                  </div>

                  <div className="w-3/4">
                    <button class="text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">
                      Submit
                    </button>
                    <button class="text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg ml-10">
                      Clear
                    </button>
                  </div>
                  <p class="text-xs text-gray-500 mt-3">
                    If you provided faulty complaint, you will be charge with
                    penalty and maybe we have authority to remove you from the
                    system
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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};
export default Complaint;
