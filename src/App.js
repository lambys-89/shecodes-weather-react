import React, { useState } from "react";
import './App.css';
//import Loader from "react-loader-spinner";
//import Search from "./citySearch.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./media/01d-vid.mp4";
import EntryForm from "./EntryForm.js";
import Forecast from "./Forecast.js";

function App() {
  let [state, setState] = useState("start");
  let [city, setCity] = useState("");

  function currentWeatherForecast(event) {
    event.preventDefault(); 
    console.log("running current function");
    setState("current-forecast-view");
  }

  function cityWeatherForecast(event) {
    event.preventDefault();
    console.log("running city serach function");
    setState("city-forecast-view");
  }

  function cityCapture(event) {
    console.log("running city capture");
    setCity(event.target.value);
  }

    return (
    <div className="App">
      <header className="App-header">
        <h1 id="pageTitle">
          Weather Forecast
        </h1>
      </header>
      <main className="App-main">
      <video id="background-video"
        className="videoTag"
        autoPlay
        muted
        loop
        src={background}
      />
        <div>
          {state ==='start' && <EntryForm currentLoc={currentWeatherForecast} citySearch={cityWeatherForecast} cityInput={cityCapture} />}
          {state ==='current-forecast-view' && <Forecast entry="current" currentLoc={currentWeatherForecast}  citySearch={cityWeatherForecast} cityInput={cityCapture} />}
          {state ==='city-forecast-view' && <Forecast entry="city" searchVal={city} currentLoc={currentWeatherForecast} citySearch={cityWeatherForecast} cityInput={cityCapture} />}
        </div>
      </main>
      <footer className="App-footer">
        <p className="open-source-code">
          <a className="App-link" href="https://github.com/lambys-89/shecodes-weather-react">
            Open-source code
          </a>{" "}
          by Sarah Lamb
        </p>
      </footer>
    </div>
  );
}

export default App;
