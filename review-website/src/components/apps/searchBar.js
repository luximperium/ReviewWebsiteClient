import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Artist from "./artist";
import { Button } from "reactstrap";
import searchIcon from '../../assets/search-invert.png'

const Searchbar = () => {
  const [hasclicked, setHasclicked] = useState(false);
  const [hasSearched, sethasSearched] = useState(false);
  const [preartist, setPreArtist] = useState([]);
  const [searchterm, setSearchterm] = useState();
  const [artist, setArtist] = useState([]);
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    if (hasSearched) {
      console.log("Hit")
      fetch(
        `https://api.discogs.com/database/search?type=artist&q=${searchterm}&per_page=10&key=rWUoIrWxrdwdVKDvrckA&secret=eLoZojJoHrrcqwLxgXLzYpWuNImuFVgz`
      )
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results);
        });
    } else {
      sethasSearched(() => false);
    }
  }, [hasSearched]);

  const handlesearch = () => {
    sethasSearched(() => true);
  };

  const handleclick = (d) => {
    setArtist(d.resource_url)
    setPreArtist(d)
    setHasclicked(() => true);
  };

  return (
    <div>
      {hasclicked ? (<Artist artistinfo={artist} resultsinfo={preartist} />) : (
       <div>
         <h1 className="welcomeMainText">Search</h1>
      <input
        type="text"
        onChange={(e) => setSearchterm(e.target.value)}
        className="search"
        placeholder="Search for artists..."
      />
      <Button onClick={handlesearch} className="searchButton"><img className="searchButtonImage" src={searchIcon} /></Button>
      {hasSearched ? (
        <ul className="searchList">
          {hasSearched ? (
            results.map((d) => (
              <li key={d.id} className="searchListItem">
                <div>
                  <Link
                    onClick={() => handleclick(d)}
                    className="searchListItemLink"
                  >
                    {d.title}
                  </Link>
                </div>
                <div>
                  <Link 
                   onClick={() => handleclick(d)}>
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
    )}
    </div>
  );
};

export default Searchbar;
