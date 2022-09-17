import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./TripHeader.css";
  import { DateRange } from "react-date-range";
  import { useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  
  const TripHeader = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
  
    const navigate = useNavigate();
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
    const handleSearch = () => {
      navigate("/triphotels", { state: { destination, date, options } });
    };
  
    return (
      <div className="tripheader">
        <div
          className={
            type === "list" ? "tripheaderContainer listMode" : "tripheaderContainer"
          }
        >
          {/* <div className="tripheaderList">
            <div className="tripheaderListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="tripheaderListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="tripheaderListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="tripheaderListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="tripheaderListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div> */}
          {type !== "list" && (
            <>
              <h1 className="tripheaderTitle" class='font-medium leading-tight text-5xl mt-4 mb-2 '>
              Hotels in Sri Lanka
              </h1>
              <p className="tripheaderDesc">
                 Enter your dates and choose best hotels in our island to stay!
              </p>
              {/* <button className="tripheaderBtn">Sign in / Register</button> */}
              <div className="tripheaderSearch">
                <div className="tripheaderSearchItem">
                  <FontAwesomeIcon icon={faBed} className="tripheaderIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="tripheaderSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="tripheaderSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="tripheaderIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="tripheaderSearchText"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="tripheaderSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="tripheaderIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="tripheaderSearchText"
                  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  {openOptions && (
                    <div className="tripoptions">
                      <div className="tripoptionItem">
                        <span className="tripoptionText">Adult</span>
                        <div className="tripoptionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="tripoptionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="tripoptionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="tripoptionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="tripoptionItem">
                        <span className="tripoptionText">Children</span>
                        <div className="tripoptionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="tripoptionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="tripoptionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="tripoptionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="tripoptionItem">
                        <span className="tripoptionText">Room</span>
                        <div className="tripoptionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="tripoptionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="tripoptionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="tripoptionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="tripheaderSearchItem">
                  <button className="tripheaderBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default TripHeader;