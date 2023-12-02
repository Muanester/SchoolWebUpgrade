import React from "react";
import "./PersonCard.css";

function PersonCard(props) {
  return (
    <div>
      <div className="person_card">
        <div className="person_card-img">
          <img src={props.image} alt="" />
        </div>
        <div className="person_card-details">
          <h6>{props.name}</h6>
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
