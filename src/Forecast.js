import axios from "axios";

export default function Forecast(props) {

function handleResponse(response) {
  console.log(response.data);
}
console.log(props);

  let apiKey = "f98ba7e599adf93cd93e20273e395b25"
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(handleResponse);

  return (
    <div className="forecast">
      <h4 className="forecast-name">
        What's Up Next? ...<small id="subTitle">(Daily Forecast)</small>
      </h4>
      <div className="daily-forecast" id="forecast">
        <div className="row">
          <div className="daily-weather col-2">
            <div className="daily-forecast-day">Tues</div>
            <img
              src="http://openweathermap.org/img/wn/10d.png"
              alt=""
              width="42"
            />
            <div className="daily-forecast-temp">
              <span className="daily-forecast-temp-max">16°</span>
              <span className="daily-forecast-temp-min">14°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
