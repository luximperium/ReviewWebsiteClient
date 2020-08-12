import React from "react";
import "../../App.css";
import { useState, useEffect } from "react";
import {
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ReviewCreate from "./Review/ReviewCreate";
import ReviewDisplay from "./Review/ReviewDisplay";

const Album = (props) => {
  const [album, setAlbum] = useState([]);
  const [albumDeeper, setAlbumDeeper] = useState([]);

  useEffect(() => {
    console.log(props.props);
    setAlbum(props.props);
    fetch(
      props.props.resource_url
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbumDeeper(data);
        console.log("Hit 4!");
      });
  }, []);

  return (
    <div className="artist">
      {console.log(album)}
      {console.log(albumDeeper)}
      <div className="artistDiv">
            <h1 className="artistname">{album.artist}</h1>
            <h2 className="smallalbumname">{album.title}</h2>
            <img src={album.thumb} className="artistThumb" />
          <div className="col-7-container">
              <div className="album-info">
                <p>Genres: {albumDeeper.genres}</p>
                <p>Styles: {albumDeeper.styles}</p>
                <p>Year: {albumDeeper.year}</p>
                <p>Discogs Page: {albumDeeper.uri}</p>
              </div>
            </div>
      </div>
      <div className="review">
        <ReviewCreate />
      </div>
    </div>
  );
};

export default Album;
