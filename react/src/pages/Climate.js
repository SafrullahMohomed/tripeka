import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "../components/TopButtons";
import Inputs from "../components/Inputs";
import TimeAndLocation from "../components/TimeAndLocation";
import TemperatureAndDetails from "../components/TemperatureAndDetails";
import Forecast from "../components/Forecast";
import getFormattedWeatherData from "../ClimateServices/WeatherServices";
import { useEffect, useState } from "react";
import pop6 from "../assets/sunset.jpg";
import climate from "../assets/climate.jpg";
import weatherVid from "../assets/herovideo.mp4";
import "../styles/climate.css";

function Climate() {
  const [query, setQuery] = useState({ q: "colombo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div
      className="px-8 py-6 -mt-8"
      style={{
        backgroundImage: `url(${climate})`,
      }}
    >
      {/* <video className='videoTag fixed -z-1 w-full' autoPlay loop muted>
            <source src={weatherVid} type='video/mp4' />
        </video> */}

      <div className="bg-sky-700 opacity-60 rounded-lg mx-auto mt-0 py-0 px-10">
        <div className="flex-col flex items-center">
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        </div>
        {weather && (
          <div className="flex justify-center">
            <div className="px-10 py-4">
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />
            </div>
            <div className="p-10 py-4">
              <Forecast title="hourly forecast" items={weather.hourly} />
              <Forecast title="daily forecast" items={weather.daily} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Climate;
