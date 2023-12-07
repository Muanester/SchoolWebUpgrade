import React from "react";
import "./PersonCard.css";

function PersonCard(props) {
  const isGallery = {
    cursor: "pointer",
  };

  return (
    <div>
      <div className="person_card">
        <div
          style={props.gallery ? isGallery : null}
          onClick={props.onClick ? props.onClick : null}
          className="person_card-img"
        >
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
