import React from 'react';
import "../../App.css";
import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

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
                <Row className="artistRow">
                <Col className="col-3"><h1 className="artistname">{artist.name}</h1>
                <img src={resultsfromsearch.thumb} className="artistThumb" />
                </Col>               
                
              <Col className="col-9"><p className="artistsubtext">
                    {artist.profile}
                </p></Col>
                </Row>
            </div>
        </div>
    );
};

export default Artist;