import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Main from "./main";
import Profile from "../apps/profile";
import Lists from "../apps/lists";
import Catalogs from "../apps/catalogs";
import pfp from "../../assets/user.png";
import listpic from "../../assets/list-1-invert.png";
import catalog from "../../assets/folder-7.png";
import logout from "../../assets/logout.png";
import styled from "styled-components";
import "../../App.css";
import { Row, Col } from "reactstrap";

import ReviewIndex from '../apps/Review/ReviewIndex'
import ReviewDisplay from '../apps/Review/ReviewDisplay'
import Artist from '../apps/artist';
import Searchbar from "../apps/searchBar";
import searchIcon from "../../assets/search-invert.png"
import Search from "./search"
import Album from "../apps/album";


const SidebarItem = styled.img`
    width 2em;
    transform: translateX(0.5em);
`;

const Sidebar = (props) => {
  return (
    <div className="sidebar-master">
      <div className="sidebar-styling">
        <Col className="sidebar">
        <Row className="sidebarIcon">
            <a href="/search">
              <SidebarItem src={searchIcon} />
            </a>
          </Row>
          <Row className="sidebarIcon">
            <Link to="/profile">
              <SidebarItem src={pfp} />
            </Link>
          </Row>
          <Link to="/main">
          <Row className="sidebarIcon">
              <SidebarItem onClick={props.clickLogout} src={logout} />
          </Row>
          </Link>
        </Col>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/artist">
            <Artist />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/catalogs">
            <Catalogs />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/album">
            <Album />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
