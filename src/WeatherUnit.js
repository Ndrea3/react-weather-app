import React from "react";

export default function WeatherUnit(props){
        return (
       <span>
        <strong id="temperature">{props.celcius}</strong>
        <small>°C</small>
      </span>
       );
    }
   