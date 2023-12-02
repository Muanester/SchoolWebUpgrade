import React from "react";
import "./AboutFeatures.css";
import { FaBuilding } from "react-icons/fa";
import { FaChalkboardUser, FaPuzzlePiece } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AboutFeatures() {
  return (
    <div className="about_features">
      <h2>Visit More:</h2>
      <div className="fea-base">
        <div className="fea-box">
          <FaChalkboardUser />
          <h3>School Staff</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            illum.
          </p>
          <Link to="/admin">Read More</Link>
        </div>
        <div className="fea-box">
          <FaBuilding />
          <h3>Our Departments</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            illum.
          </p>
          <Link to="/departments">Read More</Link>
        </div>
        <div className="fea-box">
          <FaPuzzlePiece />
          <h3>Clubs & Societies</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            illum.
          </p>
          <Link to="/events/clubs">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutFeatures;
