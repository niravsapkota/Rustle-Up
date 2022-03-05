import React from "react";
import searchbtn from "../assets/search.png";

export default function Search() {
  return (
    <>
      <div className="app__search-bar">
        <label className="app__search-label" htmlFor="search">
          Search
        </label>
        <input
          id="app__search-input"
          type={Text}
          placeholder="Search Recipe you want..."
        ></input>
        <a href="#" className="app__search-btn">
          <img className="search-btn" src={searchbtn} />
        </a>
      </div>
    </>
  );
}
