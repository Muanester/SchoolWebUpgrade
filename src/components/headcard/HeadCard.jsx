import React from "react";
import "./HeadCard.css";

function HeadCard(prop) {
  return (
    <div id="head-card">
      <h2>{prop.title}</h2>
    </div>
  );
}

export default HeadCard;
