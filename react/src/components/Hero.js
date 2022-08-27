import React, { useEffect } from "react";
import beachVid from "../assets/herovideo.mp4";
import img from "../assets/steps.jpg";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Hero = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    <div
      name="home"
      className="w-full h-screen bg-cover bg-center flex"
    >
      

      <div className="hero-first-col w-1/3 px-5">
        <div
          className="animated-pulse grid md:grid-cols-2 max-w-[1240px] m-auto absolute mt-20"
          data-aos="fade-up"                                                                                                                                                                                                                            
        >
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <h1 className="py-2 text-4xl md:text-5xl font-bold">
              Is it a hassle to plan a trip?
            </h1>
            <h1 className="py-5 text-2xl md:text-3xl font-bold text-blue-800">
              We can help you to plan the whole trip ...
            </h1>
            <p className="text-lg text-justify text w-2/3">
              from finding the perfect destination
              to building the budget that suits you. You have to focus on enjoying the trip and we will take care about the rest of it.
            </p>
            <button className="animate-bounce text-lg py-3  sm:w-[60%] my-20 sm:my-12 lg:my-16 bg-emerald-400">
              get started by creating groups
            </button>
          </div>
        </div>
      </div>
      <div className="hero-second-col w-2/3 ">
        <img class="w-full h-full object-cover p-10" src={img} alt="content" />
      </div>
    </div>
  );
};

export default Hero;
