import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-col">
          <h3>Quick Links</h3>
          <div className="quick_links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/departments">Departments</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <li>Mutuyu - Ngoleni Road</li>
          <li>P.O Box 258, 90100, Machakos, Kenya</li>
          <li>(+254) 724 157608</li>
          <li>ngolenischool@gmail.com</li>
        </div>
        <div className="footer-col">
          <h3>Opening Hours</h3>
          <li>Mon - Fri : 8a.m. - 5p.m.</li>
          <li>Sat - Sun : Closed</li>
          <li>Public Holidays : Closed</li>
        </div>
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>You can trust us.</p>
          <div className="subscribe">
            <input type="text" placeholder="Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright &#169; 2023 All Rights Reserved - Powered by {""}
          <Link
            to={"https://www.linkedin.com/in/stephen-mutisya/"}
            target="_blank"
          >
            Muanester.
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
