import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

export const ItemCategories = (props) => {
  return (
    <div className="category">
      <div className="category-img">
        <img src={props.image} alt="" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="btn">
        <Link to={props.link}>Read More</Link>
      </div>
    </div>
  );
};

export const ItemCategoryLinks = (props) => {
  return (
    <div className="cate">
      <h3>{props.head}</h3>
      <hr />
      <Link to={props.link1}>{props.title1}</Link>

      <hr />
      <Link to={props.link2}>{props.title2}</Link>

      <hr />
      <Link to={props.link3}>{props.title3}</Link>

      <hr />
      <Link to={props.link4}>{props.title4}</Link>

      <hr />
      <Link to={props.link5}>{props.title5}</Link>

      <hr />
      <Link to={props.link6}>{props.title6}</Link>

      <hr />
      <Link to={props.link7}>{props.title7}</Link>

      <hr />
    </div>
  );
};
