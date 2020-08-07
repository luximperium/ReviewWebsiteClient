import React, { useState, useEffect } from "react";
import "../../App.css";

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
      {hasSearched ? <ul className="searchList">{hasSearched ? results.map(d => <li className="searchListItem"><div><a href={d.resource_url} className="searchListItemLink">{d.title}</a></div><div><a href={d.resource_url}><img src={d.thumb} className="searchListItemPic" /></a></div></li>) : <br />}</ul> : null}
    </div>
  );
};

export default Searchbar;
