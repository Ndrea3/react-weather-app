import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather/>
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
