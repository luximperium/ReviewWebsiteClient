import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav
} from "reactstrap";
import "../../App.css";


const Header = () => {

  return (
      <header>
        <Navbar className="header">
          <Nav className="ml-auto" navbar>
            <div className="searchNav">
            </div>
          </Nav>
        </Navbar>
      </header>
  );
};

export default Header;
