import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav id="nav">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to="/">
          <h1>NGOLENI SECONDARY SCHOOL</h1>
        </Link>
        <div className="nav_lists">
          <ul>
            <i className="fa-solid fa-xmark close-btn"></i>
            <li>
              <Link className="active" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/departments">DEPARTMENTS</Link>
            </li>
            <li>
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <img id="menu-btn" src="images/menu.png" alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
