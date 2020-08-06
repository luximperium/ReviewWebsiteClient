import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Main from "./main";
import Profile from "../apps/profile";
import Lists from "../apps/lists";
import Catalogs from "../apps/catalogs";
import pfp from "../../assets/user.png";
import listpic from "../../assets/list-1-invert.png";
import catalog from "../../assets/folder-7.png";
import styled from "styled-components";
import "../../App.css";
import { Row, Col } from "reactstrap";
import Results from '../apps/results';

const SidebarItem = styled.img`
    width 2em;
    transform: translateX(0.5em);
`;

const Sidebar = () => {
  return (
    <div className="sidebar-master">
      <div className="sidebar-styling">
        <Col className="sidebar">
          <Row className="sidebarIcon">
            <Link to="/profile">
              <SidebarItem src={pfp} />
            </Link>
          </Row>
          <Row className="sidebarIcon">
            <Link to="/lists">
              <SidebarItem src={listpic} />
            </Link>
          </Row>
          <Row className="sidebarIcon">
            <Link to="/catalogs">
              <SidebarItem src={catalog} />
            </Link>
          </Row>
        </Col>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/lists">
            <Lists />
          </Route>
          <Route exact path="/catalogs">
            <Catalogs />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
