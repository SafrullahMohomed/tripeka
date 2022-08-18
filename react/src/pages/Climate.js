import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from '../components/TopButtons';
import Inputs from '../components/Inputs';
import TimeAndLocation from '../components/TimeAndLocation';
import TemperatureAndDetails from '../components/TemperatureAndDetails';
import Forecast from '../components/Forecast';
import getFormattedWeatherData from '../ClimateServices/WeatherServices';
import { useEffect, useState } from "react";
import pop6 from '../assets/sunset.jpg'
import "../styles/climate.css";

function Climate(){

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
  
    return(
      <div className='climateBody'>
        <div className='mx-auto max-w-screen-md mt-0 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400'>
            <TopButtons setQuery={setQuery}/>
            <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
            {weather && (
              <div>
                <TimeAndLocation weather={weather} />
                <TemperatureAndDetails weather={weather} />

                <Forecast title="hourly forecast" items={weather.hourly} />
                <Forecast title="daily forecast" items={weather.daily} />
              </div>
            )}
        </div>
      </div>
    );
}

export default Climate