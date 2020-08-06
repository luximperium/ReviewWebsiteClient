import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Row,
  Col,
  Button,
} from "reactstrap";
import "../../App.css";
import MusiqueBase from "../../assets/musiquebase.png";
import Searchbar from "../apps/searchBar";


const Header = () => {

  return (
      <header>
        <Navbar className="header">
          <NavbarBrand href="/main">
              <img className="MusiqueBaseTitle" src={MusiqueBase} />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Searchbar />
          </Nav>
        </Navbar>
      </header>
  );
};

export default Header;
