import React from "react";
import "./ContactSection.css";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <p className="contact-subtitle">Get In Touch</p>
        <h2 className="contact-title">
          We are always ready to help  you and answer your questions
        </h2>
        <p className="contact-description">
          Whether you have a question, a suggestion, or just want to say hello,
          this is the place to do it. Please fill out the form below with your
          details and message, and we'll get back to you as soon as possible.
        </p>

        <div className="contact-info">
          <div className="info-item">
            <FaClock className="info-icon" />
            <div>
              <h4>We're Open</h4>
              <p>Monday - Friday 08.00 - 18.00</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Clinic Location</h4>
              <p>PTH Complex, Pattambi road, Cherpulassery</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Call Us Directly</h4>
              <p>+91 996 121 0007</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Send a Message</h4>
              <p>nirmaladentalcare2007@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <h3>Get In Touch</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
