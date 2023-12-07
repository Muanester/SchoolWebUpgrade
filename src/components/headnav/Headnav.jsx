import React from "react";
import "./Headnav.css";
import { FaAddressBook } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdSportsVolleyball } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Headnav() {
  return (
    <div>
      <div id="headnav">
        <ul className="headnav-list1">
          <li>
            <FaAddressBook className="headnav_icons" />
            P.O Box 258-90100, Machakos, Kenya
          </li>
          <li>
            <FaPhoneSquare className="headnav_icons" />
            (+254) 724 157608
          </li>
          <li>
            <FaEnvelopeOpenText className="headnav_icons" />
            ngolenischool@gmail.com
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/admin">
              <FaBuilding className="headnav_icons" />
              Admin
            </Link>
          </li>
          <li>
            <Link to="/events/gallery">
              <GrGallery className="headnav_icons" />
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/events/sports">
              <MdSportsVolleyball className="headnav_icons" />
              Sports
            </Link>
          </li>
          <li>
            <Link to="/events/tenders">
              <FaBook className="headnav_icons" />
              Tenders
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Headnav;
