import React from "react";

export default function Search() {
  return (
    <div>
      <form id="city-search-form">
        <div className="col-sm">
          <div className="form-group">
            <input
              type="text"
              className="form-control city-search"
              id="city-input"
              placeholder="Enter city here..."
            />
          </div>
        </div>
      </form>
    </div>
  );
}
