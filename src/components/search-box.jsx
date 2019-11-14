import React from "react";
import "./search-box-style.css";

export const SearchBox = function(props) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Monster Search"
      onChange={props.handleChange}
    ></input>
  );
};
