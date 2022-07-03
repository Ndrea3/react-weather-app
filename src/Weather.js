import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";



export default function Weather(props) {
    const [weatherData, setWeatherData] = useState ({ready: false})
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
          ready: true,
          date: new Date(response.data.dt * 1000),
          city: response.data.name,
          desc: response.data.weather[0].description,
          temp: Math.round(response.data.main.temp),
          pressure: Math.round(response.data.main.pressure),
          humidity: Math.round(response.data.main.humidity),
          wind: Math.round(response.data.wind.speed),
          high: Math.round(response.data.main.temp_max),
          low: Math.round(response.data.main.temp_min),
          feelsLike: Math.round(response.data.main.feels_like),
          icon: "http://openweathermap.org/img/wn/01d.png",
          iconMain: response.data.weather[0].icon.main
        });
    }

    if (weatherData.ready) {
     return (
       <div className="Wecontain">
         <form>
           <div className="row">
             <div className="col-7">
               <input
                 type="search"
                 placeholder="Enter a City..."
                 className="form-control"
                 autoFocus="on"
               />
             </div>
             <div className="col-5">
               <input type="button" value="Search" className="btn btn-info" />
             </div>
           </div>
         </form>
         <div className="Weather">
           <div className="curWeather">
             <h2 className="place mt-3" id="city">
               {weatherData.city}
             </h2>
             <ul>
               <li className="cur-date" id="date">
                 <FormattedDate date={weatherData.date} />
               </li>
               <li className="w-desc" id="desc">
                 {weatherData.desc}
               </li>
             </ul>
           </div>
           <div className="row">
             <div className="col-6">
               <div className="clearfix weather-img">
                 <img
                   src={weatherData.icon}
                   alt={weatherData.iconMain}
                   width="100"
                   className="float-left"
                   id="icon"
                 />
                 <strong id="temperature">{weatherData.temp}</strong>
                 <small id="celc-link"> °C</small>
               </div>
             </div>
             <div className="col-6">
               <ul className="w-details">
                 <li>
                   <strong>Pressure: </strong>
                   <span id="pressure">{weatherData.pressure}</span> mmHg
                 </li>
                 <li>
                   <strong>Humidity: </strong>
                   <span id="humidity">{weatherData.humidity}</span> %
                 </li>
                 <li>
                   <strong>Wind:</strong>
                   <span id="wind">{weatherData.wind}</span> km/h
                 </li>
               </ul>
             </div>
           </div>
           <div className="highLow">
             <ul>
               <li className="temp-summary p-3">
                 <strong>High: </strong>
                 <span id="dailyHigh">{weatherData.high}</span> °C
               </li>
               <li className="temp-summary p-3">
                 <strong>Low: </strong>
                 <span id="dailyLow"> {weatherData.low}</span> °C
               </li>
               <li className="temp-summary p-3">
                 <strong>Feels Like: </strong>
                 <span id="dailyFeelsLike">{weatherData.feelsLike}</span> °C
               </li>
             </ul>
           </div>
         </div>
       </div>
     );
} else {
    const apiKey = "f98ba7e599adf93cd93e20273e395b25";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
}
}
   

 