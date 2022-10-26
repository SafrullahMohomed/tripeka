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
                <div class="additional-info" style={{position: "relative",display: "block",width: "100%",marginBottom: "50px"}}>
                    <h3 class="flex items-center text-xl font-bold mb-4">Additional Information</h3>
                    <div class="additional-info-content" style={{display: "block",position: "relative", width: "80%",backgroundColor: "#e6e6e6",padding: "20px",borderRadius: "10px"}}>
                        <table style={{width: "40%"}}>
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>Address</td>
                                <td class="info-right-column-color"  style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>No 32, Reid avenue, col 10</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>DOB</td>
                                <td class="info-right-column-color"  style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>1998-2-11</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>Age</td>
                                <td class="info-right-column-color"  style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>24</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>Gender</td>
                                <td class="info-right-column-color" style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>female</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>NIC</td>
                                <td class="info-right-column-color"  style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}>74978367</td>
                            </tr>
                            <tr>
                                <td style={{textAlign: "left",paddingBottom: "15px"}}>Visiting Charge</td>
                                <td class="info-right-column-color"  style={{color: "#108882",paddingLeft: "30px",textAlign: "left",paddingBottom: "15px"}}></td>
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