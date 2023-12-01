import React from "react";
import "./ProfileExpert.css";

function ProfileExpert(props) {
  return (
    <div className="profile">
      <div className="prof-img">
        <img src={props.image} alt="" />
      </div>
      <div className="profile-det">
        <p>
          <i className="fa fa-quote-left"></i>
          {props.details}
          <i className="fa fa-quote-right"></i>
        </p>
        <h6>{props.title}</h6>
      </div>
    </div>
  );
}

export default ProfileExpert;
