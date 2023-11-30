import React from "react";
import "./Hero.css";

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
        <div className="btn">
          <a className="yellow" href="departments.html">
            Visit Our Departments
          </a>
        </div>
      </div>
      <div className="hero-col2">
        <h2>Visit More:</h2>
        <div className="fea-base slideshow-container">
          <div className="fea-box heroSlides fade">
            <i className="fa-solid fa-chalkboard-user"></i>
            <h3>School Staff</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, illum.
            </p>
            <a href="admin.html">Read More</a>
          </div>
          <div className="fea-box heroSlides fade">
            <i className="fa-solid fa-school"></i>
            <h3>Our Departments</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, illum.
            </p>
            <a href="departments.html">Read More</a>
          </div>
          <div className="fea-box heroSlides fade">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h3>Clubs & Societies</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, illum.
            </p>
            <a href="events/clubs.html">Read More</a>
          </div>
          <div className="fea-box heroSlides fade">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h3>Sports & Activities</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, illum.
            </p>
            <a href="events/sports.html">Read More</a>
          </div>
          <div className="fea-box heroSlides fade">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h3>Tenders</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, illum.
            </p>
            <a href="events/tenders.html">Read More</a>
          </div>
          <div className="fea-box heroSlides fade">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h3>Gallery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, illum.
            </p>
            <a href="events/gallery.html">Read More</a>
          </div>
          <div className="fea-box heroSlides fade">
            <i className="fa-solid fa-puzzle-piece"></i>
            <h3>Our Churches</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, illum.
            </p>
            <a href="events/churches.html">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
