import "./App.css";
import Weather from "./Weather";
import "./Weather.css";
import background from "./Images/coffee-and-donuts-pop-color-background.png";
class App extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${background})`,
      height: "100vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    export default function App() {
      return (
        <div className="App" style={myStyle}>
          <div className="container">
            <h1>Weather App</h1>
            <Weather />
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
  }
}
