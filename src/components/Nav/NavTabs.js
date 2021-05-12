import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css"
import { Navbar, Nav } from "react-bootstrap"

function NavTabs() {
 
  const location = useLocation();

  return (
    <>
    <Navbar expand="lg" className="nav-bar container-fluid">
    <Navbar.Toggle ariaControls="basic-navbar-nav"/>
    <Navbar.Collapse id="navbar">
      <Nav className="nav-wrapper col-sm-1 col-md-12 col-lg-12" id="menu">
      <ul id="navbar" className="nav">
      <li className="nav-item first-nav">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/ourpiano"
          className={location.pathname === "/ourpiano" ? "nav-link active" : "nav-link"}
        >
          Our Piano
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/membership"
          className={location.pathname === "/membership" ? "nav-link active" : "nav-link"}
        >
          Membership
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/events"
          className={location.pathname === "/events" ? "nav-link active" : "nav-link"}
        >
          Events
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/festival"
          className={location.pathname === "/festival" ? "nav-link active" : "nav-link"}
        >
          DEMTA Festival
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/forms"
          className={location.pathname === "/forms" ? "nav-link active" : "nav-link"}
        >
          Forms
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item last-nav">
        <Link
          to="/teachers"
          className={location.pathname === "/teachers" ? "nav-link active" : "nav-link"}
        >
          Teachers
        </Link>
      </li>
    </ul>
      </Nav>
    </Navbar.Collapse>

    </Navbar>





    
    </>
  );
}

export default NavTabs;
