import React from "react";


export default function WeatherForecastDay(props) {
  function maxTemp(){
    let maxTemperature =Math.round (props.data.temp.max)
    return(
       ` ${maxTemperature}°`);
    }
  function minTemp() {
    let minTemperature = Math.round(props.data.temp.min);
    return ` ${minTemperature}°`;
  }

  function day(){
    let date = new Date(props.data.dt*1000);
    let day = date.getDay();

    let days = ["Sun","Mon","Tues", "Wed", "Thurs", "Fri", "Sat"]

    return days[day];
    
  }
    return ( 
    <div>
      <div className="daily-forecast-day">{day()}</div>
          <img src={props.data.weather[0].icon} alt="image"/>
          <div className="daily-forecast-temp">
            <span className="daily-forecast-temp-max">
              {maxTemp()} 
            </span>
            <span className="daily-forecast-temp-min">
              {minTemp()}
            </span>
          </div>
          </div>
    );
}