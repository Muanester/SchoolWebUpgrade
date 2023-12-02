import React from "react";
import "./ItemDetailCard.css";
import { Link } from "react-router-dom";

const ItemDetailCard_ImgL = (props) => {
  return (
    <div>
      <div className="item_detail_card">
        <div className="item_detail_card-img">
          <img src={props.image} alt="" />
        </div>
        <div className="item_detail_card-text">
          <h3>{props.title}</h3>
          <p>
            {props.text}
            <br />
            <br />
            <br />
          </p>
          {props.link && (
            <div className="btn">
              <Link to={props.link}>Read More</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ItemDetailCard_ImgR = (props) => {
  return (
    <div>
      <div className="item_detail_card right-image">
        <div className="item_detail_card-text">
          <h3>{props.title}</h3>
          <p>
            {props.text}
            <br />
            <br />
            <br />
          </p>
          {props.link && (
            <div className="btn">
              <Link to={props.link}>Read More</Link>
            </div>
          )}
        </div>

        <div className="item_detail_card-img">
          <img src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export { ItemDetailCard_ImgL, ItemDetailCard_ImgR };
