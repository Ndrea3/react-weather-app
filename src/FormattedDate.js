import React from "react";

export default function FormattedDate(props){
     console.log(props.date);
     let days = ["Sun", "Mon","Tues", "Wed", "Thurs", "Fri", "Sat"];
     let months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
     let day = days[props.date.getDay()];
     let month = months[props.date.getMonth()];
     let date =  props.date.getDate();
     let hours = props.date.getHours();
     if (hours <10) { hours = `0${hours}`};
     if ((hours=(hours+24)%24));var mid="am";
     if (hours===0){hours=12;} else if(hours>12){hours=hours%12;mid="pm";}
        
     let minutes = props.date.getMinutes();
     if (minutes < 10){minutes = `0${minutes}`;

     }


    return(
      
   <div>{day} {month} {date}, {" "} {hours}:{minutes}{mid}</div>
    );
}