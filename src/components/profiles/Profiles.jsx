import React from "react";
import "./Profiles.css";
import ProfileExpert from "../profileexpert/ProfileExpert";
import profile_expert_items from "./ProfileExpertItems";
import Slider from "react-slick";

function Profiles() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <section id="experts">
      <div className="experts-sec">
        <h2>WHAT THE COMMUNITY SAYS:</h2>
        <Slider {...settings}>
          {profile_expert_items.map((item, index) => (
            <div key={""} className="expert-box">
              <ProfileExpert
                key={index}
                image={item.exp_img}
                details={item.exp_det}
                title={item.exp_title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Profiles;
