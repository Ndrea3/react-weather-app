import "./App.css";
import Forecast from "./Forecast";
import Weather from "./Weather";
import "./Weather.css";
import "./Forecast.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="page-title">
          The Weather Be Like...
          <span role="img" aria-label="Thinking Face">
            🤔
          </span>
        </h1>
        <Weather defaultCity="Quinte West"/>
        <Forecast/>
        <footer>
          This project was coded by Andrea Simmons and is
          <a
            href="https://github.com/Ndrea3/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            open-sourced in Github
          </a>
        </footer>
      </div>
    </div>
  );
}
