import React from 'react';
import "../../App.css";

const Main = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="welcomeMainText">Welcome to Musique Base!</h1>
                <p className="welcomeSubText">
                    The Music Rating & Reviewing Website!
                </p>
                <input type="text" className="searchMain" placeholder="Search for music..." />
            </div>
        </div>
    );
};

export default Main;