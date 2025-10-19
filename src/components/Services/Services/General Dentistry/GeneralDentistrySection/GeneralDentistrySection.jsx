import React from "react";
import "./GeneralDentistrySection.css";

const GeneralDentistrySection = () => {
  return (
    <section className="dentistry-section">
      <div className="dentistry-container">
        {/* Left Side - Images */}
        <div className="dentistry-images">
          <div className="image-main">
            <img
              src="https://images.pexels.com/photos/3845765/pexels-photo-3845765.jpeg"
              alt="Dentist treating patient"
            />
          </div>
          <div className="image-overlay">
            <img
              src="https://images.pexels.com/photos/8460159/pexels-photo-8460159.jpeg"
              alt="Smiling nurse portrait"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="dentistry-content">
          <h5 className="dentistry-subtitle">General Dentistry</h5>
          <h2 className="dentistry-title">
            Comprehensive Oral Care for Every Stage of Life
          </h2>
          <p className="dentistry-description">
            Our general dentistry services focus on the prevention, diagnosis, and treatment
            of a wide range of oral health issues. Whether you're coming in for a routine
            check-up or seeking relief from dental pain, our experienced team is here to
            help you maintain a healthy, confident smile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeneralDentistrySection;
