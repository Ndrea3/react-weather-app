import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [load, setLoad] =  useState(false);
  let [forecastData, setForecastData] = useState(null);

useEffect(() =>{
  setLoad(false);
}, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setLoad(true);
  }
  console.log(props);
if (load){
  console.log(forecastData);
return (
  <div className="forecast">
    <h4 className="forecast-name">
      What's Up Next? ...<small id="subTitle">(Daily Forecast)</small>
    </h4>
    <div className="daily-forecast" id="forecast">
      <div className="row">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5)
            return (
              <div className="daily-weather col-2" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
        })}
        
      </div>
    </div>
  </div>
);
  } else {
  let apiKey = "f98ba7e599adf93cd93e20273e395b25";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);

  return null;

  }
}
