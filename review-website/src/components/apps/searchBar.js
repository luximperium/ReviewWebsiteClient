import React, { useState, useEffect } from "react";
import "../../App.css";
import SearchButton from "../../assets/search-invert.png";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

const Searchbar = () => {
  const [hasSearched, sethasSearched] = useState(false);
  const [searchterm, setSearchterm] = useState();
  const [results, setResults] = useState([]);
  useEffect(() => {
      if (searchterm) {
    fetch(
      `https://api.discogs.com/database/search?q=${searchterm}&key=rWUoIrWxrdwdVKDvrckA&secret=eLoZojJoHrrcqwLxgXLzYpWuNImuFVgz`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      })} else {
          sethasSearched(() => false);
      }
  }, [searchterm]);

  const handlesearch = (e) => {
    sethasSearched(() => true);  
    setSearchterm(e.target.value);
    }

  return (
    <div>
      <input
        type="text"
        onChange={handlesearch}
        className="search"
        placeholder="Search for music..."
      />
      <ul>{hasSearched ? results.map(d => <li>{d.title}</li>) : <br />}</ul>
    </div>
  );
};

export default Searchbar;
