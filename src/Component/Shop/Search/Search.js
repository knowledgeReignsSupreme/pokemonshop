import React, { useEffect } from "react";
import classes from "./Search.module.css";

const Search = (props) => {
 useEffect(() => {
 }, [props.searchInput])
 return(
 <div className={classes.SearchContainer}>
    <label className={classes.SearchContainer__label}>Search By Name:</label>
    <input
      className={classes.SearchContainer__input}
      ref={props.aRef}
      onChange={props.onChange}
    ></input>
  </div>
 )
};


export default Search;
