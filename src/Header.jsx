import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui teal fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          My Portfolio</Link>
        <div className="right menu">
        <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/CV">CV</NavLink>
          <NavLink
            id="about-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/about">About me</NavLink>
          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects">Projects</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;