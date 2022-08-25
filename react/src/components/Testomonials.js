import React, { useEffect } from "react";
import c1 from "../assets/customer1.jpg";
import c2 from "../assets/customer2.jpg";
import c3 from "../assets/customer3.jpg";
import Navbar from "./Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

const Testomonials = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div name="Testomonials">
      <Navbar></Navbar>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-emerald-500 tracking-widest font-medium title-font mb-1">
                WE LOVE OUR VALUABLE CUSTOMER'S FEEDBACK
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Our Happy Customers
              </h1>
            </div>
            <div data-aos="slide-left" className="flex">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" >
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300 ..."
                    src={c1}
                  />
                  <p className="leading-relaxed">
                    I am always spend my time in job and never had pleasant moment on trip. Tripeka changed my mind. It gave me wonderful exeprience . It provided me with high quality service with lower price . we had a good family trip with Tripeka
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-emerald-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Mohammed Safarullah
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300 ..."
                    src={c2}
                  />
                  <p className="leading-relaxed">
                    TripEka is awesome. 
                    Great destination with plenty of diverse cultural and natural attractions. Good value for money and a fun holiday for us as a family with young children. Friendly and helpful locals.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-emerald-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    VillCassim
                  </h2>
                  <p className="text-gray-500">UI Develeoper</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  cursor-pointer duration-300 ..."
                    src={c3}
                  />
                  <p className="leading-relaxed">
                    It was really easy to use this website. All the necessary things needed for the trip are provided by this system. In simple word, i would like to say , it is awesome website. Thank you for making my valuable time pleasent
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-emerald-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Haathim Munas
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testomonials;
