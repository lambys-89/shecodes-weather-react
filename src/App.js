import React from "react";
import './App.css';
import Loader from "react-loader-spinner";
import Search from "./search.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader 
        type = "Grid"
        color= "#00BFFF"
        height={100}
        width={100}
        timeout={5000}
        />
        <h1>
          Welcome to the Weather App
        </h1>
        <button>Current Location</button>
        <Search />
      </header>
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
