import React, { useState } from "react";
import './App.css';
import Loader from "react-loader-spinner";
//import Search from "./citySearch.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./media/01d-vid.mp4";
import EntryForm from "./EntryForm.js";
import Forecast from "./Forecast.js";

function App() {
  let [state, setState] = useState("start");
  let [city, setCity] = useState("");

  console.log(state);
  console.log(city);

  function currentWeatherForecast(event) {
    event.preventDefault(); 
    console.log("running current function");
    setState("current-forecast-view");
  }

  function loaderPage(event) {
    event.preventDefault(); 
    console.log("running loader");
    setState("loading-page");
  }

  function cityWeatherForecast(event) {
    event.preventDefault();
    console.log("running city search function");
    console.log({state});
    setState("city-forecast-view");
  }

  function cityCapture(event) {
    console.log("running city capture");
    setCity(event.target.value);
    console.log(`city is ${city}`);
  }

  console.log(`No function city: ${city}`);

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
          {state ==='current-forecast-view' && <Forecast entry="current" cityInput={cityCapture} loadState={loaderPage} />}
          {state ==='city-forecast-view' && <Forecast entry="city" searchVal={city} cityInput={cityCapture} citySearch={cityWeatherForecast}/>}
          {state ==='loading-page' && <Loader
        type="Puff"
        color="#105160"
        height={100}
        width={100}
        timeout={3000}
        /> && cityWeatherForecast()}
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
