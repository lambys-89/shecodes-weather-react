import React from "react";
import './App.css';
//import Loader from "react-loader-spinner";
//import Search from "./citySearch.js";
import EntryForm from "./EntryForm.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./media/01d-vid.mp4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to the Weather App
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
      <EntryForm/>
      </main>
      <footer className="App-footer">
        <p className="open-source-code">
          <a className="App-link" href="https://github.com/lambys-89/shecodes-plus-project">
            Open-source code
          </a>{" "}
          by Sarah Lamb
        </p>
      </footer>
    </div>
  );
}

export default App;
