import React from 'react';
import MusiqueBase from "../../assets/musiquebase.png";
import '../../App.css'
import {
    Navbar,
    NavbarBrand,
    Nav
  } from "reactstrap";

const Musique = () => {
    return (
        <NavbarBrand href="/main">
            <img className="MusiqueBaseLogo" src={MusiqueBase} />
        </NavbarBrand>
    )
}

export default Musique;