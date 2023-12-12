import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import VisitMore from "../visitmore/VisitMore";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-col1">
        <h2>Enhance Your Future With Ngoleni Secondary School</h2>
        <p>
          Ngoleni Secondary School boasts diverse departments catering to a
          comprehensive education. From Science and Mathematics, fostering
          analytical minds, to Humanities nurturing critical thinking, each
          department is led by passionate educators. Our Arts and Sports
          departments inspire creativity and teamwork, enriching the school
          experience. Explore the breadth of knowledge across our dynamic
          academic departments at Ngoleni.
        </p>
        <div className="btn btn-primary">
          <Link to="/departments">Visit Our Departments</Link>
        </div>
      </div>
      <div className="hero-col2">
        <VisitMore />
      </div>
    </section>
  );
}

export default Hero;
