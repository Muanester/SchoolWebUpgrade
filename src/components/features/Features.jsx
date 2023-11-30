import React from "react";
import "./Features.css";

function Features() {
  return (
    <section id="features">
      <h1>STUDENTS' LIFE</h1>
      <h2>Learning And Extra-Curricular Fun:</h2>
      <div className="fea-base">
        <div className="courses">
          <div className="courses-img">
            <img src="images/c1.jpg" alt="" />
          </div>
          <div className="courses-det">
            <div className="details">
              <span>Updated 21/8/23</span>
              <h6>Sports & Activities</h6>
            </div>
            <div className="btn">
              <a className="blue" href="events/sports.html">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="courses">
          <div className="courses-img">
            <img src="images/c1.jpg" alt="" />
          </div>
          <div className="courses-det">
            <div className="details">
              <span>Updated 21/8/23</span>
              <h6>Entertainment</h6>
            </div>
            <div className="btn">
              <a className="blue" href="events/entertainments.html">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="courses">
          <div className="courses-img">
            <img src="images/c1.jpg" alt="" />
          </div>
          <div className="courses-det">
            <div className="details">
              <span>Updated 21/8/23</span>
              <h6>Clubs & Societies</h6>
            </div>
            <div className="btn">
              <a className="blue" href="events/clubs.html">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="courses">
          <div className="courses-img">
            <img src="images/c1.jpg" alt="" />
          </div>
          <div className="courses-det">
            <div className="details">
              <span>Updated 21/8/23</span>
              <h6>Gallery</h6>
            </div>
            <div className="btn">
              <a className="blue" href="events/gallery.html">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="courses">
          <div className="courses-img">
            <img src="images/c1.jpg" alt="" />
          </div>
          <div className="courses-det">
            <div className="details">
              <span>Updated 21/8/23</span>
              <h6>Activity</h6>
            </div>
            <div className="btn">
              <a className="blue" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="courses">
          <div className="courses-img">
            <img src="images/c1.jpg" alt="" />
          </div>
          <div className="courses-det">
            <div className="details">
              <span>Updated 21/8/23</span>
              <h6>Activity</h6>
            </div>
            <div className="btn">
              <a className="blue" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
