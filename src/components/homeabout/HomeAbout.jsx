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
            Welcome to Ngoleni Secondary School, a vibrant hub of learning where
            potential meets purpose. Nestled in the heart of education, our
            mixed school offers a nurturing environment for both boys and girls.
            At Ngoleni, we are committed to providing a holistic education that
            empowers students to excel academically and thrive personally. Our
            dedicated staff, state-of-the-art facilities, and rich
            extracurricular activities create a dynamic educational experience.
            Join us on this journey of discovery and growth at Ngoleni Secondary
            School, where every student is valued and encouraged to reach their
            full potential.
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
