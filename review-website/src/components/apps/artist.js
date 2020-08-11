import React from 'react';
import "../../App.css";
import { useState, useEffect } from 'react';

const Artist = (artistinfo) => {
    let urltoresources = artistinfo.artistinfo
    let resultsfromsearch = artistinfo.resultsinfo
    console.log(resultsfromsearch)
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        if (artistinfo.artistinfo) {
            fetch(
                urltoresources
              )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setArtist(data);
                });
        }
      }, []);

    return (
        <div className="artist">
            <div className="artistDiv">
                <h1 className="artistname">{artist.name}</h1>
                <img src={resultsfromsearch.thumb} className="artistThumb" />
                <p className="artistsubtext">
                    {artist.profile}
                </p>
            </div>
        </div>
    );
};

export default Artist;