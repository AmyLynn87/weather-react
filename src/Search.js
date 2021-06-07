import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city..."
            id="search-input"
          />
          <button className="input-group-text" id="search-button">
            <i className="fas fa-search" />
          </button>
          <button className="input-group-text" id="current-city-button">
            Current City
          </button>
        </div>
      </form>
    </div>
  );
}
