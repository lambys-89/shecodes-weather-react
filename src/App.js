import React, { useState } from "react";
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
//import Loader from "react-loader-spinner";
//import Search from "./citySearch.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./media/01d-vid.mp4";
import EntryForm from "./EntryForm.js";
import Forecast from "./Forecast.js";

function App() {
  let [state, setState] = useState("start");
  let [city, setCity] = useState("");

  function currentWeatherForecast() {
    setState("current-forecast-view");
  }

  function cityWeatherForecast() {
    setState("city-forecast-view");
  }

  function cityCapture(event) {
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
          {state ==='current-forecast-view' && <Forecast entry="current" />}
          {state ==='city-forecast-view' && <Forecast entry="city" searchVal={city}/>}
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
