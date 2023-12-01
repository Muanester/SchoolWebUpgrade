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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo modi
          quod tempora est, delectus corrupti nihil deleniti aliquid distinctio
          similique! Aspernatur earum reiciendis totam nam repellendus
          dignissimos nemo possimus. Veniam possimus quibusdam ex beatae
          consectetur itaque in. Accusantium, at.
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
