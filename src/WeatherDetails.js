import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";

export default function WeatherDetails(props){
    return (
      <div className="WeatherDetails">
        <div className="Weather">
          <div className="curWeather">
            <h2 className="place mt-3" id="city">
              {props.data.city}
            </h2>
            <ul>
              <li className="cur-date" id="date">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="w-desc" id="desc">
                {props.data.desc}
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-img">
                <img
                  src={props.data.icon}
                  alt={props.data.iconMain}
                  width="100"
                  className="float-left"
                  id="icon"
                />
                <WeatherUnit celcius= {props.data.temp}/>
              </div>
            </div>
            <div className="col-6">
              <ul className="w-details">
                <li>
                  <strong>Pressure: </strong>
                  <span id="pressure">{props.data.pressure}</span> mmHg
                </li>
                <li>
                  <strong>Humidity: </strong>
                  <span id="humidity">{props.data.humidity}</span> %
                </li>
                <li>
                  <strong>Wind:</strong>
                  <span id="wind">{props.data.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="highLow">
            <ul>
              <li className="temp-summary p-3">
                <strong>High: </strong>
                <span id="dailyHigh">{props.data.high}</span> °C
              </li>
              <li className="temp-summary p-3">
                <strong>Low: </strong>
                <span id="dailyLow"> {props.data.low}</span> °C
              </li>
              <li className="temp-summary p-3">
                <strong>Feels Like: </strong>
                <span id="dailyFeelsLike">{props.data.feelsLike}</span> °C
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
