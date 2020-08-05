import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import "../../App.css";
import MusiqueBase from "../../assets/musiquebase.png";

const Header = () => {
  return (
      <header>
        <Navbar className="header">
          <NavbarBrand href="/main">
              <img className="MusiqueBaseTitle" src={MusiqueBase} />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
          <input type="text" className="searchHeader" placeholder="Search for music..." />
          </Nav>
        </Navbar>
      </header>
  );
};

export default Header;
