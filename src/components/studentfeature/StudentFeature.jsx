import React from "react";
import "./StudentFeature.css";
import { Link } from "react-router-dom";

function StudentFeature(props) {
  return (
    <div className="student_feature">
      <div>
        <div className="student_feature-img">
          <img src={props.image} alt="" />
        </div>
        <div className="student_feature-det">
          <div className="details">
            <span>Updated 21/8/23</span>
            <h6>{props.title}</h6>
          </div>
          <div className="btn">
            <Link to={props.link}>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentFeature;
