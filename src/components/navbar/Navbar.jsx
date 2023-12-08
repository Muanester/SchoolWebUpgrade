import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);

  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);
  const menuIconRef = useRef(null);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNavbarOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        closeNavbar();
      }
    };

    if (isNavbarOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavbarOpen]);

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
            <li>
              <Link className={isActive("/") ? "active" : ""} to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className={isActive("/about") ? "active" : ""} to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className={isActive("/departments") ? "active" : ""}
                to="/departments"
              >
                DEPARTMENTS
              </Link>
            </li>
            <li>
              <Link
                className={isActive("/events") ? "active" : ""}
                to="/events"
              >
                EVENTS
              </Link>
            </li>
            <li>
              <Link
                className={isActive("/contact") ? "active" : ""}
                to="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <div
          ref={menuIconRef}
          onClick={() => {
            setNavbarOpen(!isNavbarOpen);
          }}
          className="nav_open_menu-icon"
        >
          <RiMenu3Fill />
        </div>

        {isNavbarOpen && (
          <div ref={navbarRef} className="small_dev_menu">
            <div
              onClick={() => {
                setNavbarOpen(!isNavbarOpen);
              }}
              className="nav_close_menu-icon"
            >
              <IoMdClose />
            </div>
            <ul>
              <li
                onClick={() => {
                  setNavbarOpen(!isNavbarOpen);
                }}
              >
                <Link className={isActive("/") ? "active" : ""} to="/">
                  HOME
                </Link>
              </li>
              <li
                onClick={() => {
                  setNavbarOpen(!isNavbarOpen);
                }}
              >
                <Link
                  className={isActive("/about") ? "active" : ""}
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li
                onClick={() => {
                  setNavbarOpen(!isNavbarOpen);
                }}
              >
                <Link
                  className={isActive("/departments") ? "active" : ""}
                  to="/departments"
                >
                  DEPARTMENTS
                </Link>
              </li>
              <li
                onClick={() => {
                  setNavbarOpen(!isNavbarOpen);
                }}
              >
                <Link
                  className={isActive("/events") ? "active" : ""}
                  to="/events"
                >
                  EVENTS
                </Link>
              </li>
              <li
                onClick={() => {
                  setNavbarOpen(!isNavbarOpen);
                }}
              >
                <Link
                  className={isActive("/contact") ? "active" : ""}
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
