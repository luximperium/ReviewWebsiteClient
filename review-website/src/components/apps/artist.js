import React from 'react';
import "../../App.css";
import { useState } from 'react';
import Searchbar from './searchBar'
import { Route, Link, Switch } from "react-router-dom";

const Artist = (props) => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="welcomeMainText">Artist Page</h1>
                <p className="welcomeSubText">
                    Artist Page Subtext
                </p>
                <p>
                    {props.searchresult}
                </p>
            </div>
        </div>
    );
};

export default Artist;