import React from "react";
import "./HomeSlides.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../../assets/home1.jpg";
import Slide2 from "../../assets/home2.jpg";
import Slide3 from "../../assets/home3.jpg";

function HomeSlides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="slideshow">
      <Slider {...settings} className="slideshow_container">
        <div className="slide_item">
          <img src={Slide1} alt="" />
        </div>

        <div className="slide_item">
          <img src={Slide2} alt="" />
        </div>

        <div className="slide_item">
          <img src={Slide3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlides;
