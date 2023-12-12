import React from "react";
import "./ProfileExpert.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

function ProfileExpert(props) {
  return (
    <div className="profile">
      <div className="prof-img">
        <img src={props.image} alt="" />
      </div>
      <div className="profile-det">
        <p>
          <RiDoubleQuotesL />

          {props.details}

          <RiDoubleQuotesR />
        </p>
        <h6>{props.title}</h6>
      </div>
    </div>
  );
}

export default ProfileExpert;
