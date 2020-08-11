import React from "react";
import "../../App.css";
import { useState, useEffect } from "react";
import { Col, Row, Dropdown, DropdownToggle, ButtonDropdown, DropdownMenu, DropdownItem } from "reactstrap";
import ReviewCreate from './Review/ReviewCreate';
import ReviewDisplay from './Review/ReviewDisplay';

const Artist = (artistinfo) => {
  let urltoresources = artistinfo.artistinfo;
  let resultsfromsearch = artistinfo.resultsinfo;
  const [artist, setArtist] = useState([]);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    if (artistinfo.artistinfo) {
      fetch(urltoresources)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setArtist(data);
          fetch(data.releases_url + `?page=1&per_page=100&key=rWUoIrWxrdwdVKDvrckA&secret=eLoZojJoHrrcqwLxgXLzYpWuNImuFVgz`)
            .then((response) => response.json())
            .then((info) => {
              console.log("Hit 3");
              setReleases(info.releases);
            });
        });
    }
  }, []);

  const [dropdownOpen, setOpen] = useState(false);
  
  const toggle = () => setOpen(!dropdownOpen);
  
  return (
    <div className="artist">
      <div className="artistDiv">
        <Row className="artistRow">
          <Col className="col-3">
            <h1 className="artistname">{artist.name}</h1>
            <img src={resultsfromsearch.thumb} className="artistThumb" />
            <div className="buttonCol"><ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="ReleaseButton" caret>
        Releases
      </DropdownToggle>
      <DropdownMenu className="releaseMenu">
      <DropdownItem header>Releases</DropdownItem>
              {releases.map((d) => (
                <DropdownItem>
                  {d.title} - {d.year}
                  </DropdownItem>
              ))}
            </DropdownMenu>
            </ButtonDropdown>
            </div>
            </Col>
        </Row>
        <Row className="profileRow">
        <Col className="col-7">
            <p className="artistsubtextprofile">{artist.profile}</p>
          </Col>
          </Row>
      </div>
      <div className="review">
        <ReviewCreate />
      </div>
    </div>
  );
};

export default Artist;
