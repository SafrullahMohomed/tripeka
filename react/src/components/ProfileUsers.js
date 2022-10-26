import Header from "./Header";
import Footer from "./Footer";

const Profile = () => {
    return ( 
    <>
        <Header />
        <section class="text-gray-600 body-font mb-10 px-32 py-5">
            Profile Page
        </section>
        <Footer />
    </>
    );
}
 
export default Profile;

import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import pop6 from "../assets/unlock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil
  } from "@fortawesome/free-solid-svg-icons";

function Userprofile() {
  return (
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{marginLeft:"150px"}}>
            <div class="column2">
                <div class="personal-info-section" style={{position: "relative",display: "block",width: "100%",marginBottom: "50px"}}>
                    <span style={{fontSize: "24px",fontWeight: "bold"}}>Personal Info</span> 
                    <a href="#" style={{float: "right",textDecoration: "none",backgroundColor: "#ca3a1b",color: "white",fontSize: "14px",borderRadius: "10px",padding: "10px 20px 10px 20px",marginRight: "20%"}}><FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>  Edit Info </a>
                    <div class="personal-info-section-content" style={{position: "relative", display: "block",width: "80%",height: "250px",backgroundColor: "#e6e6e6",marginTop: "40px",borderRadius: "10px",padding: "30px 30px 10px 100px"}}>
                        <img src={pop6}  alt="Avatar" class="avatar" style={{verticalAlign: "middle",borderRadius: "50%",width: "150px",height: "150px",float: "left"}}/>
                        <div class="details" style={{float: "left",display: "block",position: "relative",marginLeft: "30px"}}>
                            <table style={{width: "100%"}}>
                                <tr>
                                    <td style={{textAlign: "left",paddingBottom: "15px"}}>First Name</td>
                                    <td class="info-right-column" style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>Shanika</td>
                                </tr>

                                <tr>
                                    <td style={{textAlign: "left",paddingBottom: "15px"}}>Last Name</td>
                                    <td class="info-right-column" style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>Amarathunga</td>
                                </tr>

                                <tr>
                                    <td style={{textAlign: "left",paddingBottom: "15px"}}>E-mail</td>
                                    <td class="info-right-column" style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>shanika98@gmail.com</td>
                                </tr>

                                <tr>
                                    <td style={{textAlign: "left",paddingBottom: "15px"}}>Role</td>
                                    <td class="info-right-column" style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>Traveller</td>
                                </tr>

                                <tr>
                                    <td style={{textAlign: "left",paddingBottom: "15px"}}>Contact Number</td>
                                    <td class="info-right-column" style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>07787355112</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <table style={{width: "40%"}}>
                            
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>DOB</td>
                                <td class="info-right-column-color"  style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>1998-2-11</td>
                            </tr>
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

                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>Gender</td>
                                <td class="info-right-column-color" style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>female</td>
                            </tr>
                           
                            
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>Years of experience</td>
                                <td class="info-right-column-color"  style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}></td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div class="billing-info" style={{position: "relative",display: "block",width: "100%",marginBottom: "50px"}}>
                    <h3 class="flex items-center text-xl font-bold mb-4">Billing Information</h3>
                    <div class="billing-info-content" style={{display: "block",position: "relative",width: "80%",backgroundColor: "#e6e6e6",padding: "20px",borderRadius: "10px"}}>
                        <table style={{width: "40%"}}>
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>Name of the Bank</td>
                                <td class="info-right-column-color" style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>BOC</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>Account Number</td>
                                <td class="info-right-column-color" style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>47847674</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="bio-info" style={{position: "relative",display: "block",width: "100%"}}>
                    <h3 class="flex items-center text-xl font-bold mb-4">Bio Information</h3>
                    <div class="bio-info-content" style={{display: "block", position: "relative",width: "80%",backgroundColor: "#e6e6e6",padding: "20px",borderRadius: "10px"}}>
                        <p>I am good girl</p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <Footer/>
    </div>
  )
}

export default Userprofile