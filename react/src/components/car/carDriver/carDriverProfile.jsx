import React from "react";
import pop6 from "../../../assets/unlock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const CarDriverProfile = (props) => {

    
  return (
    <div>
      <br />
      <br />
      <div style={{ marginLeft: "150px" }}>
        <div class="column2">
          <div
            class="additional-info"
            style={{
              position: "relative",
              display: "block",
              width: "100%",
              marginBottom: "50px",
            }}
          >
            <div className="flex justify-around ">
              <h3 class="flex items-center text-xl mb-4">
                Your Information
              </h3>
              <button className="bg-red-200 mb-3 flex pt-1 px-3 rounded text-black">
                {" "}
                <FontAwesomeIcon style={{ color: "green" }} icon={faPencil} />
                &nbsp;edit profile
              </button>
            </div>
            <div
              class="additional-info-content"
              style={{
                display: "block",
                position: "relative",
                width: "80%",
                backgroundColor: "#edf5ef",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <table style={{ width: "40%" }}>
                <tr>
                  <td style={{ textAlign: "left", paddingBottom: "15px" }}>
                    Name
                  </td>
                  <td
                    class="info-right-column-color"
                    style={{
                      color: "#108882",
                      paddingLeft: "30px",
                      textAlign: "left",
                      paddingBottom: "15px",
                    }}
                  >
                    {props.name}Perera
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left", paddingBottom: "15px" }}>
                    Phone
                  </td>
                  <td
                    class="info-right-column-color"
                    style={{
                      color: "#108882",
                      paddingLeft: "30px",
                      textAlign: "left",
                      paddingBottom: "15px",
                    }}
                  >
                    {props.phone}0779270760
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left", paddingBottom: "15px" }}>
                    Vehicle Name
                  </td>
                  <td
                    class="info-right-column-color"
                    style={{
                      color: "#108882",
                      paddingLeft: "30px",
                      textAlign: "left",
                      paddingBottom: "15px",
                    }}
                  >
                    {props.vehicle_name}Prius
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left", paddingBottom: "15px" }}>
                    Vehicle type
                  </td>
                  <td
                    class="info-right-column-color"
                    style={{
                      color: "#108882",
                      paddingLeft: "30px",
                      textAlign: "left",
                      paddingBottom: "15px",
                    }}
                  >
                    {props.vehicle_type}Car
                  </td>
                </tr>
                
                <tr>
                  <td style={{ textAlign: "left", paddingBottom: "15px" }}>
                    District
                  </td>
                  <td
                    class="info-right-column-color"
                    style={{
                      color: "#108882",
                      paddingLeft: "30px",
                      textAlign: "left",
                      paddingBottom: "15px",
                    }}
                  >
                    {props.district}Colombo
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left", paddingBottom: "15px" }}>
                    Price per km
                  </td>
                  <td
                    class="info-right-column-color"
                    style={{
                      color: "#108882",
                      paddingLeft: "30px",
                      textAlign: "left",
                      paddingBottom: "15px",
                    }}
                  >
                    {props.price_per_km}120
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left", paddingBottom: "15px" }}>
                    Maximum Passengers
                  </td>
                  <td
                    class="info-right-column-color"
                    style={{
                      color: "#108882",
                      paddingLeft: "30px",
                      textAlign: "left",
                      paddingBottom: "15px",
                    }}
                  >
                    {props.max_passengers}6
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default CarDriverProfile;
