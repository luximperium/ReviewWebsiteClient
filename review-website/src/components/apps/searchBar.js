import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../../App.css";
import Artist from './artist';
import Results from '../apps/results';
import {
    Row,
    Col,
    Button,
  } from "reactstrap";

const Searchbar = () => {
  const [hasSearched, sethasSearched] = useState(false);
  const [searchterm, setSearchterm] = useState();
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (searchterm) {
      fetch(
        `https://api.discogs.com/database/search?q=${searchterm}&per_page=10&key=rWUoIrWxrdwdVKDvrckA&secret=eLoZojJoHrrcqwLxgXLzYpWuNImuFVgz`
      )
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results);
        });
    } else {
      sethasSearched(() => false);
    }
  }, [searchterm]);

  const handlesearch = (e) => {
    sethasSearched(() => true);
    setSearchterm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handlesearch}
        className="search"
        placeholder="Search for music..."
      />
      {hasSearched ? (
        <ul className="searchList">
          {hasSearched ? (
            results.map((d) => (
              <li className="searchListItem">
                <div>
                  <Link to="/artist" className="searchListItemLink">
                    {d.title}
                  </Link>
                </div>
                <div>
                  <Link to="/artist">
                    <img src={d.thumb} className="searchListItemPic" />
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <br />
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default Searchbar;
