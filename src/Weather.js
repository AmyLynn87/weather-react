import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="container">
        <main className="current-weather">
          <div className="row">
            <div className="col-md-4">
              <h1>{props.city}</h1>
              <ul>
                <li>{props.date}</li>
                <li>{props.hour}</li>
              </ul>
            </div>

            <div className="col-md-2">
              {" "}
              <span className="weather-icon">
              <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="gold"
    size={100}
    animate={true}
  />
              </span>
            </div>

            <div className="col-md-3">
              <ul className="today-weather-column">
                <li className="today-temperature">{props.temperature}°C</li>
              </ul>
            </div>

            <div className="col-md-3 informations">
              <ul>
                <li className="min"> Min.{props.min} °C</li>
                <li className="max"> Max.{props.max} °C</li>
                <li className="humidity">Humidity: {props.humidity}%</li>
                <li className="wind"> Wind: {props.wind} km/h</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
