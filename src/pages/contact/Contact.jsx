import React from "react";
import "./Contact.css";
import HeadCard from "../../components/headcard/HeadCard";
import { IoMdHome } from "react-icons/io";
import { FaPhoneSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <HeadCard title="Contact Us /" />
      <section id="contact">
        <div className="getin">
          <h2>Get In Touch</h2>
          <p>Looking for help? Fill the form and start a new adventure.</p>
          <div className="getin-det">
            <h3>Headquarters</h3>
            <div>
              <IoMdHome />
              <p>744 Ngoleni, Kathiani, Machakos, Kenya.</p>
            </div>
            <h3>Phone</h3>
            <div>
              <FaPhoneSquare />
              <p>
                (+254) 123456789 <br />
                (+254) 987654321
              </p>
            </div>
            <h3>Support</h3>
            <div>
              <IoMdMail />
              <p>ngolenischool@gmail.com</p>
            </div>
            <h3>Follow Us</h3>
            <div className="pro-links">
              <Link>
                <FaFacebookF />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
              <Link>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        <div className="form">
          <h4>Let's Connect</h4>
          <p>We make effort to getting back to you as soon as possible.</p>
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-col">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-col">
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <div className="form-col">
            <button>Send Message</button>
          </div>
        </div>
      </section>

      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.633125149166!2d37.28635457393828!3d-1.3965830357544535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f7e07a1d8f245%3A0x43fa8981ea210b73!2sNgoleni%20Secondary%20School!5e0!3m2!1sen!2ske!4v1701452281306!5m2!1sen!2ske"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
