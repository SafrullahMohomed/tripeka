import React, { useState } from "react";
import axios from "axios";
import "../styles/weather.css";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5ef7c7aaab57087df455c4e4679e2497`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="weathercontainer">
      <div className="search px-3 py-3">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="   Enter Location"
          type="text"
        />
      </div>
      <div className="weathercontainer1">
        <div className="weathertop">
          <div className="weatherlocation">
            <p>{data.name}</p>
          </div>
          <div className="weathertemp">{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</div>
          <div className="weatherdescription">{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
        </div>

        {data.name !== undefined && (
          <div className="weatherbottom mb-4">
            <div className="weatherfeels">
              {data.main ? <p className="weatherbold">{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="weatherhumidity">
              {data.main ? <p className="weatherbold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="weatherwind">
              {data.wind ? <p className="weatherbold">{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
