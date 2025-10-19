// WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-left">
        <h4 className="small-heading">Top Reasons</h4>
        <h1 className="main-heading">Why Choose Us</h1>
        <ul className="features-list">
          <li>Experienced & Gentle Dentists</li>
          <li>Modern Technology</li>
          <li>Flexible Appointments</li>
          <li>Transparent Pricing</li>
          <li>Personalized Treatment Plans</li>
          <li>Sterile & Safe Facility</li>
        </ul>
      </div>
      <div className="why-right">
        <img src='https://madebydesignesia.com/themes/dentia/images/misc/p1.webp' alt="Happy dentists" className="dentist-image" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
 