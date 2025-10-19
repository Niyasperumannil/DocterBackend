import React from 'react';
import './PageHeader.css'; // Make sure to create this CSS file

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="header-section">
        <h1>About Us</h1>
      </div>
      <div className="breadcrumb">
        <span className="breadcrumb-home">Home</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">About Us</span>
      </div>
    </div>
  );
};

export default AboutUs;
