import React from "react";
import { GoSearch } from "react-icons/go";

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
          <GoSearch size={40} />
        </a>
      </div>
    </>
  );
}
