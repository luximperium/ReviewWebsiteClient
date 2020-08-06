import React from "react";
import "../../App.css";
import { Row, Col, Button } from "reactstrap";
import SearchButton from "../../assets/search-invert.png";
import Searchbar from "../apps/searchBar";

const Main = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="welcomeMainText">Welcome to Musique Base!</h1>
        <p className="welcomeSubText">The Music Rating & Reviewing Website!</p>
        <Searchbar />
      </div>
    </div>
  );
};

export default Main;
