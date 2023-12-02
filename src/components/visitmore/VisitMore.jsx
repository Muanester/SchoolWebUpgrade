import React from "react";
import "./VisitMore.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import visit_more_items from "./VisitMoreItems";

function VisitMore() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="visit_more">
      <h2>Visit More:</h2>
      <Slider {...settings} className="visit_more-slider">
        {visit_more_items.map((item, index) => (
          <div key={index} className="visit_more-item">
            {<item.icon />}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="btn">
              <Link to={item.link}>Read More</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VisitMore;
