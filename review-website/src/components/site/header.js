import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav
} from "reactstrap";
import "../../App.css";
import Searchbar from "../apps/searchBar";


const Header = () => {

  return (
      <header>
        <Navbar className="header">
          <Nav className="ml-auto" navbar>
            <div className="searchNav">
            <Searchbar />
            </div>
          </Nav>
        </Navbar>
      </header>
  );
};

export default Header;
