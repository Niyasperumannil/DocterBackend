import React from "react";
import "./AboutSection.css";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-images">
        <img
          src="https://madebydesignesia.com/themes/dentia/images/misc/p1.webp"
          alt="Dentist 1"
          className="about-img about-img-top"
        />
        <img
          src="https://madebydesignesia.com/themes/dentia/images/misc/p2.webp"
          alt="Dentist 2"
          className="about-img about-img-bottom"
        />
      </div>

      <div className="about-content">
        <h5>About Us</h5>
        <h2>
          Professionals and <br />
          Personalized Dental <br />
          Excellence
        </h2>
        <p>
          We offer high-quality dental care tailored for the whole family. From
          routine checkups to advanced treatments, our compassionate team ensures
          your smile stays healthy and confident.
        </p>

        <div className="about-features">
          <ul>
            <li>
              <FaCheckCircle /> Personalized Treatment Plans
            </li>
            <li>
              <FaCheckCircle /> Gentle Care for Kids and Adults
            </li>
          </ul>
          <ul>
            <li>
              <FaCheckCircle /> State-of-the-Art Technology
            </li>
            <li>
              <FaCheckCircle /> Flexible Appointment Scheduling
            </li>
          </ul>
        </div>

        <button className="about-btn">Book Appointment</button>
      </div>
    </section>
  );
};

export default AboutSection;
