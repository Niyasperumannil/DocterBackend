// Home.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // Ensure this file name matches

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="home-page">
     

      <section
        className="hero-section"
        style={{
          backgroundImage: `url('https://madebydesignesia.com/themes/dentia/images/misc/p1.webp')`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-subtitle">Family Dental Care</span>
          <h1 className="hero-title">
            Elevating Smiles with Expert Care and a Gentle Touch
          </h1>
          <NavLink to="/BookAppointmentScreen" className="hero-btn">
            Book Appointment
          </NavLink>
          <div className="hero-rating">
            <span>Google Rating 5.0</span>
            <span className="stars">⭐ ⭐ ⭐ ⭐ ⭐</span>
            <span>Based on 200+ Reviews</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
