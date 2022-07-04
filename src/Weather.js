import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity)
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

function search()
{
  const apiKey = "f98ba7e599adf93cd93e20273e395b25";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
}

  function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityInput(event){
setCity(event.target.value);
}

    if (weatherData.ready) {
     return (
       <div className="Wecontain">
         <form onSubmit={handleSubmit}>
           <div className="row">
             <div className="col-7">
               <input
                 type="search"
                 placeholder="Enter a City..."
                 className="form-control"
                 autoFocus="on"
                 onChange={handleCityInput}
               />
             </div>
             <div className="col-5">
               <input
                 type="button"
                 value="Search"
                 className="btn btn-info"
                 onClick = {handleSubmit}
               />
             </div>
           </div>
         </form>
         <WeatherDetails data={weatherData} />;
       </div>
     );
    } else {
    search();  
    return "Loading...";
  }

}