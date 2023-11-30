import React from "react";
import "./Profiles.css";

function Profiles() {
  return (
    <section id="experts">
      <div className="experts-sec">
        <h1>WHAT THE COMMUNITY SAYS:</h1>
        <div className="expert-box slideshow-container">
          <div className="profile-show fade">
            <div className="profile">
              <div className="prof-img">
                <img src="images/pro1.jpg" alt="" />
              </div>
              <div className="profile-det">
                <p>
                  <i className="fa fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus autem cum perferendis quod tenetur quos iure
                  quia vitae, voluptate repudiandae?
                  <i className="fa fa-quote-right"></i>
                </p>
                <h6>Ann Hannah, Community Expert</h6>
              </div>
            </div>
            <div className="profile">
              <div className="prof-img">
                <img src="images/pro2.jpg" alt="" />
              </div>
              <div className="profile-det">
                <p>
                  <i className="fa fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus.
                  <i className="fa fa-quote-right"></i>
                </p>
                <h6>Jason, Community Expert</h6>
              </div>
            </div>
          </div>

          <div className="profile-show fade">
            <div className="profile">
              <div className="prof-img">
                <img src="images/pro3.jpg" alt="" />
              </div>
              <div className="profile-det">
                <p>
                  <i className="fa fa-quote-left"></i>Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                  <i className="fa fa-quote-right"></i>
                </p>
                <h6>Maalik, Community Expert</h6>
              </div>
            </div>
            <div className="profile">
              <div className="prof-img">
                <img src="images/pro4.jpg" alt="" />
              </div>
              <div className="profile-det">
                <p>
                  <i className="fa fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus autem cum perferendis quod tenetur quos iure
                  quia vitae, voluptate repudiandae?
                  <i className="fa fa-quote-right"></i>
                </p>
                <h6>Jennifer, Community Expert</h6>
              </div>
            </div>
          </div>

          <div className="profile-show fade">
            <div className="profile">
              <div className="prof-img">
                <img src="images/pro1.jpg" alt="" />
              </div>
              <div className="profile-det">
                <p>
                  <i className="fa fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus.
                  <i className="fa fa-quote-right"></i>
                </p>
                <h6>Ann Hannah, Community Expert</h6>
              </div>
            </div>
            <div className="profile">
              <div className="prof-img">
                <img src="images/pro2.jpg" alt="" />
              </div>
              <div className="profile-det">
                <p>
                  <i className="fa fa-quote-left"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus autem cum perferendis quod tenetur quos iure
                  quia vitae, voluptate repudiandae?
                  <i className="fa fa-quote-right"></i>
                </p>
                <h6>Jason, Community Expert</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profiles;
