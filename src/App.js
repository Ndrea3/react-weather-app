
import './App.css';
import Weather from "./Weather";
import './Weather.css';
export default function App() {
  return (
    <div className="App">
      <h1> React Weather App</h1>
      <Weather />
      <footer>
        This page was coded by Andrea Simmons and is{" "}
        <a
          href="https://github.com/Ndrea3/react-weather-app"
          target="_blank"
          rel="nonreferrer"
        >
          open-sourced in Github.
        </a>
      </footer>
    </div>
  );
}


