import React, { useState } from "react";
import "../../App.css";
import SearchButton from "../../assets/search-invert.png";
import { Route, Link, Switch } from "react-router-dom";
import Results from '../apps/results';
import {
    Row,
    Col,
    Button,
  } from "reactstrap";

const Searchbar = () => {

    const [searchterm, setSearchterm] = useState("")
    const [searchresults, setSearchresults] = useState([])
  
    const SearchFunction = () => {
      fetch(`https://api.discogs.com/database/search?q=${searchterm}&key=rWUoIrWxrdwdVKDvrckA&secret=eLoZojJoHrrcqwLxgXLzYpWuNImuFVgz`)
      .then(response => response.json())
      .then(data => setSearchresults(data.response))
      .catch(error => console.log(error))
    }  

  return (
    <form>
          <input
            type="text"
            onChange={(e) => setSearchterm(e.target.value)}
            className="search"
            placeholder="Search for music..."
          />
          <Link to="/results">
            <Button
              type="button"
              onClick={SearchFunction}
              className="searchButton"
            >
              <img className="searchButtonImage" src={SearchButton} />
            </Button>
          </Link>
    </form>
  );
};

export default Searchbar;
