import React, { useState } from "react";

export default function WeatherUnit(props){
    const[unit, setUnit] = useState("celcius");
        function showFahr(event){
            event.preventDefault();
            setUnit("farhenheit")
        }

        function showCelcius(event) {
        event.preventDefault();
        setUnit("celcius")
               } 
    if (unit==="celcius") {
        return(
        <span>
        <strong id="temperature">{props.celcius}</strong>
        <small>°C |<a href="/" className="fahr" onClick={showFahr}>°F</a></small>
      </span>
    )
    } else { 
        let fahr = Math.round(props.celcius * 9/5) + 32
        return (
        <span>
        <strong id="temperature">{fahr}</strong>
        <small id="celc-link"><a href="/" onClick={showCelcius} >°C</a> | °F</small>
        </span>

      
    )
     }
    }

