import "./App.css";
import Weather from "./Weather";
import "./Weather.css";
import Background from "./Images/coffee-and-donuts-pop-color-background.png";


export default function App() {
  return (
 <div className="App"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>

      <div className="container">
        <h1 className="page-title">
          The Weather Be Like...
          <span role="img" aria-label="Thinking Face">
            🤔
          </span>
        </h1>
        <Weather defaultCity="Quinte West"/>
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
    ;
 </div>);
}