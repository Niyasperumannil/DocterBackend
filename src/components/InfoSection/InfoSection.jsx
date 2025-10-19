// InfoSection.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-item">
        <FontAwesomeIcon icon={faPhone} className="info-icon" />
        <div className="info-text">
          <h4>Need Dental Services?</h4>
          <p>Call: +1 123 456 789</p>
        </div>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faClock} className="info-icon" />
        <div className="info-text">
          <h4>Opening Hours</h4>
          <p>Mon to Sat 08:00 – 20:00</p>
        </div>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
        <div className="info-text">
          <h4>Email Us</h4>
          <p>contact@dentiaclinic.com</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
