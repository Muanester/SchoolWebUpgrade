import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [menu, setMenu] = useState("home");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const navStyle = {
    transition: "all 300ms ease-in-out",

    top: scrollDirection === "down" ? "0" : "40px",
  };

  return (
    <div className="navbar">
      <nav style={navStyle} className="nav">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to="/">
          <h1>NGOLENI SECONDARY SCHOOL</h1>
        </Link>
        <div className="nav_lists">
          <ul>
            <i className="fa-solid fa-xmark close-btn"></i>
            <li onClick={() => setMenu("home")}>
              <Link className={menu === "home" ? "active" : ""} to="/">
                HOME
              </Link>
            </li>
            <li onClick={() => setMenu("about")}>
              <Link className={menu === "about" ? "active" : ""} to="/about">
                ABOUT
              </Link>
            </li>
            <li onClick={() => setMenu("departments")}>
              <Link
                className={menu === "departments" ? "active" : ""}
                to="/departments"
              >
                DEPARTMENTS
              </Link>
            </li>
            <li onClick={() => setMenu("events")}>
              <Link className={menu === "events" ? "active" : ""} to="/events">
                EVENTS
              </Link>
            </li>
            <li onClick={() => setMenu("contact")}>
              <Link
                className={menu === "contact" ? "active" : ""}
                to="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <div
          onClick={() => {
            setIsMenuOpen(true);
          }}
          className="nav_open_menu-icon"
        >
          <FaHamburger />
        </div>

        {isMenuOpen && (
          <div className="small_dev_menu">
            <div
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className="nav_close_menu-icon"
            >
              <IoMdClose />
            </div>
            <ul>
              <i className="fa-solid fa-xmark close-btn"></i>
              <li
                onClick={() => {
                  setMenu("home");
                  setIsMenuOpen(false);
                }}
              >
                <Link className={menu === "home" ? "active" : ""} to="/">
                  HOME
                </Link>
              </li>
              <li
                onClick={() => {
                  setMenu("home");
                  setIsMenuOpen(false);
                }}
              >
                <Link className={menu === "about" ? "active" : ""} to="/about">
                  ABOUT
                </Link>
              </li>
              <li
                onClick={() => {
                  setMenu("home");
                  setIsMenuOpen(false);
                }}
              >
                <Link
                  className={menu === "departments" ? "active" : ""}
                  to="/departments"
                >
                  DEPARTMENTS
                </Link>
              </li>
              <li
                onClick={() => {
                  setMenu("home");
                  setIsMenuOpen(false);
                }}
              >
                <Link
                  className={menu === "events" ? "active" : ""}
                  to="/events"
                >
                  EVENTS
                </Link>
              </li>
              <li
                onClick={() => {
                  setMenu("home");
                  setIsMenuOpen(false);
                }}
              >
                <Link
                  className={menu === "contact" ? "active" : ""}
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
