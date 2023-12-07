import React from "react";
import "./HomeAbout.css";
import Wrap from "../../assets/wrap.jpg";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <section id="home_about">
      <div className="home-wrap">
        <div className="about-img">
          <img src={Wrap} alt="" />
        </div>
        <div className="about-text">
          <h2>Welcome to Ngoleni School.</h2>
          <p>
            You can start and finish the one of the following courses Today-for
            free. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Natus alias omnis perferendis, dolorum doloremque minus ad
            consequatur quasi ipsum culpa at vitae dolore earum fuga? Nulla
            aliquid quis nesciunt at!
          </p>
          <div className="btn btn-primary">
            <Link to="/about">More About Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
