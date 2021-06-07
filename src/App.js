import React from "react";
import Search from "./Search";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="card-structure mb-3">
          <Search />
          <Weather
            city="Civitavecchia"
            date="31/05/2021"
            hour="20.57"
            temperature={20}
            min={10}
            max={24}
            humidity={15}
            wind={3}
          />
        </div>
      </div>
      <p className="footer">This app is coded by <a href="https://www.elisacrescentini.dev" target="_blank" rel="noreferrer noopener" title="Elisa's Portfolio">Elisa Crescentini</a> and it's <a href="https://github.com/AmyLynn87/weather-react" target="_blank" rel="noreferrer noopener" title="Weather React GitHub Repository">open sourced</a></p>
    </div>
  );
}
